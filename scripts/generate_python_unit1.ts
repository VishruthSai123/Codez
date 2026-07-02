import fs from "fs";
import path from "path";
import { allPythonUnits, allPythonLessons } from "./curriculum/python";

function escapeSql(str: string): string {
  return str.replace(/'/g, "''");
}

function generateUnit1Batches() {
  const outputDir = path.join(__dirname, "../sql_output/unit01");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // 01_courses.sql
  const courseSql = `
-- 01_courses.sql
BEGIN;
INSERT INTO courses (id, title, image_src, description) VALUES
(1, 'Python Flagship', '/python.svg', 'The ultimate beginner to advanced Python course.')
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;
SELECT setval('courses_id_seq', (SELECT MAX(id) FROM courses));
COMMIT;
`;
  fs.writeFileSync(path.join(outputDir, "01_courses.sql"), courseSql.trim());

  // 02_units.sql
  let unitSql = `-- 02_units.sql\nBEGIN;\n`;
  const unit1 = allPythonUnits.find(u => u.id === 1);
  if (unit1) {
    unitSql += `INSERT INTO units (id, title, description, course_id, "order") VALUES\n`;
    unitSql += `(${unit1.id}, '${escapeSql(unit1.title)}', '${escapeSql(unit1.description)}', ${unit1.course_id}, ${unit1.order})\n`;
    unitSql += `ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;\n`;
  }
  unitSql += `SELECT setval('units_id_seq', (SELECT MAX(id) FROM units));\nCOMMIT;\n`;
  fs.writeFileSync(path.join(outputDir, "02_units.sql"), unitSql.trim());

  // 03_lessons_unit01.sql
  let lessonsSql = `-- 03_lessons_unit01.sql\nBEGIN;\n`;
  const unit1Lessons = allPythonLessons.filter(l => l.unit_id === 1);
  if (unit1Lessons.length > 0) {
    lessonsSql += `INSERT INTO lessons (id, title, unit_id, "order", description, xp_reward) VALUES\n`;
    lessonsSql += unit1Lessons.map(l => 
      `(${l.id}, '${escapeSql(l.title)}', ${l.unit_id}, ${l.order}, '${escapeSql(l.description || "")}', ${l.xp_reward || 10})`
    ).join(",\n") + "\n";
    lessonsSql += `ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title;\n`;
  }
  lessonsSql += `SELECT setval('lessons_id_seq', (SELECT MAX(id) FROM lessons));\nCOMMIT;\n`;
  fs.writeFileSync(path.join(outputDir, "03_lessons_unit01.sql"), lessonsSql.trim());

  // 04_challenges_unit01.sql & 05_options_unit01.sql
  let challengesSql = `-- 04_challenges_unit01.sql\nBEGIN;\n`;
  let optionsSql = `-- 05_options_unit01.sql\nBEGIN;\n`;
  
  let challengeValues: string[] = [];
  let optionValues: string[] = [];
  
  let globalChallengeId = 1;
  let globalOptionId = 1;

  unit1Lessons.forEach(lesson => {
    lesson.challenges.forEach(challenge => {
      const challengeId = globalChallengeId++;
      let metaStr = challenge.content_metadata ? `'${escapeSql(JSON.stringify(challenge.content_metadata))}'::jsonb` : 'NULL::jsonb';
      
      challengeValues.push(
        `(${challengeId}, ${lesson.id}, '${challenge.type}', '${escapeSql(challenge.question)}', ${challenge.order}, '${challenge.lesson_step}', ${metaStr})`
      );

      if (challenge.options) {
        challenge.options.forEach(opt => {
          const optId = globalOptionId++;
          optionValues.push(
            `(${optId}, ${challengeId}, '${escapeSql(opt.text)}', ${opt.correct}, NULL, NULL)`
          );
        });
      }
    });
  });

  if (challengeValues.length > 0) {
    challengesSql += `INSERT INTO challenges (id, lesson_id, type, question, "order", lesson_step, content_metadata) VALUES\n`;
    challengesSql += challengeValues.join(",\n") + "\n";
    challengesSql += `ON CONFLICT (id) DO NOTHING;\n`;
  }
  challengesSql += `SELECT setval('challenges_id_seq', (SELECT MAX(id) FROM challenges));\nCOMMIT;\n`;
  fs.writeFileSync(path.join(outputDir, "04_challenges_unit01.sql"), challengesSql.trim());

  if (optionValues.length > 0) {
    optionsSql += `INSERT INTO challenge_options (id, challenge_id, text, correct, image_src, audio_src) VALUES\n`;
    optionsSql += optionValues.join(",\n") + "\n";
    optionsSql += `ON CONFLICT (id) DO NOTHING;\n`;
  }
  optionsSql += `SELECT setval('challenge_options_id_seq', (SELECT MAX(id) FROM challenge_options));\nCOMMIT;\n`;
  fs.writeFileSync(path.join(outputDir, "05_options_unit01.sql"), optionsSql.trim());

  // 06_verification_unit01.sql
  const verifySql = `
-- 06_verification_unit01.sql
SELECT 'courses' as table_name, COUNT(*) as row_count FROM courses
UNION ALL
SELECT 'units', COUNT(*) FROM units WHERE id = 1
UNION ALL
SELECT 'lessons', COUNT(*) FROM lessons WHERE unit_id = 1
UNION ALL
SELECT 'challenges', COUNT(*) FROM challenges WHERE lesson_id IN (SELECT id FROM lessons WHERE unit_id = 1)
UNION ALL
SELECT 'challenge_options', COUNT(*) FROM challenge_options WHERE challenge_id IN (SELECT id FROM challenges WHERE lesson_id IN (SELECT id FROM lessons WHERE unit_id = 1));
`;
  fs.writeFileSync(path.join(outputDir, "06_verification_unit01.sql"), verifySql.trim());

  console.log("SQL batch generation complete for Unit 1!");
}

generateUnit1Batches();
