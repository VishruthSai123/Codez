-- 15_options_unit03.sql
BEGIN;
DO $$
DECLARE
    v_challenge_id INTEGER;
BEGIN
    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What does the `input()` function do?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Programs That Talk Back' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It pauses the program and waits for the user to type something.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It prints a variable to the screen.', false);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It creates a comment.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'When Python is waiting on `input()`, what must the user press to continue?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Programs That Talk Back' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'The Enter key', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'The Spacebar', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'If a program has `print("Hello")` followed by `input()`, what happens?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Programs That Talk Back' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It prints ''Hello'', then pauses to wait for the user.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It waits for the user, then prints ''Hello''.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Why is `input()` important for making games or apps?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Programs That Talk Back' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Because it allows the user to interact with the program.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Because it makes the computer run faster.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What is the purpose of the text inside the `input()` function?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Using input()' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'To ask the user a question so they know what to type.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'To create a variable.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Because the prompt is text, it must be surrounded by...' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Using input()' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Quotes " "', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Hashtags #', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this code output before pausing?
input("Enter your age: ")' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Using input()' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Enter your age: ', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'age', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Why do programmers usually put a space at the end of the prompt? (e.g., `"Name: "` instead of `"Name:"`)' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Using input()' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'So that when the user types, their text isn''t squished directly against the colon.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Because Python requires it.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'How do you save the user''s input so you can use it later?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Saving User Input' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'By assigning the input() function to a variable using the = sign.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'By printing it immediately.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'In `color = input("Favorite color? ")`, what does `color` hold?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Saving User Input' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Whatever the user types in.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'The word "color".', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Which of these is correctly saving input?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Saving User Input' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'food = input("Favorite food? ")', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'input("Favorite food? ") = food', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What happens if you do NOT assign `input()` to a variable?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Saving User Input' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'The program will ask the question, but the answer will be lost immediately.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It causes an error.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What data type does `input()` ALWAYS give you?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Why input() Returns Text' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'A String (Text)', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'An Integer (Number)', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'If the user types `100` into an input prompt, what is actually stored in the variable?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Why input() Returns Text' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'The string "100"', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'The integer 100', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What happens if you try to do math (like adding 10) to a String?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Why input() Returns Text' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Python throws a TypeError because it can''t do math on text.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It does the math successfully.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Why did `"2" + "3"` output `"23"`?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Why input() Returns Text' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Because they are Strings (text). Adding text just squishes the letters together.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Because math is broken.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What does the `int()` function do?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Converting with int()' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It converts a String into an Integer (whole number).', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It makes the number negative.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'If `x = "20"`, how do you convert it to an integer?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Converting with int()' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'int(x)', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'number(x)', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this code output?
x = int("4")
print(x + 1)' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Converting with int()' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '5', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '41', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What happens if you try to do `int("Apple")`?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Converting with int()' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Python throws a ValueError, because "Apple" cannot be turned into a number.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It converts it to 0.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What does `float()` do?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Converting with float()' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Converts text into a decimal number.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Converts text into a whole number.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'If a user might type a decimal (like a price or weight), which function should you use?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Converting with float()' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'float()', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'int()', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this code output?
x = float("5.5")
print(x + 0.5)' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Converting with float()' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '6.0', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '5.50.5', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What happens if you use `float("10")` on a whole number?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Converting with float()' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It converts it to 10.0', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It crashes.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Which symbol is used for subtraction?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Addition & Subtraction' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'The minus sign (-)', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'The slash (/)', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'To add 10 to a variable `score`, you would write: score + ___' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Addition & Subtraction' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '10', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'score', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this code output?
apples = 10
apples = apples - 2
print(apples)' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Addition & Subtraction' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '8', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '10', false);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '-2', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'In the code `score = score + 1`, why do we put `score` on both sides?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Addition & Subtraction' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Because we take the OLD value (on the right), add 1, and save it into the NEW value (on the left).', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Because Python requires all variables to be typed twice.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Which symbol is used for multiplication?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Multiplication & Division' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '*', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'x', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Which symbol is used for division?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Multiplication & Division' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '/', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '\', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this code output?
print(4 * 3)' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Multiplication & Division' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '12', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '7', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Did you notice that division `100 / 2` resulted in `50.0` (a Float)?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Multiplication & Division' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Yes, standard division in Python ALWAYS returns a Float, even if the numbers divide perfectly.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It''s a glitch.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What does the Modulus `%` operator do?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Floor Division & Modulus' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It returns the remainder of a division.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It turns a number into a percentage.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Which operator drops the decimal and gives you a whole integer?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Floor Division & Modulus' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Floor Division //', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Standard Division /', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this code output?
print(5 % 2)' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Floor Division & Modulus' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '1 (Because 2 goes into 5 twice, with 1 left over)', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '2.5', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Programmers often use `num % 2`. If `num % 2` results in 0, what does that tell us about the number?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Floor Division & Modulus' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'The number is Even (because it divides by 2 perfectly with 0 remainder).', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'The number is Odd.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Which symbol is used for exponents (powers) in Python?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Exponent Operator' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '**', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '^', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What does `10 ** 2` calculate?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Exponent Operator' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '10 squared (10 * 10)', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '10 times 2 (10 * 2)', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this code output?
print(4 ** 2)' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Exponent Operator' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '16', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '8', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Is `**` the same as `^` in Python?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Exponent Operator' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'No, ^ is used for something entirely different (bitwise XOR). Always use ** for math exponents.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Yes, they do the same thing.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Which operation will Python calculate FIRST in any equation?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Order of Operations' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Whatever is inside Parentheses ()', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Addition', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Does Multiplication happen before Addition?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Order of Operations' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Yes', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'No', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this code output?
print(5 + 2 * 3)' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Order of Operations' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '11', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '21', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Why should you use parentheses even if the order of operations would be correct anyway?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Order of Operations' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It makes your code easier for humans to read and understand.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It makes the computer run faster.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What function do you use to ask the user for a number?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Mini Project: Interactive Calculator' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'input()', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'print()', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What must you do to the result of `input()` before you can do math with it?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Mini Project: Interactive Calculator' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Convert it using int() or float()', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Nothing, you can use it immediately.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Which of these is the correct way to print a variable alongside text?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Mini Project: Interactive Calculator' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'print("Total:", total)', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'print("Total:" total)', false);

END $$;
SELECT setval('challenge_options_id_seq', (SELECT MAX(id) FROM challenge_options));
COMMIT;