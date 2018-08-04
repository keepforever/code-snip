//search helper
export const processSnipsForSearch = (snips) => {
  let processedSnips = []
  snips.forEach(s => {

    let words = []
    const name = [s.name]
    const notes = s.notes.split(" ").map((w, index) => {
      return w.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    })
    const keywords = s.keywords

    const soup = words.concat(name).concat(notes).concat(keywords)
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
