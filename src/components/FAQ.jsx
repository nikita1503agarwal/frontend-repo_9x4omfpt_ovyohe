import { useState } from 'react'

function FAQ() {
  const faqs = [
    {
      q: 'Combien de temps faudra-t-il pour créer mon site Web ?',
      a: "Bien sûr, cela dépend de la taille de votre site web. Un site web standard de 5 pages prend généralement deux semaines, et un site plus important de 15 pages peut prendre de 3 à 5 semaines. Je peux vous accompagner si vous avez un délai précis à respecter.",
    },
    { q: 'Sera-t-il difficile d’effectuer mes propres mises à jour/modifications ?', a: 'Non, nous privilégions des solutions faciles à maintenir (WordPress, CMS headless ou éditeurs simples) et offrons une courte formation.' },
    { q: "Travaillez-vous seul ? (Embauchez-vous à l'étranger ?)", a: "Je travaille avec un réseau de collaborateurs fiables selon les besoins du projet (design, intégration, SEO)." },
    { q: "Quel est le processus de création d'un site Web ?", a: 'Découverte, conception, développement, tests et mise en ligne — avec validations à chaque étape.' },
    { q: 'Comment créez-vous des sites Web ?', a: "Approche sur mesure, centrée sur l’utilisateur et orientée conversion. Tech stack adapté à vos objectifs (WordPress, React, Shopify...)." },
    { q: "De quoi ai-je besoin pour commencer à créer un site Web ?", a: 'Un bref échange suffit : vos objectifs, votre public cible, vos contenus disponibles et vos inspirations.' },
  ]

  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Questions fréquemment posées</h2>
        <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
          {faqs.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full text-left px-6 py-4 flex items-center justify-between"
              >
                <span className="text-white font-medium">{item.q}</span>
                <span className="text-white/70">{open === i ? '-' : '+'}</span>
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-slate-200/90">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
