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
    name: "data-viz",
    route: "/data-viz",
    display: "Data Viz"
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
  searchBarGuidance: "Scans every line of text you entered into or about a code snippit then returns exact or partial matches.  i.e. search = ' worl ' would match ' world ', but not ' wor ' ",
  homeHelpText: [
    `On the "Your Snips" page your snip records are fetched from the database.`,
    `Starting in the top left and going clockwise, you have snippit “name”, “framework”(if any), “language”(if any), and some randomly extracted, periodically changing “word soup”.`,
    `The “word soup” is intended to help jog your memory as to what the snip might contains.`,
    `For example, if you’re trying to remember how to use toLowerCase() and you can’t remember if it’s ‘arg.toLowerCase()’ or ‘toLowerCase(arg)’, the soup might tell you at a glance if the snippit is a good place to look.`,
    `Press a list item to expand it’s contents.  Click copy to snarf the snip to your clipboard.`,
  ]
}

export const helpSnippitDemo = {
  code: "the code you entered",
  companion:["dependencies or companion libs"],
  framework:"framework",
  id: "cjkglhyx65iww0b78a501j2oa",
  keywords:["some", "keywords"],
  language:"language",
  name:"Name",
  notes:"Notes about snippit",
  reference:["link to examples"],
  bagOfWords: ['the', 'code', 'you', 'entered', 'dependencies', 'companion', 'libs', 'framework', 'some', 'keywords', 'language','Name', 'notes', 'about', 'snippit', 'link', 'to', 'examples'],
}
