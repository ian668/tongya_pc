import React from 'react';
import {Button, Tabs, Tag } from "antd";
const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
}
const Record =props=> {
        return (
            <div>
                <Tabs onChange={callback} type="card">

                    <TabPane tab="投注记录" key="1">

                        <div className="table_box">
                            <table>
                                <thead>
                                    <tr>
                                        <th>游戏</th>
                                        <th>玩法</th>
                                        <th>期号</th>
                                        <th>开奖号</th>
                                        <th>投注金额</th>
                                        <th>奖金</th>
                                        <th>返点</th>
                                        <th>状态</th>
                                        <th>操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.betRecord.length>0&&props.betRecord.map((item,index)=>{
                                        return (
                                            <tr key={index}>
                                                <td>{item.gamename}</td>
                                                <td>{item.method}</td>
                                                <td>{item.number}</td>
                                                <td>{item.prizeballs}</td>
                                                <td>{item.money}</td>
                                                <td>{item.prize}</td>
                                                <td>{item.commission}</td>
                                                <td>
                                                    {item.statuscode===0&&(<Tag color="gold">未开奖</Tag>)}
                                                    {item.statuscode===1&&(<Tag color="volcano">已撤单</Tag>)}
                                                    {item.statuscode===2&&(<Tag color="volcano">未中奖</Tag>)}
                                                    {item.statuscode===3&&(<Tag color="green">已中奖</Tag>)}
                                                    {item.statuscode===4&&(<Tag color="green">已派奖</Tag>)}
                                                    {item.statuscode===5&&(<Tag color="volcano">系统撤单</Tag>)}
                                                </td>
                                                <td>
                                                    <Button type="link" onClick={()=>{props.checkBetDetail(item.id)}}>订单详情</Button>
                                                    {item.statuscode===0&&(<Button onClick={()=>{props.cancel(item)}} type="link">撤单</Button>)}
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </TabPane>
                    <TabPane tab="追号记录" key="2">
                        <div className="table_box">
                            <table>
                                <thead>
                                <tr>
                                    <th>游戏</th>
                                    <th>玩法</th>
                                    <th>起始奖期</th>
                                    <th>追号进度</th>
                                    <th>总追号金额</th>
                                    <th>已中奖金额</th>
                                    <th>追中即停</th>
                                    <th>状态</th>
                                    <th>操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {props.traceRecord.length>0&&props.traceRecord.map((item,index)=>{
                                        return (
                                            <tr key={index}>
                                                <td>{item.gamename}</td>
                                                <td>{item.method}</td>
                                                <td>{item.startnumber}</td>
                                                <td>{item.progress}</td>
                                                <td>{item.amount}</td>
                                                <td>{item.prize}</td>
                                                <td>{item.iswinstop}</td>
                                                <td>
                                                    {item.statuscode===0&&(<Tag color="gold">进行中</Tag>)}
                                                    {item.statuscode===1&&(<Tag color="green">已完成</Tag>)}
                                                    {item.statuscode===2&&(<Tag color="volcano">用户撤单</Tag>)}
                                                    {item.statuscode===3&&(<Tag color="volcano">管理员撤单</Tag>)}
                                                    {item.statuscode===4&&(<Tag color="volcano">系统撤单</Tag>)}
                                                </td>
                                                <td>
                                                    <Button type="link" onClick={()=>{props.checkTraceDetail(item)}}>订单详情</Button>
                                                    {item.statuscode===0&&(<Button onClick={()=>{props.cancelAll(item)}} type="link">撤单</Button>)}
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        );
    }

export default Record;