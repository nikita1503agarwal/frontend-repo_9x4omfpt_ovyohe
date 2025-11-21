function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-4 pt-36 pb-20 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Offrez à votre entreprise le site web qu’elle mérite
            </h1>
            <p className="mt-5 text-lg text-slate-200/90 leading-relaxed">
              Nous construisons des sites web pour les petites et moyennes entreprises qui font plus que séduire : ils transforment vos visiteurs en clients.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors">
                Nous contacter
              </a>
              <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 font-medium transition-colors">
                Demander un devis
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-2xl overflow-hidden">
              <div className="h-full w-full grid grid-cols-3 gap-2 p-4">
                <div className="rounded-md bg-white/5" />
                <div className="rounded-md bg-white/5" />
                <div className="rounded-md bg-white/5" />
                <div className="rounded-md bg-white/5" />
                <div className="rounded-md bg-white/5" />
                <div className="rounded-md bg-white/5" />
                <div className="rounded-md bg-white/5" />
                <div className="rounded-md bg-white/5" />
                <div className="rounded-md bg-white/5" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-blue-500/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
