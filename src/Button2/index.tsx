import cs from 'classnames';
import React, { ReactNode, useContext } from 'react';
import './index.less';
import { globalContext, globalConfig } from '../ConfigProvider2/index';

interface ButtonProps {
  type?: 'highlight' | 'default';
  disabled?: boolean;
  text?: string;
  children?: ReactNode;
  icon?: string;
  className?: string;
  style?: object;
  onClick?: Function;
}
function Button2(props: ButtonProps) {
  const { type, disabled, text, children, icon, className, style, onClick } = props;
  // const prefix='btn'

  const { prefix } = useContext(globalContext) as globalConfig;
  const btnClick: React.MouseEventHandler<HTMLDivElement> = () => {
    if (disabled) {
      return;
    }
    onClick && onClick();
  };

  return (
    <div
      className={
        // `btn btn_default ${className}`
        cs(prefix, {
          [`${prefix}_disabled`]: disabled,
          [`${prefix}_highlight`]: type == 'highlight',
          [`${prefix}_default`]: type == 'default',
        })
      }
      onClick={btnClick}
      style={style}
    >
      {icon}
      {text}
      {children}
    </div>
  );
}

export default Button2;
