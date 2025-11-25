
import { DietItem, Supplement, TrainingPhase, ScheduleItem, Exercise } from './types';

export const DIET_PLAN: DietItem[] = [
  {
    meal: "早餐",
    food: "3-4个全蛋 (炒/煮) + 嫩菠菜",
    desc: "鸡蛋是生物利用率最高的蛋白质；菠菜提供纤维且低FODMAP。",
    icon: "egg"
  },
  {
    meal: "午餐",
    food: "烤鸡腿肉/瘦牛肉 + 白米饭 (150g)",
    desc: "白米饭易消化，适合敏感肠胃。严禁蒜/洋葱酱汁。",
    icon: "drumstick"
  },
  {
    meal: "加餐",
    food: "无乳糖酸奶/硬质干酪 + 蓝莓",
    desc: "硬质干酪乳糖极低。蓝莓含多酚。补充益生菌。",
    icon: "cherry"
  },
  {
    meal: "晚餐",
    food: "三文鱼/牛排 (大蒜油腌制) + 西葫芦/四季豆",
    desc: "Omega-3抗炎。适量低FODMAP蔬菜。",
    icon: "fish"
  },
  {
    meal: "饮水",
    food: "每日3-4升纯水",
    desc: "严禁碳酸饮料（腹胀推手）。",
    icon: "droplet"
  }
];

export const SUPPLEMENTS: Supplement[] = [
  {
    name: "ZMA",
    timing: "睡前30-60分钟空腹",
    details: "镁450mg + 锌30mg + 维B6 10mg。避开含钙食物。"
  }
];

// --- EXERCISE DATA HELPERS ---

const EX_GOBLET_SQUAT: Exercise = {
  name: "高脚杯深蹲 (Goblet Squats)",
  sets: "3",
  reps: "12",
  tips: "手持哑铃于胸前，强迫胸椎挺直。下蹲时打开膝盖。",
  steps: [
    "双脚略宽于肩站立，双手托住哑铃一端置于胸前。",
    "挺胸收腹，背部挺直，视线平视前方。",
    "屈髋屈膝下蹲，膝盖向脚尖方向打开。",
    "蹲至大腿低于膝盖水平线。",
    "脚跟发力，臀部收缩站起回到起始位置。"
  ]
};

const EX_GLUTE_BRIDGE: Exercise = {
  name: "臀桥 (Glute Bridges)",
  sets: "3",
  reps: "15",
  tips: "顶峰收缩臀部2秒。唤醒“失忆”臀肌，对抗骨盆前倾。",
  steps: [
    "仰卧在垫子上，双膝弯曲，双脚分开与髋同宽。",
    "脚跟靠近臀部，手臂平放于身体两侧。",
    "核心收紧，臀部发力向上顶起。",
    "至肩、髋、膝呈一条直线，顶峰收缩2秒。",
    "缓慢下放臀部，尽量不接触地面直接进行下一次。"
  ]
};

const EX_INVERTED_ROW: Exercise = {
  name: "反向划船 / 哑铃划船",
  sets: "3",
  reps: "10",
  tips: "强化上背部，对抗圆肩。",
  steps: [
    "单手持哑铃，另一手扶凳，背部挺直与地面平行。",
    "肩胛骨后缩，手肘贴近身体向后上方拉起哑铃。",
    "拉至哑铃触及髋部位置，感受背肌收缩。",
    "控制速度缓慢下放至手臂伸直。",
    "保持身体稳定，不要借助惯性扭动躯干。"
  ]
};

const EX_DEAD_BUG: Exercise = {
  name: "死虫式 (Dead Bug)",
  sets: "3",
  reps: "12",
  tips: "腰部紧贴地面，避免骨盆前倾代偿。",
  steps: [
    "仰卧，手臂伸直指向天花板，双腿屈膝呈90度抬起。",
    "核心用力，强迫下背部死死压住地面。",
    "缓慢伸直左腿和右臂，直至接近地面但不触碰。",
    "保持下背部不离开地面，吸气还原。",
    "换对侧手脚重复动作。"
  ]
};

const EX_PUSH_UP: Exercise = {
  name: "俯卧撑",
  sets: "3",
  reps: "力竭",
  tips: "核心收紧，身体成一条直线。",
  steps: [
    "双手略宽于肩撑地，双脚并拢，身体呈直线。",
    "核心收紧，避免塌腰或撅臀。",
    "屈肘下放身体，大臂与躯干呈45度夹角。",
    "胸部接近地面时，推起身体回到起始位。",
    "如力量不足，可采用跪姿进行。"
  ]
};

// PHASE 2 EXERCISES
const EX_OHP: Exercise = {
  name: "站姿哑铃推举 (Overhead Press)",
  sets: "3",
  reps: "8-10",
  tips: "彭于晏标志性宽肩的核心动作。",
  steps: [
    "站姿，双手持哑铃举至肩部上方，掌心向前。",
    "核心收紧，保持臀部夹紧以稳定脊柱。",
    "垂直向上推举哑铃，直至手臂接近伸直（不要锁死肘关节）。",
    "缓慢下放至耳朵水平位置。",
    "保持身体不晃动，不要借助腿部力量。"
  ]
};

