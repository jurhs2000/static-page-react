import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './styles.css'
import Fighters from './pages/fighters/fighters'

const root = document.createElement('div')
root.setAttribute('id', 'root')
document.body.appendChild(root)
const App = () => {
  console.log(process.env.NODE_ENV)
  return (
    <>
      <Fighters />
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
