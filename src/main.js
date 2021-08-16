const React = window.React;
const ReactDOM = window.ReactDOM;

let n = 0;
const App = () =>
  React.createElement("div", null, [
    n,
    React.createElement(
      "button",
      {
        onClick: () => {
          n += 1;
          console.log(n); //这一句是精髓
          ReactDOM.render(App(), document.querySelector("#app")); // 为什么还是不能重新渲染
        }
      },
      "+1"
    )
  ]);

ReactDOM.render(App(), document.querySelector("#app"));
