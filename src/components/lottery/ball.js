import React, { Component } from "react";

class Ball extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: false, //针对11选5胆码用
      active: false,
    //   backgroundColor: "#333a4b",
    //   color: "rgba(255, 255, 255, 0.5)"
    };
  }

  render() {
    return (
        <li onClick={()=>{this.props.onSelect(this.props.id, this.props.row, this.props.colum)}} className={this.state.active?'active':''}>{this.props.num}</li>
    );
  }
}

export default Ball;
