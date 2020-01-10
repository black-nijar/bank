import React, { Component } from 'react'
import { connect } from 'react-redux'
import { creditAmount, debitAmount, charityAmount } from './actions/actions'

class Bank extends Component {
  render() {
    const { amount: { totalAmount } } = this.props
    return (
      <div className='app'>
        <h3>Welcome</h3>
        <h2> Your current bank balance is  Rs {totalAmount}</h2><br />
        <div>
          <div>
            <button
              className='btn btn-primary'
              onClick={() => this.props.creditAmount()}
            >
              Credit amount -Rs 10000
            </button>
          </div><br />
          <div>
            <button
              disabled={totalAmount === 0 ? true : false}
              className='btn btn-secondary'
              onClick={() => this.props.debitAmount()}
            >
              Debit amount -Rs 10000
            </button>
          </div><br />
          <div>
            <button
              disabled={totalAmount === 0 ? true : false}
              className='btn btn-info'
              onClick={() => this.props.charityAmount()}
            >
              Charity
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    amount: state.totalAmount
  }
}
export default connect(mapStateToProps, { creditAmount, debitAmount, charityAmount })(Bank)