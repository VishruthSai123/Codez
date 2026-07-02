-- 27_units_unit06.sql
BEGIN;
INSERT INTO units (id, title, description, course_id, "order") VALUES
((SELECT COALESCE(MAX(id), 0) + 1 FROM units), 'Functions & Code Reusability', 'Learn how to organize programs using functions.', 1, 6)
ON CONFLICT (id) DO NOTHING;
SELECT setval('units_id_seq', (SELECT MAX(id) FROM units));
COMMIT;