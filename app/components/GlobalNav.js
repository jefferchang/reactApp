import React from 'react'
import { Link } from 'react-router'
import { ButtonToolbar,Button,Navbar,NavbarHeader,NavbarBrand,NavbarToggle,NavbarCollapse ,Nav,NavItem,MenuItem,NavDropdown} from 'react-bootstrap'

const light = '#fff'
const styles = {}

styles.wrapper = {
    padding: '10px 10px',
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
          <Link to="/" style={styles.link}>主页</Link>{' '}
          <Link to="/messages" style={styles.link} activeStyle={styles.activeLink}>信息</Link>{' '}
        </div>
        <div style={{ float: 'right' }}>
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
