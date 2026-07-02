-- 01_courses.sql
BEGIN;
INSERT INTO courses (id, title, image_src, description) VALUES
(1, 'Python Flagship', '/python.svg', 'The ultimate beginner to advanced Python course.')
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;
SELECT setval('courses_id_seq', (SELECT MAX(id) FROM courses));
COMMIT;