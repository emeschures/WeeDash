import React from 'react'
import ReactDOM from 'react-dom'
import { BrowswerRouter as Router } from 'react-router-dom'
import 'semantic-ui-react'
import 'semantic-ui-css'

import App from './App';

ReactDOM.render(
<Router><App /></Router>, 
document.getElementById('root')
)
