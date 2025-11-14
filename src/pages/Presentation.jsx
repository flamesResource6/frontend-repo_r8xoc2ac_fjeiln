import Navbar from '../components/Navbar'
import Section from '../components/Section'
import BlobBackground from '../components/BlobBackground'
import { motion } from 'framer-motion'

export default function Presentation() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50">
      <Navbar />
      <div className="relative pt-28">
        <BlobBackground />
        <Section title="Qui est Claire Beltramo ?">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="p-6 rounded-3xl bg-white/60 backdrop-blur border border-white/60 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Parcours</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">Diplômée d'État en psychomotricité, Claire accompagne les enfants et leurs familles avec douceur et créativité. Son approche s'appuie sur le jeu, le mouvement et l'écoute pour favoriser le développement harmonieux.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="p-6 rounded-3xl bg-white/60 backdrop-blur border border-white/60 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Spécialités</h3>
              <ul className="mt-3 text-gray-600 space-y-2 list-disc list-inside">
                <li>Retards de développement psychomoteur</li>
                <li>Troubles du tonus, de la coordination et de l'équilibre</li>
                <li>Régulation émotionnelle et attentionnelle</li>
                <li>Accompagnement des particularités neurodéveloppementales</li>
              </ul>
            </motion.div>
          </div>
        </Section>
        <Section title="Valeurs">
          <div className="grid md:grid-cols-3 gap-6">
            {["Bienveillance", "Confiance", "Créativité"].map((v, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/60 backdrop-blur border border-white/60 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 text-gray-700 font-medium text-center">{v}</div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  )
}
