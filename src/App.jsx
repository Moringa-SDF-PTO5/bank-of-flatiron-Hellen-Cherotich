// App.js
import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://json-server-8vqy.onrender.com/bots`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
  
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Response is not in JSON format');
        }
  
        const data = await response.json();
        setBots(data);
      } catch (error) {
        console.error('Error fetching bots:', error);
      }
    };
  
    fetchData();
  }, []);

  const enlistBot = (bot) => {
    if (!army.some(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  };

  const dischargeBot = async (botId) => {
    try {
      await fetch(`https://json-server-8vqy.onrender.com/bots/${botId}`, {
        method: 'DELETE'
      });
      setArmy(army.filter(b => b.id !== botId));
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

  return (
    <div className="app-container">
      <div className="bot-collection">
        <h2>All Bots</h2>
        <BotCollection bots={bots} enlistBot={enlistBot} />
      </div>
      <div className="your-bot-army">
        <YourBotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      </div>
    </div>
  );
};

export default App;
