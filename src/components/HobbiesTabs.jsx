import './HobbiesTabs.css';
import React, { useState } from 'react';
import hobbies from '../data/hobbies';

//tab menu with hobbies
const HobbiesTabs = () => {
  
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>

      {/* single tabs */}
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

      {/* content of tabs */}
      <div className='hobbies-text'>
        {/* According to the active tab text is set */}
        <p>{hobbies.find(hobby => hobby.id === activeTab).text}</p>
        <img src={hobbies.find(hobby => hobby.id === activeTab).image} className='hobbies-image' alt=""></img>
      </div>

    </div>
  )
}

export default HobbiesTabs