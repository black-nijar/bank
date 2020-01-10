import { CREDIT_AMOUNT } from "../actions/actionType";

const initState = {
  totalAmount: 10000
}
const bankReducer = (state = initState, action) => {
  switch(action.type) {
    case CREDIT_AMOUNT:
      return {
        ...state,
        totalAmount: state.totalAmount + 10000
      }
    default:
      return state;
  }
}

export default bankReducer