import React from 'react';
import './index.css'

const LineCrossText = ({children, className='', childStyle={}}) => (
  <div className={className?`ui-line-text-wrap ${className}`:'ui-line-text-wrap'}>
    <div className="ui-line-text" style={childStyle}>{children}</div>
  </div>
)
export default LineCrossText;
