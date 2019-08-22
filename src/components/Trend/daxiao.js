import React from "react";

const DaXiao = props => {
  return (
    <div className="sizeTrend">
      <table>
        <thead>
          <tr>
            <th style={{ width: 90 }}>期号</th>
            <th style={{ width: 40 }}>0</th>
            <th style={{ width: 40 }}>1</th>
            <th style={{ width: 40 }}>2</th>
            <th colSpan={2}>{props.header_name[0]}位</th>
            <th style={{ width: 40 }} />
            <th colSpan={2}>{props.header_name[1]}位</th>
            <th style={{ width: 40 }} />
            <th colSpan={2}>{props.header_name[2]}位</th>
          </tr>
        </thead>
        <tbody>
          {props.data.length>0&&props.data.map((item, index) => {
            return (
              <tr key={index} className="line">
                <td>{item.issue}</td>
                <td>
                  <span className="red">{item.p1}</span>
                </td>
                <td>
                  <span className="red">{item.p2}</span>
                </td>
                <td>
                  <span className="red">{item.p3}</span>
                </td>
                <td className={typeof(item.data1)==='string'?"big":''}>{item.data1}</td>
                <td className={typeof(item.data2)==='string'?"small":''}>{item.data2}</td>
                <td />
                <td className={typeof(item.data3)==='string'?"big":''}>{item.data3}</td>
                <td className={typeof(item.data4)==='string'?"small":''}>{item.data4}</td>
                <td />
                <td className={typeof(item.data5)==='string'?"big":''}>{item.data5}</td>
                <td className={typeof(item.data6)==='string'?"small":''}>{item.data6}</td>
              </tr>
            );
          })}
        </tbody>
        <tbody>
          {props.showcount_obj!=''&&(
              <tr className="line red">
                <td colSpan={4}>出现次数</td>
                <td>{props.showcount_obj.showcount1}</td>
                <td>{props.showcount_obj.showcount2}</td>
                <td />
                <td>{props.showcount_obj.showcount3}</td>
                <td>{props.showcount_obj.showcount4}</td>
                <td />
                <td>{props.showcount_obj.showcount5}</td>
                <td>{props.showcount_obj.showcount6}</td>
                </tr>
          )}
          {props.miss_obj!=''&&(
              <tr className="line green">
                <td colSpan={4}>最大连出</td>
                <td>{props.miss_obj.zdyl1}</td>
                <td>{props.miss_obj.zdyl2}</td>
                <td />
                <td>{props.miss_obj.zdyl3}</td>
                <td>{props.miss_obj.zdyl4}</td>
                <td />
                <td>{props.miss_obj.zdyl5}</td>
                <td>{props.miss_obj.zdyl6}</td>
                </tr>
          )}
          {props.miss_obj!=''&&(
              <tr className="line purple">
                <td colSpan={4}>最大遗漏</td>
                <td>{props.miss_obj.zdyl2}</td>
                <td>{props.miss_obj.zdyl1}</td>
                <td />
                <td>{props.miss_obj.zdyl4}</td>
                <td>{props.miss_obj.zdyl3}</td>
                <td />
                <td>{props.miss_obj.zdyl6}</td>
                <td>{props.miss_obj.zdyl5}</td>
                </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DaXiao;
