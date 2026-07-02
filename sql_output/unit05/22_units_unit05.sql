-- 22_units_unit05.sql
BEGIN;
INSERT INTO units (id, title, description, course_id, "order") VALUES
((SELECT COALESCE(MAX(id), 0) + 1 FROM units), 'Loops & Repetition', 'Learn how to automate repetitive tasks.', 1, 5)
ON CONFLICT (id) DO NOTHING;
SELECT setval('units_id_seq', (SELECT MAX(id) FROM units));
COMMIT;