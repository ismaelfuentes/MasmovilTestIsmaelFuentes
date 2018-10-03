import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './navButton.css';

// The Header creates links that can be used to navigate
// between routes.
class navButton extends React.Component {


    render() {

        return (
        <Link className="c-navButton" to={this.props.url}>
            {this.props.name}
        </Link>
        )
    }
  
}




navButton.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

export default navButton
