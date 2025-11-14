import { motion } from 'framer-motion'
import BlobBackground from './BlobBackground'
import { CalendarCheck, FileText, CreditCard } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[86vh] flex items-center overflow-hidden">
      <BlobBackground />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.8),rgba(255,255,255,0.2))]" />
      <div className="relative mx-auto max-w-7xl px-6 pt-28 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-800">
              Un accompagnement psychomoteur unique pour chaque enfant.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-6 text-lg text-gray-600 max-w-prose">
              Approche bienveillante, ludique et personnalisée pour aider chaque enfant à se développer en harmonie avec son corps et ses émotions.
            </motion.p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="https://www.doctolib.fr/" target="_blank" className="inline-flex items-center gap-2 bg-rose-400/90 hover:bg-rose-400 text-white px-5 py-3 rounded-2xl shadow-md transition-all hover:-translate-y-0.5">
                Prendre rendez-vous
              </a>
              <a href="/espace" className="inline-flex items-center gap-2 bg-white/70 hover:bg-white text-gray-800 px-5 py-3 rounded-2xl shadow-md border border-white/80 backdrop-blur">
                Espace patient
              </a>
            </div>
            <div className="mt-10 flex gap-3 text-gray-600">
              <span className="inline-flex items-center gap-2 bg-white/60 px-3 py-2 rounded-xl backdrop-blur border border-white/50"><CalendarCheck size={18}/> séance</span>
              <span className="inline-flex items-center gap-2 bg-white/60 px-3 py-2 rounded-xl backdrop-blur border border-white/50"><FileText size={18}/> document</span>
              <span className="inline-flex items-center gap-2 bg-white/60 px-3 py-2 rounded-xl backdrop-blur border border-white/50"><CreditCard size={18}/> paiement</span>
            </div>
          </div>
          <div className="relative">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative h-[420px] rounded-[2rem] overflow-hidden backdrop-blur-xl bg-white/40 border border-white/50 shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(100%_60%_at_0%_0%,rgba(255,182,193,0.3),transparent),radial-gradient(80%_50%_at_100%_100%,rgba(255,218,185,0.35),transparent)]" />
              <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-rose-200/60 blur-3xl" />
              <div className="absolute -bottom-24 -right-16 w-72 h-72 rounded-full bg-amber-200/60 blur-3xl" />
              <div className="relative p-8 flex flex-col gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-300 to-amber-200 shadow-inner" />
                <h3 className="text-2xl font-bold text-gray-800">Plateforme patient</h3>
                <p className="text-gray-600">Espace sécurisé pour suivre les séances, documents et paiements.</p>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {["Séances", "Documents", "Paiements"].map((t, i) => (
                    <div key={i} className="bg-white/70 border border-white/60 rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                      <div className="text-sm text-gray-700">{t}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
