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

export const langValueMap = ["","javascript", "python", "html", "css", "graphql"];

export const framValueMap = ['',"react", "react-native", "vue", "sage-maker"];

export const typeValueMap = ["","boiler", "algo", "view", "config"]

export const tipLibrary = {
  loginButton: " 1. Send login mutation to GraphQL server 2. Server processes login, fetches user data from Prisma database. 3. Responds with auth token, user info, (snips, name, id, ), then saves to redux store.",
  expansionPanelSummary: "Click here for more details",
  copyToClipboardButton: "Snarf snip  to clipboard",
  addSnippitHelp: "Ok, here's the gist...",
  searchBarGuidance: "Scans every line of text you entered into or about a code snippit then returns exact or partial matches.  i.e. search = ' worl ' would match ' world ', but not ' wor ' ",
  homeHelpText: [
    "On the \"Your Snips\" page your snips retrieved from the database with some metadata about each snippit visible.",
    "Starting in the top left and going clockwise, you have snippit “name”, “framework”(if any), “language”(if any), and some randomly extracted “word soup” from your snip. The “word soup” is intended to help jog your memory as to what the snip might contains.",
    "For example, if you’re trying to remember how to use toLowerCase() and you can’t remember if it’s ‘arg.toLowerCase()’ or ‘toLowerCase(arg)’, the soup might tell you at a glance if the snippit is a good place to look. Press a list item to expand it’s contents.",
    "Click copy to snarf the snip to your clipboard.",
  ]



}
