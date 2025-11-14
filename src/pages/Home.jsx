import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Section from '../components/Section'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50">
      <Navbar />
      <Hero />
      <Section title="Pourquoi la psychomotricité ?">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: 'Développement global', d: 'Prendre en compte le corps, les émotions et le mouvement.' },
            { t: 'Approche ludique', d: 'Des séances adaptées, bienveillantes et motivantes.' },
            { t: 'Parcours personnalisé', d: 'Chaque enfant est unique : objectifs sur-mesure.' },
          ].map((c, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/60 backdrop-blur border border-white/60 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
              <div className="text-lg font-semibold text-gray-800">{c.t}</div>
              <div className="text-gray-600 mt-2">{c.d}</div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
