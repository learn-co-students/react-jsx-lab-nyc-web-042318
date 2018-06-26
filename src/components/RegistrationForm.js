import React, { Component } from 'react'
class RegistrationForm extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <form>
        <input type='text' />
        <input type='password' />
        <button type='submit' />
      </form>
    )
  }
}
export default RegistrationForm
