-- 17_units_unit04.sql
BEGIN;
INSERT INTO units (id, title, description, course_id, "order") VALUES
((SELECT COALESCE(MAX(id), 0) + 1 FROM units), 'Conditional Statements', 'Learn how to make decisions in code.', 1, 4)
ON CONFLICT (id) DO NOTHING;
SELECT setval('units_id_seq', (SELECT MAX(id) FROM units));
COMMIT;