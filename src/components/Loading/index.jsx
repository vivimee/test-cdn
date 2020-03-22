import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingBar, { showLoading, hideLoading } from 'react-redux-loading-bar';

class Loading extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(showLoading());
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(hideLoading());
  }

  render() {
    return (
      <div>
        <LoadingBar />
      </div>
    );
  }
}

export default connect(state => ({ store: state }))(Loading);
