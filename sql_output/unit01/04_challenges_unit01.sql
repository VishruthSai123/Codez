-- 04_challenges_unit01.sql
BEGIN;
INSERT INTO challenges (id, lesson_id, type, question, "order", lesson_step, content_metadata) VALUES
(1, 1, 'CONCEPT', 'Why Python?', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["Welcome to the world of programming!","Python is one of the most popular programming languages in the world.","It is used by companies like Google, Netflix, and NASA because it is powerful, yet incredibly easy to read and write."]}'::jsonb),
(2, 1, 'CONCEPT', 'What is code?', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["Computers are very fast, but they are not very smart. They only do exactly what you tell them to do.","Programming is simply giving a computer a set of instructions.","Python is the language we use to write those instructions."]}'::jsonb),
(3, 1, 'SELECT', 'What is the main purpose of programming?', 3, 'comprehension', NULL::jsonb),
(4, 1, 'SELECT', 'Python is known for being...', 4, 'fill_blank', NULL::jsonb),
(5, 1, 'SELECT', 'If you give a computer the wrong instructions, what will it do?', 5, 'predict_output', NULL::jsonb),
(6, 1, 'CODE', 'Your first code', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"# This is a comment. The computer ignores it.\n# Run the code to see what happens!\n\nprint(\"Hello, Python!\")","expectedOutput":"Hello, Python!","hints":["Just click ''Run'' to see the output."],"solutionCode":"print(\"Hello, Python!\")"}'::jsonb),
(7, 1, 'CODE', 'Run it again', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"print(\"I am a programmer\")\n","expectedOutput":"I am a programmer","hints":["Click ''Run'' to see the output."],"solutionCode":"print(\"I am a programmer\")"}'::jsonb),
(8, 1, 'SELECT', 'Which of these is true about computers?', 8, 'knowledge_check', NULL::jsonb),
(9, 1, 'CONCEPT', 'Great start!', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["You have taken your first step into the world of Python programming.","Next, we will learn how to make the computer talk to us!"]}'::jsonb),
(10, 2, 'CONCEPT', 'Talking to the screen', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["When you build an app or a game, you need a way to show information to the user.","In Python, the easiest way to display information on the screen is using the `print()` function."]}'::jsonb),
(11, 2, 'CONCEPT', 'The print function', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["To print text, you write the word `print`, followed by parentheses `()`.","Inside the parentheses, you must put quotes `\"\"` around your text.","Without quotes, Python gets confused!"],"codeBlocks":[{"code":"print(\"Hello World\")","language":"python"}]}'::jsonb),
(12, 2, 'SELECT', 'What function is used to display text on the screen?', 3, 'comprehension', NULL::jsonb),
(13, 2, 'SELECT', 'When printing text, what must you put around the text?', 4, 'fill_blank', NULL::jsonb),
(14, 2, 'SELECT', 'What will this code output?
print("Codez")', 5, 'predict_output', NULL::jsonb),
(15, 2, 'CODE', 'Print a message', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"# Write code to print exactly: I am learning\n____(\"I am learning\")","expectedOutput":"I am learning","hints":["Use the print function.","Make sure it looks exactly like: print(\"I am learning\")"],"solutionCode":"print(\"I am learning\")"}'::jsonb),
(16, 2, 'CODE', 'Write it from scratch', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"# Print the word: Python\n","expectedOutput":"Python","hints":["Type print(\"Python\")"],"solutionCode":"print(\"Python\")"}'::jsonb),
(17, 2, 'SELECT', 'Why does `print(Hello)` (without quotes) cause an error?', 8, 'knowledge_check', NULL::jsonb),
(18, 2, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["You just learned how to use the `print()` function. This is the most common tool you will use to test your code!"]}'::jsonb),
(19, 3, 'CONCEPT', 'Remembering things', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["Games need to remember your score. Apps need to remember your username.","To remember data in a program, we use something called a ''Variable''.","Think of a variable as a labeled box where you can store information."]}'::jsonb),
(20, 3, 'CONCEPT', 'Creating a variable', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["To create a variable, you type a name, an equals sign `=`, and the data you want to store.","Once stored, you can print the variable by using its name (without quotes!)."],"codeBlocks":[{"code":"score = 100\nprint(score)","language":"python"}]}'::jsonb),
(21, 3, 'SELECT', 'What is a variable?', 3, 'comprehension', NULL::jsonb),
(22, 3, 'SELECT', 'Which symbol is used to assign data to a variable?', 4, 'fill_blank', NULL::jsonb),
(23, 3, 'SELECT', 'What will this code output?
name = "Alex"
print(name)', 5, 'predict_output', NULL::jsonb),
(24, 3, 'CODE', 'Store a number', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"# Create a variable named age and set it to 25\n____ = 25\nprint(age)","expectedOutput":"25","hints":["Use the word ''age'' before the equals sign."],"solutionCode":"age = 25\nprint(age)"}'::jsonb),
(25, 3, 'CODE', 'Store and print', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"# Create a variable called points and set it to 50\n\n\n# Print the points variable\n","expectedOutput":"50","hints":["points = 50","print(points)"],"solutionCode":"points = 50\nprint(points)"}'::jsonb),
(26, 3, 'SELECT', 'Why do we NOT put quotes around the variable name when printing it (e.g. `print(score)` instead of `print("score")`)?', 8, 'knowledge_check', NULL::jsonb),
(27, 3, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Variables are the foundation of all programming. They allow your apps to be dynamic and remember user data!"]}'::jsonb),
(28, 4, 'CONCEPT', 'Notes to yourself', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["Sometimes you want to leave a note in your code to explain what it does to other programmers (or to yourself in the future!).","We do this using Comments. Python completely ignores comments when running the program."]}'::jsonb),
(29, 4, 'CONCEPT', 'The hashtag symbol', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["To write a comment in Python, use the hashtag symbol `#`.","Anything typed after the `#` on that line will be ignored by the computer."],"codeBlocks":[{"code":"# This calculates the final score\nscore = 100\nprint(score) # This prints the score","language":"python"}]}'::jsonb),
(30, 4, 'SELECT', 'What is a comment used for?', 3, 'comprehension', NULL::jsonb),
(31, 4, 'SELECT', 'Which symbol creates a comment in Python?', 4, 'fill_blank', NULL::jsonb),
(32, 4, 'SELECT', 'What will this code output?
# print("Apple")
print("Banana")', 5, 'predict_output', NULL::jsonb),
(33, 4, 'CODE', 'Write a comment', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"____ This is a comment\nprint(\"Hello\")","expectedOutput":"Hello","hints":["Use the # symbol at the start of the line."],"solutionCode":"# This is a comment\nprint(\"Hello\")"}'::jsonb),
(34, 4, 'CODE', 'Comment out code', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"print(\"Print me\")\nprint(\"Do NOT print me\")","expectedOutput":"Print me","hints":["Put a # symbol in front of the second print statement."],"solutionCode":"print(\"Print me\")\n# print(\"Do NOT print me\")"}'::jsonb),
(35, 4, 'SELECT', 'If a line of code has a bug, can a comment help?', 8, 'knowledge_check', NULL::jsonb),
(36, 4, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Good programmers use comments to explain complex logic so their teammates can understand it easily."]}'::jsonb),
(37, 5, 'CONCEPT', 'Don''t panic!', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["When you program, you WILL get errors. Even professional engineers see errors every single day.","An error just means the computer didn''t understand what you typed. It''s like a typo in grammar."]}'::jsonb),
(38, 5, 'CONCEPT', 'Syntax Errors', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["A ''Syntax Error'' happens when you break the spelling or grammar rules of Python.","Common mistakes include forgetting a closing parenthesis `)` or forgetting quotes around text."],"codeBlocks":[{"code":"print(\"Hello\"  # Missing closing parenthesis!\nprnt(\"Hello\")  # Spelled print wrong!","language":"python"}]}'::jsonb),
(39, 5, 'SELECT', 'What is a Syntax Error?', 3, 'comprehension', NULL::jsonb),
(40, 5, 'SELECT', 'Are errors bad?', 4, 'fill_blank', NULL::jsonb),
(41, 5, 'SELECT', 'What is wrong with this code? `print(Hello")`', 5, 'predict_output', NULL::jsonb),
(42, 5, 'CODE', 'Fix the syntax', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"# Fix the typo so this runs correctly\nprint(\"Success!\")\nprint(\"Failure\"","expectedOutput":"Success!\nFailure","hints":["The second print is missing its closing parenthesis )."],"solutionCode":"print(\"Success!\")\nprint(\"Failure\")"}'::jsonb),
(43, 5, 'CODE', 'Fix the spelling', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"# Fix the code to print correctly\nprit(\"I fixed it\")","expectedOutput":"I fixed it","hints":["''print'' is spelled with an ''n''."],"solutionCode":"print(\"I fixed it\")"}'::jsonb),
(44, 5, 'SELECT', 'Why is Python so strict about spelling and grammar?', 8, 'knowledge_check', NULL::jsonb),
(45, 5, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Never fear errors! Read the error message carefully—it usually tells you exactly which line has the typo."]}'::jsonb),
(46, 6, 'CONCEPT', 'Putting it together', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["You''ve learned `print()`, variables, and comments.","Let''s combine them into a single script to verify your understanding."]}'::jsonb),
(47, 6, 'SELECT', 'How do you display something to the user?', 2, 'comprehension', NULL::jsonb),
(48, 6, 'SELECT', 'What is used to leave a note for humans?', 3, 'fill_blank', NULL::jsonb),
(49, 6, 'SELECT', 'What is used to store data?', 4, 'predict_output', NULL::jsonb),
(50, 6, 'CODE', 'The Final Challenge', 5, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"# Create a variable named hero and assign it the text \"Ninja\"\n\n\n# Print the hero variable\n","expectedOutput":"Ninja","hints":["hero = \"Ninja\"","print(hero)"],"solutionCode":"hero = \"Ninja\"\nprint(hero)"}'::jsonb),
(51, 6, 'CONCEPT', 'Unit 1 Complete!', 6, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Amazing job. You''ve mastered the foundational rules of Python. In Unit 2, we will explore Data Types!"]}'::jsonb)
ON CONFLICT (id) DO NOTHING;
SELECT setval('challenges_id_seq', (SELECT MAX(id) FROM challenges));
COMMIT;