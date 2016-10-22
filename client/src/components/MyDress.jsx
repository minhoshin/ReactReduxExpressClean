import React from 'react'
import { Link } from 'react-router'

class MyDress extends React.Component {

  render () {
    return (
      <div>
        <h1>MyDress Page</h1>
        <h2><Link to='/'>Landing 이동</Link></h2>
        <h2><Link to='/login'>LogIn</Link></h2>
        <h2><Link to='/mydress'>MYDress</Link></h2>
      </div>
    )
  }
  
}

module.exports = MyDress