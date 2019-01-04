import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd'

function Second() {
  return (
    <div>
      <Button> 反馈建安费</Button>
    </div>
  );
}

Second.propTypes = {
};

export default connect()(Second);