import React from 'react';
import { Space, Switch, ConfigProvider } from 'antd';
import '../styles/SwitchLanguage.css';

const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

const SwitchLanguage: React.FC = () => (
//     <ConfigProvider
//     theme={{
//       token: {
//         // Seed Token
//         colorPrimary: '#00b96b',
//         borderRadius: 2,

//         // Alias Token
//         colorBgContainer: '#f6ffed',
//       },
//     }}
//   >

    <Switch 
    defaultChecked onChange={onChange}
    />
);

export default SwitchLanguage;