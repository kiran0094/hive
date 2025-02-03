import React from 'react';
import { Code2, Coins, Shield } from 'lucide-react';

interface TrackCardProps {
  title: string;
  description: string;
  type: 'defi' | 'security' | 'infrastructure';
  prizes: string;
}

const TrackCard: React.FC<TrackCardProps> = ({ title, description, type, prizes }) => {
  const getIcon = () => {
    switch (type) {
      case 'defi':
        return <Coins className="h-6 w-6 text-violet-400" />;
      case 'security':
        return <Shield className="h-6 w-6 text-violet-400" />;
      case 'infrastructure':
        return <Code2 className="h-6 w-6 text-violet-400" />;
    }
  };

  return (
    <div className="bg-indigo-900/30 p-6 rounded-lg">
      <div className="mb-4">{getIcon()}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-violet-200 mb-4">{description}</p>
      <div className="border-t border-violet-700 pt-4">
        <p className="text-violet-300">Prizes: {prizes}</p>
      </div>
    </div>
  );
};

export default TrackCard;