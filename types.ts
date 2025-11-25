
export interface DietItem {
  meal: string;
  food: string;
  desc: string;
  icon: string;
}

export interface Supplement {
  name: string;
  timing: string;
  details: string;
}

export interface Exercise {
  name: string;
  sets: string;
  reps: string;
  tips: string;
  icon?: string;
  steps?: string[]; // Detailed breakdown steps
  videoUrl?: string; // Default video URL (baked into build)
}

export interface TrainingDay {
  days: string[]; // e.g., ["Monday", "Thursday"]
  title: string;
  focus: string;
  exercises: Exercise[];
}

export interface TrainingPhase {
  title: string;
  duration: string;
  goal: string;
  description: string;
  exercises: Exercise[]; // Kept for Phase 1 & 3 compatibility
  microWorkouts?: Exercise[];
  schedule?: string[]; // Legacy simple schedule
  weeklyRoutine?: TrainingDay[]; // New: Detailed weekly schedule for Phase 2
}

export interface ScheduleItem {
  time: string;
  activity: string;
  details: string;
  icon: string;
}
