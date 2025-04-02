import React from 'react';
import { Switch, ConfigProvider } from 'antd';
import '../styles/SwitchLanguage.css';

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

const SwitchLanguage: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#5B4150',
        colorBgContainer: '#fff',
      },
      components: {
        Switch: {
          handleBg: '#fff',
          colorPrimary: '#5B4150',
        },
        
        
      },
    }}
  >
    <Switch defaultChecked onChange={onChange} />
  </ConfigProvider>
);

export default SwitchLanguage;