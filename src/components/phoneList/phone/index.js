// Libs
import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

// Styles
import './phone.css';

// Component
class Phone extends React.Component {
    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
    }


    handleOnClick = () => {
      this.props.history.push(`/phone/${this.props.id}`)
    }
  
    render() {
        return (
            <div className="content-box c-phone-summary" onClick={this.handleOnClick}>
                <div className="c-phone-summary__image" style={{ backgroundImage : `url(${this.props.image})` }}></div>
                <div className="c-phone-summary__name">{this.props.name}</div>
                <div className="c-phone-summary__description">{this.props.description}</div>
            </div>
        )
    }
  
}

Phone.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default withRouter(Phone)


