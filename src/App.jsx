import Hero from "./components/Hero";
import About from "./components/About";
import Candidates from "./components/Candidates";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-amber-400" />
            <span className="font-bold tracking-tight text-blue-700">OSISVERSE</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-700">
            <a href="#about" className="hover:text-blue-700">About</a>
            <a href="#candidates" className="hover:text-blue-700">Candidates</a>
            <a href="#timeline" className="hover:text-blue-700">Timeline</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Candidates />
        <div id="timeline">
          <Timeline />
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-gradient-to-b from-white to-blue-50">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center text-slate-600">
          © 2025 OSISVERSE — Powered by SMK IT Assalam.
        </div>
      </footer>
    </div>
  );
}

export default App;
