// Libs
import React from 'react'
import { connect } from 'react-redux'

// Actions
import {fetchPhone } from '../../actions'

// Styles
import './phoneDetail.css';

 // Component
class PhoneDetail extends React.Component {

  componentWillMount(){
    this.props.fetchPhone(parseInt(this.props.match.params.id, 10));
  }

  render() {
    const { phones } = this.props
    if(phones.isFetching === true){
      return <div className="spinner"></div>
    }
    else if (phones.isFetching === false && phones.phoneDetail != null) {
      const phone = phones.phoneDetail;
      return(
      <div className="content-box c-phone-detail">
          <div className="c-phone-detail__image" style={{ backgroundImage : `url(${phone.image})` }}></div>
          <div className="c-phone-detail__name">{phone.name}</div>
          <div className="c-phone-detail__company">Compañía: {phone.company}</div>
          <div className="c-phone-detail__release_date">Fecha de publicación:{phone.releaseDate}</div>
          <div className="c-phone-detail__description">{phone.description}</div>
      </div>
    )
    } else {
      return <div>no data to show</div>
    }
  }
}


export default connect((state) => {return state},{fetchPhone})(PhoneDetail)