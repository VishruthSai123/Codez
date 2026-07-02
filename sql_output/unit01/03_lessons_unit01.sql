-- 03_lessons_unit01.sql
BEGIN;
INSERT INTO lessons (id, title, unit_id, "order", description, xp_reward) VALUES
(1, 'Introduction to Python', 1, 1, 'What is Python and why learn it?', 10),
(2, 'Your First Program', 1, 2, 'Learn how to output text to the screen.', 10),
(3, 'Variables', 1, 3, 'Storing data in memory.', 10),
(4, 'Comments', 1, 4, 'Leaving notes in your code.', 10),
(5, 'Syntax and Errors', 1, 5, 'Understanding mistakes.', 10),
(6, 'Unit 1 Review', 1, 6, 'Mini project combining everything.', 20)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title;
SELECT setval('lessons_id_seq', (SELECT MAX(id) FROM lessons));
COMMIT;