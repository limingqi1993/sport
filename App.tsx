import React from 'react';
import { DIET_PLAN, PHASE_1, PHASE_2, PHASE_3, SUPPLEMENTS, DAILY_SCHEDULE } from './constants';
import DietCard from './components/DietCard';
import SectionHeader from './components/SectionHeader';
import ExerciseCard from './components/ExerciseCard';
import ScheduleSection from './components/ScheduleSection';
import { Dumbbell, Flame, Target, ChevronDown, Car, Calendar, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark pb-20 overflow-x-hidden selection:bg-brand-accent selection:text-brand-dark">
      
      {/* Hero Section */}
      <header className="relative h-[85vh] flex flex-col justify-end p-6 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-brand-dark">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80')] bg-cover bg-center opacity-30 saturate-0 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
          {/* Neon Lines */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 skew-x-12 blur-3xl"></div>
        </div>

        <div className="relative z-10 mb-8">
          <div className="flex items-center gap-2 mb-4 text-brand-accent">
            <Flame className="w-5 h-5 animate-pulse" />
            <span className="font-mono text-sm tracking-widest uppercase">Transformation Protocol</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.9] mb-4">
            CLEAN<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-emerald-400">CARNIVORE</span><br/>
            RESET
          </h1>
          <p className="text-slate-400 max-w-sm text-sm leading-relaxed mb-8">
            Eddie Peng Inspired Blueprint. Clean your gut, correct your posture, build the V-taper, and shred the fat.
          </p>
          
          <div className="animate-bounce absolute bottom-[-20px] left-0 right-0 flex justify-center opacity-50">
            <ChevronDown className="w-6 h-6 text-white" />
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-5 space-y-24 relative z-10">
        
        {/* DIET SECTION */}
        <section>
          <SectionHeader 
            title="饮食方案" 
            subtitle="The Clean Carnivore Reset" 
          />
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700/50 mb-8">
            <h3 className="text-white font-bold mb-2 flex items-center gap-2">
              <Target className="text-brand-accent w-5 h-5"/> 核心原理
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              通过剔除发酵源来<span className="text-white font-semibold">“压平”腹部</span>。低FODMAP，高生物利用率蛋白。
            </p>
          </div>

          <div className="space-y-4">
            {DIET_PLAN.map((item, index) => (
              <DietCard key={index} item={item} />
            ))}
          </div>

          <div className="mt-6 bg-brand-card p-4 rounded-xl border border-yellow-900/30">
            <h4 className="text-yellow-500 font-bold text-sm mb-2 uppercase tracking-wide">关键补剂 (ZMA)</h4>
            {SUPPLEMENTS.map((sup, idx) => (
              <div key={idx} className="text-xs text-slate-300">
                 <p className="font-semibold text-white">{sup.timing}</p>
                 <p className="mt-1">{sup.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PHASE 1 */}
        <section>
          <div className="sticky top-0 z-20 bg-brand-dark/95 backdrop-blur py-4 border-b border-slate-800 mb-6">
            <SectionHeader title="Phase 01" subtitle={PHASE_1.title} className="!mb-0" />
            <div className="flex justify-between items-center text-xs text-slate-400 mt-2 px-4">
              <span>{PHASE_1.duration}</span>
              <span className="text-brand-accent">{PHASE_1.goal}</span>
            </div>
          </div>
          
          <p className="text-slate-400 text-sm mb-6">{PHASE_1.description}</p>
          
          <div className="space-y-6">
            {PHASE_1.exercises.map((ex, idx) => (
              <ExerciseCard key={idx} exercise={ex} index={idx} />
            ))}
          </div>

          {/* Micro Workouts */}
          <div className="mt-8 bg-slate-800 rounded-2xl p-6 border border-brand-accent/20">
            <h3 className="font-display font-bold text-lg text-white mb-4 flex items-center gap-2">
              <Car className="text-brand-accent" /> 驾驶间隙微训练
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {PHASE_1.microWorkouts?.map((mw, idx) => (
                <div key={idx} className="bg-slate-900 p-3 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                     <div className="bg-slate-800 p-2 rounded text-brand-accent font-bold text-xs shrink-0">
                        {mw.sets}
                     </div>
                     <div className="text-white font-bold text-sm">{mw.name}</div>
                  </div>
                  {mw.steps && (
                    <div className="pl-12 text-xs text-slate-400 list-disc">
                        {mw.steps.map((s, i) => <div key={i}>• {s}</div>)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PHASE 2 - Weekly Routine Layout */}
        <section>
          <div className="sticky top-0 z-20 bg-brand-dark/95 backdrop-blur py-4 border-b border-slate-800 mb-6">
             <SectionHeader title="Phase 02" subtitle={PHASE_2.title} className="!mb-0" />
             <div className="flex justify-between items-center text-xs text-slate-400 mt-2 px-4">
              <span>{PHASE_2.duration}</span>
              <span className="text-brand-accent">{PHASE_2.goal}</span>
            </div>
          </div>

          <p className="text-slate-400 text-sm mb-8">{PHASE_2.description}</p>

          {PHASE_2.weeklyRoutine ? (
            <div className="space-y-12">
              {PHASE_2.weeklyRoutine.map((routine, rIdx) => (
                <div key={rIdx} className="relative">
                  {/* Day Header */}
                  <div className="flex items-center gap-3 mb-6 bg-slate-800 p-3 rounded-lg border-l-4 border-brand-accent">
                    <Calendar className="text-brand-accent w-5 h-5" />
                    <div>
                        <div className="flex gap-2 mb-1">
                            {routine.days.map(d => (
                                <span key={d} className="bg-brand-accent text-brand-dark text-xs font-bold px-2 py-0.5 rounded">
                                    {d}
                                </span>
                            ))}
                        </div>
                        <h3 className="text-white font-display font-bold text-lg uppercase tracking-wide">
                            {routine.title} <span className="text-slate-500 mx-2">//</span> {routine.focus}
                        </h3>
                    </div>
                  </div>

                  <div className="space-y-6 border-l border-slate-800 ml-4 pl-4 md:ml-0 md:pl-0 md:border-none">
                    {routine.exercises.map((ex, idx) => (
                      <ExerciseCard key={idx} exercise={ex} index={idx} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Fallback if no weekly routine structure
            <div className="space-y-6">
              {PHASE_2.exercises.map((ex, idx) => (
                <ExerciseCard key={idx} exercise={ex} index={idx} />
              ))}
            </div>
          )}
        </section>

        {/* PHASE 3 */}
        <section>
          <div className="sticky top-0 z-20 bg-brand-dark/95 backdrop-blur py-4 border-b border-slate-800 mb-6">
             <SectionHeader title="Phase 03" subtitle={PHASE_3.title} className="!mb-0" />
             <div className="flex justify-between items-center text-xs text-slate-400 mt-2 px-4">
              <span>{PHASE_3.duration}</span>
              <span className="text-brand-accent">{PHASE_3.goal}</span>
            </div>
          </div>

          <p className="text-slate-400 text-sm mb-6">{PHASE_3.description}</p>
          
          <div className="space-y-6">
            {PHASE_3.exercises.map((ex, idx) => (
              <ExerciseCard key={idx} exercise={ex} index={idx} />
            ))}
          </div>
        </section>

        {/* DAILY SCHEDULE */}
        <section className="pb-10">
          <SectionHeader title="每日执行表" subtitle="The Driver's Protocol" />
          <div className="bg-slate-900 p-4 rounded-3xl border border-slate-800 shadow-2xl">
            <ScheduleSection schedule={DAILY_SCHEDULE} />
          </div>
        </section>

      </main>

      {/* Footer / Floating Action */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-brand-accent hover:bg-lime-400 text-brand-dark font-bold p-4 rounded-full shadow-lg shadow-brand-accent/30 transition-transform hover:scale-110 flex items-center gap-2">
          <Dumbbell className="w-6 h-6" />
          <span className="hidden md:inline pr-2">Start Workout</span>
        </button>
      </div>

    </div>
  );
};

export default App;