function Services() {
  const services = [
    {
      title: 'Création de site web',
      desc:
        "Nous concevons des sites modernes, performants et adaptés à tous les supports. Du site vitrine au site e-commerce, chaque projet est unique et pensé pour séduire et convertir vos visiteurs.",
    },
    {
      title: 'Design & identité',
      desc:
        "Logo, charte graphique, cartes de visite… Nous façonnons l’image de votre entreprise pour qu’elle soit mémorable, professionnelle et en parfaite cohérence avec votre positionnement.",
    },
    {
      title: 'Référencement (SEO)',
      desc:
        "Nous optimisons votre site pour qu’il soit bien positionné sur Google. Un bon SEO, c’est plus de visibilité, plus de trafic, et donc plus de clients potentiels.",
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Nos Services</h2>
        <p className="text-center text-slate-300 max-w-3xl mx-auto mb-12">Une Expertise Complète au Service de Votre Visibilité en Ligne</p>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-6 rounded-2xl border border-white/10 bg-white/5 text-slate-200">
              <h3 className="text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-3 text-slate-200/90 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
