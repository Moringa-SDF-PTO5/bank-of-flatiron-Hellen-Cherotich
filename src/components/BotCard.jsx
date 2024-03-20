// BotCard.js
import React from 'react';

const BotCard = ({ bot, onEnlist }) => {
  const handleEnlist = () => {
    onEnlist(bot); // Enlist the bot
  };

  return (
    <div className="bot-card">
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      <button onClick={handleEnlist}>Enlist</button> {/* Add enlist button */}
    </div>
  );
};

export default BotCard;
