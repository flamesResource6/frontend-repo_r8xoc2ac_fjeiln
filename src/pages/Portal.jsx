import { useEffect, useMemo, useState } from 'react'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import BlobBackground from '../components/BlobBackground'
import { motion } from 'framer-motion'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Portal() {
  const [patients, setPatients] = useState([])
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ first_name: '', last_name: '', date_of_birth: '', email: '' })

  const fetchPatients = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${API}/api/patients`)
      const data = await res.json()
      setPatients(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchPatients() }, [])

  const createPatient = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`${API}/api/patients`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Erreur création patient')
      setForm({ first_name: '', last_name: '', date_of_birth: '', email: '' })
      fetchPatients()
    } catch (e) { console.error(e) } finally { setLoading(false) }
  }

  const age = (dob) => {
    if (!dob) return ''
    const d = new Date(dob)
    const diff = Date.now() - d.getTime()
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50">
      <Navbar />
      <div className="relative pt-28">
        <BlobBackground />
        <Section title="Espace patient">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1 p-6 rounded-3xl bg-white/60 backdrop-blur border border-white/60 shadow">
              <h3 className="font-semibold text-gray-800">Créer un patient</h3>
              <form onSubmit={createPatient} className="mt-4 space-y-3">
                <input className="w-full rounded-xl px-3 py-2 bg-white/80 border border-white/70" placeholder="Prénom" value={form.first_name} onChange={e=>setForm({...form, first_name:e.target.value})} required />
                <input className="w-full rounded-xl px-3 py-2 bg-white/80 border border-white/70" placeholder="Nom" value={form.last_name} onChange={e=>setForm({...form, last_name:e.target.value})} required />
                <input className="w-full rounded-xl px-3 py-2 bg-white/80 border border-white/70" placeholder="Date de naissance (JJ/MM/AAAA)" value={form.date_of_birth} onChange={e=>setForm({...form, date_of_birth:e.target.value})} required />
                <input className="w-full rounded-xl px-3 py-2 bg-white/80 border border-white/70" placeholder="Email (optionnel)" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
                <button disabled={loading} className="w-full bg-rose-400/90 hover:bg-rose-400 text-white px-4 py-2 rounded-xl shadow disabled:opacity-60">{loading? 'En cours...' : 'Créer'}</button>
              </form>
              <p className="text-xs text-gray-500 mt-3">Un compte est créé automatiquement si nécessaire.</p>
            </div>
            <div className="md:col-span-2 space-y-4">
              {loading && <div className="text-sm text-gray-600">Chargement...</div>}
              <div className="grid sm:grid-cols-2 gap-4">
                {patients.map(p => (
                  <motion.div key={p.id} whileHover={{ y: -4 }} className="p-5 rounded-2xl bg-white/60 backdrop-blur border border-white/60 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-800">{p.first_name} {p.last_name}</div>
                        <div className="text-xs text-gray-500">{age(p.date_of_birth)} ans</div>
                      </div>
                      <a href={`#/patients/${p.id}`} className="text-sm text-rose-500 hover:underline">Fiche</a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}
