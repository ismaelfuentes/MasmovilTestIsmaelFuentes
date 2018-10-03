// Libs
import React from 'react'

// Components
import NavButton from './navButton'

// Styles
import './navMenu.css';


// Component
class NavMenu extends React.Component {
  
    render() {

        return (
            <div className="c-navMenu">
            { this.props.navButtons.map((navButton) => <NavButton key={navButton.name} {...navButton} />
                
            )}
            </div>
        )
    }
}

export default NavMenu
