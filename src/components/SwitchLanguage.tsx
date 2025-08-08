import React from 'react';
import { Switch, ConfigProvider } from 'antd';
import '../styles/SwitchLanguage.css';
import { useLanguage } from '../context/LanguageContext';

const SwitchLanguage: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
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
      <Switch
        checked={language === 'en'} // PT quando está checado
        onChange={toggleLanguage}
      />
    </ConfigProvider>
  );
};

export default SwitchLanguage;
