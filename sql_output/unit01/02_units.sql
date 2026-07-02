-- 02_units.sql
BEGIN;
INSERT INTO units (id, title, description, course_id, "order") VALUES
(1, 'Getting Started', 'Learn the absolute basics of Python programming.', 1, 1)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;
SELECT setval('units_id_seq', (SELECT MAX(id) FROM units));
COMMIT;