// BotCollection.js
import React from 'react';
import BotCard from './BotCard';

const BotCollection = ({ bots, enlistBot }) => {
  if (!bots || bots.length === 0) {
    return <div className="bot-collection">No bots available</div>;
  }

  return (
    <div className="bot-collection">
      {bots.map(bot => (
        <BotCard key={bot.id} bot={bot} onEnlist={() => enlistBot(bot)} /> 
      ))}
    </div>
  );
};

export default BotCollection;
