import React from 'react'
import { Link } from 'react-router'
import MyButtonController from './buttons/MyButtonController'
import LoginController from './login/LoginController'
class Dashboard extends React.Component {
  render() {
    return (
      <div>
              <LoginController></LoginController>
      </div>
    )
  }
}

export default Dashboard
