import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-blue-100 bg-blue-50/50 p-8 sm:p-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-800">
            About OSISVERSE
          </h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            OSISVERSE is a secure, transparent, and efficient digital voting platform
            designed specifically for student council elections. Built with integrity
            at its core, it streamlines registration, campaigning, voting, and result
            announcements — empowering students to participate with confidence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
