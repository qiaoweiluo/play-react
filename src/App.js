import React, { useState, useMemo } from "react";
// , PureComponent, memo, useState, useMemo, useCallback
// import "./App.css";

function Count(props) {
  return <div>子组件count值：{props.count}</div>;
}

function App(props) {
  const [count, setCount] = useState(0);

  //第一个参数是要执行的函数
  //第二个参数是执行函数依赖的变量组成的数据
  //这里只有count发生变化double才会重新计算
  const double = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <div className="app">
      <p>父组件count值：{count}</p>
      <Count count={count} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
      <div>double值：{double}</div>
    </div>
  );
}

export default App;