const EX_PULL_UP: Exercise = {
  name: "引体向上 (Pull-Ups)",
  sets: "3",
  reps: "力竭",
  tips: "打造背阔肌宽度，优化腰宽比。",
  steps: [
    "双手宽握单杠，掌心朝前。",
    "肩胛骨下沉（沉肩），启动背阔肌发力。",
    "将胸部拉向横杠，下巴过杠。",
    "缓慢控制下放，感受背部肌肉拉伸。",
    "如下肢力量不足，可使用弹力带辅助。"
  ]
};

const EX_INCLINE_PRESS: Exercise = {
  name: "上斜哑铃卧推",
  sets: "3",
  reps: "10-12",
  tips: "填补上胸薄弱。",
  steps: [
    "调整健身椅至30-45度倾角。",
    "仰卧，双手持哑铃置于胸部两侧。",
    "向上推起哑铃，轨迹略微向内聚合。",
    "顶峰收缩胸肌上部。",
    "缓慢下放至胸部拉伸感最强处。"
  ]
};

const EX_FACE_PULL: Exercise = {
  name: "面拉 (Face Pulls)",
  sets: "4",
  reps: "15",
  tips: "针对后束三角肌，防止含胸，改善体态。",
  steps: [
    "调整滑轮至头部高度，双手握住绳索。",
    "拇指向后，将绳索拉向面部。",
    "拉动过程中双手分开，大臂外旋。",
    "终点位置双手在耳朵两侧，犹如展示二头肌。",
    "控制还原，感受后肩发力。"
  ]
};

const EX_RDL: Exercise = {
  name: "罗马尼亚硬拉 (RDL)",
  sets: "3",
  reps: "8-10",
  tips: "强化腘绳肌和臀部，对抗久坐带来的肌肉缩短。",
  steps: [
    "双手持哑铃置于大腿前侧，双脚与髋同宽。",
    "膝盖微屈并锁死角度，臀部向后推。",
    "哑铃贴着腿部垂直下降，感受大腿后侧拉伸。",
    "下放至胫骨中部（背部必须保持平直）。",
    "臀部向前推，回到直立姿态。"
  ]
};

const EX_SPLIT_SQUAT: Exercise = {
  name: "保加利亚分腿蹲",
  sets: "3",
  reps: "8-10/侧",
  tips: "解决左右肌力不平衡。",
  steps: [
    "背对长凳站立，一只脚脚背搭在凳子上。",
    "前脚向前跨出一步，保持躯干直立。",
    "屈膝下蹲，后膝接近地面。",
    "前腿发力站起，保持膝盖指向脚尖。",
    "完成一侧次数后换边。"
  ]
};

const EX_LEG_RAISE: Exercise = {
  name: "悬垂举腿",
  sets: "3",
  reps: "10-15",
  tips: "打造下腹部线条，控制骨盆后倾。",
  steps: [
    "悬挂于单杠上，身体静止。",
    "收紧腹肌，卷动骨盆，将双腿抬起。",
    "尽量抬高至膝盖触胸或双腿水平。",
    "缓慢控制下放，不要借助惯性摆动。",
    "避免耸肩，保持沉肩姿态。"
  ]
};

const EX_HIIT_SPRINT: Exercise = {
  name: "30秒全力冲刺 (HIIT)",
  sets: "6-10组",
  reps: "30s冲/90s休",
  tips: "跑步、划船机或波比跳。提升胰岛素敏感性。",
  steps: [
    "热身5分钟。",
    "全力冲刺30秒，达到最大心率90%以上。",
    "慢速放松90秒进行恢复。",
    "重复6-10个循环。",
    "结束后进行冷身拉伸。"
  ]
};

const EX_L_SIT: Exercise = {
  name: "L支撑 (L-Sit) 进阶",
  sets: "3",
  reps: "力竭",
  tips: "体操力量，建立强大的静态核心。",
  steps: [
    "双手撑地或使用俯卧撑架。",
    "推起身体，双腿伸直抬起与地面平行。",
    "身体呈'L'型，核心极度收紧。",
    "保持呼吸，坚持至力竭。",
    "初学者可先采用屈膝团身支撑。"
  ]
};

const EX_AB_ROLLER: Exercise = {
  name: "健腹轮 (Ab Rollouts)",
  sets: "3",
  reps: "10",
  tips: "极强的抗伸展力量，刺激腹直肌全长。",
  steps: [
    "跪姿，双手握住健腹轮。",
    "核心收紧，含胸拱背。",
    "缓慢向前推动轮子，身体随之伸展。",
    "推至身体接近地面（不要塌腰）。",
    "腹肌发力，将身体拉回起始姿势。"
  ]
};


