import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './action';

class Detailpage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      detailpage: { id },
      setId,
      fetchId,
    } = this.props;
    return (
      <div>
        <h1>Detailpage</h1>
        <p>
          id:
          {id}
        </p>
        <button type="button" onClick={() => setId('set Id')}>
          setId
        </button>
        <button type="button" onClick={() => fetchId()}>fetchId</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    detailpage: state.detailpage,
  }),
  {
    ...actions,
  },
)(Detailpage);
