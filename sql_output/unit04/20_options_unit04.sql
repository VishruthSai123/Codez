-- 20_options_unit04.sql
BEGIN;
DO $$
DECLARE
    v_challenge_id INTEGER;
BEGIN
    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Why do we need decision making in code?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'What Makes Programs Smart?' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'So the program can respond differently depending on the situation (like checking a password).', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'To make the computer run faster.', false);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'To store text data.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'A program making a decision is like...' AND lesson_id = (SELECT id FROM lessons WHERE title = 'What Makes Programs Smart?' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'A fork in a road.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'A straight highway.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'If a program asks ''Is the user 18 or older?'', what are the only two possible answers?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'What Makes Programs Smart?' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'True or False (Yes or No)', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Any number', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Why are Booleans (True/False) so important for decision making?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'What Makes Programs Smart?' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Because every decision a computer makes is just answering a Yes/No question.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Because they are numbers.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Which symbol do you use to CHECK if two things are equal?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Understanding True & False' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Double equals (==)', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Single equals (=)', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What does a SINGLE equals sign (`=`) do?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Understanding True & False' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It assigns a value to a variable (creates a box).', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It asks a question.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this code output?
print("Apple" == "Apple")' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Understanding True & False' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'True', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'False', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Why does `print("apple" == "Apple")` return False?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Understanding True & False' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Because Python is case-sensitive. A lowercase ''a'' is not the same as a capital ''A''.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Because it''s a bug.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Which symbol means ''Not Equal To''?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Comparison Operators' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '!=', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '==', false);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '<>', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'If you want to check if a user is 18 OR OLDER, which symbol should you use?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Comparison Operators' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '>=', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '>', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this code output?
print(10 >= 10)' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Comparison Operators' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'True', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'False', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'If `print(x != y)` outputs True, what does that mean?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Comparison Operators' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It means x and y are DIFFERENT numbers.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It means x and y are the SAME number.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What symbol MUST go at the very end of the `if` line?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Your First if Statement' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'A colon (:)', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'A semicolon (;)', false);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'A comma (,)', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'How does Python know which code belongs INSIDE the `if` statement?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Your First if Statement' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'The code is indented (moved to the right).', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It reads the word END.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this code output?
score = 10
if score == 10:
    print("You win!")' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Your First if Statement' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'You win!', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Nothing.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What happens if the condition in an `if` statement is False?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Your First if Statement' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Python skips the indented code entirely and moves on.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Python crashes.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'When does the code inside an `else` block run?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Using else' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Only when the `if` condition is False.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Only when the `if` condition is True.', false);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It runs every time.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Does `else` require a condition (like `else age == 10:`)?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Using else' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'No, it just has a colon: `else:`', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Yes, it needs a question.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this code output?
x = 5
if x > 10:
    print("Big")
else:
    print("Small")' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Using else' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Small', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Big', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Can you have an `else` without an `if`?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Using else' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'No, `else` must always be attached to an `if` statement.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Yes, `else` can be used on its own.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What does `elif` stand for?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Using elif' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Else If', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'End Line If', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Where must `elif` be placed?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Using elif' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'After the `if`, but before the `else`.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Before the `if`.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this code output?
x = 10
if x == 5:
    print("Five")
elif x == 10:
    print("Ten")
else:
    print("Unknown")' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Using elif' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Ten', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Five', false);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Unknown', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Can you have more than one `elif` in a single decision block?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Using elif' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Yes! You can have as many `elif` blocks as you want to check dozens of different conditions.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'No, you are only allowed one.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'When Python is executing an `if`/`elif`/`else` chain, when does it stop checking?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Multiple Conditions' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'As soon as it finds the FIRST condition that is True.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It checks every single one even if it already found a True one.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Which of these must ALWAYS come first?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Multiple Conditions' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'if', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'elif', false);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'else', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this code output?
x = 10
if x > 5:
    print("A")
elif x > 8:
    print("B")' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Multiple Conditions' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'A (Because 10 > 5 is True, so it stops there and skips B!)', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'A
B', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'If a condition uses `and`, what must be true for the code to run?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Logical Operators (and, or, not)' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'BOTH sides of the `and` must be True.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Only one side needs to be True.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'If a condition uses `or`, what must be true for the code to run?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Logical Operators (and, or, not)' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'At least ONE side must be True.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Both sides must be True.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this code output?
print(True and False)' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Logical Operators (and, or, not)' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'False', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'True', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What does the `not` operator do (e.g. `not True`)?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Logical Operators (and, or, not)' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It reverses the Boolean. True becomes False, and False becomes True.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It crashes the program.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What does ''Nested'' mean in programming?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Nested Decisions' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Placing one block of code completely inside another block of code (using indentation).', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Deleting old code.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'In nested statements, how does Python know a block is inside another block?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Nested Decisions' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'By counting the indentation (spaces/tabs).', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'By using brackets { }', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this output?
admin = True
password = "123"
if admin == True:
    if password == "123":
        print("Welcome Admin")' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Nested Decisions' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Welcome Admin', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Nothing', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Why does `if x = 5:` cause an error?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Common Beginner Mistakes' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Because `=` tries to assign a value. You must use `==` to ask a question.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Because x cannot be 5.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Every `if`, `elif`, and `else` line MUST end with...' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Common Beginner Mistakes' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'a colon (:)', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'a semicolon (;)', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'To check if BOTH the username AND the password are correct in one `if` statement, what operator should you use?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Mini Project: Smart Login' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'and', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'or', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What function do you use to ask the user to type their password?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Mini Project: Smart Login' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'input()', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'print()', false);

END $$;
SELECT setval('challenge_options_id_seq', (SELECT MAX(id) FROM challenge_options));
COMMIT;