export const PHASE_1: TrainingPhase = {
  title: "第一阶段：体态修正与核心唤醒",
  duration: "第1-4周",
  goal: "压平腹部，强化后链",
  description: "针对久坐导致的圆肩、骨盆前倾。重点强化背部、臀部和核心抗旋。",
  exercises: [
    EX_GOBLET_SQUAT,
    EX_GLUTE_BRIDGE,
    EX_INVERTED_ROW,
    EX_DEAD_BUG,
    EX_PUSH_UP
  ],
  microWorkouts: [
    {
      name: "坐姿臀部挤压",
      sets: "5",
      reps: "10秒",
      tips: "促进血液循环。",
      icon: "activity",
      steps: ["坐姿，用力收缩臀大肌。", "保持10秒。", "放松，重复5次。"]
    },
    {
      name: "颈部后缩 (Chin Tucks)",
      sets: "随时",
      reps: "10次",
      tips: "对抗头部前引。",
      icon: "user",
      steps: ["保持视线水平。", "下巴水平向后收（挤出双下巴）。", "保持2秒后放松。"]
    }
  ]
};

export const PHASE_2: TrainingPhase = {
  title: "第二阶段：倒三角肌肥大",
  duration: "第5-16周",
  goal: "彭于晏式宽肩阔背",
  description: "上/下肢分化，渐进式超负荷。RPE 8-9（接近力竭）。",
  exercises: [], // Not used for this phase view
  weeklyRoutine: [
    {
      days: ["周一", "周四"],
      title: "训练 A",
      focus: "上肢推拉 (肩/背/胸)",
      exercises: [EX_OHP, EX_PULL_UP, EX_INCLINE_PRESS, EX_FACE_PULL]
    },
    {
      days: ["周二", "周五"],
      title: "训练 B",
      focus: "下肢力量与核心",
      exercises: [EX_RDL, EX_SPLIT_SQUAT, EX_LEG_RAISE]
    },
    {
      days: ["周三", "周六", "周日"],
      title: "休息 / 有氧",
      focus: "主动恢复",
      exercises: [
        {
            name: "低强度有氧 / 休息",
            sets: "30-45",
            reps: "分钟",
            tips: "快走、慢跑或完全休息。周六可进行主动恢复。",
            steps: ["保持心率在120-140bpm之间。", "放松身心，缓解肌肉酸痛。"]
        }
      ]
    }
  ]
};

export const PHASE_3: TrainingPhase = {
  title: "第三阶段：激战模式 HIIT",
  duration: "第17-24周",
  goal: "剥离脂肪，极致线条",
  description: "3次力量 + 2次高强度体能(HIIT)。针对顽固内脏脂肪。",
  exercises: [
    EX_HIIT_SPRINT,
    EX_L_SIT,
    EX_AB_ROLLER,
    {
        name: "龙旗 (Dragon Flag) 离心",
        sets: "3",
        reps: "5",
        tips: "模拟李小龙标志性动作，控制下放。",
        steps: [
            "躺在长凳上，双手抓住头顶后方边缘。",
            "双腿和躯干向上踢起，直至垂直地面（仅肩部着凳）。",
            "保持身体像旗帜一样笔直。",
            "极慢速下放身体，对抗地心引力。",
            "当下背部即将触凳时，重新抬起或屈膝回收。"
        ]
    }
  ]
};

export const DAILY_SCHEDULE: ScheduleItem[] = [
  { time: "07:00", activity: "起床 & 水化", details: "500ml水+少许海盐。不看手机。", icon: "sunrise" },
  { time: "07:15", activity: "晨间活动度", details: "猫牛式、伟大拉伸、深蹲保持。", icon: "activity" },
  { time: "07:30", activity: "早餐", details: "3蛋 + 菠菜。每口咀嚼20次。", icon: "coffee" },
  { time: "08:30", activity: "通勤 (驾驶)", details: "座椅人体工学。红灯做颈部后缩。", icon: "car" },
  { time: "10:30", activity: "工作间隙", details: "站立，5组臀部收缩。步行排气。", icon: "clock" },
  { time: "13:00", activity: "午餐", details: "肉+饭。无蒜无洋葱。慢咽。", icon: "utensils" },
  { time: "15:00", activity: "加餐", details: "无乳糖酸奶或坚果。", icon: "apple" },
  { time: "17:00", activity: "返程", details: "反向凯格尔练习(放松盆底)。", icon: "car" },
  { time: "18:00", activity: "训练模块", details: "执行对应阶段力量或体能。", icon: "dumbbell" },
  { time: "19:30", activity: "晚餐", details: "鱼/牛排 + 蔬菜。", icon: "moon" },
  { time: "21:00", activity: "康复流程", details: "ZMA。青蛙趴 + 膈肌呼吸。", icon: "heart" },
  { time: "22:30", activity: "睡眠", details: "7-8小时。完全黑暗。", icon: "zzz" }
];
