import { Zap, Brain, Target } from "lucide-react";

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard
        icon={<Zap className="text-yellow-400" size={22} />}
        value="78"
        suffix="/100"
        label="Learning Velocity"
        badge="+12% this week"
      />

      <StatCard
        icon={<Brain className="text-cyan-400" size={22} />}
        value="40"
        suffix="%"
        label="Concept Mastery"
        badge="Stable"
      />

      <StatCard
        icon={<Target className="text-pink-400" size={22} />}
        value="85"
        suffix="/100"
        label="Engagement Score"
        badge="+5% vs avg"
      />
    </div>
  );
}

function StatCard({ icon, value, suffix, label, badge }) {
  return (
    <div className="relative mt-6 h-[200px] w-[400px] rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl">
      <div className="flex items-center justify-between mb-6">
        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
          {icon}
        </div>

        <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-slate-300">
          {badge}
        </span>
      </div>
      <div className="flex items-end gap-1 mb-1">
        <span className="text-4xl font-bold text-white">{value}</span>
        <span className="text-slate-400 text-lg">{suffix}</span>
      </div>
      <p className="text-slate-400 text-sm">{label}</p>
    </div>
  );
}
