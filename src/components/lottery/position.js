import React, { Component } from "react";
import eventProxy from "../common/eventProxy";
import {Checkbox} from 'antd';
export default class Position extends Component {
  constructor(props) {
    super(props);
    this.state = {
      max_position: 0,
      active: false
    };
  }
  componentDidMount() {
    eventProxy.on("initselect", () => {
      this.initSelect();
    });
    this.initSelect();
    
  }

  initSelect() {
    this.setState({
      active: this.props.selected === '1' ? true : false
    },()=>{
        console.log(this.state.active);
    });
  }
  componentWillUnmount() {
    eventProxy.off("initselect");
  }
  render() {
    return (
      <Checkbox onChange={()=>{this.props.onSelect(this.props.id)}} value={this.props.p_value} ref={this.props.id}>
        {this.props.title}
      </Checkbox>
    );
  }
}
