import React, { Component } from 'react';
import {Checkbox} from 'antd'
class CheckTrace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    };
  }

  render() {
    return (
      <Checkbox checked={this.state.active} onChange={()=>{this.props.checkedIssue(this.props.issue,this.props.index);}} />
    );
  }
}

export default CheckTrace;
