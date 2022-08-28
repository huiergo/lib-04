import React, { useContext } from 'react';
import 'font-awesome/css/font-awesome.css';
import cs from 'classnames';
import { ConfigContext } from '../ConfigProvider/index';
import { ConfigProviderProps } from '../ConfigProvider/interface';

interface IconProps {
  className?: string;
  type?: string;
}

function Icon(props: IconProps) {
  const { className, type, ...other } = props;
  const { prefix, theme, primaryColor } = useContext(ConfigContext) as ConfigProviderProps;
  const prefixCls = prefix + '-icon';
  return <i className={cs(`${prefixCls} fa`, 'fa-' + type, className)} {...other}></i>;
}

export default Icon;

// import 'font-awesome/css/font-awesome.css'
// import React, { PropTypes } from 'react'
// import classnames from 'classnames'

// const Icon = props => {
//   const { className, type, ...other } = props
//   return (
//     <i className={classnames('bfd-icon fa', 'fa-' + type, className)} {...other}></i>
//   )
// }

// Icon.propTypes = {
//   // 图标类型，http://fontawesome.io/icons/
//   type: PropTypes.string.isRequired
// }

// export default Icon
