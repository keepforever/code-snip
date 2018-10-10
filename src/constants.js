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

export const langValueMap = ["","javascript", "python", "C++", "graphql", "css",];

export const framValueMap = ["","react", "tensorflow", "unity", "flask"];

export const typeValueMap = ["","boiler", "algo", "visual", "config"]


//  To implement hover tool tip.
// <MyMaterialToolTip tipKey="addSnippitHelp">
//   <Typography variant="subheading" color="secondary">
//     HELP
//   </Typography>
// </MyMaterialToolTip>

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

// Some vars for testing
export const soupTestString = `[{"id":"cjl712tyrj1wr0b77cezx6vnd","bagOfWords":["add a snip! ","const","addyourownsnip","user","navigatesto","add","snip","page","then","enter","your","snip","s","details","then","hit","submit","alert","eureka","you","did","it"]},{"id":"cjl712u7tj1ww0b77gnnvdd8z","bagOfWords":["destructuring complex object ","javascript","response","data","signup","looks","like","token","xx","user","name","string","id","string","email","string","we","can","destructur","it","and","extract","the","variables","for","cleaner","code","we","can","take","it","one","step","further","and","rename","a","variable","in","this","snip","we","are","renaming","the","incoming","name","variable","to","newname","with","the","following","code","const","token","user","name","newname","email","id","response","data","signup","make","your","code","more","elegant","easier","to","write","and","read","destructuring"]},{"id":"cjl712uckj1x00b77ev7cazq8","bagOfWords":["hello snip snarf","javascript","algo","helper","function","to","display","console","logs","with","more","clairity","export","const","clearlog","title","vartolog","console","log","title","vartolog","welcome","to","snip","snarf","this","is","a","simple","helper","function","by","the","creator","of","snip","snarf","to","use","in","place","of","console","log","it","leverages","a","template","literal","which","preserves","white","space","and","makes","console","readout","easier","to","decipher","console","log","display","console","log","error"]},{"id":"cjl75qngajfbu0b77oagb83ev","bagOfWords":["exponential averaging ","tensorflow","algo","mean","x1","x2","xn","n","the","exponential","average","algorithm","calculates","the","current","estimated","average","as","a","function","of","the","previous","estimated","average","and","the","current","value","machine learning with tensorflow 2017"]},{"id":"cjl76g9bcjh1g0b77n72i4bhm","bagOfWords":["random normal distribution","python","tensorflow","boiler","a","create","a","vector","of","100","numbers","rawdata","with","a","mean","of","10","and","standard","deviation","of","1","rawdata","np","random","normal","10","1","100","create","a","vector","of","100","numbers","with","a","mean","of","10","and","standard","deviation","of","1","toy data","dummy data"]},{"id":"cjl77jnynjjqk0b77sfdgu3c7","bagOfWords":["tensorboard run command","tensorflow","run","this","from","command","promp","logs","should","be","replaced","with","the","name","of","your","logs","directory","tensorboard","logdir","training","logs","host","127","0","0","1","starts","a","server","on","localhost","6006","running","command","starts","a","server","and","it","pull","the","graphical","data","from","the","file","inside","logs","that","was","written","during","training"]},{"id":"cjl7gsn8qka4y0b776olxny5n","bagOfWords":["ubuntu aws commands","config","connect","to","aws","server","at","publicip","255","255","255","ssh","ubuntu","255","255","255","provision","instance","with","docker","curl","ssl","https","getdocker","com","sh","sudo","usermod","ag","docker","ubuntu","commands","when","you","first","login","to","a","provisioned","ec2","instance","and","you","want","to","add","docker","to","it","docker","aws","ec2","docker for data science"]},{"id":"cjl7i8xm4kehs0b772i6hwp84","bagOfWords":["docker mongo daemon commands","config","launch","mongo","daemon","from","within","container","sudo","docker","exec","it","thismongo","mongo","insert","test","document","into","collection","test","db","test","insert","foo","1","find","what","you","just","inserted","db","test","find","basic","commands","from","the","mongo","daemon","interface","docker","mongo","ec2","aws"]},{"id":"cjl7qataokz2h0b77b0hdto3r","bagOfWords":["misc docker","config","docker","version","verify","connection","cli","serv","info","docker","info","see","containers","running","on","sys","to","create","a","container","pull","nginx","image","and","run","in","interactive","mode","visit","localhoast","not","localhoast3000","6000","etc","docker","container","run","it","p","80","80","nginx","it","flag","means","run","in","interactive","mode","aka","foreground","p","short","for","publish","80","80","port","on","local","machiene","exposed","from","container","first","port","can","be","anything","second","is","specific","to","the","image","being","used","nginx","name","of","the","image","you","want","docker","container","ls","displays","list","of","active","running","containers","docker","container","ls","a","shows","all","containers","on","system","running","or","not","docker","container","rm","first","3","chars","of","id","note","95a","will","be","the","first","3","chars","of","container","to","be","removed","s","id","95a","will","print","on","execution","docker","images","show","list","of","imaes","on","your","machine","not","to","be","confused","with","containers","which","are","different","docker","image","rm","first","3","chars","of","id","removes","image","from","your","device","docker","pull","image","name","pulls","image","to","machine","docker","container","run","d","p","8080","80","name","mynginx","nginx","d","stands","for","detached","run","in","background","create","container","run","in","detached","mode","named","mynginx","of","the","nginx","image","to","port","8080","locally","docker","container","run","d","p","3306","3306","name","mysql","env","mysqlrootpassword","123456","mysql","example","with","enviornment","vars","i","e","for","database","access","pulls","mysql","image","creates","container","in","detached","mode","on","mapping","system","3306","to","the","images","3306","per","mysql","inputting","enviornment","var","for","password","as","123456","docker","container","stop","container","name","stops","container","without","removing","it","docker","container","rm","container","name","f","removes","container","but","need","to","use","f","flag","if","it","s","running","and","you","still","want","to","remove","it","some","helpful","commands","for","basic","docker","container","creation","and","local","development","docker","image","docker for windows","docker"]},{"id":"cjlafsmhmwi9x0b77wpwu1rt0","bagOfWords":["write dict to csv with pandas","python","import","pandas","as","pd","pd","dataframe","fromdict","data","mydict","orient","index","tocsv","mycsvfilename","csv","header","false","to","write","csv","file","from","dictionary","in","python","tensorflow-textbook"]},{"id":"cjlahoc4pwodh0b771oh2xzvc","bagOfWords":["read array of arrays to two single arrays","python","algo","where","data","x","y","x","y","xdataset","ydataset","for","keyvalpair","in","data","xdataset","append","keyvalpair","0","ydataset","append","keyvalpair","1","takes","an","array","of","arrays","each","of","length","2","that","represent","x","y","pairs","and","yields","two","arrays","xdataset","and","ydataset","which","can","then","be","split","and","consumed","for","testing","split","train","test","data science"]},{"id":"cjlhlvu4eba190b17i887ehs0","bagOfWords":["enter your code name","javascript","flask","algo","mean","x1","x2","xn","n","some","notes","keyword","test","another"]},{"id":"cjmqsmj5ondx00b77h6emkkxd","bagOfWords":["refactor","refactor","alpha","test","reflubber","falsetto"]},{"id":"cjmr7rw03olj70b77bh5551zg","bagOfWords":["kangaroo","mo"]},{"id":"cjms644xl1nqf0b487l5pulnu","bagOfWords":["ardvark","moouthelp","div","style","flexdirection","column","display","flex","justifycontent","center","alignitems","center","width","100","height","400","div","style","padding","10","marginbottom","10","typography","variant","subheading","color","secondary","strong","note","this","site","is","hosted","on","two","separate","free","services","and","sometimes","they","can","be","slow","or","fail","if","you","experience","a","login","wait","time","greater","than","six","seconds","refresh","the","page","to","try","again","strong","typography","div","circularprogress","thickness","7","div","moouthelp"]},{"id":"cjms64mhe1nru0b48moya60gr","bagOfWords":["lemur","javascript","tensorflow","boiler","moouthelp","div","style","flexdirection","column","display","flex","justifycontent","center","alignitems","center","width","100","height","400","div","style","padding","10","marginbottom","10","typography","variant","subheading","color","secondary","strong","note","this","site","is","hosted","on","two","separate","free","services","and","sometimes","they","can","be","slow","or","fail","if","you","experience","a","login","wait","time","greater","than","six","seconds","refresh","the","page","to","try","again","strong","typography","div","circularprogress","thickness","7","div","moouthelp"]}]
`
