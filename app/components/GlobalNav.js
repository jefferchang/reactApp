import React from 'react'
import { Link } from 'react-router'
import { ButtonToolbar,Button,Navbar,NavbarHeader,NavbarBrand,NavbarToggle,NavbarCollapse ,Nav,NavItem,MenuItem,NavDropdown} from 'react-bootstrap'

const light = '#fff'
const styles = {}

styles.wrapper = {
    padding: '20px 20px',
    overflow: 'hidden',
    background: '#4D4D60',
    color: light
}

styles.link = {
    padding: 11,
    color: light,
    fontWeight: 220
}

styles.activeLink = {
    ...styles.link,
    background: light,
    color: '#4D4D60'
}
class GlobalNav extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.logOut = this.logOut.bind(this)
  }

  logOut() {
    alert('log out')
  }


  render() {
    const { user } = this.props
    return (
     <div style={styles.wrapper}>
        <div style={{ float: 'left' }}>
          <Link to="/" style={styles.link}>Home</Link>{' '}
          <Link to="/calendar" style={styles.link} activeStyle={styles.activeLink}>Calendar</Link>{' '}
          <Link to="/grades" style={styles.link} activeStyle={styles.activeLink}>Grades</Link>{' '}
          <Link to="/messages" style={styles.link} activeStyle={styles.activeLink}>Messages</Link>{' '}
        </div>
        <div style={{ float: 'right' }}>
          <Link style={styles.link} to="/profile">{user.name}</Link>
            <button onClick={this.logOut}>log out</button>
            <a style={styles.link} href="m_login/login">登录</a>
        </div>
      </div>
    )
  }
}

GlobalNav.defaultProps = {
  user: {
    id: 1,
    name: '常仪彪'
  }
}

export default GlobalNav
