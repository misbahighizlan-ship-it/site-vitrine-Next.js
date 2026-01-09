export default function About() {
  return (
    <div>

      {/* HERO */}
      <section className="bg-black text-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-bold text-yellow-500">
              Plus de 15 Ans d’Excellence
            </h1>

            <p className="text-gray-400 mt-6">
              Fondé en 2009, NextVibe est né d'une passion 
              commune pour l'automobile d'exception. Notre mission : offrir une expérience premium à chaque client, que ce soit pour l'achat d'un véhicule neuf, d'occasion ou pour l'entretien de votre voiture.

Aujourd'hui, notre équipe de professionnels passionnés continue de perpétuer ces 
valeurs d'excellence et de proximité qui font notre réputation.
            </p>
          </div>

          <div className="bg-gray-800 h-64 rounded"></div>
        </div>
      </section>

      {/* NOS VALEURS */}
      <section className="py-24 bg-[#0f141a] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-14">
            Nos Valeurs
          </h2>

          <div className="grid gap-8 md:grid-cols-4">
            {["Passion", "Professionnalisme", "Excellence", "Innovation"].map(
              (value, index) => (
                <div key={index} className="bg-[#151b22] p-6 rounded">
                  <h3 className="font-bold">{value}</h3>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* PARCOURS */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">
            Notre Parcours
          </h2>

          <ul className="space-y-6 text-gray-400">
            <li>2009 – Création de NextVibe</li>
            <li>2014 – Expansion nationale</li>
            <li>2018 – Transformation digitale</li>
            <li>2023 – Référence du marché</li>
          </ul>
        </div>
      </section>

      {/* EQUIPE */}
      <section className="py-24 bg-[#0f141a] text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Notre Équipe
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto">
          Des professionnels passionnés à votre service.
        </p>
      </section>

    </div>
  );
}
