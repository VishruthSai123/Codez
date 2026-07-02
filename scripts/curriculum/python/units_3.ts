import { Lesson } from "../types";

export const pythonUnit3Lessons: Lesson[] = [
  {
    id: 17, // Placeholder, dynamic ID used in generator
    title: "Programs That Talk Back",
    unit_id: 3,
    order: 1,
    description: "Learn how to make software interactive.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Interactive Software",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "So far, our programs just run top-to-bottom and finish.",
            "But real software is interactive! A game waits for you to press a button. A login screen waits for you to type a password.",
            "In this unit, we will learn how to make our programs pause and ask the user for information."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "The Input Function",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "To ask the user for information, we use the `input()` function.",
            "When Python sees `input()`, it completely stops the program and waits for the user to type something and press Enter."
          ],
          codeBlocks: [
            {
              code: "print(\"I am waiting...\")\ninput()",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "What does the `input()` function do?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "It pauses the program and waits for the user to type something.", correct: true },
          { text: "It prints a variable to the screen.", correct: false },
          { text: "It creates a comment.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "When Python is waiting on `input()`, what must the user press to continue?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "The Enter key", correct: true },
          { text: "The Spacebar", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "If a program has `print(\"Hello\")` followed by `input()`, what happens?",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "It prints 'Hello', then pauses to wait for the user.", correct: true },
          { text: "It waits for the user, then prints 'Hello'.", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Use input()",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "# Write the input function below\n____()",
          expectedOutput: "", // Editor might handle standard input automatically or bypass
          hints: ["Write input()"],
          solutionCode: "input()"
        }
      },
      {
        type: "CODE",
        question: "Independent Input",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "print(\"Press enter to start the game...\")\n# Pause the game below\n\nprint(\"Game Started!\")",
          expectedOutput: "Press enter to start the game...\nGame Started!",
          hints: ["Type input() on line 3"],
          solutionCode: "print(\"Press enter to start the game...\")\ninput()\nprint(\"Game Started!\")"
        }
      },
      {
        type: "SELECT",
        question: "Why is `input()` important for making games or apps?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "Because it allows the user to interact with the program.", correct: true },
          { text: "Because it makes the computer run faster.", correct: false }
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
            "You just learned how to make your program wait for the user! But right now, we aren't saving what they type. Let's learn how to do that next."
          ]
        }
      }
    ]
  },
  {
    id: 18,
    title: "Using input()",
    unit_id: 3,
    order: 2,
    description: "Prompting the user with text.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Asking a specific question",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "Just using `input()` is confusing for the user, because they just see a blinking cursor and don't know what to type.",
            "We can actually put a String inside the `input()` function to ask them a specific question!"
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "The Prompt String",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "Inside the parentheses of `input()`, you can put a String in quotes.",
            "Python will print this String to the screen right before it pauses. This is called a 'prompt'."
          ],
          codeBlocks: [
            {
              code: "input(\"What is your name? \")",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "What is the purpose of the text inside the `input()` function?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "To ask the user a question so they know what to type.", correct: true },
          { text: "To create a variable.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "Because the prompt is text, it must be surrounded by...",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "Quotes \" \"", correct: true },
          { text: "Hashtags #", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this code output before pausing?\ninput(\"Enter your age: \")",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "Enter your age: ", correct: true },
          { text: "age", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Write a prompt",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "# Ask the user: Enter your password: \ninput(____)",
          expectedOutput: "Enter your password: ",
          hints: ["Use quotes inside the parentheses."],
          solutionCode: "input(\"Enter your password: \")"
        }
      },
      {
        type: "CODE",
        question: "Independent Prompting",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "# Ask the user: What is your quest? \n\n",
          expectedOutput: "What is your quest? ",
          hints: ["Type input(\"What is your quest? \")"],
          solutionCode: "input(\"What is your quest? \")"
        }
      },
      {
        type: "SELECT",
        question: "Why do programmers usually put a space at the end of the prompt? (e.g., `\"Name: \"` instead of `\"Name:\"`)",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "So that when the user types, their text isn't squished directly against the colon.", correct: true },
          { text: "Because Python requires it.", correct: false }
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
            "Now the user knows what to do! Next, we need to actually save the data they type into memory."
          ]
        }
      }
    ]
  },
  {
    id: 19,
    title: "Saving User Input",
    unit_id: 3,
    order: 3,
    description: "Combining variables and input().",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Catching the data",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "When the user types their name and presses Enter, that data vanishes into thin air unless we 'catch' it.",
            "We catch it using a Variable!"
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "Assignment with input",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "Just like assigning a string to a variable (`name = \"Bob\"`), we can assign the result of the `input()` function to a variable.",
            "Python will run `input()`, wait for the user, and then store whatever they typed directly into the variable on the left."
          ],
          codeBlocks: [
            {
              code: "name = input(\"What is your name? \")\nprint(\"Hello\", name)",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "How do you save the user's input so you can use it later?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "By assigning the input() function to a variable using the = sign.", correct: true },
          { text: "By printing it immediately.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "In `color = input(\"Favorite color? \")`, what does `color` hold?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "Whatever the user types in.", correct: true },
          { text: "The word \"color\".", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "Which of these is correctly saving input?",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "food = input(\"Favorite food? \")", correct: true },
          { text: "input(\"Favorite food? \") = food", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Catch the input",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "# Save the user's city into the 'city' variable\n____ = input(\"What city do you live in? \")\nprint(\"You live in\", city)",
          expectedOutput: "What city do you live in? \nYou live in ",
          hints: ["Write 'city' on the left side of the equals sign."],
          solutionCode: "city = input(\"What city do you live in? \")\nprint(\"You live in\", city)"
        }
      },
      {
        type: "CODE",
        question: "Write it yourself",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "# 1. Create a variable called 'animal'\n# 2. Assign it to input(\"Favorite animal? \")\n\n\n# Print the animal variable\n",
          expectedOutput: "Favorite animal? \n",
          hints: ["animal = input(\"Favorite animal? \")", "print(animal)"],
          solutionCode: "animal = input(\"Favorite animal? \")\nprint(animal)"
        }
      },
      {
        type: "SELECT",
        question: "What happens if you do NOT assign `input()` to a variable?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "The program will ask the question, but the answer will be lost immediately.", correct: true },
          { text: "It causes an error.", correct: false }
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
            "This is a massive milestone! You are now writing software that actually remembers what the user tells it."
          ]
        }
      }
    ]
  },
  {
    id: 20,
    title: "Why input() Returns Text",
    unit_id: 3,
    order: 4,
    description: "Understanding data types from input.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Everything is text",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "There is one very sneaky rule about `input()` that catches every beginner off guard.",
            "Whenever a user types something into `input()`, Python ALWAYS treats it as a String (Text)... even if they type a number!"
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "The \"5\" vs 5 problem",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "If a user types `5`, Python doesn't save the Integer `5`. It saves the String `\"5\"`.",
            "You cannot do math with Strings. If you try to add `\"5\" + \"5\"`, Python just glues the text together to get `\"55\"`!"
          ],
          codeBlocks: [
            {
              code: "age = input(\"Age: \")   # User types 10\nprint(age + 5)         # ERROR! Cannot add text to a number.",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "What data type does `input()` ALWAYS give you?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "A String (Text)", correct: true },
          { text: "An Integer (Number)", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "If the user types `100` into an input prompt, what is actually stored in the variable?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "The string \"100\"", correct: true },
          { text: "The integer 100", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What happens if you try to do math (like adding 10) to a String?",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "Python throws a TypeError because it can't do math on text.", correct: true },
          { text: "It does the math successfully.", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "See the error yourself",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "money = \"20\"\n# Try to add 5 to the money string. See the error!\nprint(money + ____)",
          expectedOutput: "", // Will throw TypeError
          hints: ["Just write 5"],
          solutionCode: "money = \"20\"\nprint(money + 5)"
        }
      },
      {
        type: "CODE",
        question: "String concatenation",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "a = \"2\"\nb = \"3\"\n# Print a + b to see how strings glue together!\n\n",
          expectedOutput: "23",
          hints: ["print(a + b)"],
          solutionCode: "a = \"2\"\nb = \"3\"\nprint(a + b)"
        }
      },
      {
        type: "SELECT",
        question: "Why did `\"2\" + \"3\"` output `\"23\"`?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "Because they are Strings (text). Adding text just squishes the letters together.", correct: true },
          { text: "Because math is broken.", correct: false }
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
            "If `input()` always gives us text, how do we build a calculator? We have to convert it! Let's learn how in the next lesson."
          ]
        }
      }
    ]
  },
  {
    id: 21,
    title: "Converting with int()",
    unit_id: 3,
    order: 5,
    description: "Casting Strings to Integers.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Magical Conversion",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "To do math with user input, we need a way to magically transform the String `\"5\"` into the Integer `5`.",
            "Python has a built-in tool just for this!"
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "The int() function",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "You can convert text into an Integer using the `int()` function.",
            "Put the text (or variable) inside the parentheses, and `int()` will spit out a real math number."
          ],
          codeBlocks: [
            {
              code: "text_number = \"10\"\nreal_number = int(text_number)\nprint(real_number + 5) # Outputs 15!",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "What does the `int()` function do?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "It converts a String into an Integer (whole number).", correct: true },
          { text: "It makes the number negative.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "If `x = \"20\"`, how do you convert it to an integer?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "int(x)", correct: true },
          { text: "number(x)", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this code output?\nx = int(\"4\")\nprint(x + 1)",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "5", correct: true },
          { text: "41", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Convert the string",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "score = \"50\"\n# Convert the score to an integer\nmath_score = ____(score)\nprint(math_score + 10)",
          expectedOutput: "60",
          hints: ["Use the int() function."],
          solutionCode: "score = \"50\"\nmath_score = int(score)\nprint(math_score + 10)"
        }
      },
      {
        type: "CODE",
        question: "Combine with input",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "# 1. Ask for age: age_text = input(\"Age: \")\n# 2. Convert it: age_num = int(age_text)\n# 3. Print age_num + 5\n\n\n",
          expectedOutput: "Age: \n",
          hints: ["age_text = input(\"Age: \")", "age_num = int(age_text)", "print(age_num + 5)"],
          solutionCode: "age_text = input(\"Age: \")\nage_num = int(age_text)\nprint(age_num + 5)"
        }
      },
      {
        type: "SELECT",
        question: "What happens if you try to do `int(\"Apple\")`?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "Python throws a ValueError, because \"Apple\" cannot be turned into a number.", correct: true },
          { text: "It converts it to 0.", correct: false }
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
            "We call this 'Type Casting'. You cast a spell on a String to turn it into an Integer!"
          ]
        }
      }
    ]
  },
  {
    id: 22,
    title: "Converting with float()",
    unit_id: 3,
    order: 6,
    description: "Casting Strings to Floats.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Decimal Conversion",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "What if you ask the user for their weight, and they type `150.5`?",
            "If you use `int()`, Python will crash because integers cannot have decimals.",
            "We need a different converter for decimal numbers."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "The float() function",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "To convert text into a decimal number, we use the `float()` function.",
            "It works exactly like `int()`, but it allows decimal points."
          ],
          codeBlocks: [
            {
              code: "text_price = \"9.99\"\nreal_price = float(text_price)\nprint(real_price + 1.00)",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "What does `float()` do?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "Converts text into a decimal number.", correct: true },
          { text: "Converts text into a whole number.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "If a user might type a decimal (like a price or weight), which function should you use?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "float()", correct: true },
          { text: "int()", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this code output?\nx = float(\"5.5\")\nprint(x + 0.5)",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "6.0", correct: true },
          { text: "5.50.5", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Convert to Float",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "price_text = \"19.99\"\n# Convert to float\nprice = ____(price_text)\nprint(price)",
          expectedOutput: "19.99",
          hints: ["Use the float() function."],
          solutionCode: "price_text = \"19.99\"\nprice = float(price_text)\nprint(price)"
        }
      },
      {
        type: "CODE",
        question: "Independent Float",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "speed_text = \"65.5\"\n# Convert speed_text to a float and save it in a variable named speed\n\n# Print speed\n",
          expectedOutput: "65.5",
          hints: ["speed = float(speed_text)", "print(speed)"],
          solutionCode: "speed_text = \"65.5\"\nspeed = float(speed_text)\nprint(speed)"
        }
      },
      {
        type: "SELECT",
        question: "What happens if you use `float(\"10\")` on a whole number?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "It converts it to 10.0", correct: true },
          { text: "It crashes.", correct: false }
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
            "Use `int()` for things you count (lives, levels, apples). Use `float()` for things you measure (speed, price, weight)!"
          ]
        }
      }
    ]
  },
  {
    id: 23,
    title: "Addition & Subtraction",
    unit_id: 3,
    order: 7,
    description: "Basic arithmetic operations.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Math time",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "Python is secretly just a giant, incredibly powerful calculator.",
            "You can use it to perform any mathematical operation instantly."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "Plus and Minus",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "Addition uses the `+` symbol.",
            "Subtraction uses the `-` symbol.",
            "You can use them on pure numbers, or on variables that hold numbers."
          ],
          codeBlocks: [
            {
              code: "lives = 3\nlives = lives + 1\nprint(lives)  # Outputs 4",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "Which symbol is used for subtraction?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "The minus sign (-)", correct: true },
          { text: "The slash (/)", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "To add 10 to a variable `score`, you would write: score + ___",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "10", correct: true },
          { text: "score", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this code output?\napples = 10\napples = apples - 2\nprint(apples)",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "8", correct: true },
          { text: "10", correct: false },
          { text: "-2", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Subtracting health",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "health = 100\ndamage = 20\n# Subtract damage from health\nhealth = health ____ damage\nprint(health)",
          expectedOutput: "80",
          hints: ["Use the - operator."],
          solutionCode: "health = 100\ndamage = 20\nhealth = health - damage\nprint(health)"
        }
      },
      {
        type: "CODE",
        question: "Add it up",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "a = 5\nb = 10\n# Create a variable 'total' that adds a and b together\n\n\n# Print the total\n",
          expectedOutput: "15",
          hints: ["total = a + b", "print(total)"],
          solutionCode: "a = 5\nb = 10\ntotal = a + b\nprint(total)"
        }
      },
      {
        type: "SELECT",
        question: "In the code `score = score + 1`, why do we put `score` on both sides?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "Because we take the OLD value (on the right), add 1, and save it into the NEW value (on the left).", correct: true },
          { text: "Because Python requires all variables to be typed twice.", correct: false }
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
            "Updating variables based on their old values (`x = x + 1`) is something you will do in almost every game or app you build!"
          ]
        }
      }
    ]
  },
  {
    id: 24,
    title: "Multiplication & Division",
    order: 8,
    unit_id: 3,
    description: "Multiply and divide numbers.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Scaling up and down",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "We have addition and subtraction. Now let's multiply and divide.",
            "Keyboards don't have standard multiply or divide keys (like × or ÷), so programming uses special symbols."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "Stars and Slashes",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "Multiplication uses the asterisk `*` (Shift+8).",
            "Division uses the forward slash `/` (near the shift key)."
          ],
          codeBlocks: [
            {
              code: "print(5 * 2)  # Outputs 10\nprint(10 / 2) # Outputs 5.0",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "Which symbol is used for multiplication?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "*", correct: true },
          { text: "x", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "Which symbol is used for division?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "/", correct: true },
          { text: "\\", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this code output?\nprint(4 * 3)",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "12", correct: true },
          { text: "7", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Double the score",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "score = 50\n# Multiply the score by 2\nscore = score ____ 2\nprint(score)",
          expectedOutput: "100",
          hints: ["Use the * symbol."],
          solutionCode: "score = 50\nscore = score * 2\nprint(score)"
        }
      },
      {
        type: "CODE",
        question: "Divide it",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "money = 100\n# Create a variable 'half' that divides money by 2\n\n\n# Print half\n",
          expectedOutput: "50.0",
          hints: ["half = money / 2", "print(half)"],
          solutionCode: "money = 100\nhalf = money / 2\nprint(half)"
        }
      },
      {
        type: "SELECT",
        question: "Did you notice that division `100 / 2` resulted in `50.0` (a Float)?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "Yes, standard division in Python ALWAYS returns a Float, even if the numbers divide perfectly.", correct: true },
          { text: "It's a glitch.", correct: false }
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
            "Remember: `*` for multiply, `/` for divide. Standard division always yields a decimal (Float)."
          ]
        }
      }
    ]
  },
  {
    id: 25,
    title: "Floor Division & Modulus",
    order: 9,
    unit_id: 3,
    description: "Advanced division operations.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Remainders",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "Standard division returns a decimal (Float).",
            "But sometimes you want to divide things whole, like splitting 10 slices of pizza among 3 people.",
            "Everyone gets 3 slices (Floor Division), and 1 slice is left over (Modulus)."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "// and %",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "Floor Division `//` divides the numbers and drops the decimal, leaving only the whole integer.",
            "Modulus `%` divides the numbers and returns ONLY the remainder."
          ],
          codeBlocks: [
            {
              code: "print(10 // 3) # Outputs 3\nprint(10 % 3)  # Outputs 1 (the leftover slice)",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "What does the Modulus `%` operator do?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "It returns the remainder of a division.", correct: true },
          { text: "It turns a number into a percentage.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "Which operator drops the decimal and gives you a whole integer?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "Floor Division //", correct: true },
          { text: "Standard Division /", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this code output?\nprint(5 % 2)",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "1 (Because 2 goes into 5 twice, with 1 left over)", correct: true },
          { text: "2.5", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Find the remainder",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "# Find the remainder of 15 divided by 4\nremainder = 15 ____ 4\nprint(remainder)",
          expectedOutput: "3",
          hints: ["Use the % symbol."],
          solutionCode: "remainder = 15 % 4\nprint(remainder)"
        }
      },
      {
        type: "CODE",
        question: "Floor it",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "# Use floor division to divide 20 by 6 (should result in 3)\nresult = \n\nprint(result)",
          expectedOutput: "3",
          hints: ["result = 20 // 6"],
          solutionCode: "result = 20 // 6\nprint(result)"
        }
      },
      {
        type: "SELECT",
        question: "Programmers often use `num % 2`. If `num % 2` results in 0, what does that tell us about the number?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "The number is Even (because it divides by 2 perfectly with 0 remainder).", correct: true },
          { text: "The number is Odd.", correct: false }
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
            "Modulus `%` is an incredible tool. You will use it to check for even/odd numbers, find leap years, and cycle through arrays!"
          ]
        }
      }
    ]
  },
  {
    id: 26,
    title: "Exponent Operator",
    order: 10,
    unit_id: 3,
    description: "Calculating powers.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "To the power of...",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "If you want to multiply a number by itself multiple times, you could write `2 * 2 * 2 * 2`.",
            "But Python has a much faster way: Exponents!"
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "Double Stars",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "The Exponent operator is two asterisks: `**`.",
            "`3 ** 2` means '3 to the power of 2' (3 squared)."
          ],
          codeBlocks: [
            {
              code: "print(5 ** 2) # 5 * 5 = 25\nprint(2 ** 3) # 2 * 2 * 2 = 8",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "Which symbol is used for exponents (powers) in Python?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "**", correct: true },
          { text: "^", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What does `10 ** 2` calculate?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "10 squared (10 * 10)", correct: true },
          { text: "10 times 2 (10 * 2)", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this code output?\nprint(4 ** 2)",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "16", correct: true },
          { text: "8", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Cube a number",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "# Calculate 3 to the power of 3\nresult = 3 ____ 3\nprint(result)",
          expectedOutput: "27",
          hints: ["Use the ** operator."],
          solutionCode: "result = 3 ** 3\nprint(result)"
        }
      },
      {
        type: "CODE",
        question: "Big numbers",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "# Print 10 to the power of 4\n\n",
          expectedOutput: "10000",
          hints: ["print(10 ** 4)"],
          solutionCode: "print(10 ** 4)"
        }
      },
      {
        type: "SELECT",
        question: "Is `**` the same as `^` in Python?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "No, ^ is used for something entirely different (bitwise XOR). Always use ** for math exponents.", correct: true },
          { text: "Yes, they do the same thing.", correct: false }
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
            "You now know all the primary mathematical operators in Python!"
          ]
        }
      }
    ]
  },
  {
    id: 27,
    title: "Order of Operations",
    order: 11,
    unit_id: 3,
    description: "PEMDAS in Python.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Math Rules",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "If you have a complex equation like `10 + 5 * 2`, what happens first?",
            "Python follows the strict mathematical Order of Operations, just like you learned in school."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "PEMDAS",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "Parentheses `()` always happen first.",
            "Exponents `**` happen second.",
            "Multiplication/Division `*`, `/` happen third.",
            "Addition/Subtraction `+`, `-` happen last."
          ],
          codeBlocks: [
            {
              code: "print(10 + 5 * 2)   # Multiplication first: 10 + 10 = 20\nprint((10 + 5) * 2) # Parentheses first: 15 * 2 = 30",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "Which operation will Python calculate FIRST in any equation?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "Whatever is inside Parentheses ()", correct: true },
          { text: "Addition", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "Does Multiplication happen before Addition?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "Yes", correct: true },
          { text: "No", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this code output?\nprint(5 + 2 * 3)",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "11", correct: true },
          { text: "21", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Force addition first",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "# Add parentheses so the addition happens FIRST, resulting in 20\nresult = 5 + 5 * 2\nprint(result)",
          expectedOutput: "20",
          hints: ["Put ( ) around 5 + 5"],
          solutionCode: "result = (5 + 5) * 2\nprint(result)"
        }
      },
      {
        type: "CODE",
        question: "Complex equation",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "# Print the result of: 10 minus 2, multiplied by 5\n\n",
          expectedOutput: "40",
          hints: ["print((10 - 2) * 5)"],
          solutionCode: "print((10 - 2) * 5)"
        }
      },
      {
        type: "SELECT",
        question: "Why should you use parentheses even if the order of operations would be correct anyway?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "It makes your code easier for humans to read and understand.", correct: true },
          { text: "It makes the computer run faster.", correct: false }
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
            "Parentheses are your best friend. When in doubt, wrap it in parentheses to guarantee it executes exactly the way you want it to."
          ]
        }
      }
    ]
  },
  {
    id: 28,
    title: "Mini Project: Interactive Calculator",
    order: 12,
    unit_id: 3,
    description: "Build a real calculator.",
    xp_reward: 20,
    challenges: [
      {
        type: "CONCEPT",
        question: "The Ultimate Challenge",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "It's time to build your first truly interactive application.",
            "You are going to build a calculator that asks the user for two numbers, converts them, adds them, and prints the result."
          ]
        }
      },
      {
        type: "SELECT",
        question: "What function do you use to ask the user for a number?",
        lesson_step: "comprehension",
        order: 2,
        options: [
          { text: "input()", correct: true },
          { text: "print()", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What must you do to the result of `input()` before you can do math with it?",
        lesson_step: "fill_blank",
        order: 3,
        options: [
          { text: "Convert it using int() or float()", correct: true },
          { text: "Nothing, you can use it immediately.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "Which of these is the correct way to print a variable alongside text?",
        lesson_step: "predict_output",
        order: 4,
        options: [
          { text: "print(\"Total:\", total)", correct: true },
          { text: "print(\"Total:\" total)", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Build the Calculator",
        lesson_step: "independent_practice",
        order: 5,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "# 1. Ask for a number and save as text1\n# 2. Ask for a second number and save as text2\n# 3. Convert text1 to an integer (num1)\n# 4. Convert text2 to an integer (num2)\n# 5. Add them together and save as total\n# 6. Print \"The total is:\", total\n\n",
          expectedOutput: "The total is: 0", // Can vary based on runner logic, we'll assume valid inputs in a real test
          hints: ["text1 = input(\"Number 1: \")", "text2 = input(\"Number 2: \")", "num1 = int(text1)", "total = num1 + num2"],
          solutionCode: "text1 = input(\"Number 1: \")\ntext2 = input(\"Number 2: \")\nnum1 = int(text1)\nnum2 = int(text2)\ntotal = num1 + num2\nprint(\"The total is:\", total)"
        }
      },
      {
        type: "CONCEPT",
        question: "Unit 3 Complete!",
        lesson_step: "recap",
        order: 6,
        content_metadata: {
          variant: "recap",
          icon: "check",
          paragraphs: [
            "Incredible! You just built your first interactive app.",
            "You know how to get input, convert data, and do math.",
            "Next up: Giving your apps a 'Brain' using Conditional Statements (If/Else)!"
          ]
        }
      }
    ]
  }
];
