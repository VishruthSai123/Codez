-- 24_challenges_unit05.sql
BEGIN;
DO $$
DECLARE
    v_lesson_id INTEGER;
    v_challenge_id INTEGER;
BEGIN
    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Why Repetition Matters' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'The Pain of Repetition', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["Imagine you want to print the word ''Hello'' 5 times.","You could just write `print(\"Hello\")` five times in a row. Not too bad.","But what if you want to print it 10,000 times? Or count down from 1,000? Writing that by hand would take hours."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Computers are Fast', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["The greatest strength of a computer is its ability to repeat a task incredibly fast, without ever getting bored or making a typo.","In programming, we use a concept called a ''Loop'' to tell the computer to repeat a block of code."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What is the main purpose of a ''loop'' in programming?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Instead of writing `print("Hello")` 100 times manually, we can write it ONCE inside a...', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'The bad way', 5, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"# This is how you print 3 times without a loop\nprint(\"Codez\")\nprint(\"Codez\")\nprint(____)","expectedOutput":"Codez\nCodez\nCodez","hints":["Write \"Codez\""],"solutionCode":"print(\"Codez\")\nprint(\"Codez\")\nprint(\"Codez\")"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'The slow countdown', 6, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"# Write a countdown from 3 to 1 manually\n\n\n\nprint(\"Go!\")","expectedOutput":"3\n2\n1\nGo!","hints":["print(3)","print(2)","print(1)"],"solutionCode":"print(3)\nprint(2)\nprint(1)\nprint(\"Go!\")"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'If you had to count down from 1,000,000 using the manual `print()` method, how many lines of code would you have to write?', 7, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 8, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Manual repetition is terrible! In the next lesson, we will see how loops solve this problem permanently."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'What Is a Loop?' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'The Circle of Code', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["Normally, Python reads code from top to bottom, one line at a time.","A loop tells Python: ''When you reach the bottom of this block, jump back to the top and do it again!''"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'When does it stop?', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["If a loop just repeats forever, your computer will freeze.","Therefore, loops rely on Booleans (True/False) to know when to stop.","They ask a question before every lap. If the answer is True, they do another lap. If False, they stop."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What happens when Python reaches the bottom of a loop?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What data type do loops use to decide whether to keep going or stop?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'If a loop''s condition is ALWAYS True, what will happen?', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Logic Recap', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"lives = 3\n# A loop might ask: ''Is lives > 0?''. Answer it!\nprint(lives ____ 0)","expectedOutput":"True","hints":["Use the > operator"],"solutionCode":"lives = 3\nprint(lives > 0)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 7, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Now you understand the theory: Loops repeat code, and they use True/False conditions to know when to stop. Let''s write one!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Your First while Loop' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'While it is True...', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["The most basic type of loop is the `while` loop.","It looks and acts exactly like an `if` statement, but instead of running the code once, it runs it over and over as long as the condition remains True."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'while Syntax', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["To write a `while` loop, use the word `while`, followed by a condition, and a colon `:`. Then indent the code underneath.","Inside the loop, you MUST do something that eventually makes the condition False, or it will run forever!"],"codeBlocks":[{"code":"laps = 1\nwhile laps <= 3:\n    print(\"Running lap\", laps)\n    laps = laps + 1  # Crucial! This changes the variable.","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'How is a `while` loop similar to an `if` statement?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'How is a `while` loop DIFFERENT from an `if` statement?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this output?
x = 1
while x < 3:
    print(x)
    x = x + 1', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Write a while loop', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"count = 1\n# Run the loop while count is less than or equal to 3\n____ count <= 3:\n    print(count)\n    count = count + 1","expectedOutput":"1\n2\n3","hints":["Use the keyword ''while''."],"solutionCode":"count = 1\nwhile count <= 3:\n    print(count)\n    count = count + 1"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'The Countdown', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"timer = 3\n# Write a while loop that runs while timer is greater than 0\n\n    # Inside the loop: print the timer\n    \n    # Inside the loop: subtract 1 from timer\n    \n\nprint(\"Blastoff!\")","expectedOutput":"3\n2\n1\nBlastoff!","hints":["while timer > 0:","    print(timer)","    timer = timer - 1"],"solutionCode":"timer = 3\nwhile timer > 0:\n    print(timer)\n    timer = timer - 1\nprint(\"Blastoff!\")"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'In the countdown code, what happens if we forget to write `timer = timer - 1`?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["You just wrote your first loop! By modifying the variable inside the loop, we make sure it eventually stops."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Avoiding Infinite Loops' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'The Computer Trap', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["An infinite loop is every programmer''s worst nightmare.","If a loop''s condition never becomes False, the computer will execute the block of code billions of times per second until the program crashes."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'How to break a computer', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["Infinite loops usually happen because we forget to update the variable that controls the loop.","If `x = 5`, and we say `while x < 10:`, but we never change `x`, it will be less than 10 forever!"],"codeBlocks":[{"code":"x = 5\nwhile x < 10:\n    print(\"Hello\")\n    # MISSING: x = x + 1 (This loop will run forever!)","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What causes an infinite loop?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'To prevent a while loop from running forever, you must...', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Fix the loop', 5, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"lives = 3\nwhile lives > 0:\n    print(\"Player died.\")\n    # Fix this infinite loop by subtracting 1 from lives!\n    ____ = ____ ____ 1","expectedOutput":"Player died.\nPlayer died.\nPlayer died.","hints":["lives = lives - 1"],"solutionCode":"lives = 3\nwhile lives > 0:\n    print(\"Player died.\")\n    lives = lives - 1"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Independent Fix', 6, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"score = 0\nwhile score < 30:\n    print(\"Score:\", score)\n    # The player gains 10 points per loop. Update the score!\n    \n","expectedOutput":"Score: 0\nScore: 10\nScore: 20","hints":["score = score + 10"],"solutionCode":"score = 0\nwhile score < 30:\n    print(\"Score:\", score)\n    score = score + 10"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 7, 'recap', '{"variant":"recap","icon":"check","paragraphs":["If your program ever completely freezes and becomes unresponsive, you probably created an infinite loop!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Your First for Loop' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'A Safer Loop', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["Because `while` loops can easily turn into infinite loops if we forget to update a variable, programmers invented a safer loop.","The `for` loop."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Looping over text', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["A `for` loop is designed to iterate (travel) through a collection of items one by one.","It automatically knows when to stop! No infinite loops.","For example, you can use a `for` loop to look at every single letter in a String."],"codeBlocks":[{"code":"word = \"CAT\"\nfor letter in word:\n    print(letter)","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What is a major advantage of a `for` loop over a `while` loop?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'In the code `for letter in word:`, what does `letter` represent?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this output?
for x in "HI":
    print(x)', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Write a for loop', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"name = \"Bob\"\n# Loop through the name and print each character\n____ char ____ name:\n    print(char)","expectedOutput":"B\no\nb","hints":["Use ''for'' and ''in''"],"solutionCode":"name = \"Bob\"\nfor char in name:\n    print(char)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Independent For', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"animal = \"Dog\"\n# Write a for loop that iterates through ''animal''\n# Use the temporary variable name ''letter''\n# Inside the loop, print the letter\n\n","expectedOutput":"D\no\ng","hints":["for letter in animal:","    print(letter)"],"solutionCode":"animal = \"Dog\"\nfor letter in animal:\n    print(letter)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Do you have to name the temporary variable `letter`?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["For loops are amazing for looking at data piece by piece. But what if we just want to repeat code 10 times? Let''s find out."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Understanding range()' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Repeating N times', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["We know how to use `while` loops for conditions, and `for` loops to travel through text.","But what if we just want a simple way to say: ''Do this exactly 5 times''?"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'The range() Function', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["We combine a `for` loop with the built-in `range()` function.","`range(5)` generates a sequence of 5 numbers (0, 1, 2, 3, 4).","This makes the `for` loop run exactly 5 times!"],"codeBlocks":[{"code":"for x in range(3):\n    print(\"Hello\")","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What does `range(10)` do?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'How many times will `for x in range(7):` run?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this output?
for x in range(2):
    print("Hi")', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Use range', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"# Loop 4 times\nfor x in ____(4):\n    print(\"Beep\")","expectedOutput":"Beep\nBeep\nBeep\nBeep","hints":["Use the range function."],"solutionCode":"for x in range(4):\n    print(\"Beep\")"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Write the loop', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"# Write a for loop using range() that prints \"Codez\" 3 times\n\n\n","expectedOutput":"Codez\nCodez\nCodez","hints":["for x in range(3):","    print(\"Codez\")"],"solutionCode":"for x in range(3):\n    print(\"Codez\")"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Why does Python start counting at 0 instead of 1?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["`for x in range(5):` is the standard Python way to repeat something 5 times. You will use this constantly."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Loop Variables' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Tracking the Laps', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["We''ve been using temporary variables like `x` in our loops, but we haven''t actually printed them out.","Let''s look at what `x` actually holds during each lap of a `range()` loop."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'The letter ''i''', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["Programmers almost universally use the letter `i` (for ''index'' or ''iteration'') as the variable name in a `range()` loop.","Because Python starts counting at 0, `range(3)` assigns `i` the values 0, then 1, then 2."],"codeBlocks":[{"code":"for i in range(3):\n    print(\"Loop number:\", i)","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What does the `i` stand for in a for loop?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'In `for i in range(3):`, what is the very first value of `i`?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this output?
for i in range(2):
    print(i)', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Use i', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"# Loop 4 times and print the value of i\nfor ____ in range(4):\n    print(____)","expectedOutput":"0\n1\n2\n3","hints":["Use ''i''"],"solutionCode":"for i in range(4):\n    print(i)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Independent Counting', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"# Write a for loop with ''i'' that loops 3 times\n# Print: i\n\n\n","expectedOutput":"0\n1\n2","hints":["for i in range(3):","    print(i)"],"solutionCode":"for i in range(3):\n    print(i)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'If `range(5)` gives us 0, 1, 2, 3, 4... how do we make it print 1, 2, 3, 4, 5?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Now you understand why computers start counting at zero! `range(N)` always stops BEFORE it hits `N`."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'break Statement' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'The Emergency Exit', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["Sometimes you want a loop to stop EARLY, before it naturally finishes.","For example, you are looping through 1,000 files to find a password. Once you find it, there is no need to check the remaining 999 files."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Smashing the glass', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["The `break` keyword immediately destroys the loop.","Python completely jumps out of the loop block and continues with the rest of the program."],"codeBlocks":[{"code":"for i in range(10):\n    print(i)\n    if i == 2:\n        break  # The loop stops here!","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What does the `break` statement do?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'To exit a loop early, you usually place a `break` statement inside an...', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this output?
for i in range(5):
    break
    print(i)', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Stop at 2', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"for i in range(5):\n    print(i)\n    if i == 2:\n        # Break the loop!\n        ____","expectedOutput":"0\n1\n2","hints":["Type break"],"solutionCode":"for i in range(5):\n    print(i)\n    if i == 2:\n        break"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Independent Break', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"word = \"Apple\"\nfor char in word:\n    print(char)\n    # If the character is ''p'', break out of the loop!\n\n\n","expectedOutput":"A\np","hints":["if char == \"p\":","    break"],"solutionCode":"word = \"Apple\"\nfor char in word:\n    print(char)\n    if char == \"p\":\n        break"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'If a loop has 1,000,000 iterations, and you `break` on iteration 5, does Python still process the remaining 999,995 iterations in the background?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["`break` is the ultimate performance tool for searching. Once you find what you need, break!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'continue Statement' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Skip, Don''t Stop', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["We know `break` destroys the loop completely.","But what if you just want to skip the CURRENT lap, and go straight to the next lap?","For example, you are printing all numbers from 1 to 10, but you want to skip the number 3."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'The continue Keyword', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["The `continue` keyword instantly stops the current lap and jumps back to the top of the loop to start the next one.","Any code directly below `continue` will be skipped for that specific lap."],"codeBlocks":[{"code":"for i in range(4):\n    if i == 2:\n        continue  # Skips printing 2!\n    print(i)","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What is the difference between `break` and `continue`?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'If you want to bypass a specific item but keep the loop running, use...', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this output?
for i in range(3):
    if i == 1:
        continue
    print(i)', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Skip number 3', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"for i in range(5):\n    if i == 3:\n        # Skip printing 3!\n        ____\n    print(i)","expectedOutput":"0\n1\n2\n4","hints":["Type continue"],"solutionCode":"for i in range(5):\n    if i == 3:\n        continue\n    print(i)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Independent Continue', 7, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"word = \"Codez\"\nfor char in word:\n    # If char is ''e'', continue!\n    \n    \n    print(char)","expectedOutput":"C\no\nd\nz","hints":["if char == \"e\":","    continue"],"solutionCode":"word = \"Codez\"\nfor char in word:\n    if char == \"e\":\n        continue\n    print(char)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'Where should the `continue` statement be placed?', 8, 'knowledge_check', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 9, 'recap', '{"variant":"recap","icon":"check","paragraphs":["`continue` is perfect for filtering data (e.g., looping through a list of users, but skipping the banned ones)."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Combining Loops with if Statements' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Smart Loops', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["We have learned loops. We have learned if statements.","Now it''s time to combine them to create ''Smart Loops''."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'When you put an `if` statement inside a loop, how many times does the `if` statement get checked?', 2, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'If a `for` loop runs 10 times, and it contains an `if` statement, how many times is the condition evaluated?', 3, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this output?
for i in range(4):
    if i % 2 == 0:
        print("Even")
    else:
        print("Odd")', 4, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Only print big numbers', 5, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"for i in range(6):\n    # Only print i if it is greater than 3\n    if ____ > 3:\n        print(i)","expectedOutput":"4\n5","hints":["if i > 3:"],"solutionCode":"for i in range(6):\n    if i > 3:\n        print(i)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Find the Evens', 6, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"# Loop from 0 to 5 (using range(6))\nfor i in range(6):\n    # Write an if statement using modulus (%) to check if i is even\n    # Reminder: Even numbers have a remainder of 0 when divided by 2\n    \n        # print i\n","expectedOutput":"0\n2\n4","hints":["if i % 2 == 0:","    print(i)"],"solutionCode":"for i in range(6):\n    if i % 2 == 0:\n        print(i)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 7, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Loops combined with if statements is how almost all data processing works in the real world!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Nested Loops (Beginner Introduction)' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Loopception', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["Just like you can nest `if` statements, you can nest loops!","Putting a loop inside a loop allows you to build grids, maps, and matrices."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'The Clock Analogy', 2, 'explanation', '{"variant":"explanation","icon":"lightbulb","paragraphs":["Think of a nested loop like a clock.","The minute hand (inner loop) must spin all the way around 60 times before the hour hand (outer loop) moves exactly 1 time.","The inner loop runs completely for EVERY lap of the outer loop."],"codeBlocks":[{"code":"for out in range(2):\n    for ins in range(3):\n        print(out, ins)","language":"python"}]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'How does a nested loop execute?', 3, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'If an outer loop runs 3 times, and its inner loop runs 4 times, how many total times does the inner code run?', 4, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What will this print?
for x in range(2):
    for y in range(2):
        print("*")', 5, 'predict_output', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Build a grid', 6, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"for row in range(2):\n    # Nest a loop for columns\n    ____ col in range(2):\n        print(row, col)","expectedOutput":"0 0\n0 1\n1 0\n1 1","hints":["for col in range(2):"],"solutionCode":"for row in range(2):\n    for col in range(2):\n        print(row, col)"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 7, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Nested loops can get complicated very quickly, but they are essential for things like processing images (rows and columns of pixels)!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Common Loop Mistakes' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Avoiding Bugs', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["Loops are powerful, but they are easy to mess up.","Let''s look at the most common logic and syntax errors beginners make with loops."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What is an ''Off-By-One'' error?', 2, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'If you want a `range()` loop to print exactly 1 through 5, what should you type?', 3, 'fill_blank', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Fix the indentation', 4, 'guided_practice', '{"variant":"guided","language":"python","initialCode":"for i in range(3):\n    print(\"Looping\")\n# Fix the indentation so this prints ONLY ONCE at the very end\n    print(\"Done\")","expectedOutput":"Looping\nLooping\nLooping\nDone","hints":["Remove the indentation from print(\"Done\") so it sits flush left."],"solutionCode":"for i in range(3):\n    print(\"Looping\")\nprint(\"Done\")"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Fix the while loop', 5, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"lives = 3\n# Fix this infinite loop!\nwhile lives > 0:\n    print(\"Playing\")\n","expectedOutput":"Playing\nPlaying\nPlaying","hints":["Add lives = lives - 1 inside the loop."],"solutionCode":"lives = 3\nwhile lives > 0:\n    print(\"Playing\")\n    lives = lives - 1"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Lesson Summary', 6, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Indentation dictates what is INSIDE the loop and what runs AFTER the loop is finished."]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    SELECT id INTO v_lesson_id FROM lessons WHERE title = 'Mini Project: Number Guessing Game' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1) LIMIT 1;
    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'The Final Challenge', 1, 'motivation', '{"variant":"intro","icon":"flame","paragraphs":["It''s time to build a game!","The program will have a secret number. You will write a `while` loop that continuously asks the user for their guess.","If they get it right, you `break` the loop and they win!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'SELECT', 'What is the best way to write a loop that runs continuously until we explicitly tell it to stop?', 2, 'comprehension', NULL::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CODE', 'Build the Game', 3, 'independent_practice', '{"variant":"independent","language":"python","initialCode":"secret = 7\n# 1. Create a loop: while True:\n# 2. Ask for input and convert to integer: guess = int(input(\"Guess: \"))\n# 3. If guess == secret, print \"You Win!\" and break\n\n\n\n","expectedOutput":"Guess: \nYou Win!","hints":["while True:","    guess = int(input(\"Guess: \"))","    if guess == secret:","        print(\"You Win!\")","        break"],"solutionCode":"secret = 7\nwhile True:\n    guess = int(input(\"Guess: \"))\n    if guess == secret:\n        print(\"You Win!\")\n        break"}'::jsonb)
    RETURNING id INTO v_challenge_id;

    INSERT INTO challenges (lesson_id, type, question, "order", lesson_step, content_metadata)
    VALUES (v_lesson_id, 'CONCEPT', 'Unit 5 Complete!', 4, 'recap', '{"variant":"recap","icon":"check","paragraphs":["Amazing! You just built a fully interactive, endlessly repeatable game loop.","Next up in Unit 6: We will learn how to package our code into reusable blocks using Functions!"]}'::jsonb)
    RETURNING id INTO v_challenge_id;

END $$;
SELECT setval('challenges_id_seq', (SELECT MAX(id) FROM challenges));
COMMIT;