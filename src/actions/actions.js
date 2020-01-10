import { CREDIT_AMOUNT, DEBIT_AMOUNT, CHARITY_AMOUNT } from "./actionType";

export const creditAmount = () => {
  return {
    type: CREDIT_AMOUNT
  }
}

export const debitAmount = () => {
  return {
    type: DEBIT_AMOUNT
  }
}

export const charityAmount = () => {
  return {
    type: CHARITY_AMOUNT
  }
}