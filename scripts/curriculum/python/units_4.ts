import { Lesson } from "../types";

export const pythonUnit4Lessons: Lesson[] = [
  {
    id: 29, // Placeholder ID
    title: "What Makes Programs Smart?",
    unit_id: 4,
    order: 1,
    description: "Learn how programs make decisions.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Brain Power",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "So far, our programs run exactly the same way every time.",
            "But real software makes decisions! If your password is correct, it logs you in. If it's wrong, it blocks you.",
            "In this unit, we will give your programs a brain."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "Branching Paths",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "Decision making in code works exactly like a fork in the road.",
            "The program asks a question. If the answer is YES (True), it goes down one path.",
            "If the answer is NO (False), it goes down a different path."
          ]
        }
      },
      {
        type: "SELECT",
        question: "Why do we need decision making in code?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "So the program can respond differently depending on the situation (like checking a password).", correct: true },
          { text: "To make the computer run faster.", correct: false },
          { text: "To store text data.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "A program making a decision is like...",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "A fork in a road.", correct: true },
          { text: "A straight highway.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "If a program asks 'Is the user 18 or older?', what are the only two possible answers?",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "True or False (Yes or No)", correct: true },
          { text: "Any number", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Boolean recap",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "# A decision always boils down to True or False (Booleans)\n# Set is_raining to True\nis_raining = ____\nprint(is_raining)",
          expectedOutput: "True",
          hints: ["Write True with a capital T."],
          solutionCode: "is_raining = True\nprint(is_raining)"
        }
      },
      {
        type: "CODE",
        question: "Independent Recap",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "# Create a variable named is_admin and set it to False\n\n\n# Print is_admin\n",
          expectedOutput: "False",
          hints: ["is_admin = False", "print(is_admin)"],
          solutionCode: "is_admin = False\nprint(is_admin)"
        }
      },
      {
        type: "SELECT",
        question: "Why are Booleans (True/False) so important for decision making?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "Because every decision a computer makes is just answering a Yes/No question.", correct: true },
          { text: "Because they are numbers.", correct: false }
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
            "We are going to use Booleans to control the flow of our entire application!"
          ]
        }
      }
    ]
  },
  {
    id: 30,
    title: "Understanding True & False",
    unit_id: 4,
    order: 2,
    description: "Revisiting logic.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Asking Python Questions",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "We don't always want to manually type `True` or `False`.",
            "Instead, we want to ask Python a math question, and have Python figure out if it is True or False!"
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "Equality Operator",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "To ask Python if two things are exactly equal, we use a DOUBLE equals sign `==`.",
            "This is called the Equality Operator. It returns `True` if they are the same, and `False` if they are not."
          ],
          codeBlocks: [
            {
              code: "print(5 == 5)  # Outputs True\nprint(5 == 10) # Outputs False",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "Which symbol do you use to CHECK if two things are equal?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "Double equals (==)", correct: true },
          { text: "Single equals (=)", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What does a SINGLE equals sign (`=`) do?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "It assigns a value to a variable (creates a box).", correct: true },
          { text: "It asks a question.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this code output?\nprint(\"Apple\" == \"Apple\")",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "True", correct: true },
          { text: "False", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Check equality",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "score = 100\n# Ask Python if score is exactly equal to 100\nprint(score ____ 100)",
          expectedOutput: "True",
          hints: ["Use the == operator."],
          solutionCode: "score = 100\nprint(score == 100)"
        }
      },
      {
        type: "CODE",
        question: "Check inequality",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "guess = \"cat\"\n# Print whether guess is equal to \"dog\"\n\n",
          expectedOutput: "False",
          hints: ["print(guess == \"dog\")"],
          solutionCode: "guess = \"cat\"\nprint(guess == \"dog\")"
        }
      },
      {
        type: "SELECT",
        question: "Why does `print(\"apple\" == \"Apple\")` return False?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "Because Python is case-sensitive. A lowercase 'a' is not the same as a capital 'A'.", correct: true },
          { text: "Because it's a bug.", correct: false }
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
            "Remember: `=` means 'Make it equal'. `==` means 'Ask if it is equal'."
          ]
        }
      }
    ]
  },
  {
    id: 31,
    title: "Comparison Operators",
    unit_id: 4,
    order: 3,
    description: "Greater than, less than, not equal.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Comparing Numbers",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "We don't always want to check if things are exactly equal.",
            "Often, we want to know if a player's score is GREATER than the high score, or if their age is LESS than 18."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "Math Symbols",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "Python uses standard math symbols for comparing numbers:",
            "`>` (Greater than)",
            "`<` (Less than)",
            "`>=` (Greater than or equal to)",
            "`<=` (Less than or equal to)",
            "`!=` (Not equal to)"
          ],
          codeBlocks: [
            {
              code: "print(10 > 5)  # True\nprint(10 < 5)  # False\nprint(5 != 10) # True (5 is NOT equal to 10)",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "Which symbol means 'Not Equal To'?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "!=", correct: true },
          { text: "==", correct: false },
          { text: "<>", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "If you want to check if a user is 18 OR OLDER, which symbol should you use?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: ">=", correct: true },
          { text: ">", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this code output?\nprint(10 >= 10)",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "True", correct: true },
          { text: "False", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Check the age",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "age = 15\n# Check if age is less than 18\nprint(age ____ 18)",
          expectedOutput: "True",
          hints: ["Use the < symbol."],
          solutionCode: "age = 15\nprint(age < 18)"
        }
      },
      {
        type: "CODE",
        question: "Check the high score",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "score = 500\nhigh_score = 450\n# Print whether the score is greater than the high_score\n\n",
          expectedOutput: "True",
          hints: ["print(score > high_score)"],
          solutionCode: "score = 500\nhigh_score = 450\nprint(score > high_score)"
        }
      },
      {
        type: "SELECT",
        question: "If `print(x != y)` outputs True, what does that mean?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "It means x and y are DIFFERENT numbers.", correct: true },
          { text: "It means x and y are the SAME number.", correct: false }
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
            "You now know how to ask Python any Yes/No question! Now let's learn how to actually make decisions based on the answers."
          ]
        }
      }
    ]
  },
  {
    id: 32,
    title: "Your First if Statement",
    unit_id: 4,
    order: 4,
    description: "Executing code conditionally.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Taking Action",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "We know how to ask True/False questions.",
            "But how do we tell the program to ONLY run a piece of code IF the answer is True?",
            "We use an 'If Statement'!"
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "Syntax of an if statement",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "To write an `if` statement, type `if`, followed by the question, followed by a colon `:`.",
            "The code you want to run must be INDENTED (moved inward using the Tab key or 4 spaces) directly below it!"
          ],
          codeBlocks: [
            {
              code: "age = 20\nif age >= 18:\n    print(\"You are an adult!\")",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "What symbol MUST go at the very end of the `if` line?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "A colon (:)", correct: true },
          { text: "A semicolon (;)", correct: false },
          { text: "A comma (,)", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "How does Python know which code belongs INSIDE the `if` statement?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "The code is indented (moved to the right).", correct: true },
          { text: "It reads the word END.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this code output?\nscore = 10\nif score == 10:\n    print(\"You win!\")",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "You win!", correct: true },
          { text: "Nothing.", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Write an if statement",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "weather = \"rain\"\n# Check if weather is exactly equal to \"rain\"\n____ weather == \"rain\"____\n    print(\"Bring an umbrella!\")",
          expectedOutput: "Bring an umbrella!",
          hints: ["Start with 'if' and end the line with a colon ':'"],
          solutionCode: "weather = \"rain\"\nif weather == \"rain\":\n    print(\"Bring an umbrella!\")"
        }
      },
      {
        type: "CODE",
        question: "Independent If",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "money = 50\n# Write an if statement checking if money is greater than 10\n# If it is, print: \"You can buy it!\"\n\n",
          expectedOutput: "You can buy it!",
          hints: ["if money > 10:", "    print(\"You can buy it!\")"],
          solutionCode: "money = 50\nif money > 10:\n    print(\"You can buy it!\")"
        }
      },
      {
        type: "SELECT",
        question: "What happens if the condition in an `if` statement is False?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "Python skips the indented code entirely and moves on.", correct: true },
          { text: "Python crashes.", correct: false }
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
            "Indentation is the most important part of Python syntax. It groups code together!"
          ]
        }
      }
    ]
  },
  {
    id: 33,
    title: "Using else",
    unit_id: 4,
    order: 5,
    description: "The 'otherwise' scenario.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Plan B",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "An `if` statement tells the computer what to do when the answer is True.",
            "But what if we want to print an error message when the answer is False?",
            "That's what `else` is for!"
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "Syntax of else",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "`else` must be at the same indentation level as `if`. It does not ask a question.",
            "It simply means 'Otherwise, do this instead'."
          ],
          codeBlocks: [
            {
              code: "age = 15\nif age >= 18:\n    print(\"Welcome!\")\nelse:\n    print(\"Too young!\")",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "When does the code inside an `else` block run?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "Only when the `if` condition is False.", correct: true },
          { text: "Only when the `if` condition is True.", correct: false },
          { text: "It runs every time.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "Does `else` require a condition (like `else age == 10:`)?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "No, it just has a colon: `else:`", correct: true },
          { text: "Yes, it needs a question.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this code output?\nx = 5\nif x > 10:\n    print(\"Big\")\nelse:\n    print(\"Small\")",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "Small", correct: true },
          { text: "Big", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Write an else statement",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "weather = \"sunny\"\nif weather == \"rain\":\n    print(\"Take an umbrella\")\n# Add the else block below\n____:\n    print(\"Wear sunglasses\")",
          expectedOutput: "Wear sunglasses",
          hints: ["Write else:"],
          solutionCode: "weather = \"sunny\"\nif weather == \"rain\":\n    print(\"Take an umbrella\")\nelse:\n    print(\"Wear sunglasses\")"
        }
      },
      {
        type: "CODE",
        question: "Password checker",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "password = \"1234\"\nif password == \"secret\":\n    print(\"Access Granted\")\n# Add an else block that prints \"Access Denied\"\n\n",
          expectedOutput: "Access Denied",
          hints: ["else:", "    print(\"Access Denied\")"],
          solutionCode: "password = \"1234\"\nif password == \"secret\":\n    print(\"Access Granted\")\nelse:\n    print(\"Access Denied\")"
        }
      },
      {
        type: "SELECT",
        question: "Can you have an `else` without an `if`?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "No, `else` must always be attached to an `if` statement.", correct: true },
          { text: "Yes, `else` can be used on its own.", correct: false }
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
            "You now have a two-way decision tree! But what if you have three or four possible paths? Let's find out."
          ]
        }
      }
    ]
  },
  {
    id: 34,
    title: "Using elif",
    unit_id: 4,
    order: 6,
    description: "Checking multiple specific conditions.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Multiple Choices",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "What if we want to check for multiple specific things?",
            "For example: If the light is green, GO. If the light is yellow, SLOW DOWN. Otherwise, STOP.",
            "We use `elif` (Else If)!"
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "Syntax of elif",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "`elif` goes between the `if` and the `else`.",
            "Unlike `else`, `elif` DOES ask a question, and requires a colon.",
            "Python checks them in order top-to-bottom. It stops as soon as it finds one that is True."
          ],
          codeBlocks: [
            {
              code: "color = \"yellow\"\nif color == \"green\":\n    print(\"Go\")\nelif color == \"yellow\":\n    print(\"Slow\")\nelse:\n    print(\"Stop\")",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "What does `elif` stand for?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "Else If", correct: true },
          { text: "End Line If", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "Where must `elif` be placed?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "After the `if`, but before the `else`.", correct: true },
          { text: "Before the `if`.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this code output?\nx = 10\nif x == 5:\n    print(\"Five\")\nelif x == 10:\n    print(\"Ten\")\nelse:\n    print(\"Unknown\")",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "Ten", correct: true },
          { text: "Five", correct: false },
          { text: "Unknown", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Write an elif statement",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "score = 85\nif score >= 90:\n    print(\"Grade A\")\n# Add an elif checking if score is >= 80\n____ score >= 80:\n    print(\"Grade B\")\nelse:\n    print(\"Grade C\")",
          expectedOutput: "Grade B",
          hints: ["Use elif"],
          solutionCode: "score = 85\nif score >= 90:\n    print(\"Grade A\")\nelif score >= 80:\n    print(\"Grade B\")\nelse:\n    print(\"Grade C\")"
        }
      },
      {
        type: "CODE",
        question: "Greeting program",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "time = 14\nif time < 12:\n    print(\"Good Morning\")\n# Write an elif to check if time is less than 18, and print \"Good Afternoon\"\n\n\nelse:\n    print(\"Good Evening\")",
          expectedOutput: "Good Afternoon",
          hints: ["elif time < 18:", "    print(\"Good Afternoon\")"],
          solutionCode: "time = 14\nif time < 12:\n    print(\"Good Morning\")\nelif time < 18:\n    print(\"Good Afternoon\")\nelse:\n    print(\"Good Evening\")"
        }
      },
      {
        type: "SELECT",
        question: "Can you have more than one `elif` in a single decision block?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "Yes! You can have as many `elif` blocks as you want to check dozens of different conditions.", correct: true },
          { text: "No, you are only allowed one.", correct: false }
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
            "With `if`, `elif`, and `else`, you can build complex menus, AI logic, and grading systems."
          ]
        }
      }
    ]
  },
  {
    id: 35,
    title: "Multiple Conditions",
    unit_id: 4,
    order: 7,
    description: "Combining variables in decisions.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Chaining it all together",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "Let's practice writing multiple `elif` statements to build a full text-based menu."
          ]
        }
      },
      {
        type: "SELECT",
        question: "When Python is executing an `if`/`elif`/`else` chain, when does it stop checking?",
        lesson_step: "comprehension",
        order: 2,
        options: [
          { text: "As soon as it finds the FIRST condition that is True.", correct: true },
          { text: "It checks every single one even if it already found a True one.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "Which of these must ALWAYS come first?",
        lesson_step: "fill_blank",
        order: 3,
        options: [
          { text: "if", correct: true },
          { text: "elif", correct: false },
          { text: "else", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this code output?\nx = 10\nif x > 5:\n    print(\"A\")\nelif x > 8:\n    print(\"B\")",
        lesson_step: "predict_output",
        order: 4,
        options: [
          { text: "A (Because 10 > 5 is True, so it stops there and skips B!)", correct: true },
          { text: "A\nB", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Build a menu",
        lesson_step: "independent_practice",
        order: 5,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "choice = \"3\"\n\n# if choice is \"1\", print \"Start\"\n# elif choice is \"2\", print \"Load\"\n# elif choice is \"3\", print \"Quit\"\n# else print \"Invalid\"\n\n",
          expectedOutput: "Quit",
          hints: [
            "if choice == \"1\":\n    print(\"Start\")",
            "elif choice == \"2\":\n    print(\"Load\")",
            "elif choice == \"3\":\n    print(\"Quit\")"
          ],
          solutionCode: "choice = \"3\"\nif choice == \"1\":\n    print(\"Start\")\nelif choice == \"2\":\n    print(\"Load\")\nelif choice == \"3\":\n    print(\"Quit\")\nelse:\n    print(\"Invalid\")"
        }
      },
      {
        type: "CONCEPT",
        question: "Great Job",
        lesson_step: "recap",
        order: 6,
        content_metadata: {
          variant: "recap",
          icon: "check",
          paragraphs: [
            "You just built a working game menu! Notice how order matters; Python reads top to bottom and stops at the first True."
          ]
        }
      }
    ]
  },
  {
    id: 36,
    title: "Logical Operators (and, or, not)",
    unit_id: 4,
    order: 8,
    description: "Combining logic.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Complex Rules",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "Sometimes, one question isn't enough.",
            "To log into a website, your username AND your password must be correct.",
            "To get a discount, you must be a student OR a senior."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "and / or",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "Python uses simple English words to combine conditions.",
            "`and` requires BOTH sides to be True.",
            "`or` requires AT LEAST ONE side to be True.",
            "`not` flips True to False, and False to True."
          ],
          codeBlocks: [
            {
              code: "age = 20\nis_student = True\nif age > 18 and is_student:\n    print(\"Adult Student\")",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "If a condition uses `and`, what must be true for the code to run?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "BOTH sides of the `and` must be True.", correct: true },
          { text: "Only one side needs to be True.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "If a condition uses `or`, what must be true for the code to run?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "At least ONE side must be True.", correct: true },
          { text: "Both sides must be True.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this code output?\nprint(True and False)",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "False", correct: true },
          { text: "True", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Use AND",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "score = 100\nlives = 3\n# Check if score is exactly 100 AND lives is greater than 0\nif score == 100 ____ lives > 0:\n    print(\"Perfect Run!\")",
          expectedOutput: "Perfect Run!",
          hints: ["Use the word 'and'."],
          solutionCode: "score = 100\nlives = 3\nif score == 100 and lives > 0:\n    print(\"Perfect Run!\")"
        }
      },
      {
        type: "CODE",
        question: "Use OR",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "day = \"Saturday\"\n# Write an if statement that prints \"Weekend!\" if day is \"Saturday\" OR day is \"Sunday\"\n\n\n",
          expectedOutput: "Weekend!",
          hints: ["if day == \"Saturday\" or day == \"Sunday\":"],
          solutionCode: "day = \"Saturday\"\nif day == \"Saturday\" or day == \"Sunday\":\n    print(\"Weekend!\")"
        }
      },
      {
        type: "SELECT",
        question: "What does the `not` operator do (e.g. `not True`)?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "It reverses the Boolean. True becomes False, and False becomes True.", correct: true },
          { text: "It crashes the program.", correct: false }
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
            "Logical operators allow you to build incredibly precise decision systems with very little code!"
          ]
        }
      }
    ]
  },
  {
    id: 37,
    title: "Nested Decisions",
    unit_id: 4,
    order: 9,
    description: "If statements inside if statements.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Decisions within Decisions",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "Sometimes you only want to ask a question IF a previous question was True.",
            "For example: Is it raining? If yes, is it ALSO cold?"
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "Nesting (Indentation)",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "You can put an `if` statement INSIDE another `if` statement.",
            "You just have to indent the inner block even further! This is called 'Nesting'."
          ],
          codeBlocks: [
            {
              code: "rain = True\ncold = True\n\nif rain == True:\n    if cold == True:\n        print(\"Wear a winter coat\")",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "What does 'Nested' mean in programming?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "Placing one block of code completely inside another block of code (using indentation).", correct: true },
          { text: "Deleting old code.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "In nested statements, how does Python know a block is inside another block?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "By counting the indentation (spaces/tabs).", correct: true },
          { text: "By using brackets { }", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this output?\nadmin = True\npassword = \"123\"\nif admin == True:\n    if password == \"123\":\n        print(\"Welcome Admin\")",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "Welcome Admin", correct: true },
          { text: "Nothing", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Fix the indentation",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "door_open = True\nhas_key = True\nif door_open == True:\n# Fix the indentation below so it is nested inside the first if!\nif has_key == True:\nprint(\"You enter the room\")",
          expectedOutput: "You enter the room",
          hints: ["Indent the second if. Indent the print statement TWICE."],
          solutionCode: "door_open = True\nhas_key = True\nif door_open == True:\n    if has_key == True:\n        print(\"You enter the room\")"
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
            "Be careful with nesting! If you nest too many levels deep, your code becomes very hard to read. Sometimes using `and` is a better solution."
          ]
        }
      }
    ]
  },
  {
    id: 38,
    title: "Common Beginner Mistakes",
    unit_id: 4,
    order: 10,
    description: "Troubleshooting logic.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Syntax Nightmares",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "If statements are powerful, but they are also where beginners make the most syntax errors.",
            "Let's learn how to spot and fix the three most common mistakes."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "The Big Three",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "1. Forgetting the colon `:` at the end of the `if` line.",
            "2. Forgetting to indent the code underneath.",
            "3. Using a single `=` (assignment) instead of double `==` (equality check)."
          ]
        }
      },
      {
        type: "SELECT",
        question: "Why does `if x = 5:` cause an error?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "Because `=` tries to assign a value. You must use `==` to ask a question.", correct: true },
          { text: "Because x cannot be 5.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "Every `if`, `elif`, and `else` line MUST end with...",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "a colon (:)", correct: true },
          { text: "a semicolon (;)", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Fix the = error",
        lesson_step: "guided_practice",
        order: 5,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "lives = 0\n# Fix the error below\nif lives = 0:\n    print(\"Game Over\")",
          expectedOutput: "Game Over",
          hints: ["Change = to =="],
          solutionCode: "lives = 0\nif lives == 0:\n    print(\"Game Over\")"
        }
      },
      {
        type: "CODE",
        question: "Fix the syntax errors",
        lesson_step: "independent_practice",
        order: 6,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "points = 100\n# There are multiple errors here! Fix them.\nif points == 100\nprint(\"Level Up\")",
          expectedOutput: "Level Up",
          hints: ["Add a colon after 100.", "Indent the print statement."],
          solutionCode: "points = 100\nif points == 100:\n    print(\"Level Up\")"
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
            "When your `if` statement throws an error, check the colon, check the double equals, and check the indentation!"
          ]
        }
      }
    ]
  },
  {
    id: 39,
    title: "Mini Project: Smart Login",
    unit_id: 4,
    order: 11,
    description: "Build a login system.",
    xp_reward: 20,
    challenges: [
      {
        type: "CONCEPT",
        question: "Security Clearance",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "You are going to build a text-based login system.",
            "It will ask for a username and a password. If they both match, it grants access. Otherwise, it denies access."
          ]
        }
      },
      {
        type: "SELECT",
        question: "To check if BOTH the username AND the password are correct in one `if` statement, what operator should you use?",
        lesson_step: "comprehension",
        order: 2,
        options: [
          { text: "and", correct: true },
          { text: "or", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What function do you use to ask the user to type their password?",
        lesson_step: "fill_blank",
        order: 3,
        options: [
          { text: "input()", correct: true },
          { text: "print()", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Build the Login",
        lesson_step: "independent_practice",
        order: 4,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "# The correct credentials are: user=\"admin\" and pass=\"1234\"\nusername = input(\"Username: \")\npassword = input(\"Password: \")\n\n# Write an if/else statement to check if they match!\n# Print \"Access Granted\" if true, \"Access Denied\" if false.\n\n",
          expectedOutput: "Username: \nPassword: \nAccess Denied", // Assuming blank inputs from automated runner
          hints: ["if username == \"admin\" and password == \"1234\":", "    print(\"Access Granted\")", "else:", "    print(\"Access Denied\")"],
          solutionCode: "username = input(\"Username: \")\npassword = input(\"Password: \")\nif username == \"admin\" and password == \"1234\":\n    print(\"Access Granted\")\nelse:\n    print(\"Access Denied\")"
        }
      },
      {
        type: "CONCEPT",
        question: "Unit 4 Complete!",
        lesson_step: "recap",
        order: 5,
        content_metadata: {
          variant: "recap",
          icon: "check",
          paragraphs: [
            "Outstanding work. You just built the exact core logic that secures almost every app on the internet.",
            "Next up in Unit 5: We will learn how to make the computer repeat tasks automatically using Loops!"
          ]
        }
      }
    ]
  }
];
