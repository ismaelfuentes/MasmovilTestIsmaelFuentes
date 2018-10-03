let axios = require('axios');

export let startPhoneRequest = () => {
    return {
        type : 'START_PHONE_REQUEST'
    }
}

export let endPhoneRequest = (phoneDetail) => {
    return {
        type : 'END_PHONE_REQUEST',
        phoneDetail
    }
}

export let endPhonesRequest = (phoneList) => {
    return {
        type : 'END_PHONES_REQUEST',
        phoneList
    }
}

export let fetchPhones = () => {
    let url = "http://localhost:8669/phone"
    return (dispatch) => {
        dispatch(startPhoneRequest())
        return axios.get(url).then(
            (response) => {
                let phoneList = response.data.phones
                dispatch(endPhonesRequest(phoneList))
            },
            (err) => {
                console.log(err);
            }
        )

    }
}

export let fetchPhone = (id) => {
    let url = "http://localhost:8669/phone/" + id
    return (dispatch) => {
        dispatch(startPhoneRequest())
        return axios.get(url).then(
            (response) => {
                let phone = response.data
                dispatch(endPhoneRequest(phone))
            },
            (err) => {
                console.log(err);
            }
        )

    }
}
