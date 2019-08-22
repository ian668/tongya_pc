import React, {Component} from 'react';
import SHeader from "../common/S_header";
import {Icon} from "antd";
import './Brand.scss';

import zb1 from '../../assets/img/brand/zb1.png';
import zb2 from '../../assets/img/brand/zb2.png';
import zb3 from '../../assets/img/brand/zb3.png';
import zb4 from '../../assets/img/brand/zb4.png';
import zb5 from '../../assets/img/brand/zb5.png';
import icon1 from '../../assets/img/brand/inr-ico-1.png';
import icon2 from '../../assets/img/brand/inr-ico-2.png';
import icon3 from '../../assets/img/brand/inr-ico-3.png';

class Brand extends Component {
    render() {
        return (
            <div className="brand">
                <SHeader />
                <div className="banner">
                    <div className="box">
                        选永泰 赢世界
                        <p>王者雄心，智胜千里</p>
                    </div>
                    <div className="title">我们是一家权威认证的购彩平台</div>
                    <p className="text">永泰娱乐于2014年成功上线，拥有菲律宾政府PAGCOR (Philippine Amusement and Gaming Corporation) 颁发的博彩牌照并经第三方游戏平台 GLI (Gaming Laboratories International) 权威认证，是一家<span>合法、安全、专业</span>的购彩平台，永泰的主集团拥有14年行业经验。</p>
                </div>
                <div className="authority">
                    <div className="container">
                        <p>权威认证</p>
                        <ul>
                            <li><img src={zb1} alt=""/></li>
                            <li><img src={zb2} alt=""/></li>
                            <li><img src={zb3} alt=""/></li>
                            <li><img src={zb4} alt=""/></li>
                            <li><img src={zb5} alt=""/></li>
                        </ul>
                    </div>
                </div>
                <div className="screen1">
                    <div className="container">
                        <div className="title">
                            <div>一路有您 • 精彩纷呈</div>
                            <p>彩票游戏、竞彩足球、电子娱乐场的安全购彩服务</p>
                        </div>
                        <ul>
                            <li className="li1">
                                <img src={icon1} alt=""/>
                                <div className="text">
                                    强大的资金实力
                                    <br />
                                    100%兑现赔付，保您畅玩无忧
                                </div>
                                <Icon type="plus" />

                                <div className="content">

                                    <p>您可以选择其他超高奖金组平台，但永泰会始终承诺给您最优奖金组和最强资金兑现力的双重保障！我们与主集团始终统一管理，只要您在获奖，无论多少，都100%即刻兑现，确保您的经济利益</p>

                                </div>
                            </li>

                            <li className="li2">
                                <img src={icon2} alt=""/>
                                <div className="text">
                                    资金风险管控力
                                    <br />
                                    为您挡风雨、稳发展
                                </div>
                                <Icon type="plus" />

                                <div className="content">

                                    <p>永泰的主集团十二年成就行业龙头地位，与稳健的资金风险管控力密不可分。永泰娱乐拥有主集团的十二年稳健发展背景，风险管控能力远超行业平均水平，完全能为您撑起一把强有力的大伞来挡风遮雨</p>

                                </div>
                            </li>

                            <li className="li3">
                                <img src={icon3} alt=""/>
                                <div className="text">
                                    人才是第一生产力
                                    <br />
                                    精英永泰，独一无二
                                </div>
                                <Icon type="plus" />

                                <div className="content">

                                    <p>自永泰上线以来，无论是程序研发、交互体验、界面设计还是市场活动，都成为众多同行争相效仿的楷模。永泰团队的每一位成员，都是从千万人中精挑细选出的各领域精英。集团化的科学管理，紧密而融洽的团队合作，永泰期待与您一起见证下一个十年辉煌</p>

                                </div>
                            </li>
                        </ul>

                    </div>

                </div>

                <div className="screen2">

                    <div className="container">

                        <div className="title">
                            <div>行有道·誉天下</div>
                            <p>永泰娱乐拥有菲律宾政府颁发的PAGCOR（Philippine Amusesment and Gaming Corporation)博彩牌照，是继菲律宾国家娱乐游戏公司（部长级政府机构）
                                后第2家持牌公司。并且通过了GLI(Gaming Laboratories lnternational)国际权威认证。永泰的主集团14年成就行业龙头地位，旗下拥有独立运营的支付，云计
                                算，客服与电话销售等行业基础服务公司。主集团与瑞士联邦计量局认证的ldq（IDQuantique)合作研发出行业首家基于光量子物理的游戏开奖模式，实现公正
                                的游戏模式。与行业多家知名品牌于金融，技术，投资等多领域保持长期战略合作。永泰是富有社会责任感的企业，常年与大陆，菲律宾当地政府保持友好合作。
                                帮助各地区提升在环境，教育，儿童保护等领域的工作成效，秉承“行有道 • 誉天下”之理念。</p>
                        </div>

                        <ul className="content">
                            <li className="text">
                                <h3>高额返奖</h3>
                                <p>极具吸引力的高奖金组和最强资金兑现力的双重保障，返奖更高，赢利更多！</p>
                            </li>
                            <li className="img1">
                            </li>
                            <li className="text">
                                <h3>资金雄厚</h3>
                                <p>14年稳健的资金管控能力，强大的现金流，100%兑现赔付，保您畅玩无忧。</p>
                            </li>
                            <li className="img2">
                            </li>
                            <li className="text">
                                <h3>充值快速</h3>
                                <p>19家银行银联快捷充值，支付宝、微信支付、财付通充值等主流充值渠道，实现最为快捷、便利的充提体验。</p>
                            </li>
                            <li className="img3">
                            </li>
                        </ul>

                    </div>
                </div>

            </div>
        );
    }
}

export default Brand;