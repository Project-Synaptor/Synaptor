import { Brain, Zap, Layers } from "lucide-react";

export default function FeaturesSection() {
    return (
        <section
            id="features"
            className="relative z-10 py-32 px-6 bg-gradient-to-b from-[#020617] to-[#020617]"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard
                    icon={<Brain className="text-cyan-400" size={28} />}
                    title="Cognitive Modeling"
                    description="Our AI builds a dynamic model of your knowledge graph, identifying gaps before you even realize them."
                />
                <FeatureCard
                    icon={<Zap className="text-purple-400" size={28} />}
                    title="Real-time Adaptation"
                    description="Difficulty scales instantly based on your response time, accuracy, and confidence patterns."
                />
                <FeatureCard
                    icon={<Layers className="text-pink-400" size={28} />}
                    title="Multi-modal Delivery"
                    description="Struggling with text? Synaptor automatically switches to visual or interactive problem types."
                />

            </div>
        </section>
    );
}

function FeatureCard({ icon, title, description }) {
    return (
        <div className="relative w-[400px] h-[250px] rounded-3xl p-8 bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all flex flex-col justify-center">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 ">
                {icon}
            </div>

            <h3 className="text-xl font-semibold text-white mb-3">
                {title}
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
}
