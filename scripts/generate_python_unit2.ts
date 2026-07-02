import fs from "fs";
import path from "path";
import { allPythonUnits, allPythonLessons } from "./curriculum/python";

function escapeSql(str: string): string {
  return str.replace(/'/g, "''");
}

function generateUnit2Batches() {
  const outputDir = path.join(__dirname, "../sql_output/unit02");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // 07_units_unit02.sql
  let unitSql = `-- 07_units_unit02.sql\nBEGIN;\n`;
  unitSql += `INSERT INTO units (id, title, description, course_id, "order") VALUES\n`;
  unitSql += `((SELECT COALESCE(MAX(id), 0) + 1 FROM units), 'Variables & Data', 'Learn how to store text and numbers in memory.', 1, 2)\n`;
  unitSql += `ON CONFLICT (id) DO NOTHING;\n`; // we use max+1 so this is a bit brute force, but safe if run once.
  unitSql += `SELECT setval('units_id_seq', (SELECT MAX(id) FROM units));\nCOMMIT;\n`;
  fs.writeFileSync(path.join(outputDir, "07_units_unit02.sql"), unitSql.trim());

  const unit2Lessons = allPythonLessons.filter(l => l.unit_id === 2);

  // 08_lessons_unit02.sql
  let lessonsSql = `-- 08_lessons_unit02.sql\nBEGIN;\n`;
  lessonsSql += `DO $$\nDECLARE\n    v_unit_id INTEGER;\n    v_lesson_id INTEGER;\nBEGIN\n`;
  lessonsSql += `    SELECT id INTO v_unit_id FROM units WHERE title = 'Variables & Data' AND course_id = 1 LIMIT 1;\n\n`;

  // 09_challenges_unit02.sql & 10_options_unit02.sql
  let challengesSql = `-- 09_challenges_unit02.sql\nBEGIN;\n`;
  challengesSql += `DO $$\nDECLARE\n    v_lesson_id INTEGER;\n    v_challenge_id INTEGER;\nBEGIN\n`;
  let optionsSql = `-- 10_options_unit02.sql\nBEGIN;\n`;
  optionsSql += `DO $$\nDECLARE\n    v_challenge_id INTEGER;\nBEGIN\n`;

  unit2Lessons.forEach((lesson, lIndex) => {
    // Insert Lesson dynamically
    lessonsSql += `    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) \n`;
    lessonsSql += `    VALUES ('${escapeSql(lesson.title)}', v_unit_id, ${lesson.order}, '${escapeSql(lesson.description || "")}', ${lesson.xp_reward || 10});\n\n`;

    // To insert challenges, we need the lesson ID. Since we are using a DO block, we can get the lesson ID by title.
    challengesSql += `    SELECT id INTO v_lesson_id FROM lessons WHERE title = '${escapeSql(lesson.title)}' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1) LIMIT 1;\n`;
    
    lesson.challenges.forEach((challenge, cIndex) => {
      let metaStr = challenge.content_metadata ? `'${escapeSql(JSON.stringify(challenge.content_metadata))}'::jsonb` : 'NULL::jsonb';
      
      challengesSql += `    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)\n`;
      challengesSql += `    VALUES (v_lesson_id, '${challenge.type}', '${escapeSql(challenge.question)}', ${challenge.order}, '${challenge.lesson_step}', ${metaStr})\n`;
      challengesSql += `    RETURNING id INTO v_challenge_id;\n\n`;

      if (challenge.options && challenge.options.length > 0) {
        optionsSql += `    SELECT id INTO v_challenge_id FROM challenges WHERE question = '${escapeSql(challenge.question)}' AND lesson_id = (SELECT id FROM lessons WHERE title = '${escapeSql(lesson.title)}' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;\n`;
        challenge.options.forEach(opt => {
          optionsSql += `    INSERT INTO challenge_options (challenge_id, text, correct)\n`;
          optionsSql += `    VALUES (v_challenge_id, '${escapeSql(opt.text)}', ${opt.correct});\n`;
        });
        optionsSql += `\n`;
      }
    });
  });

  lessonsSql += `END $$;\nSELECT setval('lessons_id_seq', (SELECT MAX(id) FROM lessons));\nCOMMIT;\n`;
  fs.writeFileSync(path.join(outputDir, "08_lessons_unit02.sql"), lessonsSql.trim());

  challengesSql += `END $$;\nSELECT setval('challenges_id_seq', (SELECT MAX(id) FROM challenges));\nCOMMIT;\n`;
  fs.writeFileSync(path.join(outputDir, "09_challenges_unit02.sql"), challengesSql.trim());

  optionsSql += `END $$;\nSELECT setval('challenge_options_id_seq', (SELECT MAX(id) FROM challenge_options));\nCOMMIT;\n`;
  fs.writeFileSync(path.join(outputDir, "10_options_unit02.sql"), optionsSql.trim());

  // 11_verification_unit02.sql
  const verifySql = `
-- 11_verification_unit02.sql
SELECT 'units' as table_name, COUNT(*) as row_count FROM units WHERE title = 'Variables & Data'
UNION ALL
SELECT 'lessons', COUNT(*) FROM lessons WHERE unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' LIMIT 1)
UNION ALL
SELECT 'challenges', COUNT(*) FROM challenges WHERE lesson_id IN (SELECT id FROM lessons WHERE unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' LIMIT 1))
UNION ALL
SELECT 'challenge_options', COUNT(*) FROM challenge_options WHERE challenge_id IN (SELECT id FROM challenges WHERE lesson_id IN (SELECT id FROM lessons WHERE unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' LIMIT 1)));
`;
  fs.writeFileSync(path.join(outputDir, "11_verification_unit02.sql"), verifySql.trim());

  console.log("SQL batch generation complete for Unit 2!");
}

generateUnit2Batches();
