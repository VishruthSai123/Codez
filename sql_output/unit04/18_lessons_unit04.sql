-- 18_lessons_unit04.sql
BEGIN;
DO $$
DECLARE
    v_unit_id INTEGER;
    v_lesson_id INTEGER;
BEGIN
    SELECT id INTO v_unit_id FROM units WHERE title = 'Conditional Statements' AND course_id = 1 LIMIT 1;

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('What Makes Programs Smart?', v_unit_id, 1, 'Learn how programs make decisions.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Understanding True & False', v_unit_id, 2, 'Revisiting logic.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Comparison Operators', v_unit_id, 3, 'Greater than, less than, not equal.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Your First if Statement', v_unit_id, 4, 'Executing code conditionally.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Using else', v_unit_id, 5, 'The ''otherwise'' scenario.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Using elif', v_unit_id, 6, 'Checking multiple specific conditions.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Multiple Conditions', v_unit_id, 7, 'Combining variables in decisions.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Logical Operators (and, or, not)', v_unit_id, 8, 'Combining logic.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Nested Decisions', v_unit_id, 9, 'If statements inside if statements.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Common Beginner Mistakes', v_unit_id, 10, 'Troubleshooting logic.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Mini Project: Smart Login', v_unit_id, 11, 'Build a login system.', 20);

END $$;
SELECT setval('lessons_id_seq', (SELECT MAX(id) FROM lessons));
COMMIT;