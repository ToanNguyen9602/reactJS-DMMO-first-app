import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Welcome from './Welcome'
import { doc } from 'prettier'
import Clock from './Clock'

//const element = <h1>Hello World!</h1>
//const root = ReactDOM.createRoot(document.getElementById('root'))
// function tick() {
//     const element = (
//       <div>
//         <h1>Hello World!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}</h2>
//       </div>
//     )
//     root.render(element)
//   }

//   setInterval(tick,1000)

// const element = <Welcome name='Toan Nguyen' />
// const root = ReactDOM.createRoot(document.getElementById('root'))

// const element2 = (
//   <div>
//     <Welcome name='Huy' age={26} />
//     <Welcome name='To' age={25} />
//     <Welcome name='Shin' age={2} />
//   </div>
// )
// root.render(
//   element2
//   <React.StrictMode>
//      <App />
//   </React.StrictMode>
// )

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
