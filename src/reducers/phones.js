const phones = (
  state = {
    phoneList: [],
    phoneDetail: null,
    isFetching : false
  }, action) => {
    switch (action.type) {
      case 'START_PHONE_REQUEST':
      return {
          ...state,
          isFetching : true
      }

      case 'END_PHONE_REQUEST':
          return {
              ...state,
              isFetching : false,
              phoneDetail : action.phoneDetail
          }

      case 'END_PHONES_REQUEST':
          return {
              ...state,
              isFetching : false,
              phoneList : action.phoneList
          }

      default:
        return state
    }
  }
  
  export default phones
  