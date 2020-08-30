import React, { Component } from 'react'

export class Home extends Component {
  constructor(){
    super()
    this.state = {
      course_modules: [
        { id: 1, title: '1. Setting up a new Ruby on Rails app with React', description: 'lorem ipsum', active: false },
        { id: 2, title: '2. Adding React to an existing Rails app', description: 'lorem ipsum', active: false },
        { id: 3, title: '3. Building a hello world app', description: 'lorem ipsum', active: false },
        { id: 4, title: '4. Adding react router dom to your App', description: 'lorem ipsum', active: false },
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>This is a component from Home</h1>
      </div>
    )
  }
}

export default Home
