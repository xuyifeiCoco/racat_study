import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Switch } from 'antd'
import Menus from './Menu'

const Sider = ({
  siderFold, darkTheme, location, changeTheme, navOpenKeys, changeOpenKeys, menu, menus_tree,
}) => {
  const menusProps = {
    menu,
    menus_tree,
    siderFold,
    darkTheme,
    location,
    navOpenKeys,
    changeOpenKeys,
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
