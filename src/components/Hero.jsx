import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-200/50 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-200/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-200 px-3 py-1 text-xs font-medium mb-6">
            Student Council Election Platform
          </span>
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">
            OSISVERSE
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-600">
            One Voice, One Vision, One OSIS.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#candidates"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white shadow-lg shadow-blue-600/20 ring-1 ring-blue-700/20 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Start Voting Now
            </motion.a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-blue-700 ring-1 ring-blue-200 hover:bg-blue-50"
            >
              Learn more
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
