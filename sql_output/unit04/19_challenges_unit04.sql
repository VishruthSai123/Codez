-- 19_challenges_unit04.sql
BEGIN;
DO $$
DECLARE
    v_lesson_id INTEGER;
    v_challenge_id INTEGER;
BEGIN
    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'What Makes Programs Smart?' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Brain Power', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["So far, our programs run exactly the same way every time.","But real software makes decisions! If your password is correct, it logs you in. If it''s wrong, it blocks you.","In this unit, we will give your programs a brain."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Branching Paths', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["Decision making in code works exactly like a fork in the road.","The program asks a question. If the answer is YES (True), it goes down one path.","If the answer is NO (False), it goes down a different path."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Why do we need decision making in code?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'A program making a decision is like...', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'If a program asks ''Is the user 18 or older?'', what are the only two possible answers?', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Boolean recap', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"# A decision always boils down to True or False (Booleans)\n# Set is_raining to True\nis_raining = ____\nprint(is_raining)","expectedOutput":"True","hints":["Write True with a capital T."],"solutionCode":"is_raining = True\nprint(is_raining)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Independent Recap', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"# Create a variable named is_admin and set it to False\n\n\n# Print is_admin\n","expectedOutput":"False","hints":["is_admin = False","print(is_admin)"],"solutionCode":"is_admin = False\nprint(is_admin)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Why are Booleans (True/False) so important for decision making?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["We are going to use Booleans to control the flow of our entire application!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Understanding True & False' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Asking Python Questions', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["We don''t always want to manually type `True` or `False`.","Instead, we want to ask Python a math question, and have Python figure out if it is True or False!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Equality Operator', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["To ask Python if two things are exactly equal, we use a DOUBLE equals sign `==`.","This is called the Equality Operator. It returns `True` if they are the same, and `False` if they are not."],"codeBlocks":[{"code":"print(5 == 5)  # Outputs True\nprint(5 == 10) # Outputs False","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Which symbol do you use to CHECK if two things are equal?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What does a SINGLE equals sign (`=`) do?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this code output?
print("Apple" == "Apple")', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Check equality', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"score = 100\n# Ask Python if score is exactly equal to 100\nprint(score ____ 100)","expectedOutput":"True","hints":["Use the == operator."],"solutionCode":"score = 100\nprint(score == 100)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Check inequality', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"guess = \"cat\"\n# Print whether guess is equal to \"dog\"\n\n","expectedOutput":"False","hints":["print(guess == \"dog\")"],"solutionCode":"guess = \"cat\"\nprint(guess == \"dog\")"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Why does `print("apple" == "Apple")` return False?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Remember: `=` means ''Make it equal''. `==` means ''Ask if it is equal''."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Comparison Operators' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Comparing Numbers', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["We don''t always want to check if things are exactly equal.","Often, we want to know if a player''s score is GREATER than the high score, or if their age is LESS than 18."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Math Symbols', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["Python uses standard math symbols for comparing numbers:","`>` (Greater than)","`<` (Less than)","`>=` (Greater than or equal to)","`<=` (Less than or equal to)","`!=` (Not equal to)"],"codeBlocks":[{"code":"print(10 > 5)  # True\nprint(10 < 5)  # False\nprint(5 != 10) # True (5 is NOT equal to 10)","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Which symbol means ''Not Equal To''?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'If you want to check if a user is 18 OR OLDER, which symbol should you use?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this code output?
print(10 >= 10)', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Check the age', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"age = 15\n# Check if age is less than 18\nprint(age ____ 18)","expectedOutput":"True","hints":["Use the < symbol."],"solutionCode":"age = 15\nprint(age < 18)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Check the high score', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"score = 500\nhigh_score = 450\n# Print whether the score is greater than the high_score\n\n","expectedOutput":"True","hints":["print(score > high_score)"],"solutionCode":"score = 500\nhigh_score = 450\nprint(score > high_score)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'If `print(x != y)` outputs True, what does that mean?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["You now know how to ask Python any Yes/No question! Now let''s learn how to actually make decisions based on the answers."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Your First if Statement' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Taking Action', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["We know how to ask True/False questions.","But how do we tell the program to ONLY run a piece of code IF the answer is True?","We use an ''If Statement''!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Syntax of an if statement', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["To write an `if` statement, type `if`, followed by the question, followed by a colon `:`.","The code you want to run must be INDENTED (moved inward using the Tab key or 4 spaces) directly below it!"],"codeBlocks":[{"code":"age = 20\nif age >= 18:\n    print(\"You are an adult!\")","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What symbol MUST go at the very end of the `if` line?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'How does Python know which code belongs INSIDE the `if` statement?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this code output?
score = 10
if score == 10:
    print("You win!")', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Write an if statement', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"weather = \"rain\"\n# Check if weather is exactly equal to \"rain\"\n____ weather == \"rain\"____\n    print(\"Bring an umbrella!\")","expectedOutput":"Bring an umbrella!","hints":["Start with ''if'' and end the line with a colon '':''"],"solutionCode":"weather = \"rain\"\nif weather == \"rain\":\n    print(\"Bring an umbrella!\")"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Independent If', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"money = 50\n# Write an if statement checking if money is greater than 10\n# If it is, print: \"You can buy it!\"\n\n","expectedOutput":"You can buy it!","hints":["if money > 10:","    print(\"You can buy it!\")"],"solutionCode":"money = 50\nif money > 10:\n    print(\"You can buy it!\")"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What happens if the condition in an `if` statement is False?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Indentation is the most important part of Python syntax. It groups code together!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Using else' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Plan B', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["An `if` statement tells the computer what to do when the answer is True.","But what if we want to print an error message when the answer is False?","That''s what `else` is for!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Syntax of else', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["`else` must be at the same indentation level as `if`. It does not ask a question.","It simply means ''Otherwise, do this instead''."],"codeBlocks":[{"code":"age = 15\nif age >= 18:\n    print(\"Welcome!\")\nelse:\n    print(\"Too young!\")","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'When does the code inside an `else` block run?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Does `else` require a condition (like `else age == 10:`)?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this code output?
x = 5
if x > 10:
    print("Big")
else:
    print("Small")', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Write an else statement', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"weather = \"sunny\"\nif weather == \"rain\":\n    print(\"Take an umbrella\")\n# Add the else block below\n____:\n    print(\"Wear sunglasses\")","expectedOutput":"Wear sunglasses","hints":["Write else:"],"solutionCode":"weather = \"sunny\"\nif weather == \"rain\":\n    print(\"Take an umbrella\")\nelse:\n    print(\"Wear sunglasses\")"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Password checker', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"password = \"1234\"\nif password == \"secret\":\n    print(\"Access Granted\")\n# Add an else block that prints \"Access Denied\"\n\n","expectedOutput":"Access Denied","hints":["else:","    print(\"Access Denied\")"],"solutionCode":"password = \"1234\"\nif password == \"secret\":\n    print(\"Access Granted\")\nelse:\n    print(\"Access Denied\")"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Can you have an `else` without an `if`?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["You now have a two-way decision tree! But what if you have three or four possible paths? Let''s find out."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Using elif' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Multiple Choices', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["What if we want to check for multiple specific things?","For example: If the light is green, GO. If the light is yellow, SLOW DOWN. Otherwise, STOP.","We use `elif` (Else If)!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Syntax of elif', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["`elif` goes between the `if` and the `else`.","Unlike `else`, `elif` DOES ask a question, and requires a colon.","Python checks them in order top-to-bottom. It stops as soon as it finds one that is True."],"codeBlocks":[{"code":"color = \"yellow\"\nif color == \"green\":\n    print(\"Go\")\nelif color == \"yellow\":\n    print(\"Slow\")\nelse:\n    print(\"Stop\")","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What does `elif` stand for?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Where must `elif` be placed?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this code output?
x = 10
if x == 5:
    print("Five")
elif x == 10:
    print("Ten")
else:
    print("Unknown")', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Write an elif statement', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"score = 85\nif score >= 90:\n    print(\"Grade A\")\n# Add an elif checking if score is >= 80\n____ score >= 80:\n    print(\"Grade B\")\nelse:\n    print(\"Grade C\")","expectedOutput":"Grade B","hints":["Use elif"],"solutionCode":"score = 85\nif score >= 90:\n    print(\"Grade A\")\nelif score >= 80:\n    print(\"Grade B\")\nelse:\n    print(\"Grade C\")"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Greeting program', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"time = 14\nif time < 12:\n    print(\"Good Morning\")\n# Write an elif to check if time is less than 18, and print \"Good Afternoon\"\n\n\nelse:\n    print(\"Good Evening\")","expectedOutput":"Good Afternoon","hints":["elif time < 18:","    print(\"Good Afternoon\")"],"solutionCode":"time = 14\nif time < 12:\n    print(\"Good Morning\")\nelif time < 18:\n    print(\"Good Afternoon\")\nelse:\n    print(\"Good Evening\")"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Can you have more than one `elif` in a single decision block?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["With `if`, `elif`, and `else`, you can build complex menus, AI logic, and grading systems."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Multiple Conditions' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Chaining it all together', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["Let''s practice writing multiple `elif` statements to build a full text-based menu."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'When Python is executing an `if`/`elif`/`else` chain, when does it stop checking?', 2, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Which of these must ALWAYS come first?', 3, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this code output?
x = 10
if x > 5:
    print("A")
elif x > 8:
    print("B")', 4, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Build a menu', 5, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"choice = \"3\"\n\n# if choice is \"1\", print \"Start\"\n# elif choice is \"2\", print \"Load\"\n# elif choice is \"3\", print \"Quit\"\n# else print \"Invalid\"\n\n","expectedOutput":"Quit","hints":["if choice == \"1\":\n    print(\"Start\")","elif choice == \"2\":\n    print(\"Load\")","elif choice == \"3\":\n    print(\"Quit\")"],"solutionCode":"choice = \"3\"\nif choice == \"1\":\n    print(\"Start\")\nelif choice == \"2\":\n    print(\"Load\")\nelif choice == \"3\":\n    print(\"Quit\")\nelse:\n    print(\"Invalid\")"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Great Job', 6, 'recap', '{"variant":"recap","icon":"check","paragraphs":["You just built a working game menu! Notice how order matters; Python reads top to bottom and stops at the first True."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Logical Operators (and, or, not)' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Complex Rules', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["Sometimes, one question isn''t enough.","To log into a website, your username AND your password must be correct.","To get a discount, you must be a student OR a senior."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'and / or', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["Python uses simple English words to combine conditions.","`and` requires BOTH sides to be True.","`or` requires AT LEAST ONE side to be True.","`not` flips True to False, and False to True."],"codeBlocks":[{"code":"age = 20\nis_student = True\nif age > 18 and is_student:\n    print(\"Adult Student\")","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'If a condition uses `and`, what must be true for the code to run?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'If a condition uses `or`, what must be true for the code to run?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this code output?
print(True and False)', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Use AND', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"score = 100\nlives = 3\n# Check if score is exactly 100 AND lives is greater than 0\nif score == 100 ____ lives > 0:\n    print(\"Perfect Run!\")","expectedOutput":"Perfect Run!","hints":["Use the word ''and''."],"solutionCode":"score = 100\nlives = 3\nif score == 100 and lives > 0:\n    print(\"Perfect Run!\")"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Use OR', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"day = \"Saturday\"\n# Write an if statement that prints \"Weekend!\" if day is \"Saturday\" OR day is \"Sunday\"\n\n\n","expectedOutput":"Weekend!","hints":["if day == \"Saturday\" or day == \"Sunday\":"],"solutionCode":"day = \"Saturday\"\nif day == \"Saturday\" or day == \"Sunday\":\n    print(\"Weekend!\")"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What does the `not` operator do (e.g. `not True`)?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Logical operators allow you to build incredibly precise decision systems with very little code!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Nested Decisions' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Decisions within Decisions', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["Sometimes you only want to ask a question IF a previous question was True.","For example: Is it raining? If yes, is it ALSO cold?"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Nesting (Indentation)', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["You can put an `if` statement INSIDE another `if` statement.","You just have to indent the inner block even further! This is called ''Nesting''."],"codeBlocks":[{"code":"rain = True\ncold = True\n\nif rain == True:\n    if cold == True:\n        print(\"Wear a winter coat\")","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What does ''Nested'' mean in programming?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'In nested statements, how does Python know a block is inside another block?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this output?
admin = True
password = "123"
if admin == True:
    if password == "123":
        print("Welcome Admin")', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Fix the indentation', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"door_open = True\nhas_key = True\nif door_open == True:\n# Fix the indentation below so it is nested inside the first if!\nif has_key == True:\nprint(\"You enter the room\")","expectedOutput":"You enter the room","hints":["Indent the second if. Indent the print statement TWICE."],"solutionCode":"door_open = True\nhas_key = True\nif door_open == True:\n    if has_key == True:\n        print(\"You enter the room\")"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 7, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Be careful with nesting! If you nest too many levels deep, your code becomes very hard to read. Sometimes using `and` is a better solution."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Common Beginner Mistakes' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Syntax Nightmares', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["If statements are powerful, but they are also where beginners make the most syntax errors.","Let''s learn how to spot and fix the three most common mistakes."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'The Big Three', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["1. Forgetting the colon `:` at the end of the `if` line.","2. Forgetting to indent the code underneath.","3. Using a single `=` (assignment) instead of double `==` (equality check)."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Why does `if x = 5:` cause an error?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Every `if`, `elif`, and `else` line MUST end with...', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Fix the = error', 5, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"lives = 0\n# Fix the error below\nif lives = 0:\n    print(\"Game Over\")","expectedOutput":"Game Over","hints":["Change = to =="],"solutionCode":"lives = 0\nif lives == 0:\n    print(\"Game Over\")"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Fix the syntax errors', 6, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"points = 100\n# There are multiple errors here! Fix them.\nif points == 100\nprint(\"Level Up\")","expectedOutput":"Level Up","hints":["Add a colon after 100.","Indent the print statement."],"solutionCode":"points = 100\nif points == 100:\n    print(\"Level Up\")"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 7, 'recap', '{"variant":"recap","icon":"check","paragraphs":["When your `if` statement throws an error, check the colon, check the double equals, and check the indentation!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Mini Project: Smart Login' AND unit_id = (SELECT id FROM units WHERE title = 'Conditional Statements' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Security Clearance', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["You are going to build a text-based login system.","It will ask for a username and a password. If they both match, it grants access. Otherwise, it denies access."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'To check if BOTH the username AND the password are correct in one `if` statement, what operator should you use?', 2, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What function do you use to ask the user to type their password?', 3, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Build the Login', 4, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"# The correct credentials are: user=\"admin\" and pass=\"1234\"\nusername = input(\"Username: \")\npassword = input(\"Password: \")\n\n# Write an if/else statement to check if they match!\n# Print \"Access Granted\" if true, \"Access Denied\" if false.\n\n","expectedOutput":"Username: \nPassword: \nAccess Denied","hints":["if username == \"admin\" and password == \"1234\":","    print(\"Access Granted\")","else:","    print(\"Access Denied\")"],"solutionCode":"username = input(\"Username: \")\npassword = input(\"Password: \")\nif username == \"admin\" and password == \"1234\":\n    print(\"Access Granted\")\nelse:\n    print(\"Access Denied\")"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Unit 4 Complete!', 5, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Outstanding work. You just built the exact core logic that secures almost every app on the internet.","Next up in Unit 5: We will learn how to make the computer repeat tasks automatically using Loops!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

END $$;
SELECT setval('challenges_id_seq', (SELECT MAX(id) FROM challenges));
COMMIT;