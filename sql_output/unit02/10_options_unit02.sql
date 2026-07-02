-- 10_options_unit02.sql
BEGIN;
DO $$
DECLARE
    v_challenge_id INTEGER;
BEGIN
    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What is a variable in programming?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'What is a Variable?' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'A way to store and remember data in a program.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'A type of syntax error.', false);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'A comment that the computer ignores.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Which symbol is used to put data inside a variable?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'What is a Variable?' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'The equals sign (=)', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'The plus sign (+)', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this code output?
points = 50
print(points)' AND lesson_id = (SELECT id FROM lessons WHERE title = 'What is a Variable?' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '50', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'points', false);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Error', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Why do we NOT put quotes around the variable name when printing it (e.g. `print(score)`)?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'What is a Variable?' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Because quotes mean ''print this exact text'', whereas no quotes means ''print what is inside this box''.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Because variables only hold numbers.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'In programming, what does `=` do?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Creating Your First Variable' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It assigns the value on the right to the variable on the left.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It checks if two numbers are exactly equal.', false);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It creates a comment.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'If you want to create a variable named `level` and set it to 5, how do you write it?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Creating Your First Variable' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'level = 5', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '5 = level', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this code output?
speed = 120
print("speed")' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Creating Your First Variable' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'speed', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '120', false);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Error', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Why would `10 = apples` cause an error in Python?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Creating Your First Variable' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Because the variable name must always be on the left side of the equals sign.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Because 10 is not a valid number.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What is a String in Python?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Strings' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Text data surrounded by quotes.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'A number with decimals.', false);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'A type of loop.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'If you want to store the word ''Hello'' in a variable, how do you write the text?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Strings' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '"Hello"', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Hello', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this code output?
city = "Tokyo"
print(city)' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Strings' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Tokyo', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '"Tokyo"', false);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Error', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What happens if you write `name = Alice` without quotes?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Strings' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Python crashes, because it thinks Alice is another variable that hasn''t been created yet.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Python automatically adds the quotes for you.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What is an Integer in Python?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Numbers (Integers & Floats)' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'A whole number without a decimal point.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'A decimal number.', false);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'A word wrapped in quotes.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What is the number `5.5` considered in Python?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Numbers (Integers & Floats)' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'A Float', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'An Integer', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this code output?
x = 10.5
print(x)' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Numbers (Integers & Floats)' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '10.5', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '10', false);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Error', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Why should you NEVER put quotes around a number you want to do math with (e.g. `"10"`)?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Numbers (Integers & Floats)' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Because quotes turn it into a String (text), and Python cannot do math on text easily.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Because quotes make the number negative.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What are the two possible values for a Boolean?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Booleans' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'True and False', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Yes and No', false);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '1 and 2', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Which of the following is written correctly in Python?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Booleans' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'True', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'true', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this code output?
is_raining = False
print(is_raining)' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Booleans' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'False', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'is_raining', false);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Error', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What happens if you type `true` (lowercase) instead of `True`?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Booleans' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Python crashes, because it only recognizes the capitalized version.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It works perfectly.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What happens when you assign a new value to an existing variable?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Changing Variable Values' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'The old value is thrown away and replaced by the new value.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'The new value is added to the old value.', false);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Python throws an error.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Python executes code...' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Changing Variable Values' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'from top to bottom.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'from bottom to top.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this code output?
x = 5
x = 10
print(x)' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Changing Variable Values' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '10', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '5', false);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Error', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Can you change a variable from an Integer to a String? (e.g., `x = 5`, then `x = "Hello"`)' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Changing Variable Values' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Yes! Python is ''dynamically typed'', meaning a box can hold any type of data at any time.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'No, numbers must always stay numbers.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What symbol allows you to print multiple pieces of data in one `print()` statement?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Printing Multiple Variables' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'A comma (,)', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'A dot (.)', false);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'A hashtag (#)', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'When you use a comma in `print()`, does Python automatically add a space?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Printing Multiple Variables' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Yes, Python adds a space between the items automatically.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'No, they will be squished together.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this code output?
name = "Leo"
print("Hi", name)' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Printing Multiple Variables' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Hi Leo', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'HiLeo', false);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Hi name', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Can you use commas to combine variables of different types (like a String and an Integer)?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Printing Multiple Variables' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Yes, the comma works perfectly with mixed data types.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'No, you can only combine Strings with Strings.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Are spaces allowed in variable names?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Variable Naming Rules' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'No, never.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Yes, spaces are fine.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What is the standard way to separate words in Python variable names?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Variable Naming Rules' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Using underscores (like my_variable).', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Using dashes (like my-variable).', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Which of these is a VALID variable name?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Variable Naming Rules' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'player_one = "Bob"', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '1player = "Bob"', false);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'player one = "Bob"', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'If you create `name = "Dan"` and try to `print(Name)`, what happens?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Variable Naming Rules' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It crashes because Python is case-sensitive (name and Name are different).', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It prints Dan.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What causes a NameError?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Common Beginner Errors' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Trying to use a variable that doesn''t exist (usually due to a typo).', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Using spaces in a variable name.', false);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Forgetting closing quotes on a string.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Does Python read variables correctly if you spell them wrong?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Common Beginner Errors' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'No, the spelling must be exactly identical.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Yes, it guesses what you meant.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What error will this code throw? `print(my_name)` (Assume we never assigned anything to my_name)' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Common Beginner Errors' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'NameError', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'SyntaxError', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'If you get a NameError, what is the FIRST thing you should check?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Common Beginner Errors' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Check your spelling and capitalization of the variable.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Check if you have internet access.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'To store a name, what data type should you use?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Mini Project: Profile Generator' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'String (in quotes)', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Integer', false);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Boolean', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'To store an age, what data type should you use?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Mini Project: Profile Generator' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Integer (no quotes)', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'String', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'How do you combine a word and a variable in a print statement?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Mini Project: Profile Generator' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'print("Name:", name)', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'print("Name:" name)', false);

END $$;
SELECT setval('challenge_options_id_seq', (SELECT MAX(id) FROM challenge_options));
COMMIT;