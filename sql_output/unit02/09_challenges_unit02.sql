-- 09_challenges_unit02.sql
BEGIN;
DO $$
DECLARE
    v_lesson_id INTEGER;
    v_challenge_id INTEGER;
BEGIN
    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'What is a Variable?' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Memory Boxes', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["Imagine you are playing a video game. The game needs to remember your score, your health, and your name.","To remember information, programs use ''Variables''.","Think of a variable as a labeled box where you can store data."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Creating a Variable', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["In Python, you create a variable by giving it a name, typing an equals sign `=`, and then writing the data.","Once created, you can use the variable''s name to use its data."],"codeBlocks":[{"code":"score = 100\nprint(score)","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What is a variable in programming?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Which symbol is used to put data inside a variable?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this code output?
points = 50
print(points)', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Print a variable', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"lives = 3\n# Print the lives variable\n____(lives)","expectedOutput":"3","hints":["Use the print() function."],"solutionCode":"lives = 3\nprint(lives)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Write it from scratch', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"# We created a variable for you\nage = 25\n\n# Print the age variable\n","expectedOutput":"25","hints":["Type print(age)"],"solutionCode":"age = 25\nprint(age)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Why do we NOT put quotes around the variable name when printing it (e.g. `print(score)`)?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Variables are the foundation of dynamic programming. They let your app remember user data, scores, and text!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Creating Your First Variable' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Building the box', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["In the last lesson, we gave you the variables.","Now, it''s time for you to create them yourself."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'The Assignment Operator', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["The equals sign `=` is formally called the ''Assignment Operator''.","It takes whatever is on the RIGHT side and assigns it to the name on the LEFT side."],"codeBlocks":[{"code":"gold = 500\nprint(gold)","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'In programming, what does `=` do?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'If you want to create a variable named `level` and set it to 5, how do you write it?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this code output?
speed = 120
print("speed")', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Create a variable', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"# Create a variable named ''health'' and set it to 100\n____ = 100\nprint(health)","expectedOutput":"100","hints":["Write health on the left side of the equals sign."],"solutionCode":"health = 100\nprint(health)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Do it all yourself', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"# Create a variable named ''apples'' and set it to 10\n\n\n# Print the apples variable\n","expectedOutput":"10","hints":["apples = 10","print(apples)"],"solutionCode":"apples = 10\nprint(apples)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Why would `10 = apples` cause an error in Python?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Great! You now know how to create variables and assign them values. Remember: Name on the left, data on the right."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Strings' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Text data', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["Variables don''t just hold numbers. They can also hold text, like a player''s name or an email address.","In programming, a piece of text is called a ''String'' (like a string of letters)."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Using Quotes', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["Whenever you create a String, you must surround the text with quotes `\"\"`.","This tells Python ''this is text data'', not another variable name."],"codeBlocks":[{"code":"name = \"Alice\"\nmessage = \"Welcome to the game!\"\nprint(name)","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What is a String in Python?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'If you want to store the word ''Hello'' in a variable, how do you write the text?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this code output?
city = "Tokyo"
print(city)', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Create a String', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"# Create a variable named hero and set it to \"Ninja\"\nhero = ____\nprint(hero)","expectedOutput":"Ninja","hints":["Make sure you use quotes around the word Ninja."],"solutionCode":"hero = \"Ninja\"\nprint(hero)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Write a String variable', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"# Create a variable named color and set it to \"Blue\"\n\n\n# Print the color variable\n","expectedOutput":"Blue","hints":["color = \"Blue\"","print(color)"],"solutionCode":"color = \"Blue\"\nprint(color)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What happens if you write `name = Alice` without quotes?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Strings are everywhere! Passwords, emails, and tweets are all stored as Strings in code."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Numbers (Integers & Floats)' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Different kinds of numbers', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["In Python, numbers are treated differently than text.","Unlike strings, numbers do NOT use quotes.","Python has two main types of numbers: whole numbers and decimal numbers."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Integers and Floats', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["An **Integer** (int) is a whole number like `5` or `-10`.","A **Float** is a number with a decimal point like `3.14` or `9.99`."],"codeBlocks":[{"code":"age = 20        # This is an Integer\nprice = 19.99   # This is a Float\nprint(age)\nprint(price)","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What is an Integer in Python?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What is the number `5.5` considered in Python?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this code output?
x = 10.5
print(x)', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Create a Float', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"# Create a variable named weight and set it to 55.5 (a Float)\nweight = ____\nprint(weight)","expectedOutput":"55.5","hints":["Write 55.5 without quotes."],"solutionCode":"weight = 55.5\nprint(weight)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Write numbers', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"# Create an integer variable named year and set it to 2030\n\n\n# Print the year variable\n","expectedOutput":"2030","hints":["year = 2030","print(year)"],"solutionCode":"year = 2030\nprint(year)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Why should you NEVER put quotes around a number you want to do math with (e.g. `"10"`)?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Integers and Floats are the math engines of Python. If you want to calculate a total, keep those quotes off!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Booleans' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Yes or No', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["Sometimes a program just needs to know if something is True or False.","Is the game over? True.","Is the user logged in? False.","This simple Yes/No data type is called a Boolean."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'True and False', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["In Python, a Boolean can only be `True` or `False`.","Notice that they must start with a CAPITAL letter!","They do not use quotes, because they are a special built-in data type, not a string."],"codeBlocks":[{"code":"is_playing = True\ngame_over = False\nprint(is_playing)","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What are the two possible values for a Boolean?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Which of the following is written correctly in Python?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this code output?
is_raining = False
print(is_raining)', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Create a Boolean', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"# Create a variable named is_logged_in and set it to True\nis_logged_in = ____\nprint(is_logged_in)","expectedOutput":"True","hints":["Write True with a capital T and no quotes."],"solutionCode":"is_logged_in = True\nprint(is_logged_in)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Write a Boolean', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"# Create a variable named is_admin and set it to False\n\n\n# Print the is_admin variable\n","expectedOutput":"False","hints":["is_admin = False","print(is_admin)"],"solutionCode":"is_admin = False\nprint(is_admin)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What happens if you type `true` (lowercase) instead of `True`?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Booleans will become incredibly powerful when we learn about ''If Statements'' to make our code make decisions!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Changing Variable Values' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Variables can VARY', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["They are called variables because their data can vary (change) over time.","If a player takes damage, their health variable needs to update!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Overwriting data', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["To change a variable''s value, you just assign it a new value using `=`. ","Python throws away the old data and replaces it with the new data.","Python reads code top-to-bottom, so the variable holds the newest value assigned before it is printed."],"codeBlocks":[{"code":"score = 10\nscore = 50   # score is updated to 50!\nprint(score)","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What happens when you assign a new value to an existing variable?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Python executes code...', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this code output?
x = 5
x = 10
print(x)', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Update the score', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"score = 10\n# Update the score to be 20\n____ = 20\n\nprint(score)","expectedOutput":"20","hints":["Write score = 20"],"solutionCode":"score = 10\nscore = 20\nprint(score)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Reassign independently', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"name = \"Alice\"\n# Change the name variable to \"Bob\"\n\n\n# Print the name variable\n","expectedOutput":"Bob","hints":["name = \"Bob\"","print(name)"],"solutionCode":"name = \"Alice\"\nname = \"Bob\"\nprint(name)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Can you change a variable from an Integer to a String? (e.g., `x = 5`, then `x = "Hello"`)', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["You can overwrite a variable as many times as you want. Python always uses the most recent value."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Printing Multiple Variables' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Putting sentences together', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["Often, you want to print a sentence that combines plain text with the data inside your variables.","For example: ''Your score is 100''."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Using Commas', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["The easiest way to print multiple things is to separate them with a comma `,` inside the `print()` function.","Python automatically adds a space between the items for you!"],"codeBlocks":[{"code":"score = 100\nprint(\"Your score is:\", score)","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What symbol allows you to print multiple pieces of data in one `print()` statement?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'When you use a comma in `print()`, does Python automatically add a space?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this code output?
name = "Leo"
print("Hi", name)', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Combine text and a variable', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"age = 25\n# Print: I am 25\nprint(\"I am\"____ age)","expectedOutput":"I am 25","hints":["Use a comma to separate the string and the variable."],"solutionCode":"age = 25\nprint(\"I am\", age)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Combine independently', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"weather = \"sunny\"\n# Print: Today is sunny\n\n","expectedOutput":"Today is sunny","hints":["print(\"Today is\", weather)"],"solutionCode":"weather = \"sunny\"\nprint(\"Today is\", weather)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Can you use commas to combine variables of different types (like a String and an Integer)?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Using commas makes it super easy to format nice messages for the user. We will learn even cooler ways to do this later!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Variable Naming Rules' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Naming is hard', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["In Python, you can name a variable almost anything.","But there are a few strict rules you MUST follow, otherwise Python will crash."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'The Rules', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["1. NO SPACES allowed. (Use underscores instead: `my_score`)","2. Cannot START with a number. (`1player` is bad. `player1` is good.)","3. Case matters! (`score` and `Score` are two entirely different variables.)"],"codeBlocks":[{"code":"my_score = 100   # Good!\nhigh score = 10  # BAD (Space)\n1st_place = True # BAD (Starts with number)","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Are spaces allowed in variable names?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What is the standard way to separate words in Python variable names?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Which of these is a VALID variable name?', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Fix the naming error', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"# Fix the variable name so it doesn''t crash\nmy age = 20\nprint(my age)","expectedOutput":"20","hints":["Replace the spaces with underscores."],"solutionCode":"my_age = 20\nprint(my_age)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Fix the number error', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"# Fix the variable name so it doesn''t start with a number\n1st_place = \"Alice\"\nprint(1st_place)","expectedOutput":"Alice","hints":["Change 1st_place to something like place_1"],"solutionCode":"place_1 = \"Alice\"\nprint(place_1)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'If you create `name = "Dan"` and try to `print(Name)`, what happens?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Programmers use underscores so often that they have a special name for this format: `snake_case`! Always use snake_case in Python."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Common Beginner Errors' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Embracing Errors', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["Errors are not failures. They are just the computer asking for clarification.","Let''s look at the most common error you will see when working with variables."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'NameError', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["A `NameError` occurs when you try to use a variable that hasn''t been created yet.","This usually happens because of a typo. You might create `score`, but accidentally try to print `socre`."],"codeBlocks":[{"code":"score = 10\nprint(socre) # NameError: name ''socre'' is not defined","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What causes a NameError?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Does Python read variables correctly if you spell them wrong?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What error will this code throw? `print(my_name)` (Assume we never assigned anything to my_name)', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Fix the NameError', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"points = 100\n# Fix the typo in the print statement to avoid a NameError\nprint(pionts)","expectedOutput":"100","hints":["Change pionts to points."],"solutionCode":"points = 100\nprint(points)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Fix another error', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"# The variable is not defined before printing!\n# Make this code work by assigning a value to city first.\n\nprint(city)","expectedOutput":"Paris","hints":["Add city = \"Paris\" on line 1."],"solutionCode":"city = \"Paris\"\nprint(city)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'If you get a NameError, what is the FIRST thing you should check?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["NameErrors are incredibly common, but very easy to fix. Just look for the typo!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Mini Project: Profile Generator' AND unit_id = (SELECT id FROM units WHERE title = 'Variables & Data' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Putting it together', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["It''s time for your first mini-project!","You are going to build a personal profile generator that stores multiple variables and prints an introduction."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'To store a name, what data type should you use?', 2, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'To store an age, what data type should you use?', 3, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'How do you combine a word and a variable in a print statement?', 4, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Build the Profile', 5, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"# Create a variable ''name'' with the string \"Alex\"\n# Create a variable ''age'' with the integer 20\n# Create a variable ''is_student'' with the boolean True\n\n\n\n# Print \"Name:\", name\n# Print \"Age:\", age\n# Print \"Student:\", is_student\n","expectedOutput":"Name: Alex\nAge: 20\nStudent: True","hints":["name = \"Alex\"","age = 20","is_student = True","print(\"Name:\", name)"],"solutionCode":"name = \"Alex\"\nage = 20\nis_student = True\nprint(\"Name:\", name)\nprint(\"Age:\", age)\nprint(\"Student:\", is_student)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Unit 2 Complete!', 6, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Excellent work! You''ve learned how to create, modify, and display variables of all data types.","You are now ready to make your programs interactive with Control Flow!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

END $$;
SELECT setval('challenges_id_seq', (SELECT MAX(id) FROM challenges));
COMMIT;