

import React from 'react'

const Helmet = (props) => {

  document.title = 'Space Destiny - ' + props.title
  return (
    <div className='s-100'>{props.children}</div>
  )
};

export default Helmet