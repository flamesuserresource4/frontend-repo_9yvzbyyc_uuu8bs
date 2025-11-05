import { motion } from "framer-motion";
import { Calendar, Megaphone, CheckCircle, Trophy, ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Registration",
    description: "Students sign up and validate their identity.",
    icon: Calendar,
  },
  {
    title: "Campaign",
    description: "Candidates present programs to the community.",
    icon: Megaphone,
  },
  {
    title: "Voting",
    description: "Secure, transparent, and fair ballot casting.",
    icon: CheckCircle,
  },
  {
    title: "Results",
    description: "Real-time tally with audit-ready transparency.",
    icon: Trophy,
  },
];

export default function Timeline() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 text-center">
          Election Timeline
        </h2>
        <p className="mt-2 text-slate-600 text-center">
          A clear path from registration to results.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-blue-50/40 p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 ring-1 ring-blue-700/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">{s.title}</h3>
                </div>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">{s.description}</p>
                {idx < steps.length - 1 && (
                  <div className="mt-4 flex items-center text-blue-700/70">
                    <ArrowRight className="h-4 w-4" />
                    <span className="ml-2 text-xs font-medium">Next</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
