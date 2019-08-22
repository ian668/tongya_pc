import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/index.scss';
import * as serviceWorker from './serviceWorker';
var fundebug = require("fundebug-javascript");
fundebug.apikey = "be532a5b22ef8f5f5f38fc96ff0bdcdfbc1cf1e28acd8a0a9a19a4dafe3ba4fd";
if ("fundebug" in window) {
  fundebug.silentResource = true;
  fundebug.silentHttp = true;
}
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, info) {
      this.setState({ hasError: true });
      // 将component中的报错发送到Fundebug
      fundebug.notifyError(error, {
        metaData: {
          info: info
        }
      });
    }
  
    render() {
      if (this.state.hasError) {
        return null;
        // Note: 也可以在出错的component处展示出错信息，返回自定义的结果。
      }
      return this.props.children;
    }
  }
  
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render( <ErrorBoundary> <App /> </ErrorBoundary>, document.getElementById('root'));
serviceWorker.unregister();
