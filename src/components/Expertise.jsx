function Expertise() {
  const items = [
    {
      title: 'Notre expertise',
      desc:
        "Nous ne nous contentons pas de créer de jolis sites web : nous concevons des outils stratégiques pensés pour convertir vos visiteurs en clients fidèles.",
    },
    {
      title: 'Clarté et performance',
      desc:
        "Beaucoup de sites échouent à générer des résultats, faute de structure, d’ergonomie ou de clarté. Nous corrigeons cela avec des designs intuitifs, des parcours utilisateurs optimisés, et une approche orientée performance.",
    },
    {
      title: 'Compétences multidisciplinaires',
      desc:
        "Notre équipe combine design graphique, développement web, branding et SEO pour bâtir des expériences digitales sur mesure, efficaces et alignées avec vos objectifs d’affaires.",
    },
  ]

  return (
    <section id="expertise" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 text-slate-200"
            >
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-slate-200/90 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise
