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
