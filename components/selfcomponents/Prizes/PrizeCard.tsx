import React from 'react';
import { Trophy, Award, Medal } from 'lucide-react';

interface PrizeCardProps {
  rank: '1st' | '2nd' | '3rd';
  prize: string;
  description: string;
}

const PrizeCard: React.FC<PrizeCardProps> = ({ rank, prize, description }) => {
  const getIcon = () => {
    switch (rank) {
      case '1st':
        return <Trophy className="h-8 w-8 text-yellow-400" />;
      case '2nd':
        return <Award className="h-8 w-8 text-gray-300" />;
      case '3rd':
        return <Medal className="h-8 w-8 text-amber-700" />;
      default:
        return null;
    }
  };

  return (
    <div className="relative bg-indigo-900/30 rounded-lg p-8 transform hover:scale-105 transition-transform duration-300">
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        {getIcon()}
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-2xl font-bold text-white">{rank} Place</h3>
        <p className="text-violet-400 text-xl mt-2">{prize}</p>
        <p className="text-violet-200 mt-4">{description}</p>
      </div>
    </div>
  );
};

export default PrizeCard;