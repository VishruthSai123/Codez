-- 29_challenges_unit06.sql
BEGIN;
DO $$
DECLARE
    v_lesson_id INTEGER;
    v_challenge_id INTEGER;
BEGIN
    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Why Functions Exist' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'The Copy-Paste Nightmare', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["Imagine you write a 20-line block of code to calculate a user''s taxes.","Later in your program, you need to calculate taxes again. Do you copy and paste those 20 lines?","What if you find a bug in the math? Now you have to find and fix it in 50 different places!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'DRY: Don''t Repeat Yourself', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["A core rule of programming is DRY (Don''t Repeat Yourself).","To avoid repeating ourselves, we bundle code into a named block called a ''Function''.","Whenever we need that code, we just call its name, and Python runs the entire block for us!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What is a major problem with copy-pasting the same block of code multiple times?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What does the programming rule DRY stand for?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Instead of copying code, we bundle it into a named block called a...', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'The Built-in Functions', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"# You already know some built-in functions that Python made for you!\n# Call the print function to output \"Hello\"\n____(\"Hello\")","expectedOutput":"Hello","hints":["Write print"],"solutionCode":"print(\"Hello\")"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'More Built-ins', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"# The int() function is also a built-in function!\n# Use the int() function to convert \"5\" into a number, and print it.\nx = ____(\"5\")\nprint(x)","expectedOutput":"5","hints":["Use int()"],"solutionCode":"x = int(\"5\")\nprint(x)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Why did the creators of Python give us functions like `print()` and `input()`?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Built-in functions are great, but the real power of programming comes from writing our OWN functions!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Your First Function' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Defining a Function', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["To create our own function, we have to teach Python a new word.","We do this by ''defining'' a function."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'The def keyword', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["We use the keyword `def` (short for define).","Next comes the name of the function, followed by empty parentheses `()` and a colon `:`.","Just like with `if` and `while`, the code INSIDE the function must be indented!"],"codeBlocks":[{"code":"def say_hello():\n    print(\"Hello, World!\")\n    print(\"Welcome to Python.\")","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Which keyword is used to create a function?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What must immediately follow the function''s name when you define it?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'How does Python know which lines of code belong inside the function?', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Define it', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"# Define a function named ''greet''\n____ greet():\n    print(\"Good morning!\")","expectedOutput":"","hints":["Use the def keyword."],"solutionCode":"def greet():\n    print(\"Good morning!\")"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Write the signature', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"# Define a function named ''show_menu''\n\n    print(\"1. Start\")\n    print(\"2. Load\")\n    print(\"3. Exit\")","expectedOutput":"","hints":["def show_menu():"],"solutionCode":"def show_menu():\n    print(\"1. Start\")\n    print(\"2. Load\")\n    print(\"3. Exit\")"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'If you run the code `def say_hello(): print("Hi")`, nothing prints to the screen. Why?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Defining a function is like writing down a recipe. The cake isn''t baked until you actually follow the recipe! Let''s learn how to ''Call'' a function next."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Calling Functions' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Baking the Cake', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["You wrote the recipe (`def`). Now it''s time to actually bake the cake.","In programming, executing a function is known as ''Calling'' the function."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Calling Syntax', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["To call a function, you just type its name followed by parentheses `()`.","You MUST put the parentheses, or Python won''t execute it.","Make sure you are NOT indented when you call it, so Python knows it is outside the definition!"],"codeBlocks":[{"code":"def shout():\n    print(\"HEY!\")\n\n# Call the function twice\nshout()\nshout()","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What is the term for asking Python to execute a function?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'To call a function named `jump`, what exactly do you type?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this code output?
def meow():
    print("Meow")
meow()', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Call it', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"def alarm():\n    print(\"BEEP BEEP BEEP\")\n\n# Call the alarm function below\n____","expectedOutput":"BEEP BEEP BEEP","hints":["Write alarm()"],"solutionCode":"def alarm():\n    print(\"BEEP BEEP BEEP\")\n\nalarm()"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Call it multiple times', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"def applause():\n    print(\"Clap!\")\n\n# Call the applause function 3 times\n\n\n\n","expectedOutput":"Clap!\nClap!\nClap!","hints":["Write applause() three times on separate lines."],"solutionCode":"def applause():\n    print(\"Clap!\")\n\napplause()\napplause()\napplause()"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Why do we need the empty parentheses `()` when calling a function?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["You can define a function once, and call it 10,000 times! But right now, our functions do the exact same thing every time. Let''s make them dynamic."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Passing Parameters' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Dynamic Functions', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["A function that always prints ''Hello'' is boring.","What if we want a function that can say Hello to ''Alice'', and then Hello to ''Bob''?","We need to pass data INTO the function."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Parameters', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["When defining a function, we can put a variable name inside the parentheses. This is called a ''Parameter''.","When we call the function, we put actual data in the parentheses. This is called an ''Argument''.","The function receives the data and can use it!"],"codeBlocks":[{"code":"def greet(name):   # ''name'' is the parameter\n    print(\"Hello\", name)\n\ngreet(\"Alice\")     # \"Alice\" is the argument\ngreet(\"Bob\")","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What is a parameter?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'In `greet("Alice")`, what is the word `"Alice"`?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this output?
def square(num):
    print(num * num)
square(3)', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Pass an argument', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"def double_it(number):\n    print(number * 2)\n\n# Call the function and pass in the number 10\ndouble_it(____)","expectedOutput":"20","hints":["Put 10 inside the parentheses"],"solutionCode":"def double_it(number):\n    print(number * 2)\n\ndouble_it(10)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Create a parameter', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"# Define a function ''shout'' that takes a parameter called ''word''\ndef shout(____):\n    # Print the word in uppercase. Let''s just print it twice for effect!\n    print(word, word)\n\nshout(\"HEY\")","expectedOutput":"HEY HEY","hints":["def shout(word):"],"solutionCode":"def shout(word):\n    print(word, word)\n\nshout(\"HEY\")"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What happens if a function expects a parameter, but you call it without one (e.g. `greet()`)?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Parameters make functions powerful because they allow the same block of code to work with different data!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Multiple Parameters' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'More Data', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["Sometimes one parameter isn''t enough.","What if we want a function to add two numbers together? Or print a first name AND a last name?"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Comma Separated', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["You can have as many parameters as you want! Just separate them with a comma `,`.","When you call the function, you must pass the exact same number of arguments, separated by commas, IN THE CORRECT ORDER."],"codeBlocks":[{"code":"def add(num1, num2):\n    print(num1 + num2)\n\nadd(5, 10) # Outputs 15","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'How do you separate multiple parameters in a function definition?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'If a function is defined as `def user(name, age):`, what is the correct way to call it?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this output?
def sub(a, b):
    print(a - b)
sub(10, 2)', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Two Arguments', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"def multiply(x, y):\n    print(x * y)\n\n# Call the function passing 4 and 5\nmultiply(____, ____)","expectedOutput":"20","hints":["multiply(4, 5)"],"solutionCode":"def multiply(x, y):\n    print(x * y)\n\nmultiply(4, 5)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Full Name', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"def full_name(first, last):\n    print(first + \" \" + last)\n\n# Call the function with \"Bruce\" and \"Wayne\"\n\n","expectedOutput":"Bruce Wayne","hints":["full_name(\"Bruce\", \"Wayne\")"],"solutionCode":"def full_name(first, last):\n    print(first + \" \" + last)\n\nfull_name(\"Bruce\", \"Wayne\")"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Why does the order of arguments matter?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["By default, arguments are ''Positional''. The position they are placed in dictates which parameter they fill!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Default Parameters' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Optional Data', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["Usually, if a function asks for a parameter, you MUST provide it.","But what if we want to provide a fallback value so the user doesn''t HAVE to type it?"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Setting a Default', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["In the function definition, you can use `=` to assign a default value to a parameter.","If the caller provides an argument, it overrides the default.","If the caller leaves the parentheses empty, Python uses the default!"],"codeBlocks":[{"code":"def greet(name=\"Guest\"):\n    print(\"Hello\", name)\n\ngreet(\"Alice\") # Outputs Hello Alice\ngreet()        # Outputs Hello Guest","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What does a default parameter do?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'If `def move(speed=10):`, what happens if you call `move(50)`?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this output?
def power(state="OFF"):
    print(state)
power()', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Set the default', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"# Set the default value of color to \"Red\"\ndef paint(color=____):\n    print(\"Painting it\", color)\n\npaint()","expectedOutput":"Painting it Red","hints":["Use \"Red\""],"solutionCode":"def paint(color=\"Red\"):\n    print(\"Painting it\", color)\n\npaint()"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Override the default', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"def volume(level=5):\n    print(\"Volume is\", level)\n\n# Call volume() WITH NO ARGUMENTS so it uses the default\n\n\n# Call volume() WITH THE ARGUMENT 11 so it overrides it\n\n","expectedOutput":"Volume is 5\nVolume is 11","hints":["volume()","volume(11)"],"solutionCode":"def volume(level=5):\n    print(\"Volume is\", level)\n\nvolume()\nvolume(11)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'If a function has multiple parameters, where must the default parameters go?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Default parameters are a great way to make functions easier to use while keeping them flexible."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Returning Values' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Printing vs Returning', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["So far, our functions just `print()` data to the screen.","But what if we want our function to calculate a math problem, and hand the answer BACK to the rest of the program so we can use it?","Printing just puts pixels on a screen. We need to Return data."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'The return Keyword', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["The `return` keyword shoots data OUT of the function, back to wherever the function was called.","Once a `return` statement runs, the function stops immediately.","You can catch the returned data by assigning the function call to a variable!"],"codeBlocks":[{"code":"def get_pi():\n    return 3.14\n\n# We ''catch'' the returned value in a variable\nmy_num = get_pi()\nprint(my_num + 1) # 4.14","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What is the difference between `print()` and `return`?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What happens to a function immediately after it executes a `return` statement?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this output?
def five():
    return 5

x = five()
print(x * 2)', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Return the math', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"def add(a, b):\n    # Return the result, DO NOT print it!\n    ____ a + b\n\nresult = add(10, 5)\nprint(result)","expectedOutput":"15","hints":["Use the return keyword"],"solutionCode":"def add(a, b):\n    return a + b\n\nresult = add(10, 5)\nprint(result)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Catch the return', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"def get_status():\n    return \"Online\"\n\n# Create a variable ''status'' and assign it to the result of get_status()\n\n\nprint(\"User is\", status)","expectedOutput":"User is Online","hints":["status = get_status()"],"solutionCode":"def get_status():\n    return \"Online\"\n\nstatus = get_status()\nprint(\"User is\", status)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'If a function does NOT have a `return` statement, what does it secretly return by default in Python?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Almost all professional functions `return` data instead of printing it. This makes them reusable in calculations, logic, and interfaces!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Local Variables' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'The Vegas Rule', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["There is a famous saying: ''What happens in Vegas, stays in Vegas.''","In Python, the rule is: ''Variables created inside a function, stay inside the function.''"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Local Scope', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["If you create a variable inside a `def` block, it is called a ''Local Variable''.","It ONLY exists while the function is running. As soon as the function ends, the variable is completely destroyed.","The rest of the program cannot see it!"],"codeBlocks":[{"code":"def spy():\n    secret = \"Top Secret!\" # Local variable\n\nspy()\nprint(secret) # ERROR! Python has no idea what ''secret'' is.","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What happens to a variable that is created inside a function?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Can code OUTSIDE of a function read a local variable INSIDE the function?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this output?
def test():
    x = 10
test()
print(x)', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'The Right Way', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"def calculate():\n    math_result = 5 + 5\n    # If we want the outside world to see math_result, we MUST return it!\n    ____ math_result\n\nprint(calculate())","expectedOutput":"10","hints":["Use return"],"solutionCode":"def calculate():\n    math_result = 5 + 5\n    return math_result\n\nprint(calculate())"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 7, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Local variables are actually a good thing! They prevent variables in different functions from accidentally overwriting each other."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Variable Scope' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'The Outside World', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["We know the outside world can''t see INSIDE a function.","But can a function look OUTSIDE?"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Global Variables', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["Variables created OUTSIDE of all functions are called ''Global Variables''.","Functions CAN look outside and read Global variables!","However, they usually cannot CHANGE them easily (without special keywords)."],"codeBlocks":[{"code":"gravity = 9.8  # Global\n\ndef drop():\n    print(\"Falling at\", gravity) # It can see the global variable!\n\ndrop()","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What is a Global Variable?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Can a function READ a global variable?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this output?
name = "Bob"
def say_hi():
    print("Hi", name)
say_hi()', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Read Global', 6, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"version = \"1.0.5\"\n\ndef show_version():\n    # Print the global ''version'' variable\n    \n\nshow_version()","expectedOutput":"1.0.5","hints":["print(version)"],"solutionCode":"version = \"1.0.5\"\n\ndef show_version():\n    print(version)\n\nshow_version()"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 7, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Best practice: Try to pass data into functions via parameters rather than relying too heavily on global variables. It keeps your code cleaner!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Keyword Arguments' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Remembering the Order', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["If a function has 5 parameters: `create_user(name, age, email, password, admin)`, calling it gets very confusing.","Was email third? Or password? `create_user(\"Bob\", 20, \"123\", \"@gmail\", False)`... Oops, I mixed them up!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Calling by Name', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["To solve this, Python lets you explicitly state the NAME of the parameter when calling the function.","These are called Keyword Arguments. If you use the names, the order no longer matters!"],"codeBlocks":[{"code":"def build(width, height):\n    print(\"W:\", width, \"H:\", height)\n\n# Using keyword arguments\nbuild(height=10, width=5)","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Why are Keyword Arguments useful?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'If `def profile(age, name):`, how do you pass keyword arguments?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Use Keywords', 5, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"def order(food, drink):\n    print(food, \"and\", drink)\n\n# Call order() using keyword arguments. Pass drink=\"Cola\" and food=\"Burger\"\n\n","expectedOutput":"Burger and Cola","hints":["order(drink=\"Cola\", food=\"Burger\")"],"solutionCode":"def order(food, drink):\n    print(food, \"and\", drink)\n\norder(drink=\"Cola\", food=\"Burger\")"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 6, 'recap', '{"variant":"recap","icon":"check","paragraphs":["When dealing with functions that have more than 2 or 3 parameters, keyword arguments are highly recommended for readability!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Combining Functions' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Building Blocks', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["Functions are like lego blocks.","You can use small functions to build bigger, more complex functions!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Nested Calls', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["A function is allowed to call another function inside of it.","This is how massive programs (like videogames) are built. A `play_game()` function might call `load_level()`, which calls `spawn_enemies()`."],"codeBlocks":[{"code":"def double(x):\n    return x * 2\n\ndef quadruple(x):\n    # Calls the double function twice!\n    return double(double(x))","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Can a function call another function?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Call inside a call', 4, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"def get_title():\n    return \"Captain\"\n\ndef get_name():\n    # Call get_title() to combine the string\n    return ____() + \" Kirk\"\n\nprint(get_name())","expectedOutput":"Captain Kirk","hints":["get_title"],"solutionCode":"def get_title():\n    return \"Captain\"\n\ndef get_name():\n    return get_title() + \" Kirk\"\n\nprint(get_name())"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 5, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Break big problems down into small functions, then combine them. This is the secret to software engineering."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Refactoring Repetitive Code' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'The Janitor', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["Programmers spend a lot of time ''Refactoring'' (cleaning up) old code.","If you see the same logic repeated twice, it''s time to refactor it into a single function!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'The Messy Code', 2, 'explanation', '{"variant":"independent","language":"python","initialCode":"# Look at this repetitive code.\nscore1 = 50\nprint(\"---SCORE---\")\nprint(score1)\nprint(\"-----------\")\n\nscore2 = 80\nprint(\"---SCORE---\")\nprint(score2)\nprint(\"-----------\")\n\n# We will fix this in the next step!","expectedOutput":"---SCORE---\n50\n-----------\n---SCORE---\n80\n-----------","hints":["Just hit run to see the mess."],"solutionCode":"score1 = 50\nprint(\"---SCORE---\")\nprint(score1)\nprint(\"-----------\")\n\nscore2 = 80\nprint(\"---SCORE---\")\nprint(score2)\nprint(\"-----------\")"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Refactor it', 3, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"def print_score(score):\n    # Write the 3 print statements here to format the score\n    \n    \n    \n\n# Now we just call the function!\nprint_score(50)\nprint_score(80)","expectedOutput":"---SCORE---\n50\n-----------\n---SCORE---\n80\n-----------","hints":["print(\"---SCORE---\")","print(score)","print(\"-----------\")"],"solutionCode":"def print_score(score):\n    print(\"---SCORE---\")\n    print(score)\n    print(\"-----------\")\n\nprint_score(50)\nprint_score(80)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 4, 'recap', '{"variant":"recap","icon":"check","paragraphs":["We turned 8 lines of messy code into 3 lines of beautiful, reusable logic. This is the power of functions!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Mini Project: Personal Utility Toolkit' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Your Toolbox', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["For this project, you will build a mini-library of utility functions.","These are small, single-purpose functions that `return` values, which you can use to build a larger program."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'The Area Tool', 2, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"# Create a function that calculates the area of a rectangle\n# It takes two parameters: width and height\ndef get_area(____, ____):\n    return width * height\n\nprint(get_area(10, 5))","expectedOutput":"50","hints":["width, height"],"solutionCode":"def get_area(width, height):\n    return width * height\n\nprint(get_area(10, 5))"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'The Even Checker', 3, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"# Create a function named is_even that takes a parameter ''num''\n# It should return True if num % 2 == 0, and False otherwise.\n\n\n\n\n\n\nprint(is_even(10))","expectedOutput":"True","hints":["def is_even(num):","    if num % 2 == 0:","        return True","    else:","        return False"],"solutionCode":"def is_even(num):\n    if num % 2 == 0:\n        return True\n    else:\n        return False\n\nprint(is_even(10))"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'The Max Tool', 4, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"# Create a function named get_max that takes ''a'' and ''b''\n# It should return whichever number is larger.\n\n\n\n\n\n\nprint(get_max(5, 20))","expectedOutput":"20","hints":["def get_max(a, b):","    if a > b:","        return a","    else:","        return b"],"solutionCode":"def get_max(a, b):\n    if a > b:\n        return a\n    else:\n        return b\n\nprint(get_max(5, 20))"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Unit 6 Complete!', 5, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Incredible! You have officially graduated from writing ''scripts'' to writing structured ''software''.","Next up in Unit 7: Lists and Tuples (Storing multiple pieces of data in a single variable)!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

END $$;
SELECT setval('challenges_id_seq', (SELECT MAX(id) FROM challenges));
COMMIT;