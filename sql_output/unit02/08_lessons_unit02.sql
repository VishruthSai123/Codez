-- 08_lessons_unit02.sql
BEGIN;
DO $$
DECLARE
    v_unit_id INTEGER;
    v_lesson_id INTEGER;
BEGIN
    SELECT id INTO v_unit_id FROM units WHERE title = 'Variables & Data' AND course_id = 1 LIMIT 1;

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('What is a Variable?', v_unit_id, 1, 'Learn how programs remember things.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Creating Your First Variable', v_unit_id, 2, 'Write variables from scratch.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Strings', v_unit_id, 3, 'Storing text data.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Numbers (Integers & Floats)', v_unit_id, 4, 'Storing math data.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Booleans', v_unit_id, 5, 'True or False data.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Changing Variable Values', v_unit_id, 6, 'Updating data in memory.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Printing Multiple Variables', v_unit_id, 7, 'Combining outputs.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Variable Naming Rules', v_unit_id, 8, 'Naming things properly.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Common Beginner Errors', v_unit_id, 9, 'Learn to read error messages.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Mini Project: Profile Generator', v_unit_id, 10, 'Combine everything you''ve learned.', 20);

END $$;
SELECT setval('lessons_id_seq', (SELECT MAX(id) FROM lessons));
COMMIT;