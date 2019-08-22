import React, { Component } from "react";
import { Carousel, Row, Col ,message, Tabs, Card} from "antd";
import { Link } from "react-router-dom";
import "./Home.scss";
import bannerLogo1 from "../../assets/img/home/bannerLogo.png";

import txffc from "../../assets/img/home/recommend/txffc.png";
import { fetchData } from "../../services/httpService";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.init_request = "";
    this.state = {
      list: []
    };
  }
  componentDidMount() {
  }

  coming(){
    message.warning("即将上线");
  }

  componentWillUnmount() {
    message.destroy();
    // this.init_request.unsubscribe();
  }

  logout() {
    fetchData("/mobile-auth/logout").subscribe(res => {
      if (res.data.isSuccess === 1) {
        window.localStorage.setItem('password','');
        this.props.history.push("/login");
      }
    });
  }
  render() {
    return (

        <div className='home_body'>

          <div className="box1">

            {/*BANNER轮播图*/}

            <div className="banner">
              <Carousel autoplay>
                  <Link to={"/main/lottery/34"}>
                    <img src={bannerLogo1} alt=""/>
                  </Link>
              </Carousel>
            </div>

            {/*彩种推荐*/}

            <div className="recommend">

              <div className='container'>

                <div className="box">

                  <Tabs defaultActiveKey="1" onChange={callback} className='btns'>
                    <TabPane tab="官方推荐" key="1">
                      <ul className="content">
                        <li><img src={txffc} alt=""/><p>腾讯分分彩</p></li>
                        <li><img src={txffc} alt=""/><p>腾讯分分彩</p></li>
                        <li><img src={txffc} alt=""/><p>腾讯分分彩</p></li>
                        <li><img src={txffc} alt=""/><p>腾讯分分彩</p></li>
                        <li><img src={txffc} alt=""/><p>腾讯分分彩</p></li>
                        <li><img src={txffc} alt=""/><p>腾讯分分彩</p></li>
                      </ul>
                    </TabPane>
                    <TabPane tab="7天排行" key="2">
                      <ul className="content">
                        <li><img src={txffc} alt=""/><p>腾讯分分彩</p></li>
                        <li><img src={txffc} alt=""/><p>腾讯分分彩</p></li>
                        <li><img src={txffc} alt=""/><p>腾讯分分彩</p></li>
                        <li><img src={txffc} alt=""/><p>腾讯分分彩</p></li>
                        <li><img src={txffc} alt=""/><p>腾讯分分彩</p></li>
                        <li><img src={txffc} alt=""/><p>腾讯分分彩</p></li>
                      </ul>
                    </TabPane>
                  </Tabs>

                </div>

              </div>

            </div>

          </div>

          <div className="box2">

            <div className='container'>

              <Row gutter={16}>


                <Col span={17}>

                  <div className="lotteryGame">


                  </div>

                </Col>

                <Col span={7}>
                  <div className="mobile">

                  </div>
                </Col>

              </Row>

              <Row gutter={16}>

                <Col span={9}>
                  <div className="otherGame casino">
                    <div className="game-text">
                      <p>真人视讯</p>
                      <p>CASINO</p>
                    </div>
                  </div>
                </Col>

                <Col span={8}>
                  <div className="otherGame sport">
                    <div className="game-text">
                      <p>体育</p>
                      <p>SPORT</p>
                    </div>
                  </div>
                </Col>

                <Col span={7}>
                  <div className="otherGame slot">
                    <div className="game-text">
                      <p>棋牌</p>
                      <p>POKER</p>
                    </div>
                  </div>
                </Col>

              </Row>

            </div>

          </div>

          <div className="box3">

            <div className='container'>

              <div className='title'>
                <span>行有道,誉天下</span>
              </div>
              
              <div className='aboutUs'>

                通亚拥有菲律宾政府颁发的PAGCOR（Philippine Amusesment and Gaming Corporation）博彩牌照，是继菲律宾国家娱乐游戏公司（部长级政府机构）后第2家持牌公司.并且通过了GLI（Gaming Laboratories International）国际权威认证。
                通亚的主集团14年成就行业龙头地位，与行业多家知名品牌于金融、技术、投资等多领域保持长期战略合作。通亚是富有社会责任感的企业，常年与大陆、菲律宾当地政府保持友好合作, 秉承“行有道、誉天下”之理念。

              </div>


              <Row gutter={16}>
                <Col span={8}>
                  <Card title="高额返奖" bordered={false}>
                    极具吸引力的高奖金组和最强资金兑现力的双重保障，返奖更高，赢利更多！
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="充提快速" bordered={false}>
                    支持中国大陆银联快捷充值，支付宝、微信支付等主流充值渠道，实现最为快捷、便利的充提体验。
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="程序安全" bordered={false}>
                    100%自主研发，通过Global Trust国际安全认证，采用AES 256位加密，为您提供顶级的游戏体验。
                  </Card>
                </Col>
              </Row>

            </div>

          </div>


        </div>



    );
  }
}

export default Home;
