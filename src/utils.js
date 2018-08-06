// truncate long text

export const truncate = (string) => {
   if (string.length > 45)
      return string.substring(0, 45)+'...';
   else
      return string;
};

//search helper
export const processSnipsForSearch = (snips) => {
  let processedSnips = []
  snips.forEach(s => {

    const name = [s.name.toLowerCase()]
    const lang = [s.language.toLowerCase()]
    const framework = [s.framework.toLowerCase()]
    const type = [s.type.toLowerCase()]
    const code = s.code.toLowerCase().trim().split(/\W+/).map((w, index) => {
      return w.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    })
    const notes = s.notes.toLowerCase().split(/\W+/).map((w, index) => {
      return w.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    })
    const keywords = s.keywords.map((k, index) => {
      return k.toLowerCase()
    })
    const companion = s.companion.map((k, index) => {
      return k.toLowerCase()
    })
    const reference = s.reference.map((k, index) => {
      return k.toLowerCase()
    })

    const soup = [...name, ...lang, ...framework, ...type, ...code, ...notes, ...keywords, ...companion, ...reference].filter(Boolean) //filter(Boolean) removes "" from array
    const id = s.id

    processedSnips.push({
      id,
      bagOfWords: [...soup]
    })
  })

  return processedSnips
}

//dummy data
export const codeString = [
  {
    meta: {
      language: 'javascript',
      uses: 'blah'
    },
    code: `
counterChangeHandler = () => {
  console.log("you did it")
  this.props.onIncrementCounter()
}`
  },
  {
    meta: {
      language: 'javascript',
      uses: 'blah'
    },
    code: `
    .App-header {
      background-color: #222;
      height: 150px;
      padding: 20px;
      color: white;
    }`
  },
];
//helper function to display console logs with more clairity
export const clearLog = (title, varToLog) => {
  console.log(`
    #########################################################
                    ${title}
    #########################################################

  `, varToLog, `


    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    #########################################################

  `, `

  `)
}

// helper functions to distribute state immutably and clean up reducers.
export const updateObject = (oldObject, updatedProperties) => {
  const newObject = {
    ...oldObject,
    ...updatedProperties
  }
  //clearLog('newObject', newObject)
  return newObject
};

// helper function to check validity of form input
export const checkValidity = (value, rules) => {
    let isValid = true;
    if (!rules) {
        return true;
    }

    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid
    }

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid
    }

    return isValid;
}
