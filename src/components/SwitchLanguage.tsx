import React from 'react';
import { Switch, ConfigProvider } from 'antd';
import '../styles/SwitchLanguage.css';
import { useLanguage } from '../context/LanguageContext';


const SwitchLanguage: React.FC = () => {
  const { idioma, setIdioma } = useLanguage();

  const onChange = (checked: boolean) => {
    setIdioma(checked ? 'en' : 'pt');
  };

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
      <Switch defaultChecked={idioma === 'en'} onChange={onChange} />
    </ConfigProvider>
  );
};

export default SwitchLanguage;