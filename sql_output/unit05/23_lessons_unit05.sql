-- 23_lessons_unit05.sql
BEGIN;
DO $$
DECLARE
    v_unit_id INTEGER;
    v_lesson_id INTEGER;
BEGIN
    SELECT id INTO v_unit_id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1 LIMIT 1;

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Why Repetition Matters', v_unit_id, 1, 'The problem with writing the same code over and over.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('What Is a Loop?', v_unit_id, 2, 'How loops use Booleans.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Your First while Loop', v_unit_id, 3, 'Using the while keyword.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Avoiding Infinite Loops', v_unit_id, 4, 'The danger of loops that never end.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Your First for Loop', v_unit_id, 5, 'Iterating safely.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Understanding range()', v_unit_id, 6, 'Repeating a specific number of times.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Loop Variables', v_unit_id, 7, 'Using ''i'' to track the loop.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('break Statement', v_unit_id, 8, 'Bailing out of a loop.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('continue Statement', v_unit_id, 9, 'Skipping an iteration.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Combining Loops with if Statements', v_unit_id, 10, 'Decision making inside loops.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Nested Loops (Beginner Introduction)', v_unit_id, 11, 'A loop inside a loop.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Common Loop Mistakes', v_unit_id, 12, 'Troubleshooting loops.', 10);

    INSERT INTO lessons (title, unit_id, "order", description, xp_reward) 
    VALUES ('Mini Project: Number Guessing Game', v_unit_id, 13, 'Build an interactive loop.', 20);

END $$;
SELECT setval('lessons_id_seq', (SELECT MAX(id) FROM lessons));
COMMIT;