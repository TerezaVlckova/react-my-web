import './HobbiesTabs.css';
import React, { useState } from 'react';
import hobbies from '../../data/hobbies';

const HobbiesTabs = () => {
  
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getActiveTabData = () => {
    return hobbies.find(hobby => hobby.id === activeTab)
  };

  return (
    <div>
      <div className='hobbies-tabs'>
        {hobbies.map((oneTab) => {
          return (
            <div 
              key={oneTab.id}
              className={activeTab === oneTab.id ? 'active-tab' : 'inactive-tab'}
              onClick={() => handleTabClick(oneTab.id)}
            >
              {oneTab.name}
            </div>
          );
        })}
      </div>

      <div className='hobbies-text'>
        <p>{getActiveTabData().text}</p>
        <img src={getActiveTabData().image} className='hobbies-image' alt=""></img>
      </div>

    </div>
  )
}

export default HobbiesTabs