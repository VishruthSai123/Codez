import { Lesson } from "../types";

export const pythonUnit6Lessons: Lesson[] = [
  {
    id: 53, // Placeholder ID
    title: "Why Functions Exist",
    unit_id: 6,
    order: 1,
    description: "The problem with copy-pasting code.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "The Copy-Paste Nightmare",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "Imagine you write a 20-line block of code to calculate a user's taxes.",
            "Later in your program, you need to calculate taxes again. Do you copy and paste those 20 lines?",
            "What if you find a bug in the math? Now you have to find and fix it in 50 different places!"
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "DRY: Don't Repeat Yourself",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "A core rule of programming is DRY (Don't Repeat Yourself).",
            "To avoid repeating ourselves, we bundle code into a named block called a 'Function'.",
            "Whenever we need that code, we just call its name, and Python runs the entire block for us!"
          ]
        }
      },
      {
        type: "SELECT",
        question: "What is a major problem with copy-pasting the same block of code multiple times?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "If you need to change or fix the code, you have to find every single copy you made.", correct: true },
          { text: "It runs too fast.", correct: false },
          { text: "Python will delete it.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What does the programming rule DRY stand for?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "Don't Repeat Yourself", correct: true },
          { text: "Do Repeat Yourself", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "Instead of copying code, we bundle it into a named block called a...",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "Function", correct: true },
          { text: "String", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "The Built-in Functions",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "# You already know some built-in functions that Python made for you!\n# Call the print function to output \"Hello\"\n____(\"Hello\")",
          expectedOutput: "Hello",
          hints: ["Write print"],
          solutionCode: "print(\"Hello\")"
        }
      },
      {
        type: "CODE",
        question: "More Built-ins",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "# The int() function is also a built-in function!\n# Use the int() function to convert \"5\" into a number, and print it.\nx = ____(\"5\")\nprint(x)",
          expectedOutput: "5",
          hints: ["Use int()"],
          solutionCode: "x = int(\"5\")\nprint(x)"
        }
      },
      {
        type: "SELECT",
        question: "Why did the creators of Python give us functions like `print()` and `input()`?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "So we don't have to write thousands of lines of complex code just to output text to the screen.", correct: true },
          { text: "Because it looks cool.", correct: false }
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
            "Built-in functions are great, but the real power of programming comes from writing our OWN functions!"
          ]
        }
      }
    ]
  },
  {
    id: 54,
    title: "Your First Function",
    unit_id: 6,
    order: 2,
    description: "Using the def keyword.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Defining a Function",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "To create our own function, we have to teach Python a new word.",
            "We do this by 'defining' a function."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "The def keyword",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "We use the keyword `def` (short for define).",
            "Next comes the name of the function, followed by empty parentheses `()` and a colon `:`.",
            "Just like with `if` and `while`, the code INSIDE the function must be indented!"
          ],
          codeBlocks: [
            {
              code: "def say_hello():\n    print(\"Hello, World!\")\n    print(\"Welcome to Python.\")",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "Which keyword is used to create a function?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "def", correct: true },
          { text: "create", correct: false },
          { text: "func", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What must immediately follow the function's name when you define it?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "Parentheses and a colon ():", correct: true },
          { text: "A semicolon ;", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "How does Python know which lines of code belong inside the function?",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "The lines are indented underneath the def statement.", correct: true },
          { text: "It guesses.", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Define it",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "# Define a function named 'greet'\n____ greet():\n    print(\"Good morning!\")",
          expectedOutput: "", // Output is empty because defining a function doesn't run it!
          hints: ["Use the def keyword."],
          solutionCode: "def greet():\n    print(\"Good morning!\")"
        }
      },
      {
        type: "CODE",
        question: "Write the signature",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "# Define a function named 'show_menu'\n\n    print(\"1. Start\")\n    print(\"2. Load\")\n    print(\"3. Exit\")",
          expectedOutput: "", // Output is empty because defining a function doesn't run it!
          hints: ["def show_menu():"],
          solutionCode: "def show_menu():\n    print(\"1. Start\")\n    print(\"2. Load\")\n    print(\"3. Exit\")"
        }
      },
      {
        type: "SELECT",
        question: "If you run the code `def say_hello(): print(\"Hi\")`, nothing prints to the screen. Why?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "Because defining a function only TEACHES Python how to do it. You still have to ask Python to actually run it!", correct: true },
          { text: "Because print statements don't work inside functions.", correct: false }
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
            "Defining a function is like writing down a recipe. The cake isn't baked until you actually follow the recipe! Let's learn how to 'Call' a function next."
          ]
        }
      }
    ]
  },
  {
    id: 55,
    title: "Calling Functions",
    unit_id: 6,
    order: 3,
    description: "Executing your functions.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Baking the Cake",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "You wrote the recipe (`def`). Now it's time to actually bake the cake.",
            "In programming, executing a function is known as 'Calling' the function."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "Calling Syntax",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "To call a function, you just type its name followed by parentheses `()`.",
            "You MUST put the parentheses, or Python won't execute it.",
            "Make sure you are NOT indented when you call it, so Python knows it is outside the definition!"
          ],
          codeBlocks: [
            {
              code: "def shout():\n    print(\"HEY!\")\n\n# Call the function twice\nshout()\nshout()",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "What is the term for asking Python to execute a function?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "Calling the function", correct: true },
          { text: "Deleting the function", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "To call a function named `jump`, what exactly do you type?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "jump()", correct: true },
          { text: "def jump():", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this code output?\ndef meow():\n    print(\"Meow\")\nmeow()",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "Meow", correct: true },
          { text: "Nothing", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Call it",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "def alarm():\n    print(\"BEEP BEEP BEEP\")\n\n# Call the alarm function below\n____",
          expectedOutput: "BEEP BEEP BEEP",
          hints: ["Write alarm()"],
          solutionCode: "def alarm():\n    print(\"BEEP BEEP BEEP\")\n\nalarm()"
        }
      },
      {
        type: "CODE",
        question: "Call it multiple times",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "def applause():\n    print(\"Clap!\")\n\n# Call the applause function 3 times\n\n\n\n",
          expectedOutput: "Clap!\nClap!\nClap!",
          hints: ["Write applause() three times on separate lines."],
          solutionCode: "def applause():\n    print(\"Clap!\")\n\napplause()\napplause()\napplause()"
        }
      },
      {
        type: "SELECT",
        question: "Why do we need the empty parentheses `()` when calling a function?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "Because in Python, parentheses mean 'EXECUTE THIS ACTION NOW'. Without them, Python just looks at the name but does nothing.", correct: true },
          { text: "Because it looks like a smiley face.", correct: false }
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
            "You can define a function once, and call it 10,000 times! But right now, our functions do the exact same thing every time. Let's make them dynamic."
          ]
        }
      }
    ]
  },
  {
    id: 56,
    title: "Passing Parameters",
    unit_id: 6,
    order: 4,
    description: "Giving functions input.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Dynamic Functions",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "A function that always prints 'Hello' is boring.",
            "What if we want a function that can say Hello to 'Alice', and then Hello to 'Bob'?",
            "We need to pass data INTO the function."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "Parameters",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "When defining a function, we can put a variable name inside the parentheses. This is called a 'Parameter'.",
            "When we call the function, we put actual data in the parentheses. This is called an 'Argument'.",
            "The function receives the data and can use it!"
          ],
          codeBlocks: [
            {
              code: "def greet(name):   # 'name' is the parameter\n    print(\"Hello\", name)\n\ngreet(\"Alice\")     # \"Alice\" is the argument\ngreet(\"Bob\")",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "What is a parameter?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "A variable placed inside the parentheses of a function definition to receive incoming data.", correct: true },
          { text: "A rule that stops the function.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "In `greet(\"Alice\")`, what is the word `\"Alice\"`?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "An argument (the actual data being passed in).", correct: true },
          { text: "A parameter.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this output?\ndef square(num):\n    print(num * num)\nsquare(3)",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "9", correct: true },
          { text: "3", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Pass an argument",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "def double_it(number):\n    print(number * 2)\n\n# Call the function and pass in the number 10\ndouble_it(____)",
          expectedOutput: "20",
          hints: ["Put 10 inside the parentheses"],
          solutionCode: "def double_it(number):\n    print(number * 2)\n\ndouble_it(10)"
        }
      },
      {
        type: "CODE",
        question: "Create a parameter",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "# Define a function 'shout' that takes a parameter called 'word'\ndef shout(____):\n    # Print the word in uppercase. Let's just print it twice for effect!\n    print(word, word)\n\nshout(\"HEY\")",
          expectedOutput: "HEY HEY",
          hints: ["def shout(word):"],
          solutionCode: "def shout(word):\n    print(word, word)\n\nshout(\"HEY\")"
        }
      },
      {
        type: "SELECT",
        question: "What happens if a function expects a parameter, but you call it without one (e.g. `greet()`)?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "Python throws a TypeError, saying it is missing a required argument.", correct: true },
          { text: "It runs normally with a blank value.", correct: false }
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
            "Parameters make functions powerful because they allow the same block of code to work with different data!"
          ]
        }
      }
    ]
  },
  {
    id: 57,
    title: "Multiple Parameters",
    unit_id: 6,
    order: 5,
    description: "Passing multiple pieces of data.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "More Data",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "Sometimes one parameter isn't enough.",
            "What if we want a function to add two numbers together? Or print a first name AND a last name?"
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "Comma Separated",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "You can have as many parameters as you want! Just separate them with a comma `,`.",
            "When you call the function, you must pass the exact same number of arguments, separated by commas, IN THE CORRECT ORDER."
          ],
          codeBlocks: [
            {
              code: "def add(num1, num2):\n    print(num1 + num2)\n\nadd(5, 10) # Outputs 15",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "How do you separate multiple parameters in a function definition?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "With a comma (,)", correct: true },
          { text: "With a space", correct: false },
          { text: "With a plus sign (+)", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "If a function is defined as `def user(name, age):`, what is the correct way to call it?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "user(\"Alice\", 25)", correct: true },
          { text: "user(25, \"Alice\")", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this output?\ndef sub(a, b):\n    print(a - b)\nsub(10, 2)",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "8", correct: true },
          { text: "-8", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Two Arguments",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "def multiply(x, y):\n    print(x * y)\n\n# Call the function passing 4 and 5\nmultiply(____, ____)",
          expectedOutput: "20",
          hints: ["multiply(4, 5)"],
          solutionCode: "def multiply(x, y):\n    print(x * y)\n\nmultiply(4, 5)"
        }
      },
      {
        type: "CODE",
        question: "Full Name",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "def full_name(first, last):\n    print(first + \" \" + last)\n\n# Call the function with \"Bruce\" and \"Wayne\"\n\n",
          expectedOutput: "Bruce Wayne",
          hints: ["full_name(\"Bruce\", \"Wayne\")"],
          solutionCode: "def full_name(first, last):\n    print(first + \" \" + last)\n\nfull_name(\"Bruce\", \"Wayne\")"
        }
      },
      {
        type: "SELECT",
        question: "Why does the order of arguments matter?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "Because Python matches the first argument to the first parameter, the second to the second, etc.", correct: true },
          { text: "It doesn't matter, Python knows what you mean.", correct: false }
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
            "By default, arguments are 'Positional'. The position they are placed in dictates which parameter they fill!"
          ]
        }
      }
    ]
  },
  {
    id: 58,
    title: "Default Parameters",
    unit_id: 6,
    order: 6,
    description: "Making arguments optional.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Optional Data",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "Usually, if a function asks for a parameter, you MUST provide it.",
            "But what if we want to provide a fallback value so the user doesn't HAVE to type it?"
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "Setting a Default",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "In the function definition, you can use `=` to assign a default value to a parameter.",
            "If the caller provides an argument, it overrides the default.",
            "If the caller leaves the parentheses empty, Python uses the default!"
          ],
          codeBlocks: [
            {
              code: "def greet(name=\"Guest\"):\n    print(\"Hello\", name)\n\ngreet(\"Alice\") # Outputs Hello Alice\ngreet()        # Outputs Hello Guest",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "What does a default parameter do?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "It provides a fallback value if the caller doesn't provide an argument.", correct: true },
          { text: "It makes the function run twice.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "If `def move(speed=10):`, what happens if you call `move(50)`?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "Speed becomes 50 (the argument overrides the default).", correct: true },
          { text: "Speed stays 10.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this output?\ndef power(state=\"OFF\"):\n    print(state)\npower()",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "OFF", correct: true },
          { text: "ON", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Set the default",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "# Set the default value of color to \"Red\"\ndef paint(color=____):\n    print(\"Painting it\", color)\n\npaint()",
          expectedOutput: "Painting it Red",
          hints: ["Use \"Red\""],
          solutionCode: "def paint(color=\"Red\"):\n    print(\"Painting it\", color)\n\npaint()"
        }
      },
      {
        type: "CODE",
        question: "Override the default",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "def volume(level=5):\n    print(\"Volume is\", level)\n\n# Call volume() WITH NO ARGUMENTS so it uses the default\n\n\n# Call volume() WITH THE ARGUMENT 11 so it overrides it\n\n",
          expectedOutput: "Volume is 5\nVolume is 11",
          hints: ["volume()", "volume(11)"],
          solutionCode: "def volume(level=5):\n    print(\"Volume is\", level)\n\nvolume()\nvolume(11)"
        }
      },
      {
        type: "SELECT",
        question: "If a function has multiple parameters, where must the default parameters go?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "They must go at the END of the parameter list (e.g., `def fn(a, b=5):`).", correct: true },
          { text: "They must go at the BEGINNING.", correct: false }
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
            "Default parameters are a great way to make functions easier to use while keeping them flexible."
          ]
        }
      }
    ]
  },
  {
    id: 59,
    title: "Returning Values",
    unit_id: 6,
    order: 7,
    description: "Sending data back.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Printing vs Returning",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "So far, our functions just `print()` data to the screen.",
            "But what if we want our function to calculate a math problem, and hand the answer BACK to the rest of the program so we can use it?",
            "Printing just puts pixels on a screen. We need to Return data."
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "The return Keyword",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "The `return` keyword shoots data OUT of the function, back to wherever the function was called.",
            "Once a `return` statement runs, the function stops immediately.",
            "You can catch the returned data by assigning the function call to a variable!"
          ],
          codeBlocks: [
            {
              code: "def get_pi():\n    return 3.14\n\n# We 'catch' the returned value in a variable\nmy_num = get_pi()\nprint(my_num + 1) # 4.14",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "What is the difference between `print()` and `return`?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "`print` just displays text to a human. `return` hands data back to the program so it can be used in variables.", correct: true },
          { text: "They are exactly the same.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What happens to a function immediately after it executes a `return` statement?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "The function stops entirely.", correct: true },
          { text: "It runs one more time.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this output?\ndef five():\n    return 5\n\nx = five()\nprint(x * 2)",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "10", correct: true },
          { text: "5", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Return the math",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "def add(a, b):\n    # Return the result, DO NOT print it!\n    ____ a + b\n\nresult = add(10, 5)\nprint(result)",
          expectedOutput: "15",
          hints: ["Use the return keyword"],
          solutionCode: "def add(a, b):\n    return a + b\n\nresult = add(10, 5)\nprint(result)"
        }
      },
      {
        type: "CODE",
        question: "Catch the return",
        lesson_step: "independent_practice",
        order: 7,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "def get_status():\n    return \"Online\"\n\n# Create a variable 'status' and assign it to the result of get_status()\n\n\nprint(\"User is\", status)",
          expectedOutput: "User is Online",
          hints: ["status = get_status()"],
          solutionCode: "def get_status():\n    return \"Online\"\n\nstatus = get_status()\nprint(\"User is\", status)"
        }
      },
      {
        type: "SELECT",
        question: "If a function does NOT have a `return` statement, what does it secretly return by default in Python?",
        lesson_step: "knowledge_check",
        order: 8,
        options: [
          { text: "None (a special Python value meaning 'nothing').", correct: true },
          { text: "0", correct: false }
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
            "Almost all professional functions `return` data instead of printing it. This makes them reusable in calculations, logic, and interfaces!"
          ]
        }
      }
    ]
  },
  {
    id: 60,
    title: "Local Variables",
    unit_id: 6,
    order: 8,
    description: "Variables inside functions.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "The Vegas Rule",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "There is a famous saying: 'What happens in Vegas, stays in Vegas.'",
            "In Python, the rule is: 'Variables created inside a function, stay inside the function.'"
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "Local Scope",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "If you create a variable inside a `def` block, it is called a 'Local Variable'.",
            "It ONLY exists while the function is running. As soon as the function ends, the variable is completely destroyed.",
            "The rest of the program cannot see it!"
          ],
          codeBlocks: [
            {
              code: "def spy():\n    secret = \"Top Secret!\" # Local variable\n\nspy()\nprint(secret) # ERROR! Python has no idea what 'secret' is.",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "What happens to a variable that is created inside a function?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "It is destroyed as soon as the function finishes running.", correct: true },
          { text: "It lives forever.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "Can code OUTSIDE of a function read a local variable INSIDE the function?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "No, it is hidden from the outside.", correct: true },
          { text: "Yes", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this output?\ndef test():\n    x = 10\ntest()\nprint(x)",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "Error: name 'x' is not defined", correct: true },
          { text: "10", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "The Right Way",
        lesson_step: "guided_practice",
        order: 6,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "def calculate():\n    math_result = 5 + 5\n    # If we want the outside world to see math_result, we MUST return it!\n    ____ math_result\n\nprint(calculate())",
          expectedOutput: "10",
          hints: ["Use return"],
          solutionCode: "def calculate():\n    math_result = 5 + 5\n    return math_result\n\nprint(calculate())"
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
            "Local variables are actually a good thing! They prevent variables in different functions from accidentally overwriting each other."
          ]
        }
      }
    ]
  },
  {
    id: 61,
    title: "Variable Scope",
    unit_id: 6,
    order: 9,
    description: "Global vs Local.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "The Outside World",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "We know the outside world can't see INSIDE a function.",
            "But can a function look OUTSIDE?"
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "Global Variables",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "Variables created OUTSIDE of all functions are called 'Global Variables'.",
            "Functions CAN look outside and read Global variables!",
            "However, they usually cannot CHANGE them easily (without special keywords)."
          ],
          codeBlocks: [
            {
              code: "gravity = 9.8  # Global\n\ndef drop():\n    print(\"Falling at\", gravity) # It can see the global variable!\n\ndrop()",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "What is a Global Variable?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "A variable created outside of any function, visible to everything.", correct: true },
          { text: "A variable created inside a function.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "Can a function READ a global variable?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "Yes", correct: true },
          { text: "No", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "What will this output?\nname = \"Bob\"\ndef say_hi():\n    print(\"Hi\", name)\nsay_hi()",
        lesson_step: "predict_output",
        order: 5,
        options: [
          { text: "Hi Bob", correct: true },
          { text: "Error", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Read Global",
        lesson_step: "independent_practice",
        order: 6,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "version = \"1.0.5\"\n\ndef show_version():\n    # Print the global 'version' variable\n    \n\nshow_version()",
          expectedOutput: "1.0.5",
          hints: ["print(version)"],
          solutionCode: "version = \"1.0.5\"\n\ndef show_version():\n    print(version)\n\nshow_version()"
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
            "Best practice: Try to pass data into functions via parameters rather than relying too heavily on global variables. It keeps your code cleaner!"
          ]
        }
      }
    ]
  },
  {
    id: 62,
    title: "Keyword Arguments",
    unit_id: 6,
    order: 10,
    description: "Naming your arguments.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Remembering the Order",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "If a function has 5 parameters: `create_user(name, age, email, password, admin)`, calling it gets very confusing.",
            "Was email third? Or password? `create_user(\"Bob\", 20, \"123\", \"@gmail\", False)`... Oops, I mixed them up!"
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "Calling by Name",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "To solve this, Python lets you explicitly state the NAME of the parameter when calling the function.",
            "These are called Keyword Arguments. If you use the names, the order no longer matters!"
          ],
          codeBlocks: [
            {
              code: "def build(width, height):\n    print(\"W:\", width, \"H:\", height)\n\n# Using keyword arguments\nbuild(height=10, width=5)",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "Why are Keyword Arguments useful?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "They clearly show what data is being passed, and allow you to pass them in any order.", correct: true },
          { text: "They make the function run faster.", correct: false }
        ]
      },
      {
        type: "SELECT",
        question: "If `def profile(age, name):`, how do you pass keyword arguments?",
        lesson_step: "fill_blank",
        order: 4,
        options: [
          { text: "profile(name=\"Alice\", age=30)", correct: true },
          { text: "profile(\"Alice\"=name, 30=age)", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Use Keywords",
        lesson_step: "independent_practice",
        order: 5,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "def order(food, drink):\n    print(food, \"and\", drink)\n\n# Call order() using keyword arguments. Pass drink=\"Cola\" and food=\"Burger\"\n\n",
          expectedOutput: "Burger and Cola",
          hints: ["order(drink=\"Cola\", food=\"Burger\")"],
          solutionCode: "def order(food, drink):\n    print(food, \"and\", drink)\n\norder(drink=\"Cola\", food=\"Burger\")"
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
            "When dealing with functions that have more than 2 or 3 parameters, keyword arguments are highly recommended for readability!"
          ]
        }
      }
    ]
  },
  {
    id: 63,
    title: "Combining Functions",
    unit_id: 6,
    order: 11,
    description: "Functions calling functions.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "Building Blocks",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "Functions are like lego blocks.",
            "You can use small functions to build bigger, more complex functions!"
          ]
        }
      },
      {
        type: "CONCEPT",
        question: "Nested Calls",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "explanation",
          icon: "lightbulb",
          paragraphs: [
            "A function is allowed to call another function inside of it.",
            "This is how massive programs (like videogames) are built. A `play_game()` function might call `load_level()`, which calls `spawn_enemies()`."
          ],
          codeBlocks: [
            {
              code: "def double(x):\n    return x * 2\n\ndef quadruple(x):\n    # Calls the double function twice!\n    return double(double(x))",
              language: "python"
            }
          ]
        }
      },
      {
        type: "SELECT",
        question: "Can a function call another function?",
        lesson_step: "comprehension",
        order: 3,
        options: [
          { text: "Yes, this is how large programs are structured.", correct: true },
          { text: "No, that causes an error.", correct: false }
        ]
      },
      {
        type: "CODE",
        question: "Call inside a call",
        lesson_step: "guided_practice",
        order: 4,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "def get_title():\n    return \"Captain\"\n\ndef get_name():\n    # Call get_title() to combine the string\n    return ____() + \" Kirk\"\n\nprint(get_name())",
          expectedOutput: "Captain Kirk",
          hints: ["get_title"],
          solutionCode: "def get_title():\n    return \"Captain\"\n\ndef get_name():\n    return get_title() + \" Kirk\"\n\nprint(get_name())"
        }
      },
      {
        type: "CONCEPT",
        question: "Lesson Summary",
        lesson_step: "recap",
        order: 5,
        content_metadata: {
          variant: "recap",
          icon: "check",
          paragraphs: [
            "Break big problems down into small functions, then combine them. This is the secret to software engineering."
          ]
        }
      }
    ]
  },
  {
    id: 64,
    title: "Refactoring Repetitive Code",
    unit_id: 6,
    order: 12,
    description: "Cleaning up messy code.",
    xp_reward: 10,
    challenges: [
      {
        type: "CONCEPT",
        question: "The Janitor",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "Programmers spend a lot of time 'Refactoring' (cleaning up) old code.",
            "If you see the same logic repeated twice, it's time to refactor it into a single function!"
          ]
        }
      },
      {
        type: "CODE",
        question: "The Messy Code",
        lesson_step: "explanation",
        order: 2,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "# Look at this repetitive code.\nscore1 = 50\nprint(\"---SCORE---\")\nprint(score1)\nprint(\"-----------\")\n\nscore2 = 80\nprint(\"---SCORE---\")\nprint(score2)\nprint(\"-----------\")\n\n# We will fix this in the next step!",
          expectedOutput: "---SCORE---\n50\n-----------\n---SCORE---\n80\n-----------",
          hints: ["Just hit run to see the mess."],
          solutionCode: "score1 = 50\nprint(\"---SCORE---\")\nprint(score1)\nprint(\"-----------\")\n\nscore2 = 80\nprint(\"---SCORE---\")\nprint(score2)\nprint(\"-----------\")"
        }
      },
      {
        type: "CODE",
        question: "Refactor it",
        lesson_step: "independent_practice",
        order: 3,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "def print_score(score):\n    # Write the 3 print statements here to format the score\n    \n    \n    \n\n# Now we just call the function!\nprint_score(50)\nprint_score(80)",
          expectedOutput: "---SCORE---\n50\n-----------\n---SCORE---\n80\n-----------",
          hints: ["print(\"---SCORE---\")", "print(score)", "print(\"-----------\")"],
          solutionCode: "def print_score(score):\n    print(\"---SCORE---\")\n    print(score)\n    print(\"-----------\")\n\nprint_score(50)\nprint_score(80)"
        }
      },
      {
        type: "CONCEPT",
        question: "Lesson Summary",
        lesson_step: "recap",
        order: 4,
        content_metadata: {
          variant: "recap",
          icon: "check",
          paragraphs: [
            "We turned 8 lines of messy code into 3 lines of beautiful, reusable logic. This is the power of functions!"
          ]
        }
      }
    ]
  },
  {
    id: 65,
    title: "Mini Project: Personal Utility Toolkit",
    unit_id: 6,
    order: 13,
    description: "Build a library of tools.",
    xp_reward: 20,
    challenges: [
      {
        type: "CONCEPT",
        question: "Your Toolbox",
        lesson_step: "motivation",
        order: 1,
        content_metadata: {
          variant: "intro",
          icon: "flame",
          paragraphs: [
            "For this project, you will build a mini-library of utility functions.",
            "These are small, single-purpose functions that `return` values, which you can use to build a larger program."
          ]
        }
      },
      {
        type: "CODE",
        question: "The Area Tool",
        lesson_step: "guided_practice",
        order: 2,
        content_metadata: {
          variant: "guided",
          language: "python",
          initialCode: "# Create a function that calculates the area of a rectangle\n# It takes two parameters: width and height\ndef get_area(____, ____):\n    return width * height\n\nprint(get_area(10, 5))",
          expectedOutput: "50",
          hints: ["width, height"],
          solutionCode: "def get_area(width, height):\n    return width * height\n\nprint(get_area(10, 5))"
        }
      },
      {
        type: "CODE",
        question: "The Even Checker",
        lesson_step: "independent_practice",
        order: 3,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "# Create a function named is_even that takes a parameter 'num'\n# It should return True if num % 2 == 0, and False otherwise.\n\n\n\n\n\n\nprint(is_even(10))",
          expectedOutput: "True",
          hints: ["def is_even(num):", "    if num % 2 == 0:", "        return True", "    else:", "        return False"],
          solutionCode: "def is_even(num):\n    if num % 2 == 0:\n        return True\n    else:\n        return False\n\nprint(is_even(10))"
        }
      },
      {
        type: "CODE",
        question: "The Max Tool",
        lesson_step: "independent_practice",
        order: 4,
        content_metadata: {
          variant: "independent",
          language: "python",
          initialCode: "# Create a function named get_max that takes 'a' and 'b'\n# It should return whichever number is larger.\n\n\n\n\n\n\nprint(get_max(5, 20))",
          expectedOutput: "20",
          hints: ["def get_max(a, b):", "    if a > b:", "        return a", "    else:", "        return b"],
          solutionCode: "def get_max(a, b):\n    if a > b:\n        return a\n    else:\n        return b\n\nprint(get_max(5, 20))"
        }
      },
      {
        type: "CONCEPT",
        question: "Unit 6 Complete!",
        lesson_step: "recap",
        order: 5,
        content_metadata: {
          variant: "recap",
          icon: "check",
          paragraphs: [
            "Incredible! You have officially graduated from writing 'scripts' to writing structured 'software'.",
            "Next up in Unit 7: Lists and Tuples (Storing multiple pieces of data in a single variable)!"
          ]
        }
      }
    ]
  }
];
