import { motion } from 'framer-motion'

export default function Section({ title, children, className = '' }) {
  return (
    <section className={`relative py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-6">
        {title && (
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            {title}
          </motion.h2>
        )}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          {children}
        </motion.div>
      </div>
    </section>
  )
}
