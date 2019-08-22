import React from "react";

const LongHu = props => {
  return (
    <div className="sizeTrend">
      <table>
        <thead>
          <tr>
            <th style={{ width: 90 }}>期号</th>
            <th style={{ width: 40 }}>{props.header_name[0]}</th>
            <th style={{ width: 40 }}>{props.header_name[1]}</th>
            <th>龙</th>
            <th>和</th>
            <th>虎</th>
            <th style={{ width: 40 }}>{props.header_name[2]}</th>
            <th style={{ width: 40 }}>{props.header_name[3]}</th>
            <th>龙</th>
            <th>和</th>
            <th>虎</th>
          </tr>
        </thead>
        <tbody>
          {props.data.length > 0 &&
            props.data.map((item, index) => {
              return (
                <tr key={index} className="line">
                  <td>{item.issue}</td>
                  <td>
                    <span className="red">{item.p1}</span>
                  </td>
                  <td>
                    <span className="red">{item.p2}</span>
                  </td>
                  <td className={typeof item.long1 === "string" ? "big" : ""}>
                    {item.long1}
                  </td>
                  <td className={typeof item.he1 === "string" ? "he" : ""}>
                    {item.he1}
                  </td>
                  <td className={typeof item.hu1 === "string" ? "small" : ""}>
                    {item.hu1}
                  </td>
                  <td>
                    <span className="red">{item.p3}</span>
                  </td>
                  <td>
                    <span className="red">{item.p4}</span>
                  </td>
                  <td className={typeof item.long2 === "string" ? "big" : ""}>
                    {item.long2}
                  </td>
                  <td className={typeof item.he2 === "string" ? "he" : ""}>
                    {item.he2}
                  </td>
                  <td className={typeof item.hu2 === "string" ? "small" : ""}>
                    {item.hu2}
                  </td>
                </tr>
              );
            })}
        </tbody>
        <tbody>
          {props.showcount_obj != "" && (
            <tr className="line red">
              <td colSpan={3}>出现次数</td>
              <td>{props.showcount_obj.showcount_long1}</td>
              <td>{props.showcount_obj.showcount_he1}</td>
              <td>{props.showcount_obj.showcount_hu1}</td>
              <td />
              <td />
              <td>{props.showcount_obj.showcount_long2}</td>
              <td>{props.showcount_obj.showcount_he2}</td>
              <td>{props.showcount_obj.showcount_hu2}</td>
            </tr>
          )}
          {props.lian_obj != "" && (
            <tr className="line green">
              <td colSpan={3}>最大连出</td>
              <td>{props.lian_obj.lian_long1}</td>
              <td>{props.lian_obj.lian_he1}</td>
              <td>{props.lian_obj.lian_hu1}</td>
              <td/>
              <td/>
              <td>{props.lian_obj.lian_long2}</td>
              <td>{props.lian_obj.lian_he2}</td>
              <td>{props.lian_obj.lian_hu2}</td>
            </tr>
          )}
          {props.miss_obj != "" && (
            <tr className="line purple">
              <td colSpan={3}>最大遗漏</td>
              <td>{props.miss_obj.lou_long1}</td>
              <td>{props.miss_obj.lou_he1}</td>
              <td>{props.miss_obj.lou_hu1}</td>
              <td />
              <td />
              <td>{props.miss_obj.lou_long2}</td>
              <td>{props.miss_obj.lou_he2}</td>
              <td>{props.miss_obj.lou_hu2}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LongHu;
