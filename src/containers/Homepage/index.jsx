import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './action';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { setName } = this.props;
    setName('halo');
  }

  render() {
    const { homepage: { name }, setName, fetchName } = this.props;
    return (
      <div>
        <h1>Home</h1>
        <h4>{name}</h4>
        <button type="button" onClick={() => setName('setName')}>setName</button>
        <button type="button" onClick={() => fetchName()}>fetchName</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    homepage: state.homepage,
  }),
  {
    ...actions,
  },
)(Homepage);
