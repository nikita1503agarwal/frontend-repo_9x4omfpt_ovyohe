import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Envoi en cours...')

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('✅ Message envoyé avec succès !')
        setForm({ name: '', email: '', phone: '', message: '' })
      } else {
        const data = await res.json().catch(() => ({}))
        setStatus(`❌ Échec de l\'envoi${data.detail ? `: ${data.detail}` : ''}`)
      }
    } catch (err) {
      setStatus(`❌ Erreur: ${err.message}`)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Nous contacter</h2>
            <p className="text-slate-300 mb-6">Commençons la discussion pour votre projet de site web !</p>
            <ul className="space-y-2 text-slate-200/90">
              <li>• Accueil</li>
              <li>• Contact</li>
              <li>• enfres</li>
            </ul>
            <p className="mt-6 text-slate-400 text-sm">Copyright © 2025 Luba web</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-slate-200 mb-1">Prénom *</label>
                <input name="name" value={form.name} onChange={handleChange} required className="w-full px-3 py-2 rounded bg-slate-900/60 border border-white/10 text-white outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-slate-200 mb-1">Adresse électronique *</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-3 py-2 rounded bg-slate-900/60 border border-white/10 text-white outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-slate-200 mb-1">Numéro de téléphone</label>
                <input name="phone" value={form.phone} onChange={handleChange} className="w-full px-3 py-2 rounded bg-slate-900/60 border border-white/10 text-white outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-slate-200 mb-1">Parlez-nous de votre projet</label>
                <textarea name="message" value={form.message} onChange={handleChange} maxLength={180} rows={5} className="w-full px-3 py-2 rounded bg-slate-900/60 border border-white/10 text-white outline-none focus:border-blue-500"></textarea>
                <div className="text-right text-slate-400 text-sm mt-1">{form.message.length} / 180</div>
              </div>
              <button type="submit" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium">Soumettre</button>
              {status && <p className="text-slate-200 mt-2">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
