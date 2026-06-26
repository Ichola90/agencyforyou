import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-secondary">

        {/* ── Fond décoratif ── */}
        <div className="absolute inset-0 pointer-events-none">
          {/* gradient radial haut-gauche */}
          <div className="absolute -top-32 -left-32 w-[36rem] h-[36rem] rounded-full bg-primary/20 blur-3xl" />
          {/* gradient radial bas-droite */}
          <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-darkprimary/40 blur-3xl" />
          {/* grille subtile */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(#90caf9 1px, transparent 1px), linear-gradient(90deg, #90caf9 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
        </div>

        <div className="relative z-10 container pt-12 pb-24 lg:pt-16 lg:pb-32">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">

            {/* ── Colonne gauche — texte ── */}
            <div
              className="lg:w-[55%] w-full"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="900">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 text-lightPrimary text-sm font-medium px-4 py-1.5 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-LightApricot animate-pulse" />
                Agence digitale — Cotonou, Bénin
              </div>

              {/* Titre */}
              <h1 className="text-white font-bold leading-[1.1] mb-6"
                style={{ fontSize: 'clamp(2.4rem, 5vw, 3.75rem)' }}>
                Votre vision,{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-LightApricot">notre code.</span>
                  {/* soulignement lumineux — signature */}
                  <span
                    className="absolute left-0 -bottom-1 h-[3px] w-full rounded-full bg-gradient-to-r from-LightApricot via-primary to-transparent"
                    aria-hidden="true"
                  />
                </span>
              </h1>

              {/* Sous-titre */}
              <p className="text-lightPrimary text-lg leading-relaxed max-w-lg mb-10">
                ICHTECH conçoit et développe des applications web & mobiles
                performantes pour les entrepreneurs et startups d'Afrique de
                l'Ouest et de la diaspora.
              </p>

              {/* CTA */}
              <div className="flex flex-wrap items-center gap-4 mb-14">
                <Link
                  href="#contact"
                  className="bg-LightApricot text-secondary font-semibold px-8 py-3.5 rounded-xl hover:bg-white hover:text-darkprimary transition-all duration-300 shadow-lg shadow-LightApricot/20">
                  Démarrer un projet
                </Link>
                <Link
                  href="#services"
                  className="flex items-center gap-2 text-lightPrimary font-medium hover:text-white transition-colors duration-300 group">
                  Voir nos services
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-8 pb-10 border-b border-white/10 mb-10">
                {[
                  { value: '50+', label: 'Clients satisfaits' },
                  { value: '120+', label: 'Projets livrés' },
                  { value: '100%', label: 'Satisfaction client' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-lightPrimary mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Logos partenaires */}
              <div className="flex items-center gap-2">
                <p className="text-xs text-lightPrimary/60 uppercase tracking-widest mr-2">Ils nous font confiance</p>
                <div className="flex items-center gap-5">
                  {[
                    { src: '/images/hero/wise_white.png', cls: 'w-14 h-5' },
                    { src: '/images/hero/google_white.png', cls: 'h-5' },
                    { src: '/images/hero/pay_white.png', cls: 'h-5' },
                    { src: '/images/hero/stripe_white.png', cls: 'w-12 h-5' },
                  ].map((logo, i) => (
                    <Image
                      key={i}
                      src={logo.src}
                      alt="logo partenaire"
                      width={0}
                      height={0}
                      quality={100}
                      sizes="100vw"
                      className={`${logo.cls} object-contain opacity-60 hover:opacity-100 transition-opacity duration-300`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* ── Colonne droite — formulaire ── */}
            <div
              className="lg:w-[45%] w-full"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="900">

              {/* Carte glassmorphism */}
              <div className="relative bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl">

                {/* Accent coin haut-droite */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-bl-full rounded-tr-2xl pointer-events-none" />

                <h2 className="text-white text-2xl font-bold mb-1">
                  Démarrons votre projet
                </h2>
                <p className="text-lightPrimary text-sm mb-7">
                  Réponse sous 24h — sans engagement
                </p>

                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-lightPrimary mb-1.5 font-medium">Prénom</label>
                      <input
                        type="text"
                        placeholder="Jean"
                        className="w-full bg-white/10 border border-white/10 text-white placeholder:text-white/30 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-lightPrimary mb-1.5 font-medium">Nom</label>
                      <input
                        type="text"
                        placeholder="Dupont"
                        className="w-full bg-white/10 border border-white/10 text-white placeholder:text-white/30 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-lightPrimary mb-1.5 font-medium">Email professionnel</label>
                    <input
                      type="email"
                      placeholder="jean@entreprise.com"
                      className="w-full bg-white/10 border border-white/10 text-white placeholder:text-white/30 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-lightPrimary mb-1.5 font-medium">Pays</label>
                    <input
                      type="text"
                      placeholder="Bénin, France, Canada..."
                      className="w-full bg-white/10 border border-white/10 text-white placeholder:text-white/30 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-lightPrimary mb-1.5 font-medium">Décrivez votre projet</label>
                    <textarea
                      rows={4}
                      placeholder="Application mobile, site vitrine, e-commerce..."
                      className="w-full bg-white/10 border border-white/10 text-white placeholder:text-white/30 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-1">
                    <input
                      id="terms"
                      type="checkbox"
                      className="mt-0.5 w-4 h-4 accent-LightApricot cursor-pointer"
                    />
                    <label htmlFor="terms" className="text-xs text-lightPrimary leading-relaxed cursor-pointer">
                      J'accepte les{' '}
                      <a href="#" className="text-LightApricot underline hover:text-white transition-colors">
                        conditions d'utilisation
                      </a>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-darkprimary text-white font-semibold py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-darkprimary/40 mt-2">
                    Envoyer ma demande →
                  </button>
                </form>

                {/* Note de confiance */}
                <div className="flex items-center justify-center gap-2 mt-5 text-xs text-lightPrimary/50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  Données sécurisées · Aucun spam
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── Vague de séparation bas ── */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 fill-white dark:fill-darkmode">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>

      </section>
    </>
  )
}

export default Hero