-- 13_lessons_unit03.sql
BEGIN;
DO $$
DECLARE
    v_unit_id INTEGER;
    v_lesson_id INTEGER;
BEGIN
    SELECT id INTO v_unit_id FROM units WHERE title = 'User Input & Operators' AND course_id = 1 LIMIT 1;

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Programs That Talk Back', v_unit_id, 1, 'Learn how to make software interactive.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Using input()', v_unit_id, 2, 'Prompting the user with text.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Saving User Input', v_unit_id, 3, 'Combining variables and input().', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Why input() Returns Text', v_unit_id, 4, 'Understanding data types from input.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Converting with int()', v_unit_id, 5, 'Casting Strings to Integers.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Converting with float()', v_unit_id, 6, 'Casting Strings to Floats.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Addition & Subtraction', v_unit_id, 7, 'Basic arithmetic operations.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Multiplication & Division', v_unit_id, 8, 'Multiply and divide numbers.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Floor Division & Modulus', v_unit_id, 9, 'Advanced division operations.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Exponent Operator', v_unit_id, 10, 'Calculating powers.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Order of Operations', v_unit_id, 11, 'PEMDAS in Python.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Mini Project: Interactive Calculator', v_unit_id, 12, 'Build a real calculator.', 20);

END $$;
SELECT setval('lessons_id_seq', (SELECT MAX(id) FROM lessons));
COMMIT;