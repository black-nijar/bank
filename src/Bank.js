import React, { Component } from 'react'
import { connect } from 'react-redux'
import { creditAmount } from './actions/actions'

class Bank extends Component {
  render() {
    const { amount: { totalAmount } } = this.props
    return (
      <div className='app'>
        <h3>Welcome</h3>
        <div>
          <div>
            <button
              className='btn btn-primary'
              onClick={() => this.props.creditAmount()}
            >
              Credit amount -10000
            </button>
          </div>
        </div>
        <h2> Your bank balance is- {totalAmount}</h2>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    amount: state.totalAmount
  }
}
export default connect(mapStateToProps,{creditAmount})(Bank)