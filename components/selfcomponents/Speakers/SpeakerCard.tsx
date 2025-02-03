import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

interface SpeakerCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ name, role, company, image, linkedin, twitter }) => {
  return (
    <div className="bg-indigo-900/30 rounded-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="text-violet-300 mt-1">{role}</p>
        <p className="text-violet-400 text-sm">{company}</p>
        <div className="mt-4 flex space-x-4">
          {linkedin && (
            <a href={linkedin} className="text-violet-300 hover:text-violet-100">
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {twitter && (
            <a href={twitter} className="text-violet-300 hover:text-violet-100">
              <Twitter className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;