import React from 'react';

const DisplayFormikState = ( props ) => {
  const { values } = props
  let keyz = []
  for (const key of Object.keys(values)) {
    keyz.push(key)
  }
  // console.log('DisplayFormikState, keyz', keyz)
  // console.log('DisplayFormikState, obj', values[keyz[0]])
  //console.log('DisplayFormikState props, ', props)
  return (
    <div>
      <h3>Hello DisplayFormikState</h3>
      <div>
        {keyz.map((key, index) => {
          return (
            <div key={index}>
              {key}: {values[key]}
            </div>
          )
        })

        }
      </div>
    </div>

  )
};

export default DisplayFormikState
