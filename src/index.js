// Code Goes Here
import React from 'react'
import PropTypes from 'prop-types'

class Order extends React.Component {
  render() {
    return(
      <div className="order">
        <ul>
          <li>{this.props.cone ? 'Cone' : 'Cup'}</li>
          <li>{this.props.size}</li>
          <li>{this.props.scoops.length} scoops: {this.props.scoops.join(", ")}</li>
          <li>Ordered by: {this.props.orderInfo.customerName} at {this.props.orderInfo.orderedAt}</li>
        </ul>
      </div>
    )
  }
}

Order.defaultProps = {
  cone: true,
  size: 'regular'
}

Order.propTypes = {
  cone: propTypes.bool,
  size: propTypes.string,
  scoops: propTypes.arrayOf(propTypes.string).isRequired,
  orderInfo: propTypes.shape({
    customerName: propTypes.string.isRequired,
    orderedAt: propsTypes.number.isRequired
  }).isRequired
}
