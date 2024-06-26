import React from 'react'

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      }
    }
    this.date = '19/04/2024'
  }

  getTime = () => {
    //previousState.time != newState.time
    //previousState.time.created != newState.time.created
    const newState = {
      ...this.state,
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: { ...this.state.seconds, created: new Date().getSeconds() }
    }
    this.setState(newState)
  }

  render() {
    return (
      <div>
        <h1>Hell World</h1>
        <h2>It is {this.state.time.created}</h2>
        <h2>It is {this.state.seconds.created}</h2>
        <h3>It is {this.date}</h3>
        <button onClick={this.getTime}>Get Time</button>
      </div>
    )
  }
}
