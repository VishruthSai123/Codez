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