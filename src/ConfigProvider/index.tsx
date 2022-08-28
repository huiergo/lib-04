import React, { createContext } from 'react';
import type { Context } from 'react';
import { ConfigProviderProps } from './interface';

const defaultConfig: ConfigProviderProps = {
  prefix: 'lib-04',
  theme: 'light',
  primaryColor: '#00bc70',
};

export const ConfigContext: Context<ConfigProviderProps> = createContext(defaultConfig);

function ConfigProvider(props: ConfigProviderProps) {
  const { children, theme, primaryColor, prefix } = props;
  return (
    <ConfigContext.Provider value={{ theme, primaryColor, prefix }}>
      {children}
    </ConfigContext.Provider>
  );
}

export default ConfigProvider;
