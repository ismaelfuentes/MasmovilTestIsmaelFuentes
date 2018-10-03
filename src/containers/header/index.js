// Libs
import React from 'react'

// Components
import NavMenu from '../../components/navMenu'

// Styles
import './header.css';


// Component
class HeaderContainer extends React.Component {

    state = {
      navButtons: [{
        name: "Home",
        url: "/home"
      }, {
        name: "Phones",
        url: "/phones"
      }, {
        name: "About",
        url: "/about"
      }, {
        name: "Lorem",
        url: "/lorem"
      }]
    }
    
  
    render() {
      return (
        <div className="c-header">
        <NavMenu navButtons={this.state.navButtons}/>
        </div>
      )
    }
}

export default HeaderContainer