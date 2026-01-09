export default function Home() {
  return (
    <div className="bg-[#0b0f14] text-white">

      {/* HERO */}
      <section className="py-28 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Pourquoi Choisir <span className="text-yellow-500">NextVibe</span>
        </h1>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Une expertise reconnue et un service client
           d'exception pour vous accompagner dans votre projet automobile.
        </p>
      </section>

      {/* CARDS */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-4">
          
          {[
            {
              title: "Garantie Premium",
              desc: "Tous nos véhicules sont couverts par une garantie complète pour votre tranquillité."
            },
            {
              title: "Qualité Certifiée",
              desc: "Chaque voiture est inspectée et certifiée par nos experts automobiles."
            },
            {
              title: "Service Rapide",
              desc: "Un processus d'achat simplifié pour vous faire gagner du temps."
            },
            {
              title: "Large Sélection",
              desc: "Une gamme variée de véhicules premium pour tous les goûts."
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#131820] rounded-xl p-8 hover:scale-105 transition border border-white/5"
            >
              <h3 className="font-semibold mb-3 text-lg">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 text-center gap-12">
          
          <div>
            <p className="text-yellow-500 text-3xl font-bold">15+</p>
            <p className="text-gray-400 text-sm mt-2">Années d’expérience</p>
          </div>

          <div>
            <p className="text-yellow-500 text-3xl font-bold">250+</p>
            <p className="text-gray-400 text-sm mt-2">Projets réalisés</p>
          </div>

          <div>
            <p className="text-yellow-500 text-3xl font-bold">98%</p>
            <p className="text-gray-400 text-sm mt-2">Clients satisfaits</p>
          </div>

          <div>
            <p className="text-yellow-500 text-3xl font-bold">24/7</p>
            <p className="text-gray-400 text-sm mt-2">Support client</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-t from-black to-[#0b0f14] text-center">
        <h2 className="text-3xl font-bold">
          Prêt à Lancer Votre Projet ?
        </h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Contactez-nous dès maintenant et bénéficiez d’un accompagnement sur mesure.
        </p>

        <button className="mt-10 bg-yellow-500 text-black px-10 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
          Prendre rendez-vous →
        </button>
      </section>

    </div>
  );
}
