import { Lesson } from "../types";

export const pythonUnit2Lessons: Lesson[] = [
  {
    id: 7, // Placeholder ID, generator will dynamically adjust
    title: "What is a Variable?",
    unit_id: 2,
    order: 1,
    description: "Learn how programs remember things.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Memory Boxes",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "Imagine you are playing a video game. The game needs to remember your score, your health, and your name.",
            "To remember information, programs use 'Variables'.",
            "Think of a variable as a labeled box where you can store data."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "Creating a Variable",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "In Python, you create a variable by giving it a name, typing an equals sign `=`, and then writing the data.",
            "Once created, you can use the variable's name to use its data."
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
        question: "What is a variable in programming?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "A way to store and remember data in a program.", correct: true },
          { text: "A type of syntax error.", correct: false },
          { text: "A comment that the computer ignores.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "Which symbol is used to put data inside a variable?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "The equals sign (=)", correct: true },
          { text: "The plus sign (+)", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this code output?\npoints = 50\nprint(points)",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "50", correct: true },
          { text: "points", correct: false },
          { text: "Error", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Print a variable",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "lives = 3\n# Print the lives variable\n____(lives)",
          expectedOutput: "3",
          hints: ["Use the print() function."],
          solutionCode: "lives = 3\nprint(lives)"
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
          initialCode: "# We created a variable for you\nage = 25\n\n# Print the age variable\n",
          expectedOutput: "25",
          hints: ["Type print(age)"],
          solutionCode: "age = 25\nprint(age)"
        }
      },
      {
        type: "SELECT",
        question: "Why do we NOT put quotes around the variable name when printing it (e.g. `print(score)`)?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "Because quotes mean 'print this exact text', whereas no quotes means 'print what is inside this box'.", correct: true },
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
            "Variables are the foundation of dynamic programming. They let your app remember user data, scores, and text!"
          ]
        }
      }
    ]
  },
  {
    id: 8,
    title: "Creating Your First Variable",
    unit_id: 2,
    order: 2,
    description: "Write variables from scratch.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Building the box",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "In the last lesson, we gave you the variables.",
            "Now, it's time for you to create them yourself."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "The Assignment Operator",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "The equals sign `=` is formally called the 'Assignment Operator'.",
            "It takes whatever is on the RIGHT side and assigns it to the name on the LEFT side."
          ],
          codeBlocks: [
            {
              code: "gold = 500\nprint(gold)",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "In programming, what does `=` do?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "It assigns the value on the right to the variable on the left.", correct: true },
          { text: "It checks if two numbers are exactly equal.", correct: false },
          { text: "It creates a comment.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "If you want to create a variable named `level` and set it to 5, how do you write it?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "level = 5", correct: true },
          { text: "5 = level", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this code output?\nspeed = 120\nprint(\"speed\")",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "speed", correct: true },
          { text: "120", correct: false },
          { text: "Error", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Create a variable",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "# Create a variable named 'health' and set it to 100\n____ = 100\nprint(health)",
          expectedOutput: "100",
          hints: ["Write health on the left side of the equals sign."],
          solutionCode: "health = 100\nprint(health)"
        }
      },
      {
        type: "CODE",
        question: "Do it all yourself",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "# Create a variable named 'apples' and set it to 10\n\n\n# Print the apples variable\n",
          expectedOutput: "10",
          hints: ["apples = 10", "print(apples)"],
          solutionCode: "apples = 10\nprint(apples)"
        }
      },
      {
        type: "SELECT",
        question: "Why would `10 = apples` cause an error in Python?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "Because the variable name must always be on the left side of the equals sign.", correct: true },
          { text: "Because 10 is not a valid number.", correct: false }
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
            "Great! You now know how to create variables and assign them values. Remember: Name on the left, data on the right."
          ]
        }
      }
    ]
  },
  {
    id: 9,
    title: "Strings",
    unit_id: 2,
    order: 3,
    description: "Storing text data.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Text data",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "Variables don't just hold numbers. They can also hold text, like a player's name or an email address.",
            "In programming, a piece of text is called a 'String' (like a string of letters)."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "Using Quotes",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "Whenever you create a String, you must surround the text with quotes `\"\"`.",
            "This tells Python 'this is text data', not another variable name."
          ],
          codeBlocks: [
            {
              code: "name = \"Alice\"\nmessage = \"Welcome to the game!\"\nprint(name)",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "What is a String in Python?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "Text data surrounded by quotes.", correct: true },
          { text: "A number with decimals.", correct: false },
          { text: "A type of loop.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "If you want to store the word 'Hello' in a variable, how do you write the text?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "\"Hello\"", correct: true },
          { text: "Hello", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this code output?\ncity = \"Tokyo\"\nprint(city)",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "Tokyo", correct: true },
          { text: "\"Tokyo\"", correct: false },
          { text: "Error", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Create a String",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "# Create a variable named hero and set it to \"Ninja\"\nhero = ____\nprint(hero)",
          expectedOutput: "Ninja",
          hints: ["Make sure you use quotes around the word Ninja."],
          solutionCode: "hero = \"Ninja\"\nprint(hero)"
        }
      },
      {
        type: "CODE",
        question: "Write a String variable",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "# Create a variable named color and set it to \"Blue\"\n\n\n# Print the color variable\n",
          expectedOutput: "Blue",
          hints: ["color = \"Blue\"", "print(color)"],
          solutionCode: "color = \"Blue\"\nprint(color)"
        }
      },
      {
        type: "SELECT",
        question: "What happens if you write `name = Alice` without quotes?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "Python crashes, because it thinks Alice is another variable that hasn't been created yet.", correct: true },
          { text: "Python automatically adds the quotes for you.", correct: false }
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
            "Strings are everywhere! Passwords, emails, and tweets are all stored as Strings in code."
          ]
        }
      }
    ]
  },
  {
    id: 10,
    title: "Numbers (Integers & Floats)",
    unit_id: 2,
    order: 4,
    description: "Storing math data.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Different kinds of numbers",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "In Python, numbers are treated differently than text.",
            "Unlike strings, numbers do NOT use quotes.",
            "Python has two main types of numbers: whole numbers and decimal numbers."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "Integers and Floats",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "An **Integer** (int) is a whole number like `5` or `-10`.",
            "A **Float** is a number with a decimal point like `3.14` or `9.99`."
          ],
          codeBlocks: [
            {
              code: "age = 20        # This is an Integer\nprice = 19.99   # This is a Float\nprint(age)\nprint(price)",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "What is an Integer in Python?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "A whole number without a decimal point.", correct: true },
          { text: "A decimal number.", correct: false },
          { text: "A word wrapped in quotes.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What is the number `5.5` considered in Python?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "A Float", correct: true },
          { text: "An Integer", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this code output?\nx = 10.5\nprint(x)",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "10.5", correct: true },
          { text: "10", correct: false },
          { text: "Error", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Create a Float",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "# Create a variable named weight and set it to 55.5 (a Float)\nweight = ____\nprint(weight)",
          expectedOutput: "55.5",
          hints: ["Write 55.5 without quotes."],
          solutionCode: "weight = 55.5\nprint(weight)"
        }
      },
      {
        type: "CODE",
        question: "Write numbers",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "# Create an integer variable named year and set it to 2030\n\n\n# Print the year variable\n",
          expectedOutput: "2030",
          hints: ["year = 2030", "print(year)"],
          solutionCode: "year = 2030\nprint(year)"
        }
      },
      {
        type: "SELECT",
        question: "Why should you NEVER put quotes around a number you want to do math with (e.g. `\"10\"`)?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "Because quotes turn it into a String (text), and Python cannot do math on text easily.", correct: true },
          { text: "Because quotes make the number negative.", correct: false }
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
            "Integers and Floats are the math engines of Python. If you want to calculate a total, keep those quotes off!"
          ]
        }
      }
    ]
  },
  {
    id: 11,
    title: "Booleans",
    unit_id: 2,
    order: 5,
    description: "True or False data.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Yes or No",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "Sometimes a program just needs to know if something is True or False.",
            "Is the game over? True.",
            "Is the user logged in? False.",
            "This simple Yes/No data type is called a Boolean."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "True and False",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "In Python, a Boolean can only be `True` or `False`.",
            "Notice that they must start with a CAPITAL letter!",
            "They do not use quotes, because they are a special built-in data type, not a string."
          ],
          codeBlocks: [
            {
              code: "is_playing = True\ngame_over = False\nprint(is_playing)",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "What are the two possible values for a Boolean?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "True and False", correct: true },
          { text: "Yes and No", correct: false },
          { text: "1 and 2", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "Which of the following is written correctly in Python?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "True", correct: true },
          { text: "true", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this code output?\nis_raining = False\nprint(is_raining)",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "False", correct: true },
          { text: "is_raining", correct: false },
          { text: "Error", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Create a Boolean",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "# Create a variable named is_logged_in and set it to True\nis_logged_in = ____\nprint(is_logged_in)",
          expectedOutput: "True",
          hints: ["Write True with a capital T and no quotes."],
          solutionCode: "is_logged_in = True\nprint(is_logged_in)"
        }
      },
      {
        type: "CODE",
        question: "Write a Boolean",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "# Create a variable named is_admin and set it to False\n\n\n# Print the is_admin variable\n",
          expectedOutput: "False",
          hints: ["is_admin = False", "print(is_admin)"],
          solutionCode: "is_admin = False\nprint(is_admin)"
        }
      },
      {
        type: "SELECT",
        question: "What happens if you type `true` (lowercase) instead of `True`?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "Python crashes, because it only recognizes the capitalized version.", correct: true },
          { text: "It works perfectly.", correct: false }
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
            "Booleans will become incredibly powerful when we learn about 'If Statements' to make our code make decisions!"
          ]
        }
      }
    ]
  },
  {
    id: 12,
    title: "Changing Variable Values",
    unit_id: 2,
    order: 6,
    description: "Updating data in memory.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Variables can VARY",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "They are called variables because their data can vary (change) over time.",
            "If a player takes damage, their health variable needs to update!"
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "Overwriting data",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "To change a variable's value, you just assign it a new value using `=`. ",
            "Python throws away the old data and replaces it with the new data.",
            "Python reads code top-to-bottom, so the variable holds the newest value assigned before it is printed."
          ],
          codeBlocks: [
            {
              code: "score = 10\nscore = 50   # score is updated to 50!\nprint(score)",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "What happens when you assign a new value to an existing variable?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "The old value is thrown away and replaced by the new value.", correct: true },
          { text: "The new value is added to the old value.", correct: false },
          { text: "Python throws an error.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "Python executes code...",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "from top to bottom.", correct: true },
          { text: "from bottom to top.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this code output?\nx = 5\nx = 10\nprint(x)",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "10", correct: true },
          { text: "5", correct: false },
          { text: "Error", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Update the score",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "score = 10\n# Update the score to be 20\n____ = 20\n\nprint(score)",
          expectedOutput: "20",
          hints: ["Write score = 20"],
          solutionCode: "score = 10\nscore = 20\nprint(score)"
        }
      },
      {
        type: "CODE",
        question: "Reassign independently",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "name = \"Alice\"\n# Change the name variable to \"Bob\"\n\n\n# Print the name variable\n",
          expectedOutput: "Bob",
          hints: ["name = \"Bob\"", "print(name)"],
          solutionCode: "name = \"Alice\"\nname = \"Bob\"\nprint(name)"
        }
      },
      {
        type: "SELECT",
        question: "Can you change a variable from an Integer to a String? (e.g., `x = 5`, then `x = \"Hello\"`)",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "Yes! Python is 'dynamically typed', meaning a box can hold any type of data at any time.", correct: true },
          { text: "No, numbers must always stay numbers.", correct: false }
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
            "You can overwrite a variable as many times as you want. Python always uses the most recent value."
          ]
        }
      }
    ]
  },
  {
    id: 13,
    title: "Printing Multiple Variables",
    unit_id: 2,
    order: 7,
    description: "Combining outputs.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Putting sentences together",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "Often, you want to print a sentence that combines plain text with the data inside your variables.",
            "For example: 'Your score is 100'."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "Using Commas",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "The easiest way to print multiple things is to separate them with a comma `,` inside the `print()` function.",
            "Python automatically adds a space between the items for you!"
          ],
          codeBlocks: [
            {
              code: "score = 100\nprint(\"Your score is:\", score)",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "What symbol allows you to print multiple pieces of data in one `print()` statement?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "A comma (,)", correct: true },
          { text: "A dot (.)", correct: false },
          { text: "A hashtag (#)", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "When you use a comma in `print()`, does Python automatically add a space?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "Yes, Python adds a space between the items automatically.", correct: true },
          { text: "No, they will be squished together.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this code output?\nname = \"Leo\"\nprint(\"Hi\", name)",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "Hi Leo", correct: true },
          { text: "HiLeo", correct: false },
          { text: "Hi name", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Combine text and a variable",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "age = 25\n# Print: I am 25\nprint(\"I am\"____ age)",
          expectedOutput: "I am 25",
          hints: ["Use a comma to separate the string and the variable."],
          solutionCode: "age = 25\nprint(\"I am\", age)"
        }
      },
      {
        type: "CODE",
        question: "Combine independently",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "weather = \"sunny\"\n# Print: Today is sunny\n\n",
          expectedOutput: "Today is sunny",
          hints: ["print(\"Today is\", weather)"],
          solutionCode: "weather = \"sunny\"\nprint(\"Today is\", weather)"
        }
      },
      {
        type: "SELECT",
        question: "Can you use commas to combine variables of different types (like a String and an Integer)?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "Yes, the comma works perfectly with mixed data types.", correct: true },
          { text: "No, you can only combine Strings with Strings.", correct: false }
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
            "Using commas makes it super easy to format nice messages for the user. We will learn even cooler ways to do this later!"
          ]
        }
      }
    ]
  },
  {
    id: 14,
    title: "Variable Naming Rules",
    unit_id: 2,
    order: 8,
    description: "Naming things properly.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Naming is hard",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "In Python, you can name a variable almost anything.",
            "But there are a few strict rules you MUST follow, otherwise Python will crash."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "The Rules",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "1. NO SPACES allowed. (Use underscores instead: `my_score`)",
            "2. Cannot START with a number. (`1player` is bad. `player1` is good.)",
            "3. Case matters! (`score` and `Score` are two entirely different variables.)"
          ],
          codeBlocks: [
            {
              code: "my_score = 100   # Good!\nhigh score = 10  # BAD (Space)\n1st_place = True # BAD (Starts with number)",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "Are spaces allowed in variable names?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "No, never.", correct: true },
          { text: "Yes, spaces are fine.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What is the standard way to separate words in Python variable names?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "Using underscores (like my_variable).", correct: true },
          { text: "Using dashes (like my-variable).", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "Which of these is a VALID variable name?",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "player_one = \"Bob\"", correct: true },
          { text: "1player = \"Bob\"", correct: false },
          { text: "player one = \"Bob\"", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Fix the naming error",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "# Fix the variable name so it doesn't crash\nmy age = 20\nprint(my age)",
          expectedOutput: "20",
          hints: ["Replace the spaces with underscores."],
          solutionCode: "my_age = 20\nprint(my_age)"
        }
      },
      {
        type: "CODE",
        question: "Fix the number error",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "# Fix the variable name so it doesn't start with a number\n1st_place = \"Alice\"\nprint(1st_place)",
          expectedOutput: "Alice",
          hints: ["Change 1st_place to something like place_1"],
          solutionCode: "place_1 = \"Alice\"\nprint(place_1)"
        }
      },
      {
        type: "SELECT",
        question: "If you create `name = \"Dan\"` and try to `print(Name)`, what happens?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "It crashes because Python is case-sensitive (name and Name are different).", correct: true },
          { text: "It prints Dan.", correct: false }
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
            "Programmers use underscores so often that they have a special name for this format: `snake_case`! Always use snake_case in Python."
          ]
        }
      }
    ]
  },
  {
    id: 15,
    title: "Common Beginner Errors",
    unit_id: 2,
    order: 9,
    description: "Learn to read error messages.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Embracing Errors",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "Errors are not failures. They are just the computer asking for clarification.",
            "Let's look at the most common error you will see when working with variables."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "NameError",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "A `NameError` occurs when you try to use a variable that hasn't been created yet.",
            "This usually happens because of a typo. You might create `score`, but accidentally try to print `socre`."
          ],
          codeBlocks: [
            {
              code: "score = 10\nprint(socre) # NameError: name 'socre' is not defined",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "What causes a NameError?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "Trying to use a variable that doesn't exist (usually due to a typo).", correct: true },
          { text: "Using spaces in a variable name.", correct: false },
          { text: "Forgetting closing quotes on a string.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "Does Python read variables correctly if you spell them wrong?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "No, the spelling must be exactly identical.", correct: true },
          { text: "Yes, it guesses what you meant.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What error will this code throw? `print(my_name)` (Assume we never assigned anything to my_name)",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "NameError", correct: true },
          { text: "SyntaxError", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Fix the NameError",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "points = 100\n# Fix the typo in the print statement to avoid a NameError\nprint(pionts)",
          expectedOutput: "100",
          hints: ["Change pionts to points."],
          solutionCode: "points = 100\nprint(points)"
        }
      },
      {
        type: "CODE",
        question: "Fix another error",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "# The variable is not defined before printing!\n# Make this code work by assigning a value to city first.\n\nprint(city)",
          expectedOutput: "Paris",
          hints: ["Add city = \"Paris\" on line 1."],
          solutionCode: "city = \"Paris\"\nprint(city)"
        }
      },
      {
        type: "SELECT",
        question: "If you get a NameError, what is the FIRST thing you should check?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "Check your spelling and capitalization of the variable.", correct: true },
          { text: "Check if you have internet access.", correct: false }
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
            "NameErrors are incredibly common, but very easy to fix. Just look for the typo!"
          ]
        }
      }
    ]
  },
  {
    id: 16,
    title: "Mini Project: Profile Generator",
    unit_id: 2,
    order: 10,
    description: "Combine everything you've learned.",
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
            "It's time for your first mini-project!",
            "You are going to build a personal profile generator that stores multiple variables and prints an introduction."
          ]
        }
      },
      {
        type: "SELECT",
        question: "To store a name, what data type should you use?",
        lesson_step: "comprehension",
        order: 2,
        options: [
          { text: "String (in quotes)", correct: true },
          { text: "Integer", correct: false },
          { text: "Boolean", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "To store an age, what data type should you use?",
        lesson_step: "fill_blank",
        order: 3,
        options: [
          { text: "Integer (no quotes)", correct: true },
          { text: "String", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "How do you combine a word and a variable in a print statement?",
        lesson_step: "predict_output",
        order: 4,
        options: [
          { text: "print(\"Name:\", name)", correct: true },
          { text: "print(\"Name:\" name)", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Build the Profile",
        lesson_step: "independent_practice",
        order: 5,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "# Create a variable 'name' with the string \"Alex\"\n# Create a variable 'age' with the integer 20\n# Create a variable 'is_student' with the boolean True\n\n\n\n# Print \"Name:\", name\n# Print \"Age:\", age\n# Print \"Student:\", is_student\n",
          expectedOutput: "Name: Alex\nAge: 20\nStudent: True",
          hints: ["name = \"Alex\"", "age = 20", "is_student = True", "print(\"Name:\", name)"],
          solutionCode: "name = \"Alex\"\nage = 20\nis_student = True\nprint(\"Name:\", name)\nprint(\"Age:\", age)\nprint(\"Student:\", is_student)"
        }
      },
      {
        type: "CONCEPT",
        question: "Unit 2 Complete!",
        lesson_step: "recap",
        order: 6,
        content_metadata: {
          variant: "recap",
          icon: "check",
          paragraphs: [
            "Excellent work! You've learned how to create, modify, and display variables of all data types.",
            "You are now ready to make your programs interactive with Control Flow!"
          ]
        }
      }
    ]
  }
];
