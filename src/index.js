import React from 'react'
import ReactDOM from 'react-dom'

const root = document.createElement('div')
root.setAttribute('id', 'root')
document.body.appendChild(root)

const App = () => {
  console.log(process.env.NODE_ENV)
  return (
    <h1>Hello World from React without html</h1>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
