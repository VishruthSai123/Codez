-- 07_units_unit02.sql
BEGIN;
INSERT INTO units (id, title, description, course_id, "order") VALUES
((SELECT COALESCE(MAX(id), 0) + 1 FROM units), 'Variables & Data', 'Learn how to store text and numbers in memory.', 1, 2)
ON CONFLICT (id) DO NOTHING;
SELECT setval('units_id_seq', (SELECT MAX(id) FROM units));
COMMIT;