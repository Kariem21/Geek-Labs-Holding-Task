import React, { useState } from "react";
import "./Titles.css";
const Titles = () => {
    const [activeTitle, setActiveTitle] = useState('Alerts');

    const makeActive = (title) => {
      setActiveTitle(title);
    };  return (
    <nav className="titles-container">
    <div>
      <p className="coming-soon">coming soon</p>
      <h1 onClick={() => makeActive('Trading')} className={activeTitle === 'Trading' ? 'active' : ''}>
        Trading
      </h1>
    </div>
    <div>
      <p className="coming-soon">coming soon</p>
      <h1 onClick={() => makeActive('Automation')} className={activeTitle === 'Automation' ? 'active' : ''}>
        Automation
      </h1>
    </div>
    <div>
      <p className="coming-soon">coming soon</p>
      <h1 onClick={() => makeActive('Portfolio')} className={activeTitle === 'Portfolio' ? 'active' : ''}>
        Portfolio
      </h1>
    </div>
    <div>
      <h1 onClick={() => makeActive('Alerts')} className={activeTitle === 'Alerts' ? 'active' : ''}>
        Alerts
      </h1>
    </div>
    <div>
      <h1 onClick={() => makeActive('Training')} className={activeTitle === 'Training' ? 'active' : ''}>
        Training
      </h1>
    </div>
  </nav>
  );
};

export default Titles;
