import React, { createContext, ReactNode } from 'react';

export interface globalConfig {
  prefix: string;
  children?: ReactNode;
}

const defaultConfig: globalConfig = {
  prefix: 'btn',
};

export const globalContext = createContext(defaultConfig);

function ConfigProvider2(props: globalConfig) {
  const { prefix, children } = props;
  return <globalContext.Provider value={{ prefix }}>{children}</globalContext.Provider>;
}

export default ConfigProvider2;
