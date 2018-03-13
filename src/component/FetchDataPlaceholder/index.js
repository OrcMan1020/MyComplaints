import React from 'react';
import './index.css'

const LoadingPlaceholder = ({children, style=null}) => (
  <div className="ui-loading-wrap" style={style}>
    <div className="ui-loading-inner">{children}</div>
  </div>
)
export default LoadingPlaceholder;