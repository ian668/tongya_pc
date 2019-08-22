import React, {Component} from 'react';
import { Icon, BackTop } from 'antd';
import { Link} from 'react-router-dom';
class Side extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div>
                <div className="side">
                    <ul>
                        <li>
                            <a href="https://www14.71baomu.net/code/client/eac72cb1eaf629d9dadda1cc8d5bc656/4" target="_blank">
                                <Icon type="message" />
                                <span>客服</span>
                            </a>
                        </li>
                        <li>
                            <Link to={"/main/charge"}>
                                <Icon type="money-collect" />
                                <span>充值</span>
                            </Link>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.永泰娱乐.com">
                                <Icon type="link" />
                                <span>线路</span>
                            </a>
                        </li>
                        <li>
                            <BackTop>
                                <Icon type="vertical-align-top" />
                                <span>TOP</span>
                            </BackTop>
                        </li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default Side;