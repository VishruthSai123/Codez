-- 28_lessons_unit06.sql
BEGIN;
DO $$
DECLARE
    v_unit_id INTEGER;
    v_lesson_id INTEGER;
BEGIN
    SELECT id INTO v_unit_id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1 LIMIT 1;

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Why Functions Exist', v_unit_id, 1, 'The problem with copy-pasting code.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Your First Function', v_unit_id, 2, 'Using the def keyword.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Calling Functions', v_unit_id, 3, 'Executing your functions.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Passing Parameters', v_unit_id, 4, 'Giving functions input.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Multiple Parameters', v_unit_id, 5, 'Passing multiple pieces of data.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Default Parameters', v_unit_id, 6, 'Making arguments optional.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Returning Values', v_unit_id, 7, 'Sending data back.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Local Variables', v_unit_id, 8, 'Variables inside functions.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Variable Scope', v_unit_id, 9, 'Global vs Local.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Keyword Arguments', v_unit_id, 10, 'Naming your arguments.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Combining Functions', v_unit_id, 11, 'Functions calling functions.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Refactoring Repetitive Code', v_unit_id, 12, 'Cleaning up messy code.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Mini Project: Personal Utility Toolkit', v_unit_id, 13, 'Build a library of tools.', 20);

END $$;
SELECT setval('lessons_id_seq', (SELECT MAX(id) FROM lessons));
COMMIT;