-- 30_options_unit06.sql
BEGIN;
DO $$
DECLARE
    v_challenge_id INTEGER;
BEGIN
    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What is a major problem with copy-pasting the same block of code multiple times?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Why Functions Exist' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'If you need to change or fix the code, you have to find every single copy you made.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It runs too fast.', false);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Python will delete it.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What does the programming rule DRY stand for?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Why Functions Exist' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Don''t Repeat Yourself', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Do Repeat Yourself', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Instead of copying code, we bundle it into a named block called a...' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Why Functions Exist' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Function', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'String', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Why did the creators of Python give us functions like `print()` and `input()`?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Why Functions Exist' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'So we don''t have to write thousands of lines of complex code just to output text to the screen.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Because it looks cool.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Which keyword is used to create a function?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Your First Function' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'def', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'create', false);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'func', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What must immediately follow the function''s name when you define it?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Your First Function' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Parentheses and a colon ():', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'A semicolon ;', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'How does Python know which lines of code belong inside the function?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Your First Function' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'The lines are indented underneath the def statement.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It guesses.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'If you run the code `def say_hello(): print("Hi")`, nothing prints to the screen. Why?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Your First Function' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Because defining a function only TEACHES Python how to do it. You still have to ask Python to actually run it!', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Because print statements don''t work inside functions.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What is the term for asking Python to execute a function?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Calling Functions' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Calling the function', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Deleting the function', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'To call a function named `jump`, what exactly do you type?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Calling Functions' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'jump()', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'def jump():', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this code output?
def meow():
    print("Meow")
meow()' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Calling Functions' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Meow', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Nothing', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Why do we need the empty parentheses `()` when calling a function?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Calling Functions' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Because in Python, parentheses mean ''EXECUTE THIS ACTION NOW''. Without them, Python just looks at the name but does nothing.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Because it looks like a smiley face.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What is a parameter?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Passing Parameters' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'A variable placed inside the parentheses of a function definition to receive incoming data.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'A rule that stops the function.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'In `greet("Alice")`, what is the word `"Alice"`?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Passing Parameters' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'An argument (the actual data being passed in).', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'A parameter.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this output?
def square(num):
    print(num * num)
square(3)' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Passing Parameters' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '9', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '3', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What happens if a function expects a parameter, but you call it without one (e.g. `greet()`)?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Passing Parameters' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Python throws a TypeError, saying it is missing a required argument.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It runs normally with a blank value.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'How do you separate multiple parameters in a function definition?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Multiple Parameters' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'With a comma (,)', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'With a space', false);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'With a plus sign (+)', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'If a function is defined as `def user(name, age):`, what is the correct way to call it?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Multiple Parameters' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'user("Alice", 25)', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'user(25, "Alice")', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this output?
def sub(a, b):
    print(a - b)
sub(10, 2)' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Multiple Parameters' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '8', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '-8', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Why does the order of arguments matter?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Multiple Parameters' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Because Python matches the first argument to the first parameter, the second to the second, etc.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It doesn''t matter, Python knows what you mean.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What does a default parameter do?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Default Parameters' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It provides a fallback value if the caller doesn''t provide an argument.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It makes the function run twice.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'If `def move(speed=10):`, what happens if you call `move(50)`?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Default Parameters' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Speed becomes 50 (the argument overrides the default).', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Speed stays 10.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this output?
def power(state="OFF"):
    print(state)
power()' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Default Parameters' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'OFF', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'ON', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'If a function has multiple parameters, where must the default parameters go?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Default Parameters' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'They must go at the END of the parameter list (e.g., `def fn(a, b=5):`).', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'They must go at the BEGINNING.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What is the difference between `print()` and `return`?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Returning Values' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '`print` just displays text to a human. `return` hands data back to the program so it can be used in variables.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'They are exactly the same.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What happens to a function immediately after it executes a `return` statement?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Returning Values' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'The function stops entirely.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It runs one more time.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this output?
def five():
    return 5

x = five()
print(x * 2)' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Returning Values' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '10', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '5', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'If a function does NOT have a `return` statement, what does it secretly return by default in Python?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Returning Values' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'None (a special Python value meaning ''nothing'').', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '0', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What happens to a variable that is created inside a function?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Local Variables' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It is destroyed as soon as the function finishes running.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It lives forever.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Can code OUTSIDE of a function read a local variable INSIDE the function?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Local Variables' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'No, it is hidden from the outside.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Yes', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this output?
def test():
    x = 10
test()
print(x)' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Local Variables' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Error: name ''x'' is not defined', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '10', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What is a Global Variable?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Variable Scope' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'A variable created outside of any function, visible to everything.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'A variable created inside a function.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Can a function READ a global variable?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Variable Scope' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Yes', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'No', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this output?
name = "Bob"
def say_hi():
    print("Hi", name)
say_hi()' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Variable Scope' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Hi Bob', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Error', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Why are Keyword Arguments useful?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Keyword Arguments' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'They clearly show what data is being passed, and allow you to pass them in any order.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'They make the function run faster.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'If `def profile(age, name):`, how do you pass keyword arguments?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Keyword Arguments' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'profile(name="Alice", age=30)', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'profile("Alice"=name, 30=age)', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Can a function call another function?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Combining Functions' AND unit_id = (SELECT id FROM units WHERE title = 'Functions & Code Reusability' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Yes, this is how large programs are structured.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'No, that causes an error.', false);

END $$;
SELECT setval('challenge_options_id_seq', (SELECT MAX(id) FROM challenge_options));
COMMIT;