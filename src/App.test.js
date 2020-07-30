import React from 'react'
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, fireEvent, screen } from './test-utils'
import Projects from './containers/Projects'

it('Renders the connected projects with initialState', () => {
  render(<Projects />, { initialState: {
    title: 'React-Redux', 
    started: started,
    description: 'Build with project requirements'
} })

  expect(screen.getByText(/redux user/i)).toBeInTheDocument()
})

let date = new Date()
let year = date.getFullYear()
let month = date.getMonth()
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let day = date.getDate()
let started = `Started ${months[month]} ${day}, ${year}`