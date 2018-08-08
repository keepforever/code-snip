import React from 'react';

const DisplayFormikState = ( props ) => {
  const { values } = props
  let keyz = []
  for (const key of Object.keys(values)) {
    keyz.push(key)
  }
  return (
    <div>
      <h3>Hello DisplayFormikState</h3>
      <div>
        {
          keyz.map((key, index) => {
          return (
            <div style={{marginTop: 15}} key={index}>
              {key}: {values[key]}
            </div>
          )})
        }
      </div>
    </div>

  )
};

export default DisplayFormikState
