import React from 'react';
import { connect } from 'dva';
// import { Button } from 'antd'
import styles from './style.css'
function Index() {
  return (
    <div>
      <p className={styles.red}> 我这个是首页 </p>
      {/* <Button> 测试部署</Button> */}
    </div>
  );
}

Index.propTypes = {
};

export default connect()(Index);
