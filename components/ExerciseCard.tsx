
import React, { useState, useEffect } from 'react';
import { Exercise } from '../types';
import { Info, CheckCircle2, ListOrdered, Link as LinkIcon, Save, X, ExternalLink } from 'lucide-react';

interface Props {
  exercise: Exercise;
  index: number;
}

const ExerciseCard: React.FC<Props> = ({ exercise, index }) => {
  const [isDone, setIsDone] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [isEditingUrl, setIsEditingUrl] = useState(false);
  const [inputUrl, setInputUrl] = useState('');

  // Load saved URL from local storage on mount, or use default from constants
  useEffect(() => {
    const savedUrl = localStorage.getItem(`fit_url_${exercise.name}`);
    if (savedUrl) {
      setVideoUrl(savedUrl);
      setInputUrl(savedUrl);
    } else if (exercise.videoUrl) {
      setVideoUrl(exercise.videoUrl);
      setInputUrl(exercise.videoUrl);
    }
  }, [exercise.name, exercise.videoUrl]);

  const handleSaveUrl = () => {
    if (inputUrl.trim()) {
      localStorage.setItem(`fit_url_${exercise.name}`, inputUrl.trim());
      setVideoUrl(inputUrl.trim());
    } else {
      localStorage.removeItem(`fit_url_${exercise.name}`);
      // Revert to default if exists
      setVideoUrl(exercise.videoUrl || '');
    }
    setIsEditingUrl(false);
  };

  return (
    <div className={`group relative bg-brand-card rounded-2xl overflow-hidden border transition-all duration-300 shadow-xl ${isDone ? 'border-brand-accent/50 opacity-75' : 'border-slate-700 hover:border-brand-accent'}`}>
      
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
      </div>

      {/* Header Bar */}
      <div className="relative z-10 flex flex-col border-b border-slate-700/50 bg-slate-800/50 backdrop-blur-sm">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center gap-3 flex-1 mr-2">
            <div className="w-8 h-8 rounded-lg bg-slate-700 text-white font-display flex items-center justify-center text-sm border border-slate-600 shadow-inner shrink-0">
               #{index + 1}
            </div>
            
            <div className="flex-1 min-w-0">
              {videoUrl && !isEditingUrl ? (
                <a 
                  href={videoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-2 text-lg font-bold text-white font-display leading-tight hover:text-brand-accent transition-colors decoration-brand-accent underline underline-offset-4 decoration-2"
                >
                  <span className="truncate">{exercise.name}</span>
                  <ExternalLink className="w-4 h-4 opacity-50 group-hover/link:opacity-100" />
                </a>
              ) : (
                <h3 className="text-lg font-bold text-white font-display leading-tight truncate">{exercise.name}</h3>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Edit Link Button */}
            <button
              onClick={() => setIsEditingUrl(!isEditingUrl)}
              className="p-2 rounded-full text-slate-400 hover:text-brand-accent hover:bg-slate-700/50 transition-colors"
              title="Add/Edit Video URL"
            >
              <LinkIcon className={`w-4 h-4 ${videoUrl ? 'text-brand-accent' : ''}`} />
            </button>

            {/* Check Done Button */}
            <button 
              onClick={() => setIsDone(!isDone)}
              className={`p-2 rounded-full transition-all active:scale-95 ${isDone ? 'bg-brand-accent text-brand-dark shadow-[0_0_15px_rgba(132,204,22,0.5)]' : 'bg-slate-700 text-slate-400 hover:text-white hover:bg-slate-600'}`}
            >
              <CheckCircle2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* URL Input Form */}
        {isEditingUrl && (
          <div className="px-4 pb-4 animate-in slide-in-from-top-2 fade-in duration-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                placeholder="粘贴视频链接 (https://...)"
                className="flex-1 bg-slate-900 border border-slate-600 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent placeholder-slate-600"
                autoFocus
              />
              <button 
                onClick={handleSaveUrl}
                className="bg-brand-accent text-brand-dark rounded-lg px-3 py-2 hover:bg-lime-400 transition-colors"
              >
                <Save className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setIsEditingUrl(false)}
                className="bg-slate-700 text-white rounded-lg px-3 py-2 hover:bg-slate-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="relative z-10 p-6 flex flex-col justify-center bg-slate-900/40">
        
        {/* Stats Badges */}
        {(exercise.sets && exercise.reps) && (
          <div className="flex items-center gap-6 mb-6 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
            <div className="flex flex-col items-center flex-1">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1">组数</span>
              <span className="text-brand-accent font-display font-bold text-2xl">{exercise.sets}</span>
            </div>
            <div className="w-px bg-slate-700 h-10 self-center"></div>
            <div className="flex flex-col items-center flex-1">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1">次数</span>
              <span className="text-white font-display font-bold text-2xl">{exercise.reps}</span>
            </div>
          </div>
        )}

        {/* Action Breakdown */}
        {exercise.steps && exercise.steps.length > 0 && (
          <div className="mb-6">
            <h4 className="flex items-center gap-2 text-xs font-bold text-brand-muted uppercase tracking-wider mb-4 border-b border-slate-700/50 pb-2">
              <ListOrdered className="w-4 h-4 text-brand-accent" /> 动作拆解
            </h4>
            <div className="space-y-4">
              {exercise.steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center shadow text-xs text-brand-accent font-bold mt-0.5">
                     {i + 1}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed font-medium pt-0.5">{step}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tips */}
        {exercise.tips && (
          <div className="mt-auto bg-brand-accent/5 rounded-lg p-3 border border-brand-accent/10 flex items-start gap-3">
            <Info className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
            <p className="text-slate-400 text-xs italic leading-relaxed">{exercise.tips}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseCard;
