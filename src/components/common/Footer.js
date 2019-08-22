import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import foot1 from '../../assets/img/footer/footer-approve.png';
import foot2 from '../../assets/img/footer/footer-gamble.png';
import logo_bottom from '../../assets/img/logo.png';
import chrome from '../../assets/img/footer/chrome.png';
import firefox from '../../assets/img/footer/firefox.png';
import sougou from '../../assets/img/footer/sougou.png';
import ie from '../../assets/img/footer/ie.png';

class Footer extends Component {
    render() {
        return (
            <div className="footer">

                <div className="logo">
                    <div className="container">
                        <div className="left">
                            <Link to="/main/home">
                                <img src={logo_bottom} alt=""/>
                            </Link>
                        </div>

                        <div className="right">
                            <ul>
                                <li><span>推荐浏览器</span></li>
                                <li><img src={chrome} alt=""/></li>
                                <li><img src={firefox} alt=""/></li>
                                <li><img src={sougou} alt=""/></li>
                                <li><img src={ie} alt=""/></li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="content">
                    <div className="container">

                        <div className="left">
                            <div>
                                <p>运营资质</p>
                                <img src={foot1} alt=""/>
                            </div>

                            <div>
                                <p>博彩责任</p>
                                <img src={foot2} alt=""/>
                            </div>
                        </div>

                        <div className="right">
                            <p>菲律宾政府合法博彩牌照认证</p>
                            <p><span>© 2019 鸿发在线版权所有</span>All Rights Reserved</p>
                            <p><span>鸿发在线郑重提示：彩票有风险，投注需谨慎，不向未满18周岁的青少年出售彩票</span></p>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default Footer;