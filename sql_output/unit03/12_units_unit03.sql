-- 12_units_unit03.sql
BEGIN;
INSERT INTO units (id, title, description, course_id, "order") VALUES
((SELECT COALESCE(MAX(id), 0) + 1 FROM units), 'User Input & Operators', 'Learn how to make software interactive.', 1, 3)
ON CONFLICT (id) DO NOTHING;
SELECT setval('units_id_seq', (SELECT MAX(id) FROM units));
COMMIT;