import { CREDIT_AMOUNT, DEBIT_AMOUNT, CHARITY_AMOUNT } from "../actions/actionType";

const initState = {
  totalAmount: 100000
}
const bankReducer = (state = initState, action) => {
  switch (action.type) {
    case CREDIT_AMOUNT:
      return {
        totalAmount: state.totalAmount + 10000
      }
    case DEBIT_AMOUNT:
      return {
        totalAmount: state.totalAmount - 10000
      }
    case CHARITY_AMOUNT:
      return {
        totalAmount: state.totalAmount - state.totalAmount
      }
    default:
      return state;
  }
}

export default bankReducer