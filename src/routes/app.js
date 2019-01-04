import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types'
import { withRouter } from 'dva/router'
// import styles from './app.less';
import { Layout } from 'antd'
import { MyLayout } from '../components'

const {
  Header, Footer, Sider, Content,
} = Layout;
const App =({
  children, dispatch, app, loading, location,
}) => {
  const siderProps = {
    
  }
  return (
    <div>
      <Layout style={{ height: '100vh', overflowY: 'scroll' }} id="mainContainer">
        <Sider>
          {  siderProps.menu && siderProps.menu.length === 0 ? null : <MyLayout.Sider {...siderProps} />}
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
          {
            children
          }
          </Content>
          <Footer>Footer</Footer>
        </Layout>
    </Layout>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  app: PropTypes.object,
  loading: PropTypes.object,
};

export default withRouter(connect(({ app, loading }) => ({ app, loading }))(App))
