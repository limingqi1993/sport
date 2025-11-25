import React from 'react';
import { ScheduleItem } from '../types';
import { Sun, Coffee, Car, Clock, Utensils, Apple, Moon, Heart, Activity } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  sunrise: <Sun className="w-4 h-4" />,
  activity: <Activity className="w-4 h-4" />,
  coffee: <Coffee className="w-4 h-4" />,
  car: <Car className="w-4 h-4" />,
  clock: <Clock className="w-4 h-4" />,
  utensils: <Utensils className="w-4 h-4" />,
  apple: <Apple className="w-4 h-4" />,
  moon: <Moon className="w-4 h-4" />,
  heart: <Heart className="w-4 h-4" />,
  zzz: <Moon className="w-4 h-4" />,
  dumbbell: <Activity className="w-4 h-4" />
};

interface Props {
  schedule: ScheduleItem[];
}

const ScheduleSection: React.FC<Props> = ({ schedule }) => {
  return (
    <div className="relative ml-2">
      {/* Timeline Line */}
      <div className="absolute top-0 bottom-0 left-[19px] w-0.5 bg-slate-700" />

      <div className="space-y-6">
        {schedule.map((item, idx) => (
          <div key={idx} className="relative pl-12">
            {/* Timeline Dot */}
            <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-slate-800 border-2 border-brand-accent z-10 flex items-center justify-center text-brand-accent shadow-lg shadow-brand-accent/20">
              {iconMap[item.icon] || <Clock className="w-4 h-4" />}
            </div>

            <div className="bg-slate-800/80 p-3 rounded-lg border-l-2 border-slate-600">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-brand-accent font-mono text-sm font-bold bg-brand-accent/10 px-1 rounded">
                  {item.time}
                </span>
                <h4 className="font-bold text-white text-sm uppercase">{item.activity}</h4>
              </div>
              <p className="text-slate-400 text-xs leading-snug">
                {item.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleSection;