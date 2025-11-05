import { motion } from "framer-motion";

const candidates = [
  {
    id: 1,
    name: "Alya Putri",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Rafi Pratama",
    photo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Sinta Dewi",
    photo: "https://images.unsplash.com/photo-1541214113241-7f4bfaad6bd6?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Dimas Arya",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
  },
];

function CandidateCard({ name, photo }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <img
          src={photo}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-800">{name}</h3>
        <button
          type="button"
          className="mt-3 inline-flex items-center justify-center rounded-md bg-amber-400 px-4 py-2 text-slate-900 font-medium hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-300"
        >
          View Vision & Mission
        </button>
      </div>
    </motion.div>
  );
}

export default function Candidates() {
  return (
    <section id="candidates" className="bg-gradient-to-b from-white to-blue-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="mb-8 sm:mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-800">
              Meet the Candidates
            </h2>
            <p className="mt-2 text-slate-600">
              Explore each candidate’s profile and vision for the student body.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {candidates.map((c) => (
            <CandidateCard key={c.id} name={c.name} photo={c.photo} />
          ))}
        </div>
      </div>
    </section>
  );
}
