import React, {Component} from 'react';
import logo from "../../assets/img/logo.png";
import {Link} from 'react-router-dom'
import {Button,Icon} from "antd";

class SHeader extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="S_header">
                <div className="container">
                    <div className="left">
                        <Link to="/login">
                            <img src={logo} alt=""/>
                        </Link>
                    </div>

                    <div className="right">
                        <Button onClick={()=>{this.props.history.push('/mobile')}} type="primary"><Icon type="mobile" />客户端下载</Button>
                        <Button onClick={()=>{window.open('https://www14.71baomu.net/code/client/eac72cb1eaf629d9dadda1cc8d5bc656/4','_blank')}} type="primary">在线客服</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SHeader;