export default function Services() {
  return (
    <div>

      {/* HERO */}
      <section className="bg-black text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-yellow-500">
            Des Services  <br/>
            Sur Mesure
          </h1>

          <p className="text-gray-400 mt-6 max-w-xl">
            De l'achat à l'entretien, nous vous accompagnons à chaque étape de 
            votre expérience automobile avec des services premium et personnalisés.
          </p>

          <button className="mt-8 bg-yellow-500 text-black px-6 py-3 rounded font-semibold">
            Demander un devis
          </button>
        </div>
      </section>

      {/* GAMME DE SERVICES */}
      <section className="py-24 bg-[#0f141a] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-14">
            Notre Gamme de Services
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              "Vente de véhicules",
              "Réparation automobile",
              "Entretien & Révision",
              "Financement",
              "Garantie étendue",
              "Carrosserie"
            ].map((service, index) => (
              <div
                key={index}
                className="bg-[#151b22] p-8 rounded"
              >
                <h3 className="font-bold mb-3">
                  {service}
                </h3>
                <p className="text-sm text-gray-400">
                  Un service professionnel adapté à vos attentes.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSUS */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">
            Un Processus Simplifié
          </h2>

          <ul className="space-y-6 text-gray-400">
            <li>01 – Consultation</li>
            <li>02 – Proposition</li>
            <li>03 – Validation</li>
            <li>04 – Livraison</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0f141a] text-center text-white">
        <h2 className="text-3xl font-bold">
          Besoin d’un service personnalisé ?
        </h2>

        <button className="mt-8 bg-yellow-500 text-black px-6 py-3 rounded font-semibold">
          Contactez-nous
        </button>
      </section>

    </div>
  );
}
