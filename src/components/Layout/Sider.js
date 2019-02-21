import React from 'react'
// import PropTypes from 'prop-types'
// import { Icon, Switch } from 'antd'
import Menus from './Menu'

const Sider = () => {
  const menusProps = {

  }
  return (
    <div>
      {/* <div className={styles.logo}>
        <img alt="logo" src={config.logo} />
        {siderFold ? '' : <span>{config.name}</span>}
      </div> */}
      <Menus {...menusProps} />
      {/* {!siderFold ? <div className={styles.switchtheme}>
        <span><Icon type="bulb" />Switch Theme</span>
        <Switch onChange={changeTheme} defaultChecked={darkTheme} checkedChildren="Dark" unCheckedChildren="Light" />
      </div> : ''} */}
    </div>
  )
}

Sider.propTypes = {

}

export default Sider
