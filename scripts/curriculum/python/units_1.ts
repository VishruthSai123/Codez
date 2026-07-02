import { Lesson } from "../types";

export const pythonUnit1Lessons: Lesson[] = [
  {
    id: 1,
    title: "Introduction to Python",
    unit_id: 1,
    order: 1,
    description: "What is Python and why learn it?",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Why Python?",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "Welcome to the world of programming!",
            "Python is one of the most popular programming languages in the world.",
            "It is used by companies like Google, Netflix, and NASA because it is powerful, yet incredibly easy to read and write."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "What is code?",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "Computers are very fast, but they are not very smart. They only do exactly what you tell them to do.",
            "Programming is simply giving a computer a set of instructions.",
            "Python is the language we use to write those instructions."
          ]
        }
      },
      {
        type: "SELECT",
        question: "What is the main purpose of programming?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "Giving a computer a set of instructions to follow.", correct: true },
          { text: "Making a computer think for itself.", correct: false },
          { text: "Fixing broken hardware.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "Python is known for being...",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "powerful yet easy to read and write.", correct: true },
          { text: "very difficult to learn.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "If you give a computer the wrong instructions, what will it do?",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "It will follow the wrong instructions exactly.", correct: true },
          { text: "It will fix the instructions for you automatically.", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Your first code",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "# This is a comment. The computer ignores it.\n# Run the code to see what happens!\n\nprint(\"Hello, Python!\")",
          expectedOutput: "Hello, Python!",
          hints: ["Just click 'Run' to see the output."],
          solutionCode: "print(\"Hello, Python!\")"
        }
      },
      {
        type: "CODE",
        question: "Run it again",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "print(\"I am a programmer\")\n",
          expectedOutput: "I am a programmer",
          hints: ["Click 'Run' to see the output."],
          solutionCode: "print(\"I am a programmer\")"
        }
      },
      {
        type: "SELECT",
        question: "Which of these is true about computers?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "They only do exactly what you tell them to do.", correct: true },
          { text: "They can guess what you want even if you type it wrong.", correct: false }
        ]
      },
      {
        type: "CONCEPT",
        question: "Great start!",
        lesson_step: "recap",
        order: 9,
        content_metadata: {
          variant: "recap",
          icon: "check",
          paragraphs: [
            "You have taken your first step into the world of Python programming.",
            "Next, we will learn how to make the computer talk to us!"
          ]
        }
      }
    ]
  },
  {
    id: 2,
    title: "Your First Program",
    unit_id: 1,
    order: 2,
    description: "Learn how to output text to the screen.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Talking to the screen",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "When you build an app or a game, you need a way to show information to the user.",
            "In Python, the easiest way to display information on the screen is using the `print()` function."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "The print function",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "To print text, you write the word `print`, followed by parentheses `()`.",
            "Inside the parentheses, you must put quotes `\"\"` around your text.",
            "Without quotes, Python gets confused!"
          ],
          codeBlocks: [
            {
              code: "print(\"Hello World\")",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "What function is used to display text on the screen?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "print()", correct: true },
          { text: "show()", correct: false },
          { text: "display()", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "When printing text, what must you put around the text?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "Quotes \" \"", correct: true },
          { text: "Brackets [ ]", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this code output?\nprint(\"Codez\")",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "Codez", correct: true },
          { text: "\"Codez\"", correct: false },
          { text: "Error", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Print a message",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "# Write code to print exactly: I am learning\n____(\"I am learning\")",
          expectedOutput: "I am learning",
          hints: ["Use the print function.", "Make sure it looks exactly like: print(\"I am learning\")"],
          solutionCode: "print(\"I am learning\")"
        }
      },
      {
        type: "CODE",
        question: "Write it from scratch",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "# Print the word: Python\n",
          expectedOutput: "Python",
          hints: ["Type print(\"Python\")"],
          solutionCode: "print(\"Python\")"
        }
      },
      {
        type: "SELECT",
        question: "Why does `print(Hello)` (without quotes) cause an error?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "Because Python needs quotes to know it is text.", correct: true },
          { text: "Because Hello is spelled wrong.", correct: false }
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
            "You just learned how to use the `print()` function. This is the most common tool you will use to test your code!"
          ]
        }
      }
    ]
  },
  {
    id: 3,
    title: "Variables",
    unit_id: 1,
    order: 3,
    description: "Storing data in memory.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Remembering things",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "Games need to remember your score. Apps need to remember your username.",
            "To remember data in a program, we use something called a 'Variable'.",
            "Think of a variable as a labeled box where you can store information."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "Creating a variable",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "To create a variable, you type a name, an equals sign `=`, and the data you want to store.",
            "Once stored, you can print the variable by using its name (without quotes!)."
          ],
          codeBlocks: [
            {
              code: "score = 100\nprint(score)",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "What is a variable?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "A way to store information in a program.", correct: true },
          { text: "A type of error.", correct: false },
          { text: "A way to display text on the screen.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "Which symbol is used to assign data to a variable?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "The equals sign (=)", correct: true },
          { text: "The plus sign (+)", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this code output?\nname = \"Alex\"\nprint(name)",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "Alex", correct: true },
          { text: "name", correct: false },
          { text: "\"Alex\"", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Store a number",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "# Create a variable named age and set it to 25\n____ = 25\nprint(age)",
          expectedOutput: "25",
          hints: ["Use the word 'age' before the equals sign."],
          solutionCode: "age = 25\nprint(age)"
        }
      },
      {
        type: "CODE",
        question: "Store and print",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "# Create a variable called points and set it to 50\n\n\n# Print the points variable\n",
          expectedOutput: "50",
          hints: ["points = 50", "print(points)"],
          solutionCode: "points = 50\nprint(points)"
        }
      },
      {
        type: "SELECT",
        question: "Why do we NOT put quotes around the variable name when printing it (e.g. `print(score)` instead of `print(\"score\")`)?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "Because quotes tell Python to print the literal word, not what's inside the box.", correct: true },
          { text: "Because variables only hold numbers.", correct: false }
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
            "Variables are the foundation of all programming. They allow your apps to be dynamic and remember user data!"
          ]
        }
      }
    ]
  },
  {
    id: 4,
    title: "Comments",
    unit_id: 1,
    order: 4,
    description: "Leaving notes in your code.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Notes to yourself",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "Sometimes you want to leave a note in your code to explain what it does to other programmers (or to yourself in the future!).",
            "We do this using Comments. Python completely ignores comments when running the program."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "The hashtag symbol",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "To write a comment in Python, use the hashtag symbol `#`.",
            "Anything typed after the `#` on that line will be ignored by the computer."
          ],
          codeBlocks: [
            {
              code: "# This calculates the final score\nscore = 100\nprint(score) # This prints the score",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "What is a comment used for?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "To leave notes in the code for humans to read.", correct: true },
          { text: "To make the computer run faster.", correct: false },
          { text: "To store data like a variable.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "Which symbol creates a comment in Python?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "#", correct: true },
          { text: "/", correct: false },
          { text: "!", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this code output?\n# print(\"Apple\")\nprint(\"Banana\")",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "Banana", correct: true },
          { text: "Apple\nBanana", correct: false },
          { text: "Apple", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Write a comment",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "____ This is a comment\nprint(\"Hello\")",
          expectedOutput: "Hello",
          hints: ["Use the # symbol at the start of the line."],
          solutionCode: "# This is a comment\nprint(\"Hello\")"
        }
      },
      {
        type: "CODE",
        question: "Comment out code",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "print(\"Print me\")\nprint(\"Do NOT print me\")",
          expectedOutput: "Print me",
          hints: ["Put a # symbol in front of the second print statement."],
          solutionCode: "print(\"Print me\")\n# print(\"Do NOT print me\")"
        }
      },
      {
        type: "SELECT",
        question: "If a line of code has a bug, can a comment help?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "Yes, you can 'comment out' the broken line so Python ignores it while you fix other things.", correct: true },
          { text: "No, comments have no effect on code execution.", correct: false }
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
            "Good programmers use comments to explain complex logic so their teammates can understand it easily."
          ]
        }
      }
    ]
  },
  {
    id: 5,
    title: "Syntax and Errors",
    unit_id: 1,
    order: 5,
    description: "Understanding mistakes.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Don't panic!",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "When you program, you WILL get errors. Even professional engineers see errors every single day.",
            "An error just means the computer didn't understand what you typed. It's like a typo in grammar."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "Syntax Errors",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "A 'Syntax Error' happens when you break the spelling or grammar rules of Python.",
            "Common mistakes include forgetting a closing parenthesis `)` or forgetting quotes around text."
          ],
          codeBlocks: [
            {
              code: "print(\"Hello\"  # Missing closing parenthesis!\nprnt(\"Hello\")  # Spelled print wrong!",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "What is a Syntax Error?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "A typo in the spelling or grammar of the code.", correct: true },
          { text: "A virus in the computer.", correct: false },
          { text: "When the internet disconnects.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "Are errors bad?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "No, they are normal. They just mean the computer needs you to fix a typo.", correct: true },
          { text: "Yes, you should never get an error.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What is wrong with this code? `print(Hello\")`",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "It is missing the starting quote.", correct: true },
          { text: "It is missing a closing parenthesis.", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Fix the syntax",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "# Fix the typo so this runs correctly\nprint(\"Success!\")\nprint(\"Failure\"",
          expectedOutput: "Success!\nFailure",
          hints: ["The second print is missing its closing parenthesis )."],
          solutionCode: "print(\"Success!\")\nprint(\"Failure\")"
        }
      },
      {
        type: "CODE",
        question: "Fix the spelling",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "# Fix the code to print correctly\nprit(\"I fixed it\")",
          expectedOutput: "I fixed it",
          hints: ["'print' is spelled with an 'n'."],
          solutionCode: "print(\"I fixed it\")"
        }
      },
      {
        type: "SELECT",
        question: "Why is Python so strict about spelling and grammar?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "Because computers cannot guess your intentions; they need exact instructions.", correct: true },
          { text: "Because Python is an old language.", correct: false }
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
            "Never fear errors! Read the error message carefully—it usually tells you exactly which line has the typo."
          ]
        }
      }
    ]
  },
  {
    id: 6,
    title: "Unit 1 Review",
    unit_id: 1,
    order: 6,
    description: "Mini project combining everything.",
    xp_reward: 20,
    challenges: [
      {
        type: "CONCEPT",
        question: "Putting it together",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "You've learned `print()`, variables, and comments.",
            "Let's combine them into a single script to verify your understanding."
          ]
        }
      },
      {
        type: "SELECT",
        question: "How do you display something to the user?",
        lesson_step: "comprehension",
        order: 2,
        options: [
          { text: "Using print()", correct: true },
          { text: "Using a variable", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What is used to leave a note for humans?",
        lesson_step: "fill_blank",
        order: 3,
        options: [
          { text: "The # symbol", correct: true },
          { text: "The = symbol", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What is used to store data?",
        lesson_step: "predict_output",
        order: 4,
        options: [
          { text: "A variable", correct: true },
          { text: "A comment", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "The Final Challenge",
        lesson_step: "independent_practice",
        order: 5,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "# Create a variable named hero and assign it the text \"Ninja\"\n\n\n# Print the hero variable\n",
          expectedOutput: "Ninja",
          hints: ["hero = \"Ninja\"", "print(hero)"],
          solutionCode: "hero = \"Ninja\"\nprint(hero)"
        }
      },
      {
        type: "CONCEPT",
        question: "Unit 1 Complete!",
        lesson_step: "recap",
        order: 6,
        content_metadata: {
          variant: "recap",
          icon: "check",
          paragraphs: [
            "Amazing job. You've mastered the foundational rules of Python. In Unit 2, we will explore Data Types!"
          ]
        }
      }
    ]
  }
];
