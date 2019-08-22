import React from "react";
import ReactHtmlParser from 'react-html-parser';
const DanHao = props => {
  return (
    <div className="oddNubTrend">
      <table>
        <thead>
          <tr>
            <th style={{ width: 90 }}>期号</th>
            <th>号码</th>
            <th>0</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
          </tr>
        </thead>
        <tbody>
          {props.data.length > 0 &&
            props.data.map((item, index) => {
              return (
                <tr key={index} className="line">
                  <td>{item.issue}</td>
                  <td>{item.p}</td>
                  <td>{ReactHtmlParser(item.s0)}</td>
                  <td>{ReactHtmlParser(item.s1)}</td>
                  <td>{ReactHtmlParser(item.s2)}</td>
                  <td>{ReactHtmlParser(item.s3)}</td>
                  <td>{ReactHtmlParser(item.s4)}</td>
                  <td>{ReactHtmlParser(item.s5)}</td>
                  <td>{ReactHtmlParser(item.s6)}</td>
                  <td>{ReactHtmlParser(item.s7)}</td>
                  <td>{ReactHtmlParser(item.s8)}</td>
                  <td>{ReactHtmlParser(item.s9)}</td>
                </tr>
              );
            })}
        </tbody>
        <tbody>
          {props.showcount_obj != "" && (
            <tr className="line red">
              <td colSpan={2}>出现次数</td>
              <td>{props.showcount_obj.c0}</td>
              <td>{props.showcount_obj.c1}</td>
              <td>{props.showcount_obj.c2}</td>
              <td>{props.showcount_obj.c3}</td>
              <td>{props.showcount_obj.c4}</td>
              <td>{props.showcount_obj.c5}</td>
              <td>{props.showcount_obj.c6}</td>
              <td>{props.showcount_obj.c7}</td>
              <td>{props.showcount_obj.c8}</td>
              <td>{props.showcount_obj.c9}</td>
            </tr>
          )}
          {props.lian_obj != "" && (
            <tr className="line green">
              <td colSpan={2}>最大连出</td>
              <td>{props.lian_obj.lian_s0}</td>
              <td>{props.lian_obj.lian_s1}</td>
              <td>{props.lian_obj.lian_s2}</td>
              <td>{props.lian_obj.lian_s3}</td>
              <td>{props.lian_obj.lian_s4}</td>
              <td>{props.lian_obj.lian_s5}</td>
              <td>{props.lian_obj.lian_s6}</td>
              <td>{props.lian_obj.lian_s7}</td>
              <td>{props.lian_obj.lian_s8}</td>
              <td>{props.lian_obj.lian_s9}</td>
            </tr>
          )}
          {props.miss_obj != "" && (
            <tr className="line purple">
              <td colSpan={2}>最大遗漏</td>
              <td>{props.miss_obj.lou_s0}</td>
              <td>{props.miss_obj.lou_s1}</td>
              <td>{props.miss_obj.lou_s2}</td>
              <td>{props.miss_obj.lou_s3}</td>
              <td>{props.miss_obj.lou_s4}</td>
              <td>{props.miss_obj.lou_s5}</td>
              <td>{props.miss_obj.lou_s6}</td>
              <td>{props.miss_obj.lou_s7}</td>
              <td>{props.miss_obj.lou_s8}</td>
              <td>{props.miss_obj.lou_s9}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DanHao;
