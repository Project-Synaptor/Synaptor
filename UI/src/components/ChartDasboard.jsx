import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { day: "Mon", value: 65 },
    { day: "Tue", value: 75 },
    { day: "Wed", value: 70 },
    { day: "Thu", value: 85 },
    { day: "Fri", value: 92 },
];

export default function ChartDasboard() {
    return (
        <div className="flex items-center ">
            <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 w-200 h-125 mt-5">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-white text-lg font-semibold">
                        Performance Trajectory
                    </h3>
                    <select className="bg-white/10 border border-white/10 text-slate-300 text-sm rounded-lg px-3 py-1 outline-none">
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                    </select>
                </div>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>

                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4} />
                                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                                </linearGradient>
                            </defs>

                            <CartesianGrid
                                strokeDasharray="3 3"
                                stroke="rgba(255,255,255,0.05)"
                                vertical={false}
                            />

                            <XAxis
                                dataKey="day"
                                stroke="#64748b"
                                tickLine={false}
                                axisLine={false}
                            />

                            <YAxis
                                stroke="#64748b"
                                tickLine={false}
                                axisLine={false}
                                domain={[0, 100]}
                            />

                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#020617",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    borderRadius: "8px",
                                }}
                                itemStyle={{ color: "#e5e7eb" }}
                            />

                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="#8b5cf6"
                                strokeWidth={3}
                                fill="url(#colorValue)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div>
                <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 text-center h-[450px] w-[400px] translate-x-[220px]">

                    {/* Avatar */}
                    <div className="mx-auto mb-4 w-24 h-24 rounded-full border-2 border-cyan-400 flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">JD</span>
                    </div>

                    {/* Name */}
                    <h3 className="text-lg font-semibold text-white">John Doe</h3>
                    <p className="text-slate-400 text-sm mb-4">Visual Learner</p>

                    {/* Tags */}
                    <div className="flex justify-center gap-2 mb-6">
                        <Tag label="Visual" />
                        <Tag label="Fast Paced" />
                    </div>

                    {/* AI Insight */}
                    <div className="text-left rounded-2xl bg-white/5 border border-white/10 p-4">
                        <p className="text-xs text-slate-400 font-semibold uppercase mb-2">
                            AI Insight
                        </p>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            You perform 24% better on visual pattern matching questions.
                            We've adjusted your curriculum to include more diagrams.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
function Tag({ label }) {
    return (
        <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs text-slate-300">
            {label}
        </span>
    );
}

