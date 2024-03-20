import React from 'react';

const Bot = ({ bot }) => {
  return (
    <div className="Bot">
      <img src={bot.avatar_url} alt={bot.name} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
      <div className="bot-details">
      <h2>{bot.name}</h2>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor:{bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
    </div>
    </div>
  );
}

export default Bot;
