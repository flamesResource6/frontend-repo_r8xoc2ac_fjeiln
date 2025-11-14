import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Home, Info, Users, LogIn } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const items = [
    { to: '/', label: 'Accueil', icon: Home },
    { to: '/presentation', label: 'Présentation', icon: Info },
    { to: '/espace', label: 'Espace patient', icon: Users },
  ]

  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="backdrop-blur-xl bg-white/40 rounded-2xl shadow-lg border border-white/40">
          <div className="flex items-center justify-between px-4 py-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-300 to-amber-200 shadow-inner" />
              <div className="font-semibold text-gray-700">Claire Beltramo</div>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {items.map(({ to, label }) => (
                <NavLink key={to} to={to} className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}>
                  {label}
                </NavLink>
              ))}
              <a href="https://www.doctolib.fr/" target="_blank" className="inline-flex items-center gap-2 text-sm bg-rose-400/90 hover:bg-rose-400 text-white px-4 py-2 rounded-xl shadow-md transition-transform hover:-translate-y-0.5">
                <LogIn size={16} /> Prendre rendez-vous
              </a>
            </div>
            <button onClick={() => setOpen(!open)} className="md:hidden relative w-10 h-10 rounded-xl bg-white/60 backdrop-blur border border-white/50 flex items-center justify-center">
              <AnimatePresence initial={false}>
                {open ? (
                  <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <X />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <Menu />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
          <AnimatePresence>
            {open && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden px-4 pb-4">
                <div className="flex flex-col gap-3">
                  {items.map(({ to, label }) => (
                    <NavLink key={to} to={to} onClick={() => setOpen(false)} className={({ isActive }) => `px-3 py-2 rounded-xl ${isActive ? 'bg-white/70 text-gray-900' : 'text-gray-700 hover:bg-white/60'}`}>
                      {label}
                    </NavLink>
                  ))}
                  <a href="https://www.doctolib.fr/" target="_blank" className="px-3 py-2 rounded-xl bg-rose-400/90 text-white">
                    Prendre rendez-vous
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
