// YourBotArmy.js
import React from 'react';

const YourBotArmy = ({ army, releaseBot, dischargeBot }) => {
  const handleRelease = (bot) => {
    releaseBot(bot); // Release the bot
  };

  const handleDischarge = (botId) => {
    dischargeBot(botId); // Discharge the bot
  };

  return (
    <div>
      <h2>Your Bot Army</h2>
      {army.map(bot => (
        <div key={bot.id} className="army-bot">
          <div>
            <h3>{bot.name}</h3>
            <button onClick={() => handleRelease(bot)}>Release</button> {/* Release button */}
          </div>
          <button className="delete-btn" onClick={() => handleDischarge(bot.id)}>x</button> {/* Discharge button */}
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;
