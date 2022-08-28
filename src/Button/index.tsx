import React, { useContext } from 'react';
import { ButtonProps } from './interface';
import classNames from 'classnames';
import './index.less';
import { globalCtx } from '../GlobalConfig';
import { GlobalConfigProps } from '../GlobalConfig/interface';

function Button(props: ButtonProps) {
  const { className, type, disabled, circle, dashed, loading, icon, handleClick, ...other } = props;
  const { globalColor } = useContext(globalCtx) as GlobalConfigProps;

  console.log('globalColor---', globalColor);
  // todo
  const prefixCls = 'lib-04';
  const darkTheme = true;
  // classNames 直接传值（可以是常量，也可以是变量），& 传递对象（代表有无这个class）
  const classNamesss = classNames(
    'bfd-btn',
    prefixCls,
    className,
    { 'lib-button-dark': darkTheme },
    // [`${prefixCls}--${theme}`]: !!theme,
  );
  const btnClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    handleClick && handleClick(event);
  };
  return (
    <div className={classNamesss} {...other} onClick={btnClick}>
      Button
      {/* <div style={{background:globalColor}}> 我是 globalColor</div> */}
    </div>
  );
}

export default Button;
