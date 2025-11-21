function Approach() {
  const steps = [
    {
      title: 'Découverte & stratégie',
      desc:
        "Nous commençons par un échange (appel ou rencontre) pour bien comprendre votre activité, vos objectifs et votre public cible. Cette phase permet de définir une structure claire et une direction stratégique",
    },
    {
      title: 'Conception & maquettes',
      desc:
        "Une fois la maquette validée, nous passons au développement. Le site est construit sur une base solide (WordPress, React, HTML/CSS selon les besoins), prêt à accueillir votre contenu et à être optimisé pour tous les écrans.",
    },
    {
      title: 'Développement du site',
      desc:
        "Une fois la maquette validée, nous passons au développement. Le site est construit sur une base solide (WordPress, React, HTML/CSS selon les besoins), prêt à accueillir votre contenu et à être optimisé pour tous les écrans.",
    },
  ]

  return (
    <section id="approche" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="p-6 rounded-2xl border border-white/10 bg-white/5 text-slate-200">
              <div className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center font-semibold mb-4">
                {i + 1}
              </div>
              <h3 className="text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-3 text-slate-200/90 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Approach
