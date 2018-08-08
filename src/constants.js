export const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

export const links = [
  {
    name: "logo-home",
    route: "/",
    display: "Your Snips"
  },
  {
    name: "add-snip-page",
    route: "/add-snip",
    display: "Add Snip"
  },
  {
    name: "search-snip",
    route: "/search-snips",
    display: "Search Snips"
  }
];

export const langValueMap = ["","javascript", "css", "python", "html", "graphql"];

export const framValueMap = ["","react", "react-native", "tensorflow"];

export const typeValueMap = ["","boiler", "algo", "visual", "config"]

export const tipLibrary = {
  loginButton: " 1. Send login mutation to GraphQL server 2. Server processes login, fetches user data from Prisma database. 3. Responds with auth token, user info, (snips, name, id, ), then saves to redux store.",
  expansionPanelSummary: "Click here for more details",
  copyToClipboardButton: "Snarf snip to clipboard",
  addSnippitHelp: "Ok, here's the gist...",
  searchSnipHelpText: [
    `Scans every line of text you entered at code snip creation for every snippit in your catalog.`,
     `Returns exact or partial matches.`,
     `i.e. search = ' worl ' would match ' world ', but not ' wor ' `
  ],
  homeHelpText: [
    `On the "Your Snips" page your snip records are fetched from the database.`,
    `Starting in the top left and going clockwise, you have snippit “name”, “framework”(if any), “language”(if any), and some randomly extracted, periodically changing “word soup”.`,
    `The “word soup” is intended to help jog your memory as to the snip's contents.`,
    `For example, if you’re trying to remember how to use toLowerCase() and you can’t remember if it’s ‘arg.toLowerCase()’ or ‘toLowerCase(arg)’, the soup might tell you at a glance if the snippit is a good place to look.`,
    `Press a list item to expand it’s contents.  Click copy to snarf the snip to your clipboard.`,
  ],
  addSnipHelpText: [
    `There are TWO required pieces of info for a new snip:`,
    `Name: a name for you snip`,
    `Code: the code you would like to save`,
    `All other pieces of metadata are optional. How you use them is up to you.`,
    `Some Guidance for the optional metadata:`,
    `Type: describes a broad categorization of the Snip`,
     `ALGO = algorithm, BOILER = boiler plate code, VISUAL = a visual element like a div, CONFIG = a configuration object.`,
     `Language: code Snip's syntax language`,
     `Framework: if your code typically applies to a specific framework's design pattern, indicate by selection`,
     `Reference: Links or reminders of where an example of the code snippet lives in the wild and is functioning as intended.`,
     `Keyword: any words you would like associated with the snippet to help you search for it later.`,
     `Companion: If your code Snip has any common dependencies or imports it cannot run without, indicate here`
  ],
}

export const helpSnippitDemo = {
  code: "the code you entered",
  companion:["dependencies or companion libs"],
  framework:"framework",
  id: "cjkglhyx65iww0b78a501j2oa",
  keywords:["some", "keywords"],
  language:"language",
  name:`Name        (CLICK HERE!!!)`,
  notes:"Notes about snippit",
  reference:["link to examples"],
  bagOfWords: ['the', 'code', 'you', 'entered', 'dependencies', 'companion', 'libs', 'framework', 'some', 'keywords', 'language','Name', 'notes', 'about', 'snippit', 'link', 'to', 'examples'],
}

export const starterSnippitsArray = [
  {
    "id": "cjkk3wmvb47kc0b77p53xeo5x",
    "name": "Add A Snip! ",
    "type": "",
    "language": "",
    "framework": "",
    "code":
      "const addYourOwnSnip = (user) => {\n  navigatesTo('Add Snip Page')\n    .then('enter your snip's details')\n    .then('hit submit')\n    \n    alert('Eureka!, you did it!')\n}",
    "notes": "",
    "companion": [],
    "keywords": [],
    "reference": [],
    "createdAt": "2018-08-07T19:37:29.546Z",
    "author": {
      "id": "cjkc9mzt28ts70b12f0w7qh7g",
      "name": "b",
      "__typename": "User"
    },
    "__typename": "Snippit"
  },
  {
    "id": "cjkk3r3z8470a0b777wckswh7",
    "name": "Destructuring Complex Object ",
    "type": "",
    "language": "javascript",
    "framework": "",
    "code":
      "// response.data.signup looks like: \r\n  {\r\n    token: 'xx',\r\n    user: {\r\n      name: 'string',\r\n      id: 'string',\r\n      email: 'string',\r\n    }\r\n  } \r\n// we can Destructur it and extract the variables\r\n// for cleaner code.  \r\n// We can take it one step further and rename\r\n// a variable.  In this snip, we are renaming the\r\n// incoming 'name' variable to 'newName' with\r\n// the following code: \r\nconst {\r\n   token,\r\n   user: {\r\n     name: newName,\r\n     email,\r\n     id,\r\n   }\r\n } = response.data.signup",
    "notes": "Make your code more elegant, easier to write and read. ",
    "companion": [],
    "keywords": ["destructuring"],
    "reference": [],
    "createdAt": "2018-08-07T19:33:11.782Z",
    "author": {
      "id": "cjkc9mzt28ts70b12f0w7qh7g",
      "name": "b",
      "__typename": "User"
    },
    "__typename": "Snippit"
  },
  {
    "id": "cjkk2zodb44my0b77lszkjs7w",
    "name": "Hello Snip Snarf",
    "type": "algo",
    "language": "javascript",
    "framework": "",
    "code":
      "//helper function to display console logs with more clairity\r\nexport const clearLog = (title, varToLog) => {\r\n  console.log(`\r\n    #########################################################\r\n                    ${title}\r\n    #########################################################\r\n\r\n  `, varToLog, `\r\n\r\n\r\n    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\r\n    #########################################################\r\n\r\n  `, `\r\n\r\n  `)\r\n}",
    "notes":
      "Welcome to Snip Snarf.  This is a simple helper function by the creator of Snip Snarf to use in place of console.log(). It leverages a template literal which preserves white space and makes console readout easier to decipher.  ",
    "companion": [],
    "keywords": ["console", "log", "display"],
    "reference": ["console", "log", "error"],
    "createdAt": "2018-08-07T19:11:51.842Z",
    "author": {
      "id": "cjkc9mzt28ts70b12f0w7qh7g",
      "name": "b",
      "__typename": "User"
    },
    "__typename": "Snippit"
  }
]
