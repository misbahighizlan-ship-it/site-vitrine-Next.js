export default function ContactPage() {
  return (
    <div className="w-full">


      <section className="text-center py-24 px-4">
        <span className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full text-sm">
          Contact
        </span>

        <h1 className="text-4xl md:text-5xl font-bold mt-6">
          Parlons de Votre <br /> Projet
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto mt-4">
          Notre équipe est à votre disposition pour 
          répondre à toutes vos questions et vous accompagner dans votre projet automobile.
        </p>
      </section>

      
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        
        <div className="space-y-6">
          {[
            {
              title: "Adresse",
              text: "123 Avenue des Champs-Élysées, Paris"
            },
            {
              title: "Téléphone",
              text: "+212 6 12 34 56 78"
            },
            {
              title: "Email",
              text: "contact@nextdev.ma"
            },
            {
              title: "Horaires",
              text: "Lun - Ven : 9h - 18h"
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#121826] p-6 rounded-xl border border-[#1f2437]"
            >
              <h3 className="text-yellow-400 font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {item.text}
              </p>
            </div>
          ))}
        </div>

       
        <div className="md:col-span-2 bg-[#121826] p-8 rounded-xl border border-[#1f2437]">
          <h2 className="text-2xl font-semibold mb-6">
            Envoyez-nous un message
          </h2>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nom complet"
                className="input"
              />
              <input
                type="email"
                placeholder="Email"
                className="input"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Téléphone"
                className="input"
              />
              <select className="input">
                <option>Sélectionnez un sujet</option>
                <option>Achat de véhicule</option>
                <option>Reprise automobile</option>
                <option>Entretien & Révision</option>
                <option>Financement</option>
                <option>Autre demande</option>
              </select>
            </div>

            <textarea
              placeholder="Votre message..."
              className="input h-32"
            />

            <button
              type="submit"
              className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
            >
              ➜ Envoyer le message
            </button>
          </form>
        </div>
      </section>

      
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Nous Trouver
        </h2>

        <div className="overflow-hidden rounded-2xl border border-[#1f2437]">
          <iframe
            src="https://www.google.com/maps?q=Paris&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[350px]"
            loading="lazy"
          ></iframe>
        </div>
      </section>

    </div>
  );
}
