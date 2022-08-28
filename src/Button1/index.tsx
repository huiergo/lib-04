import React, { ReactNode, useContext } from 'react';
import cs from 'classnames';
import { ConfigContext } from '../ConfigProvider/index';
import { ConfigProviderProps } from '../ConfigProvider/interface';
import { PoweroffOutlined } from '@ant-design/icons';

import './index.less';
// import Icon from '../Icon'

interface ButtonProps {
  /**
   * @description 类型
   * @default default
   */
  type?: 'primary' | 'default' | 'link';
  /**
   * @description 禁用状态
   * @default false
   */
  disabled?: Boolean;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 样式
   */
  style?: Object;
  /**
   * @description icon图标
   */
  icon?: ReactNode;
  /**
   * @description 回调函数
   */
  onClick?: Function;
  /**
   * 内容
   */
  children?: ReactNode;
  /**
   * 文本
   */
  text?: string;
  /**
   * @description 加载中
   */
  loading?: boolean;
}

function Button1(props: ButtonProps) {
  const { className, style, type, disabled, loading, icon, text, onClick, children, ...rest } =
    props;

  const btnClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (disabled) {
      return;
    }
    onClick && onClick(event);
  };

  const { prefix, theme, primaryColor } = useContext(ConfigContext) as ConfigProviderProps;

  const prefixCls = prefix + '-btn'; //getPrefixCls('btn', customizePrefixCls);

  // todo: prefix， theme, btn的classname规范， provider 中theme的改变
  const classes = cs(
    prefixCls,
    {
      [`${prefixCls}_${type}`]: type,
      [`${prefixCls}_disabled`]: disabled,
      [`${prefixCls}_loading`]: loading,
    },
    className,
  );

  return (
    <div className={classes} style={style} {...rest} onClick={btnClick} disabled={disabled}>
      {loading && (
        <div className={`${prefixCls}-loading`}>
          <PoweroffOutlined />
        </div>
      )}
      {icon && icon}
      {text && text}
      {children}
    </div>
  );

  // return (<>
  //   {type=='primary'&&<div className='btn btn-primay'></div>}
  //   {type=='default'&&<div className='btn btn-default'></div>}
  //   {type=='link'&&<div className='btn btn-link'></div>}
  // </>)
}

export default Button1;
/**
 * 1、分析后-->抽离属性
 * 2、先用普通的if else 看下多麻烦----> class 类名整合处理
 * 3、前缀会有很多，容易写错 ---> 我们可以统一的前缀去规范 less ，同理也可以有统一的前缀在我们的 tsx文件中。
 */
// Button:
// 	（通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：type -> shape -> size -> loading -> disabled。
// ）

// 	type: 按钮类型： primary | ghost | dashed | link | text | default
// 	danger: 是否是危险
// 	disabled: 不可点击
// 	href 点击跳转地址
// 	icon 图标组件
// 	onClick 回调函数
