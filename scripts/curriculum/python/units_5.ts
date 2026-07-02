import { Lesson } from "../types";

export const pythonUnit5Lessons: Lesson[] = [
  {
    id: 40, // Placeholder ID
    title: "Why Repetition Matters",
    unit_id: 5,
    order: 1,
    description: "The problem with writing the same code over and over.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "The Pain of Repetition",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "Imagine you want to print the word 'Hello' 5 times.",
            "You could just write `print(\"Hello\")` five times in a row. Not too bad.",
            "But what if you want to print it 10,000 times? Or count down from 1,000? Writing that by hand would take hours."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "Computers are Fast",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "The greatest strength of a computer is its ability to repeat a task incredibly fast, without ever getting bored or making a typo.",
            "In programming, we use a concept called a 'Loop' to tell the computer to repeat a block of code."
          ]
        }
      },
      {
        type: "SELECT",
        question: "What is the main purpose of a 'loop' in programming?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "To repeat a block of code automatically.", correct: true },
          { text: "To store text data.", correct: false },
          { text: "To make the computer sleep.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "Instead of writing `print(\"Hello\")` 100 times manually, we can write it ONCE inside a...",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "Loop", correct: true },
          { text: "Variable", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "The bad way",
        lesson_step: "guided_practice",
        order: 5,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "# This is how you print 3 times without a loop\nprint(\"Codez\")\nprint(\"Codez\")\nprint(____)",
          expectedOutput: "Codez\nCodez\nCodez",
          hints: ["Write \"Codez\""],
          solutionCode: "print(\"Codez\")\nprint(\"Codez\")\nprint(\"Codez\")"
        }
      },
      {
        type: "CODE",
        question: "The slow countdown",
        lesson_step: "independent_practice",
        order: 6,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "# Write a countdown from 3 to 1 manually\n\n\n\nprint(\"Go!\")",
          expectedOutput: "3\n2\n1\nGo!",
          hints: ["print(3)", "print(2)", "print(1)"],
          solutionCode: "print(3)\nprint(2)\nprint(1)\nprint(\"Go!\")"
        }
      },
      {
        type: "SELECT",
        question: "If you had to count down from 1,000,000 using the manual `print()` method, how many lines of code would you have to write?",
        lesson_step: "knowledge_check",
        order: 7,
        options: [
          { text: "One million lines.", correct: true },
          { text: "One line.", correct: false }
        ]
      },
      {
        type: "CONCEPT",
        question: "Lesson Summary",
        lesson_step: "recap",
        order: 8,
        content_metadata: {
          variant: "recap",
          icon: "check",
          paragraphs: [
            "Manual repetition is terrible! In the next lesson, we will see how loops solve this problem permanently."
          ]
        }
      }
    ]
  },
  {
    id: 41,
    title: "What Is a Loop?",
    unit_id: 5,
    order: 2,
    description: "How loops use Booleans.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "The Circle of Code",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "Normally, Python reads code from top to bottom, one line at a time.",
            "A loop tells Python: 'When you reach the bottom of this block, jump back to the top and do it again!'"
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "When does it stop?",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "If a loop just repeats forever, your computer will freeze.",
            "Therefore, loops rely on Booleans (True/False) to know when to stop.",
            "They ask a question before every lap. If the answer is True, they do another lap. If False, they stop."
          ]
        }
      },
      {
        type: "SELECT",
        question: "What happens when Python reaches the bottom of a loop?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "It jumps back to the top of the loop to see if it should run again.", correct: true },
          { text: "It immediately deletes the code.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What data type do loops use to decide whether to keep going or stop?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "Booleans (True/False)", correct: true },
          { text: "Strings (Text)", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "If a loop's condition is ALWAYS True, what will happen?",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "The loop will run forever (an infinite loop).", correct: true },
          { text: "The loop will run once and stop.", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Logic Recap",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "lives = 3\n# A loop might ask: 'Is lives > 0?'. Answer it!\nprint(lives ____ 0)",
          expectedOutput: "True",
          hints: ["Use the > operator"],
          solutionCode: "lives = 3\nprint(lives > 0)"
        }
      },
      {
        type: "CONCEPT",
        question: "Lesson Summary",
        lesson_step: "recap",
        order: 7,
        content_metadata: {
          variant: "recap",
          icon: "check",
          paragraphs: [
            "Now you understand the theory: Loops repeat code, and they use True/False conditions to know when to stop. Let's write one!"
          ]
        }
      }
    ]
  },
  {
    id: 42,
    title: "Your First while Loop",
    unit_id: 5,
    order: 3,
    description: "Using the while keyword.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "While it is True...",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "The most basic type of loop is the `while` loop.",
            "It looks and acts exactly like an `if` statement, but instead of running the code once, it runs it over and over as long as the condition remains True."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "while Syntax",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "To write a `while` loop, use the word `while`, followed by a condition, and a colon `:`. Then indent the code underneath.",
            "Inside the loop, you MUST do something that eventually makes the condition False, or it will run forever!"
          ],
          codeBlocks: [
            {
              code: "laps = 1\nwhile laps <= 3:\n    print(\"Running lap\", laps)\n    laps = laps + 1  # Crucial! This changes the variable.",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "How is a `while` loop similar to an `if` statement?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "They both check a True/False condition, use a colon, and require indented code.", correct: true },
          { text: "They only run the code exactly once.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "How is a `while` loop DIFFERENT from an `if` statement?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "A while loop repeats the code as long as the condition is True.", correct: true },
          { text: "A while loop doesn't check a condition.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this output?\nx = 1\nwhile x < 3:\n    print(x)\n    x = x + 1",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "1\n2", correct: true },
          { text: "1", correct: false },
          { text: "3", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Write a while loop",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "count = 1\n# Run the loop while count is less than or equal to 3\n____ count <= 3:\n    print(count)\n    count = count + 1",
          expectedOutput: "1\n2\n3",
          hints: ["Use the keyword 'while'."],
          solutionCode: "count = 1\nwhile count <= 3:\n    print(count)\n    count = count + 1"
        }
      },
      {
        type: "CODE",
        question: "The Countdown",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "timer = 3\n# Write a while loop that runs while timer is greater than 0\n\n    # Inside the loop: print the timer\n    \n    # Inside the loop: subtract 1 from timer\n    \n\nprint(\"Blastoff!\")",
          expectedOutput: "3\n2\n1\nBlastoff!",
          hints: ["while timer > 0:", "    print(timer)", "    timer = timer - 1"],
          solutionCode: "timer = 3\nwhile timer > 0:\n    print(timer)\n    timer = timer - 1\nprint(\"Blastoff!\")"
        }
      },
      {
        type: "SELECT",
        question: "In the countdown code, what happens if we forget to write `timer = timer - 1`?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "The timer stays at 3 forever. The condition (3 > 0) is always True. It creates an infinite loop!", correct: true },
          { text: "The loop just stops immediately.", correct: false }
        ]
      },
      {
        type: "CONCEPT",
        question: "Lesson Summary",
        lesson_step: "recap",
        order: 9,
        content_metadata: {
          variant: "recap",
          icon: "check",
          paragraphs: [
            "You just wrote your first loop! By modifying the variable inside the loop, we make sure it eventually stops."
          ]
        }
      }
    ]
  },
  {
    id: 43,
    title: "Avoiding Infinite Loops",
    unit_id: 5,
    order: 4,
    description: "The danger of loops that never end.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "The Computer Trap",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "An infinite loop is every programmer's worst nightmare.",
            "If a loop's condition never becomes False, the computer will execute the block of code billions of times per second until the program crashes."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "How to break a computer",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "Infinite loops usually happen because we forget to update the variable that controls the loop.",
            "If `x = 5`, and we say `while x < 10:`, but we never change `x`, it will be less than 10 forever!"
          ],
          codeBlocks: [
            {
              code: "x = 5\nwhile x < 10:\n    print(\"Hello\")\n    # MISSING: x = x + 1 (This loop will run forever!)",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "What causes an infinite loop?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "A loop condition that never becomes False.", correct: true },
          { text: "Typing print() too many times.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "To prevent a while loop from running forever, you must...",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "Update the variable inside the loop so the condition eventually becomes False.", correct: true },
          { text: "Make sure the condition is True.", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Fix the loop",
        lesson_step: "guided_practice",
        order: 5,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "lives = 3\nwhile lives > 0:\n    print(\"Player died.\")\n    # Fix this infinite loop by subtracting 1 from lives!\n    ____ = ____ ____ 1",
          expectedOutput: "Player died.\nPlayer died.\nPlayer died.",
          hints: ["lives = lives - 1"],
          solutionCode: "lives = 3\nwhile lives > 0:\n    print(\"Player died.\")\n    lives = lives - 1"
        }
      },
      {
        type: "CODE",
        question: "Independent Fix",
        lesson_step: "independent_practice",
        order: 6,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "score = 0\nwhile score < 30:\n    print(\"Score:\", score)\n    # The player gains 10 points per loop. Update the score!\n    \n",
          expectedOutput: "Score: 0\nScore: 10\nScore: 20",
          hints: ["score = score + 10"],
          solutionCode: "score = 0\nwhile score < 30:\n    print(\"Score:\", score)\n    score = score + 10"
        }
      },
      {
        type: "CONCEPT",
        question: "Lesson Summary",
        lesson_step: "recap",
        order: 7,
        content_metadata: {
          variant: "recap",
          icon: "check",
          paragraphs: [
            "If your program ever completely freezes and becomes unresponsive, you probably created an infinite loop!"
          ]
        }
      }
    ]
  },
  {
    id: 44,
    title: "Your First for Loop",
    unit_id: 5,
    order: 5,
    description: "Iterating safely.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "A Safer Loop",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "Because `while` loops can easily turn into infinite loops if we forget to update a variable, programmers invented a safer loop.",
            "The `for` loop."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "Looping over text",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "A `for` loop is designed to iterate (travel) through a collection of items one by one.",
            "It automatically knows when to stop! No infinite loops.",
            "For example, you can use a `for` loop to look at every single letter in a String."
          ],
          codeBlocks: [
            {
              code: "word = \"CAT\"\nfor letter in word:\n    print(letter)",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "What is a major advantage of a `for` loop over a `while` loop?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "It automatically knows when to stop, so it rarely causes infinite loops.", correct: true },
          { text: "It runs faster.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "In the code `for letter in word:`, what does `letter` represent?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "A temporary variable that holds the current letter being looked at.", correct: true },
          { text: "The entire word.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this output?\nfor x in \"HI\":\n    print(x)",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "H\nI", correct: true },
          { text: "HI", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Write a for loop",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "name = \"Bob\"\n# Loop through the name and print each character\n____ char ____ name:\n    print(char)",
          expectedOutput: "B\no\nb",
          hints: ["Use 'for' and 'in'"],
          solutionCode: "name = \"Bob\"\nfor char in name:\n    print(char)"
        }
      },
      {
        type: "CODE",
        question: "Independent For",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "animal = \"Dog\"\n# Write a for loop that iterates through 'animal'\n# Use the temporary variable name 'letter'\n# Inside the loop, print the letter\n\n",
          expectedOutput: "D\no\ng",
          hints: ["for letter in animal:", "    print(letter)"],
          solutionCode: "animal = \"Dog\"\nfor letter in animal:\n    print(letter)"
        }
      },
      {
        type: "SELECT",
        question: "Do you have to name the temporary variable `letter`?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "No, you can name it anything! `for x in word:` or `for apple in word:` works perfectly fine.", correct: true },
          { text: "Yes, Python requires it to be named 'letter'.", correct: false }
        ]
      },
      {
        type: "CONCEPT",
        question: "Lesson Summary",
        lesson_step: "recap",
        order: 9,
        content_metadata: {
          variant: "recap",
          icon: "check",
          paragraphs: [
            "For loops are amazing for looking at data piece by piece. But what if we just want to repeat code 10 times? Let's find out."
          ]
        }
      }
    ]
  },
  {
    id: 45,
    title: "Understanding range()",
    unit_id: 5,
    order: 6,
    description: "Repeating a specific number of times.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Repeating N times",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "We know how to use `while` loops for conditions, and `for` loops to travel through text.",
            "But what if we just want a simple way to say: 'Do this exactly 5 times'?"
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "The range() Function",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "We combine a `for` loop with the built-in `range()` function.",
            "`range(5)` generates a sequence of 5 numbers (0, 1, 2, 3, 4).",
            "This makes the `for` loop run exactly 5 times!"
          ],
          codeBlocks: [
            {
              code: "for x in range(3):\n    print(\"Hello\")",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "What does `range(10)` do?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "It creates a sequence of 10 numbers, making a loop run 10 times.", correct: true },
          { text: "It generates a random number up to 10.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "How many times will `for x in range(7):` run?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "7 times", correct: true },
          { text: "8 times", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this output?\nfor x in range(2):\n    print(\"Hi\")",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "Hi\nHi", correct: true },
          { text: "Hi\nHi\nHi", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Use range",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "# Loop 4 times\nfor x in ____(4):\n    print(\"Beep\")",
          expectedOutput: "Beep\nBeep\nBeep\nBeep",
          hints: ["Use the range function."],
          solutionCode: "for x in range(4):\n    print(\"Beep\")"
        }
      },
      {
        type: "CODE",
        question: "Write the loop",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "# Write a for loop using range() that prints \"Codez\" 3 times\n\n\n",
          expectedOutput: "Codez\nCodez\nCodez",
          hints: ["for x in range(3):", "    print(\"Codez\")"],
          solutionCode: "for x in range(3):\n    print(\"Codez\")"
        }
      },
      {
        type: "SELECT",
        question: "Why does Python start counting at 0 instead of 1?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "Because computer memory is zero-indexed (the first slot in memory is slot 0).", correct: true },
          { text: "It was a typo by the creator of Python.", correct: false }
        ]
      },
      {
        type: "CONCEPT",
        question: "Lesson Summary",
        lesson_step: "recap",
        order: 9,
        content_metadata: {
          variant: "recap",
          icon: "check",
          paragraphs: [
            "`for x in range(5):` is the standard Python way to repeat something 5 times. You will use this constantly."
          ]
        }
      }
    ]
  },
  {
    id: 46,
    title: "Loop Variables",
    unit_id: 5,
    order: 7,
    description: "Using 'i' to track the loop.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Tracking the Laps",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "We've been using temporary variables like `x` in our loops, but we haven't actually printed them out.",
            "Let's look at what `x` actually holds during each lap of a `range()` loop."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "The letter 'i'",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "Programmers almost universally use the letter `i` (for 'index' or 'iteration') as the variable name in a `range()` loop.",
            "Because Python starts counting at 0, `range(3)` assigns `i` the values 0, then 1, then 2."
          ],
          codeBlocks: [
            {
              code: "for i in range(3):\n    print(\"Loop number:\", i)",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "What does the `i` stand for in a for loop?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "Index or Iteration", correct: true },
          { text: "Integer", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "In `for i in range(3):`, what is the very first value of `i`?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "0", correct: true },
          { text: "1", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this output?\nfor i in range(2):\n    print(i)",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "0\n1", correct: true },
          { text: "1\n2", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Use i",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "# Loop 4 times and print the value of i\nfor ____ in range(4):\n    print(____)",
          expectedOutput: "0\n1\n2\n3",
          hints: ["Use 'i'"],
          solutionCode: "for i in range(4):\n    print(i)"
        }
      },
      {
        type: "CODE",
        question: "Independent Counting",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "# Write a for loop with 'i' that loops 3 times\n# Print: i\n\n\n",
          expectedOutput: "0\n1\n2",
          hints: ["for i in range(3):", "    print(i)"],
          solutionCode: "for i in range(3):\n    print(i)"
        }
      },
      {
        type: "SELECT",
        question: "If `range(5)` gives us 0, 1, 2, 3, 4... how do we make it print 1, 2, 3, 4, 5?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "By printing `i + 1`", correct: true },
          { text: "It's impossible.", correct: false }
        ]
      },
      {
        type: "CONCEPT",
        question: "Lesson Summary",
        lesson_step: "recap",
        order: 9,
        content_metadata: {
          variant: "recap",
          icon: "check",
          paragraphs: [
            "Now you understand why computers start counting at zero! `range(N)` always stops BEFORE it hits `N`."
          ]
        }
      }
    ]
  },
  {
    id: 47,
    title: "break Statement",
    unit_id: 5,
    order: 8,
    description: "Bailing out of a loop.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "The Emergency Exit",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "Sometimes you want a loop to stop EARLY, before it naturally finishes.",
            "For example, you are looping through 1,000 files to find a password. Once you find it, there is no need to check the remaining 999 files."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "Smashing the glass",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "The `break` keyword immediately destroys the loop.",
            "Python completely jumps out of the loop block and continues with the rest of the program."
          ],
          codeBlocks: [
            {
              code: "for i in range(10):\n    print(i)\n    if i == 2:\n        break  # The loop stops here!",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "What does the `break` statement do?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "It instantly stops and exits the loop.", correct: true },
          { text: "It pauses the computer.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "To exit a loop early, you usually place a `break` statement inside an...",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "if statement", correct: true },
          { text: "print statement", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this output?\nfor i in range(5):\n    break\n    print(i)",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "Nothing! It breaks before it ever prints.", correct: true },
          { text: "0", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Stop at 2",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "for i in range(5):\n    print(i)\n    if i == 2:\n        # Break the loop!\n        ____",
          expectedOutput: "0\n1\n2",
          hints: ["Type break"],
          solutionCode: "for i in range(5):\n    print(i)\n    if i == 2:\n        break"
        }
      },
      {
        type: "CODE",
        question: "Independent Break",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "word = \"Apple\"\nfor char in word:\n    print(char)\n    # If the character is 'p', break out of the loop!\n\n\n",
          expectedOutput: "A\np",
          hints: ["if char == \"p\":", "    break"],
          solutionCode: "word = \"Apple\"\nfor char in word:\n    print(char)\n    if char == \"p\":\n        break"
        }
      },
      {
        type: "SELECT",
        question: "If a loop has 1,000,000 iterations, and you `break` on iteration 5, does Python still process the remaining 999,995 iterations in the background?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "No. Python instantly drops the loop and moves on, saving a massive amount of time.", correct: true },
          { text: "Yes, it finishes them invisibly.", correct: false }
        ]
      },
      {
        type: "CONCEPT",
        question: "Lesson Summary",
        lesson_step: "recap",
        order: 9,
        content_metadata: {
          variant: "recap",
          icon: "check",
          paragraphs: [
            "`break` is the ultimate performance tool for searching. Once you find what you need, break!"
          ]
        }
      }
    ]
  },
  {
    id: 48,
    title: "continue Statement",
    unit_id: 5,
    order: 9,
    description: "Skipping an iteration.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Skip, Don't Stop",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "We know `break` destroys the loop completely.",
            "But what if you just want to skip the CURRENT lap, and go straight to the next lap?",
            "For example, you are printing all numbers from 1 to 10, but you want to skip the number 3."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "The continue Keyword",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "The `continue` keyword instantly stops the current lap and jumps back to the top of the loop to start the next one.",
            "Any code directly below `continue` will be skipped for that specific lap."
          ],
          codeBlocks: [
            {
              code: "for i in range(4):\n    if i == 2:\n        continue  # Skips printing 2!\n    print(i)",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "What is the difference between `break` and `continue`?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "`break` exits the entire loop. `continue` skips the rest of the current lap and moves to the next.", correct: true },
          { text: "They do exactly the same thing.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "If you want to bypass a specific item but keep the loop running, use...",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "continue", correct: true },
          { text: "break", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this output?\nfor i in range(3):\n    if i == 1:\n        continue\n    print(i)",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "0\n2", correct: true },
          { text: "0", correct: false },
          { text: "0\n1\n2", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Skip number 3",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "for i in range(5):\n    if i == 3:\n        # Skip printing 3!\n        ____\n    print(i)",
          expectedOutput: "0\n1\n2\n4",
          hints: ["Type continue"],
          solutionCode: "for i in range(5):\n    if i == 3:\n        continue\n    print(i)"
        }
      },
      {
        type: "CODE",
        question: "Independent Continue",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "word = \"Codez\"\nfor char in word:\n    # If char is 'e', continue!\n    \n    \n    print(char)",
          expectedOutput: "C\no\nd\nz",
          hints: ["if char == \"e\":", "    continue"],
          solutionCode: "word = \"Codez\"\nfor char in word:\n    if char == \"e\":\n        continue\n    print(char)"
        }
      },
      {
        type: "SELECT",
        question: "Where should the `continue` statement be placed?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "BEFORE the code you want to skip. Once `continue` runs, the rest of the block is ignored.", correct: true },
          { text: "At the very end of the loop.", correct: false }
        ]
      },
      {
        type: "CONCEPT",
        question: "Lesson Summary",
        lesson_step: "recap",
        order: 9,
        content_metadata: {
          variant: "recap",
          icon: "check",
          paragraphs: [
            "`continue` is perfect for filtering data (e.g., looping through a list of users, but skipping the banned ones)."
          ]
        }
      }
    ]
  },
  {
    id: 49,
    title: "Combining Loops with if Statements",
    unit_id: 5,
    order: 10,
    description: "Decision making inside loops.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Smart Loops",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "We have learned loops. We have learned if statements.",
            "Now it's time to combine them to create 'Smart Loops'."
          ]
        }
      },
      {
        type: "SELECT",
        question: "When you put an `if` statement inside a loop, how many times does the `if` statement get checked?",
        lesson_step: "comprehension",
        order: 2,
        options: [
          { text: "Every single time the loop runs (every lap).", correct: true },
          { text: "Only once.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "If a `for` loop runs 10 times, and it contains an `if` statement, how many times is the condition evaluated?",
        lesson_step: "fill_blank",
        order: 3,
        options: [
          { text: "10", correct: true },
          { text: "1", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this output?\nfor i in range(4):\n    if i % 2 == 0:\n        print(\"Even\")\n    else:\n        print(\"Odd\")",
        lesson_step: "predict_output",
        order: 4,
        options: [
          { text: "Even\nOdd\nEven\nOdd", correct: true },
          { text: "Even\nEven", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Only print big numbers",
        lesson_step: "guided_practice",
        order: 5,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "for i in range(6):\n    # Only print i if it is greater than 3\n    if ____ > 3:\n        print(i)",
          expectedOutput: "4\n5",
          hints: ["if i > 3:"],
          solutionCode: "for i in range(6):\n    if i > 3:\n        print(i)"
        }
      },
      {
        type: "CODE",
        question: "Find the Evens",
        lesson_step: "independent_practice",
        order: 6,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "# Loop from 0 to 5 (using range(6))\nfor i in range(6):\n    # Write an if statement using modulus (%) to check if i is even\n    # Reminder: Even numbers have a remainder of 0 when divided by 2\n    \n        # print i\n",
          expectedOutput: "0\n2\n4",
          hints: ["if i % 2 == 0:", "    print(i)"],
          solutionCode: "for i in range(6):\n    if i % 2 == 0:\n        print(i)"
        }
      },
      {
        type: "CONCEPT",
        question: "Lesson Summary",
        lesson_step: "recap",
        order: 7,
        content_metadata: {
          variant: "recap",
          icon: "check",
          paragraphs: [
            "Loops combined with if statements is how almost all data processing works in the real world!"
          ]
        }
      }
    ]
  },
  {
    id: 50,
    title: "Nested Loops (Beginner Introduction)",
    unit_id: 5,
    order: 11,
    description: "A loop inside a loop.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Loopception",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "Just like you can nest `if` statements, you can nest loops!",
            "Putting a loop inside a loop allows you to build grids, maps, and matrices."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "The Clock Analogy",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "Think of a nested loop like a clock.",
            "The minute hand (inner loop) must spin all the way around 60 times before the hour hand (outer loop) moves exactly 1 time.",
            "The inner loop runs completely for EVERY lap of the outer loop."
          ],
          codeBlocks: [
            {
              code: "for out in range(2):\n    for ins in range(3):\n        print(out, ins)",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "How does a nested loop execute?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "The inner loop completes all of its laps for every single lap of the outer loop.", correct: true },
          { text: "They run at the exact same time.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "If an outer loop runs 3 times, and its inner loop runs 4 times, how many total times does the inner code run?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "12 times (3 * 4)", correct: true },
          { text: "7 times", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this print?\nfor x in range(2):\n    for y in range(2):\n        print(\"*\")",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "*\n*\n*\n*", correct: true },
          { text: "*\n*", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Build a grid",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "for row in range(2):\n    # Nest a loop for columns\n    ____ col in range(2):\n        print(row, col)",
          expectedOutput: "0 0\n0 1\n1 0\n1 1",
          hints: ["for col in range(2):"],
          solutionCode: "for row in range(2):\n    for col in range(2):\n        print(row, col)"
        }
      },
      {
        type: "CONCEPT",
        question: "Lesson Summary",
        lesson_step: "recap",
        order: 7,
        content_metadata: {
          variant: "recap",
          icon: "check",
          paragraphs: [
            "Nested loops can get complicated very quickly, but they are essential for things like processing images (rows and columns of pixels)!"
          ]
        }
      }
    ]
  },
  {
    id: 51,
    title: "Common Loop Mistakes",
    unit_id: 5,
    order: 12,
    description: "Troubleshooting loops.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Avoiding Bugs",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "Loops are powerful, but they are easy to mess up.",
            "Let's look at the most common logic and syntax errors beginners make with loops."
          ]
        }
      },
      {
        type: "SELECT",
        question: "What is an 'Off-By-One' error?",
        lesson_step: "comprehension",
        order: 2,
        options: [
          { text: "When your loop runs one time too many, or one time too few (often caused by forgetting that Python starts counting at 0).", correct: true },
          { text: "When your loop runs perfectly.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "If you want a `range()` loop to print exactly 1 through 5, what should you type?",
        lesson_step: "fill_blank",
        order: 3,
        options: [
          { text: "for i in range(5):\n    print(i + 1)", correct: true },
          { text: "for i in range(5):\n    print(i)", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Fix the indentation",
        lesson_step: "guided_practice",
        order: 4,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "for i in range(3):\n    print(\"Looping\")\n# Fix the indentation so this prints ONLY ONCE at the very end\n    print(\"Done\")",
          expectedOutput: "Looping\nLooping\nLooping\nDone",
          hints: ["Remove the indentation from print(\"Done\") so it sits flush left."],
          solutionCode: "for i in range(3):\n    print(\"Looping\")\nprint(\"Done\")"
        }
      },
      {
        type: "CODE",
        question: "Fix the while loop",
        lesson_step: "independent_practice",
        order: 5,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "lives = 3\n# Fix this infinite loop!\nwhile lives > 0:\n    print(\"Playing\")\n",
          expectedOutput: "Playing\nPlaying\nPlaying",
          hints: ["Add lives = lives - 1 inside the loop."],
          solutionCode: "lives = 3\nwhile lives > 0:\n    print(\"Playing\")\n    lives = lives - 1"
        }
      },
      {
        type: "CONCEPT",
        question: "Lesson Summary",
        lesson_step: "recap",
        order: 6,
        content_metadata: {
          variant: "recap",
          icon: "check",
          paragraphs: [
            "Indentation dictates what is INSIDE the loop and what runs AFTER the loop is finished."
          ]
        }
      }
    ]
  },
  {
    id: 52,
    title: "Mini Project: Number Guessing Game",
    unit_id: 5,
    order: 13,
    description: "Build an interactive loop.",
    xp_reward: 20,
    challenges: [
      {
        type: "CONCEPT",
        question: "The Final Challenge",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "It's time to build a game!",
            "The program will have a secret number. You will write a `while` loop that continuously asks the user for their guess.",
            "If they get it right, you `break` the loop and they win!"
          ]
        }
      },
      {
        type: "SELECT",
        question: "What is the best way to write a loop that runs continuously until we explicitly tell it to stop?",
        lesson_step: "comprehension",
        order: 2,
        options: [
          { text: "while True: (and then use break when we want to stop)", correct: true },
          { text: "for i in range(1):", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Build the Game",
        lesson_step: "independent_practice",
        order: 3,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "secret = 7\n# 1. Create a loop: while True:\n# 2. Ask for input and convert to integer: guess = int(input(\"Guess: \"))\n# 3. If guess == secret, print \"You Win!\" and break\n\n\n\n",
          expectedOutput: "Guess: \nYou Win!", // Assuming automated runner supplies the correct guess 7
          hints: ["while True:", "    guess = int(input(\"Guess: \"))", "    if guess == secret:", "        print(\"You Win!\")", "        break"],
          solutionCode: "secret = 7\nwhile True:\n    guess = int(input(\"Guess: \"))\n    if guess == secret:\n        print(\"You Win!\")\n        break"
        }
      },
      {
        type: "CONCEPT",
        question: "Unit 5 Complete!",
        lesson_step: "recap",
        order: 4,
        content_metadata: {
          variant: "recap",
          icon: "check",
          paragraphs: [
            "Amazing! You just built a fully interactive, endlessly repeatable game loop.",
            "Next up in Unit 6: We will learn how to package our code into reusable blocks using Functions!"
          ]
        }
      }
    ]
  }
];
