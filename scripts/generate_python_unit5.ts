import fs from "fs";
import path from "path";
import { allPythonUnits, allPythonLessons } from "./curriculum/python";

function escapeSql(str: string): string {
  return str.replace(/'/g, "''");
}

function generateUnit5Batches() {
  const outputDir = path.join(__dirname, "../sql_output/unit05");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // 22_units_unit05.sql
  let unitSql = `-- 22_units_unit05.sql\nBEGIN;\n`;
  unitSql += `INSERT INTO units (id, title, description, course_id, "order") VALUES\n`;
  unitSql += `((SELECT COALESCE(MAX(id), 0) + 1 FROM units), 'Loops & Repetition', 'Learn how to automate repetitive tasks.', 1, 5)\n`;
  unitSql += `ON CONFLICT (id) DO NOTHING;\n`; 
  unitSql += `SELECT setval('units_id_seq', (SELECT MAX(id) FROM units));\nCOMMIT;\n`;
  fs.writeFileSync(path.join(outputDir, "22_units_unit05.sql"), unitSql.trim());

  const unit5Lessons = allPythonLessons.filter(l => l.unit_id === 5);

  // 23_lessons_unit05.sql
  let lessonsSql = `-- 23_lessons_unit05.sql\nBEGIN;\n`;
  lessonsSql += `DO $$\nDECLARE\n    v_unit_id INTEGER;\n    v_lesson_id INTEGER;\nBEGIN\n`;
  lessonsSql += `    SELECT id INTO v_unit_id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1 LIMIT 1;\n\n`;

  // 24_challenges_unit05.sql & 25_options_unit05.sql
  let challengesSql = `-- 24_challenges_unit05.sql\nBEGIN;\n`;
  challengesSql += `DO $$\nDECLARE\n    v_lesson_id INTEGER;\n    v_challenge_id INTEGER;\nBEGIN\n`;
  let optionsSql = `-- 25_options_unit05.sql\nBEGIN;\n`;
  optionsSql += `DO $$\nDECLARE\n    v_challenge_id INTEGER;\nBEGIN\n`;

  unit5Lessons.forEach((lesson) => {
    // Insert Lesson dynamically
    lessonsSql += `    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) \n`;
    lessonsSql += `    VALUES ('${escapeSql(lesson.title)}', v_unit_id, ${lesson.order}, '${escapeSql(lesson.description || "")}', ${lesson.xp_reward || 10});\n\n`;

    // To insert challenges, we need the lesson ID.
    challengesSql += `    SELECT id INTO v_lesson_id FROM lessons WHERE title = '${escapeSql(lesson.title)}' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1) LIMIT 1;\n`;
    
    lesson.challenges.forEach((challenge) => {
      let metaStr = challenge.content_metadata ? `'${escapeSql(JSON.stringify(challenge.content_metadata))}'::jsonb` : 'NULL::jsonb';
      
      challengesSql += `    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)\n`;
      challengesSql += `    VALUES (v_lesson_id, '${challenge.type}', '${escapeSql(challenge.question)}', ${challenge.order}, '${challenge.lesson_step}', ${metaStr})\n`;
      challengesSql += `    RETURNING id INTO v_challenge_id;\n\n`;

      if (challenge.options && challenge.options.length > 0) {
        optionsSql += `    SELECT id INTO v_challenge_id FROM challenges WHERE question = '${escapeSql(challenge.question)}' AND lesson_id = (SELECT id FROM lessons WHERE title = '${escapeSql(lesson.title)}' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;\n`;
        challenge.options.forEach(opt => {
          optionsSql += `    INSERT INTO challenge_options (challenge_id, text, correct)\n`;
          optionsSql += `    VALUES (v_challenge_id, '${escapeSql(opt.text)}', ${opt.correct});\n`;
        });
        optionsSql += `\n`;
      }
    });
  });

  lessonsSql += `END $$;\nSELECT setval('lessons_id_seq', (SELECT MAX(id) FROM lessons));\nCOMMIT;\n`;
  fs.writeFileSync(path.join(outputDir, "23_lessons_unit05.sql"), lessonsSql.trim());

  challengesSql += `END $$;\nSELECT setval('challenges_id_seq', (SELECT MAX(id) FROM challenges));\nCOMMIT;\n`;
  fs.writeFileSync(path.join(outputDir, "24_challenges_unit05.sql"), challengesSql.trim());

  optionsSql += `END $$;\nSELECT setval('challenge_options_id_seq', (SELECT MAX(id) FROM challenge_options));\nCOMMIT;\n`;
  fs.writeFileSync(path.join(outputDir, "25_options_unit05.sql"), optionsSql.trim());

  // 26_verification_unit05.sql
  const verifySql = `
-- 26_verification_unit05.sql
SELECT 'units' as table_name, COUNT(*) as row_count FROM units WHERE title = 'Loops & Repetition'
UNION ALL
SELECT 'lessons', COUNT(*) FROM lessons WHERE unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' LIMIT 1)
UNION ALL
SELECT 'challenges', COUNT(*) FROM challenges WHERE lesson_id IN (SELECT id FROM lessons WHERE unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' LIMIT 1))
UNION ALL
SELECT 'challenge_options', COUNT(*) FROM challenge_options WHERE challenge_id IN (SELECT id FROM challenges WHERE lesson_id IN (SELECT id FROM lessons WHERE unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' LIMIT 1)));
`;
  fs.writeFileSync(path.join(outputDir, "26_verification_unit05.sql"), verifySql.trim());

  console.log("SQL batch generation complete for Unit 5!");
}

generateUnit5Batches();
