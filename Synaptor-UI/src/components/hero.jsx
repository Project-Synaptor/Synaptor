export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center px-6 mt-32 relative z-10">
      <span className="mb-6 px-4 py-1 rounded-full bg-white/10 text-sm text-cyan-300">
        ● NOW IN BETA PREVIEW
      </span>

      <h1 className="text-5xl md:text-7xl font-extrabold text-white max-w-5xl leading-tight">
        AI that{" "}
        <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          adapts
        </span>{" "}
        <br />
        to how you learn.
      </h1>

      <p className="mt-6 max-w-3xl text-slate-400 text-lg">
        Synaptor analyzes your cognitive patterns in real-time, adjusting
        difficulty, format, and pacing to maximize your knowledge retention rate.
      </p>

      <div className="mt-10 flex gap-4 flex-wrap justify-center">
        <a href="/quiz" className="px-8 py-4 rounded-xl cursor-pointer bg-white text-black font-semibold">
          Start Learning Session →</a>
        <button className="px-8 py-4 cursor-pointer rounded-xl bg-white/10 border border-white/10 text-white hover:bg-white/20 transition duration-200 ease-in">
          View Analytics
        </button>
      </div>
    </section>
  );
}
