// Libs
import React from 'react'
import Phone from './phone'
import {connect} from 'react-redux'

// Actions
import {startPhoneRequest, endPhoneRequest, fetchPhones } from '../../actions'

// Component
export class PhoneList extends React.Component {
  componentWillMount(){
    this.props.fetchPhones();
  }


  render() {
    let {phones} = this.props
    if(phones.isFetching === true){
      return <div className="spinner"></div>
    }
    else if (phones.isFetching === false && phones.phoneList.length >= 1) {
      return(
        <div>
        <div className="dev-list">
        {phones.phoneList.map(phone => 
          <Phone
          key={phone.id}
          {...phone}
        />
        )}
    </div>
    </div>
    )
    } else {
      return <div>no data to show</div>
    }
  }

}

export default connect((state) => {return state},{startPhoneRequest, endPhoneRequest, fetchPhones })(PhoneList)
