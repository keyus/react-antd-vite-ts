// declare namespace ReactDOM {} 

import React from 'react'
import ReactDOM from 'react-dom'


declare global {
    var React: typeof React;
    var ReactDOM: typeof ReactDOM;
}
