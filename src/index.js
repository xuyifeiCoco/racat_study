import dva from 'dva';
import createLoading from 'dva-loading';
// import createHistory from 'history/createBrowserHistory'
import { message } from 'antd'
import './index.css';

// 1. Initialize
const app = dva({
  // history: createHistory(),  //  browserHistory   如果不配置的话为hash路由
  onError(e) {// 全局错误处理
    message.error(e.message, /* duration */3);
  },
});
app.use(createLoading());  //  配置所有的请求loading

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/app').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
