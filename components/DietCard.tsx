import React from 'react';
import { DietItem } from '../types';
import { Egg, Utensils, BeanOff, Fish, Droplet, Apple, Coffee } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  egg: <Egg className="w-6 h-6" />,
  drumstick: <Utensils className="w-6 h-6" />,
  cherry: <Apple className="w-6 h-6" />,
  fish: <Fish className="w-6 h-6" />,
  droplet: <Droplet className="w-6 h-6" />,
  coffee: <Coffee className="w-6 h-6" />,
};

interface Props {
  item: DietItem;
}

const DietCard: React.FC<Props> = ({ item }) => {
  return (
    <div className="relative overflow-hidden bg-brand-card rounded-xl p-5 border border-slate-700 shadow-lg flex items-start gap-4 mb-4">
      <div className="bg-brand-accent/20 text-brand-accent p-3 rounded-lg shrink-0">
        {iconMap[item.icon] || <Utensils className="w-6 h-6" />}
      </div>
      <div>
        <h3 className="text-lg font-bold text-white mb-1 font-display uppercase">{item.meal}</h3>
        <p className="text-brand-accent font-semibold mb-2 text-sm">{item.food}</p>
        <p className="text-brand-muted text-xs leading-relaxed border-t border-slate-700 pt-2">
          {item.desc}
        </p>
      </div>
      {/* Decorative bg element */}
      <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-gradient-to-br from-brand-accent to-transparent opacity-5 rounded-full blur-xl pointer-events-none" />
    </div>
  );
};

export default DietCard;