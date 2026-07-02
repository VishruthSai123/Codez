-- 25_options_unit05.sql
BEGIN;
DO $$
DECLARE
    v_challenge_id INTEGER;
BEGIN
    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What is the main purpose of a ''loop'' in programming?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Why Repetition Matters' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'To repeat a block of code automatically.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'To store text data.', false);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'To make the computer sleep.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Instead of writing `print("Hello")` 100 times manually, we can write it ONCE inside a...' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Why Repetition Matters' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Loop', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Variable', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'If you had to count down from 1,000,000 using the manual `print()` method, how many lines of code would you have to write?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Why Repetition Matters' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'One million lines.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'One line.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What happens when Python reaches the bottom of a loop?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'What Is a Loop?' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It jumps back to the top of the loop to see if it should run again.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It immediately deletes the code.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What data type do loops use to decide whether to keep going or stop?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'What Is a Loop?' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Booleans (True/False)', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Strings (Text)', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'If a loop''s condition is ALWAYS True, what will happen?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'What Is a Loop?' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'The loop will run forever (an infinite loop).', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'The loop will run once and stop.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'How is a `while` loop similar to an `if` statement?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Your First while Loop' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'They both check a True/False condition, use a colon, and require indented code.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'They only run the code exactly once.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'How is a `while` loop DIFFERENT from an `if` statement?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Your First while Loop' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'A while loop repeats the code as long as the condition is True.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'A while loop doesn''t check a condition.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this output?
x = 1
while x < 3:
    print(x)
    x = x + 1' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Your First while Loop' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '1
2', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '1', false);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '3', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'In the countdown code, what happens if we forget to write `timer = timer - 1`?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Your First while Loop' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'The timer stays at 3 forever. The condition (3 > 0) is always True. It creates an infinite loop!', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'The loop just stops immediately.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What causes an infinite loop?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Avoiding Infinite Loops' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'A loop condition that never becomes False.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Typing print() too many times.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'To prevent a while loop from running forever, you must...' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Avoiding Infinite Loops' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Update the variable inside the loop so the condition eventually becomes False.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Make sure the condition is True.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What is a major advantage of a `for` loop over a `while` loop?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Your First for Loop' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It automatically knows when to stop, so it rarely causes infinite loops.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It runs faster.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'In the code `for letter in word:`, what does `letter` represent?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Your First for Loop' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'A temporary variable that holds the current letter being looked at.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'The entire word.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this output?
for x in "HI":
    print(x)' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Your First for Loop' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'H
I', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'HI', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Do you have to name the temporary variable `letter`?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Your First for Loop' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'No, you can name it anything! `for x in word:` or `for apple in word:` works perfectly fine.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Yes, Python requires it to be named ''letter''.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What does `range(10)` do?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Understanding range()' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It creates a sequence of 10 numbers, making a loop run 10 times.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It generates a random number up to 10.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'How many times will `for x in range(7):` run?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Understanding range()' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '7 times', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '8 times', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this output?
for x in range(2):
    print("Hi")' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Understanding range()' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Hi
Hi', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Hi
Hi
Hi', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Why does Python start counting at 0 instead of 1?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Understanding range()' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Because computer memory is zero-indexed (the first slot in memory is slot 0).', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It was a typo by the creator of Python.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What does the `i` stand for in a for loop?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Loop Variables' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Index or Iteration', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Integer', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'In `for i in range(3):`, what is the very first value of `i`?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Loop Variables' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '0', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '1', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this output?
for i in range(2):
    print(i)' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Loop Variables' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '0
1', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '1
2', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'If `range(5)` gives us 0, 1, 2, 3, 4... how do we make it print 1, 2, 3, 4, 5?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Loop Variables' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'By printing `i + 1`', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It''s impossible.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What does the `break` statement do?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'break Statement' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It instantly stops and exits the loop.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'It pauses the computer.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'To exit a loop early, you usually place a `break` statement inside an...' AND lesson_id = (SELECT id FROM lessons WHERE title = 'break Statement' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'if statement', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'print statement', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this output?
for i in range(5):
    break
    print(i)' AND lesson_id = (SELECT id FROM lessons WHERE title = 'break Statement' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Nothing! It breaks before it ever prints.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '0', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'If a loop has 1,000,000 iterations, and you `break` on iteration 5, does Python still process the remaining 999,995 iterations in the background?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'break Statement' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'No. Python instantly drops the loop and moves on, saving a massive amount of time.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Yes, it finishes them invisibly.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What is the difference between `break` and `continue`?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'continue Statement' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '`break` exits the entire loop. `continue` skips the rest of the current lap and moves to the next.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'They do exactly the same thing.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'If you want to bypass a specific item but keep the loop running, use...' AND lesson_id = (SELECT id FROM lessons WHERE title = 'continue Statement' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'continue', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'break', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this output?
for i in range(3):
    if i == 1:
        continue
    print(i)' AND lesson_id = (SELECT id FROM lessons WHERE title = 'continue Statement' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '0
2', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '0', false);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '0
1
2', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'Where should the `continue` statement be placed?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'continue Statement' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'BEFORE the code you want to skip. Once `continue` runs, the rest of the block is ignored.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'At the very end of the loop.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'When you put an `if` statement inside a loop, how many times does the `if` statement get checked?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Combining Loops with if Statements' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Every single time the loop runs (every lap).', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Only once.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'If a `for` loop runs 10 times, and it contains an `if` statement, how many times is the condition evaluated?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Combining Loops with if Statements' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '10', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '1', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this output?
for i in range(4):
    if i % 2 == 0:
        print("Even")
    else:
        print("Odd")' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Combining Loops with if Statements' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Even
Odd
Even
Odd', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'Even
Even', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'How does a nested loop execute?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Nested Loops (Beginner Introduction)' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'The inner loop completes all of its laps for every single lap of the outer loop.', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'They run at the exact same time.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'If an outer loop runs 3 times, and its inner loop runs 4 times, how many total times does the inner code run?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Nested Loops (Beginner Introduction)' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '12 times (3 * 4)', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '7 times', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What will this print?
for x in range(2):
    for y in range(2):
        print("*")' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Nested Loops (Beginner Introduction)' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '*
*
*
*', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, '*
*', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What is an ''Off-By-One'' error?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Common Loop Mistakes' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'When your loop runs one time too many, or one time too few (often caused by forgetting that Python starts counting at 0).', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'When your loop runs perfectly.', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'If you want a `range()` loop to print exactly 1 through 5, what should you type?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Common Loop Mistakes' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'for i in range(5):
    print(i + 1)', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'for i in range(5):
    print(i)', false);

    SELECT id INTO v_challenge_id FROM challenges WHERE question = 'What is the best way to write a loop that runs continuously until we explicitly tell it to stop?' AND lesson_id = (SELECT id FROM lessons WHERE title = 'Mini Project: Number Guessing Game' AND unit_id = (SELECT id FROM units WHERE title = 'Loops & Repetition' AND course_id = 1)) LIMIT 1;
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'while True: (and then use break when we want to stop)', true);
    INSERT INTO challenge_options (challenge_id, text, correct)
    VALUES (v_challenge_id, 'for i in range(1):', false);

END $$;
SELECT setval('challenge_options_id_seq', (SELECT MAX(id) FROM challenge_options));
COMMIT;