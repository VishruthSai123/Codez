-- 14_challenges_unit03.sql
BEGIN;
DO $$
DECLARE
    v_lesson_id INTEGER;
    v_challenge_id INTEGER;
BEGIN
    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Programs That Talk Back' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Interactive Software', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["So far, our programs just run top-to-bottom and finish.","But real software is interactive! A game waits for you to press a button. A login screen waits for you to type a password.","In this unit, we will learn how to make our programs pause and ask the user for information."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'The Input Function', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["To ask the user for information, we use the `input()` function.","When Python sees `input()`, it completely stops the program and waits for the user to type something and press Enter."],"codeBlocks":[{"code":"print(\"I am waiting...\")\ninput()","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What does the `input()` function do?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'When Python is waiting on `input()`, what must the user press to continue?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'If a program has `print("Hello")` followed by `input()`, what happens?', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Use input()', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"# Write the input function below\n____()","expectedOutput":"","hints":["Write input()"],"solutionCode":"input()"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Independent Input', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"print(\"Press enter to start the game...\")\n# Pause the game below\n\nprint(\"Game Started!\")","expectedOutput":"Press enter to start the game...\nGame Started!","hints":["Type input() on line 3"],"solutionCode":"print(\"Press enter to start the game...\")\ninput()\nprint(\"Game Started!\")"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Why is `input()` important for making games or apps?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["You just learned how to make your program wait for the user! But right now, we aren''t saving what they type. Let''s learn how to do that next."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Using input()' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Asking a specific question', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["Just using `input()` is confusing for the user, because they just see a blinking cursor and don''t know what to type.","We can actually put a String inside the `input()` function to ask them a specific question!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'The Prompt String', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["Inside the parentheses of `input()`, you can put a String in quotes.","Python will print this String to the screen right before it pauses. This is called a ''prompt''."],"codeBlocks":[{"code":"input(\"What is your name? \")","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What is the purpose of the text inside the `input()` function?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Because the prompt is text, it must be surrounded by...', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this code output before pausing?
input("Enter your age: ")', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Write a prompt', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"# Ask the user: Enter your password: \ninput(____)","expectedOutput":"Enter your password: ","hints":["Use quotes inside the parentheses."],"solutionCode":"input(\"Enter your password: \")"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Independent Prompting', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"# Ask the user: What is your quest? \n\n","expectedOutput":"What is your quest? ","hints":["Type input(\"What is your quest? \")"],"solutionCode":"input(\"What is your quest? \")"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Why do programmers usually put a space at the end of the prompt? (e.g., `"Name: "` instead of `"Name:"`)', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Now the user knows what to do! Next, we need to actually save the data they type into memory."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Saving User Input' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Catching the data', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["When the user types their name and presses Enter, that data vanishes into thin air unless we ''catch'' it.","We catch it using a Variable!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Assignment with input', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["Just like assigning a string to a variable (`name = \"Bob\"`), we can assign the result of the `input()` function to a variable.","Python will run `input()`, wait for the user, and then store whatever they typed directly into the variable on the left."],"codeBlocks":[{"code":"name = input(\"What is your name? \")\nprint(\"Hello\", name)","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'How do you save the user''s input so you can use it later?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'In `color = input("Favorite color? ")`, what does `color` hold?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Which of these is correctly saving input?', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Catch the input', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"# Save the user''s city into the ''city'' variable\n____ = input(\"What city do you live in? \")\nprint(\"You live in\", city)","expectedOutput":"What city do you live in? \nYou live in ","hints":["Write ''city'' on the left side of the equals sign."],"solutionCode":"city = input(\"What city do you live in? \")\nprint(\"You live in\", city)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Write it yourself', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"# 1. Create a variable called ''animal''\n# 2. Assign it to input(\"Favorite animal? \")\n\n\n# Print the animal variable\n","expectedOutput":"Favorite animal? \n","hints":["animal = input(\"Favorite animal? \")","print(animal)"],"solutionCode":"animal = input(\"Favorite animal? \")\nprint(animal)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What happens if you do NOT assign `input()` to a variable?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["This is a massive milestone! You are now writing software that actually remembers what the user tells it."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Why input() Returns Text' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Everything is text', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["There is one very sneaky rule about `input()` that catches every beginner off guard.","Whenever a user types something into `input()`, Python ALWAYS treats it as a String (Text)... even if they type a number!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'The "5" vs 5 problem', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["If a user types `5`, Python doesn''t save the Integer `5`. It saves the String `\"5\"`.","You cannot do math with Strings. If you try to add `\"5\" + \"5\"`, Python just glues the text together to get `\"55\"`!"],"codeBlocks":[{"code":"age = input(\"Age: \")   # User types 10\nprint(age + 5)         # ERROR! Cannot add text to a number.","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What data type does `input()` ALWAYS give you?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'If the user types `100` into an input prompt, what is actually stored in the variable?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What happens if you try to do math (like adding 10) to a String?', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'See the error yourself', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"money = \"20\"\n# Try to add 5 to the money string. See the error!\nprint(money + ____)","expectedOutput":"","hints":["Just write 5"],"solutionCode":"money = \"20\"\nprint(money + 5)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'String concatenation', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"a = \"2\"\nb = \"3\"\n# Print a + b to see how strings glue together!\n\n","expectedOutput":"23","hints":["print(a + b)"],"solutionCode":"a = \"2\"\nb = \"3\"\nprint(a + b)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Why did `"2" + "3"` output `"23"`?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["If `input()` always gives us text, how do we build a calculator? We have to convert it! Let''s learn how in the next lesson."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Converting with int()' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Magical Conversion', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["To do math with user input, we need a way to magically transform the String `\"5\"` into the Integer `5`.","Python has a built-in tool just for this!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'The int() function', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["You can convert text into an Integer using the `int()` function.","Put the text (or variable) inside the parentheses, and `int()` will spit out a real math number."],"codeBlocks":[{"code":"text_number = \"10\"\nreal_number = int(text_number)\nprint(real_number + 5) # Outputs 15!","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What does the `int()` function do?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'If `x = "20"`, how do you convert it to an integer?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this code output?
x = int("4")
print(x + 1)', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Convert the string', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"score = \"50\"\n# Convert the score to an integer\nmath_score = ____(score)\nprint(math_score + 10)","expectedOutput":"60","hints":["Use the int() function."],"solutionCode":"score = \"50\"\nmath_score = int(score)\nprint(math_score + 10)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Combine with input', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"# 1. Ask for age: age_text = input(\"Age: \")\n# 2. Convert it: age_num = int(age_text)\n# 3. Print age_num + 5\n\n\n","expectedOutput":"Age: \n","hints":["age_text = input(\"Age: \")","age_num = int(age_text)","print(age_num + 5)"],"solutionCode":"age_text = input(\"Age: \")\nage_num = int(age_text)\nprint(age_num + 5)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What happens if you try to do `int("Apple")`?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["We call this ''Type Casting''. You cast a spell on a String to turn it into an Integer!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Converting with float()' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Decimal Conversion', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["What if you ask the user for their weight, and they type `150.5`?","If you use `int()`, Python will crash because integers cannot have decimals.","We need a different converter for decimal numbers."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'The float() function', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["To convert text into a decimal number, we use the `float()` function.","It works exactly like `int()`, but it allows decimal points."],"codeBlocks":[{"code":"text_price = \"9.99\"\nreal_price = float(text_price)\nprint(real_price + 1.00)","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What does `float()` do?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'If a user might type a decimal (like a price or weight), which function should you use?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this code output?
x = float("5.5")
print(x + 0.5)', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Convert to Float', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"price_text = \"19.99\"\n# Convert to float\nprice = ____(price_text)\nprint(price)","expectedOutput":"19.99","hints":["Use the float() function."],"solutionCode":"price_text = \"19.99\"\nprice = float(price_text)\nprint(price)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Independent Float', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"speed_text = \"65.5\"\n# Convert speed_text to a float and save it in a variable named speed\n\n# Print speed\n","expectedOutput":"65.5","hints":["speed = float(speed_text)","print(speed)"],"solutionCode":"speed_text = \"65.5\"\nspeed = float(speed_text)\nprint(speed)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What happens if you use `float("10")` on a whole number?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Use `int()` for things you count (lives, levels, apples). Use `float()` for things you measure (speed, price, weight)!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Addition & Subtraction' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Math time', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["Python is secretly just a giant, incredibly powerful calculator.","You can use it to perform any mathematical operation instantly."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Plus and Minus', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["Addition uses the `+` symbol.","Subtraction uses the `-` symbol.","You can use them on pure numbers, or on variables that hold numbers."],"codeBlocks":[{"code":"lives = 3\nlives = lives + 1\nprint(lives)  # Outputs 4","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Which symbol is used for subtraction?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'To add 10 to a variable `score`, you would write: score + ___', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this code output?
apples = 10
apples = apples - 2
print(apples)', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Subtracting health', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"health = 100\ndamage = 20\n# Subtract damage from health\nhealth = health ____ damage\nprint(health)","expectedOutput":"80","hints":["Use the - operator."],"solutionCode":"health = 100\ndamage = 20\nhealth = health - damage\nprint(health)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Add it up', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"a = 5\nb = 10\n# Create a variable ''total'' that adds a and b together\n\n\n# Print the total\n","expectedOutput":"15","hints":["total = a + b","print(total)"],"solutionCode":"a = 5\nb = 10\ntotal = a + b\nprint(total)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'In the code `score = score + 1`, why do we put `score` on both sides?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Updating variables based on their old values (`x = x + 1`) is something you will do in almost every game or app you build!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Multiplication & Division' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Scaling up and down', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["We have addition and subtraction. Now let''s multiply and divide.","Keyboards don''t have standard multiply or divide keys (like × or ÷), so programming uses special symbols."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Stars and Slashes', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["Multiplication uses the asterisk `*` (Shift+8).","Division uses the forward slash `/` (near the shift key)."],"codeBlocks":[{"code":"print(5 * 2)  # Outputs 10\nprint(10 / 2) # Outputs 5.0","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Which symbol is used for multiplication?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Which symbol is used for division?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this code output?
print(4 * 3)', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Double the score', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"score = 50\n# Multiply the score by 2\nscore = score ____ 2\nprint(score)","expectedOutput":"100","hints":["Use the * symbol."],"solutionCode":"score = 50\nscore = score * 2\nprint(score)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Divide it', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"money = 100\n# Create a variable ''half'' that divides money by 2\n\n\n# Print half\n","expectedOutput":"50.0","hints":["half = money / 2","print(half)"],"solutionCode":"money = 100\nhalf = money / 2\nprint(half)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Did you notice that division `100 / 2` resulted in `50.0` (a Float)?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Remember: `*` for multiply, `/` for divide. Standard division always yields a decimal (Float)."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Floor Division & Modulus' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Remainders', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["Standard division returns a decimal (Float).","But sometimes you want to divide things whole, like splitting 10 slices of pizza among 3 people.","Everyone gets 3 slices (Floor Division), and 1 slice is left over (Modulus)."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', '// and %', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["Floor Division `//` divides the numbers and drops the decimal, leaving only the whole integer.","Modulus `%` divides the numbers and returns ONLY the remainder."],"codeBlocks":[{"code":"print(10 // 3) # Outputs 3\nprint(10 % 3)  # Outputs 1 (the leftover slice)","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What does the Modulus `%` operator do?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Which operator drops the decimal and gives you a whole integer?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this code output?
print(5 % 2)', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Find the remainder', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"# Find the remainder of 15 divided by 4\nremainder = 15 ____ 4\nprint(remainder)","expectedOutput":"3","hints":["Use the % symbol."],"solutionCode":"remainder = 15 % 4\nprint(remainder)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Floor it', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"# Use floor division to divide 20 by 6 (should result in 3)\nresult = \n\nprint(result)","expectedOutput":"3","hints":["result = 20 // 6"],"solutionCode":"result = 20 // 6\nprint(result)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Programmers often use `num % 2`. If `num % 2` results in 0, what does that tell us about the number?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Modulus `%` is an incredible tool. You will use it to check for even/odd numbers, find leap years, and cycle through arrays!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Exponent Operator' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'To the power of...', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["If you want to multiply a number by itself multiple times, you could write `2 * 2 * 2 * 2`.","But Python has a much faster way: Exponents!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Double Stars', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["The Exponent operator is two asterisks: `**`.","`3 ** 2` means ''3 to the power of 2'' (3 squared)."],"codeBlocks":[{"code":"print(5 ** 2) # 5 * 5 = 25\nprint(2 ** 3) # 2 * 2 * 2 = 8","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Which symbol is used for exponents (powers) in Python?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What does `10 ** 2` calculate?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this code output?
print(4 ** 2)', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Cube a number', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"# Calculate 3 to the power of 3\nresult = 3 ____ 3\nprint(result)","expectedOutput":"27","hints":["Use the ** operator."],"solutionCode":"result = 3 ** 3\nprint(result)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Big numbers', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"# Print 10 to the power of 4\n\n","expectedOutput":"10000","hints":["print(10 ** 4)"],"solutionCode":"print(10 ** 4)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Is `**` the same as `^` in Python?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["You now know all the primary mathematical operators in Python!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Order of Operations' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Math Rules', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["If you have a complex equation like `10 + 5 * 2`, what happens first?","Python follows the strict mathematical Order of Operations, just like you learned in school."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'PEMDAS', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["Parentheses `()` always happen first.","Exponents `**` happen second.","Multiplication/Division `*`, `/` happen third.","Addition/Subtraction `+`, `-` happen last."],"codeBlocks":[{"code":"print(10 + 5 * 2)   # Multiplication first: 10 + 10 = 20\nprint((10 + 5) * 2) # Parentheses first: 15 * 2 = 30","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Which operation will Python calculate FIRST in any equation?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Does Multiplication happen before Addition?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this code output?
print(5 + 2 * 3)', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Force addition first', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"# Add parentheses so the addition happens FIRST, resulting in 20\nresult = 5 + 5 * 2\nprint(result)","expectedOutput":"20","hints":["Put ( ) around 5 + 5"],"solutionCode":"result = (5 + 5) * 2\nprint(result)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Complex equation', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"# Print the result of: 10 minus 2, multiplied by 5\n\n","expectedOutput":"40","hints":["print((10 - 2) * 5)"],"solutionCode":"print((10 - 2) * 5)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Why should you use parentheses even if the order of operations would be correct anyway?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Parentheses are your best friend. When in doubt, wrap it in parentheses to guarantee it executes exactly the way you want it to."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Mini Project: Interactive Calculator' AND unit_id = (SELECT id FROM units WHERE title = 'User Input & Operators' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'The Ultimate Challenge', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["It''s time to build your first truly interactive application.","You are going to build a calculator that asks the user for two numbers, converts them, adds them, and prints the result."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What function do you use to ask the user for a number?', 2, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What must you do to the result of `input()` before you can do math with it?', 3, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Which of these is the correct way to print a variable alongside text?', 4, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Build the Calculator', 5, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"# 1. Ask for a number and save as text1\n# 2. Ask for a second number and save as text2\n# 3. Convert text1 to an integer (num1)\n# 4. Convert text2 to an integer (num2)\n# 5. Add them together and save as total\n# 6. Print \"The total is:\", total\n\n","expectedOutput":"The total is: 0","hints":["text1 = input(\"Number 1: \")","text2 = input(\"Number 2: \")","num1 = int(text1)","total = num1 + num2"],"solutionCode":"text1 = input(\"Number 1: \")\ntext2 = input(\"Number 2: \")\nnum1 = int(text1)\nnum2 = int(text2)\ntotal = num1 + num2\nprint(\"The total is:\", total)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Unit 3 Complete!', 6, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Incredible! You just built your first interactive app.","You know how to get input, convert data, and do math.","Next up: Giving your apps a ''Brain'' using Conditional Statements (If/Else)!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

END $$;
SELECT setval('challenges_id_seq', (SELECT MAX(id) FROM challenges));
COMMIT;