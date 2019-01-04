import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd'
import styles from './style.css'
function First() {
  return (
    <div>
      <p className={styles.red}> haflsdkjf </p>
      <Button> 反馈建安费</Button>
    </div>
  );
}

First.propTypes = {
};

export default connect()(First);
