import { AiOutlineHeart, AiOutlineTeam } from "react-icons/ai";
import { BiTargetLock } from "react-icons/bi";
import { BsLightningCharge } from "react-icons/bs";

export default function About() {
  return (
    <div>


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

          <div className="h-80 rounded overflow-hidden">
            <img
              src="/images/photo4.jpg"
              alt="Service automobile"
              className="w-full h-full object-cover"
            />
          </div>


        </div>
      </section>


      <section className="py-24 bg-[#0f141a] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos <span className="text-yellow-500">Valeurs</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-sm">
            Les principes qui guident notre engagement envers vous au quotidien.
          </p>

          <div className="grid gap-12 md:grid-cols-4">

            {/* card */}
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-yellow-500/10 mb-6">
                <AiOutlineHeart className="text-yellow-500 text-2xl" />
              </div>
              <h3 className="font-semibold mb-3">Passion</h3>
              <p className="text-gray-400 text-sm">
                L&apos;automobile est notre passion depuis plus de 15 ans.
              </p>
            </div>

            {/* pour card 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-yellow-500/10 mb-6">
                <AiOutlineTeam className="text-yellow-500 text-2xl" />
              </div>
              <h3 className="font-semibold mb-3">Proximité</h3>
              <p className="text-gray-400 text-sm">
                Une équipe à votre écoute pour vous accompagner.
              </p>
            </div>

            {/* et pour card3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-yellow-500/10 mb-6">
                <BiTargetLock className="text-yellow-500 text-2xl" />
              </div>
              <h3 className="font-semibold mb-3">Excellence</h3>
              <p className="text-gray-400 text-sm">
                Nous visons l&apos;excellence à chaque étape.
              </p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-yellow-500/10 mb-6">
                <BsLightningCharge className="text-yellow-500 text-2xl" />
              </div>
              <h3 className="font-semibold mb-3">Innovation</h3>
              <p className="text-gray-400 text-sm">
                Toujours à la pointe des nouvelles technologies.
              </p>
            </div>

          </div>
        </div>
      </section>



      <section className="py-24 bg-black text-white">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-16">
            Notre <span className="text-yellow-500">Parcours</span>
          </h2>

          <div className="relative">

            <div className="absolute left-4 md:left-1/2 top-0 h-full w-px bg-yellow-500/30"></div>

           
            <div className="relative flex items-start mb-16 group">
              <span className="w-8 h-8 bg-yellow-500 rounded-full absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center text-black font-bold">
                2009
              </span>

              <div className="ml-16 md:ml-0 md:w-1/2 md:pr-12 md:text-right animate-slideUp">
                <h3 className="text-yellow-500 font-semibold">Création</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Ouverture de notre premier showroom automobile à Paris.
                </p>
              </div>
            </div>

            
            <div className="relative flex items-start mb-16 group">
              <span className="w-8 h-8 bg-yellow-500 rounded-full absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center text-black font-bold">
                2014
              </span>

              <div className="ml-16 md:ml-auto md:w-1/2 md:pl-12 animate-slideUp delay-150">
                <h3 className="text-yellow-500 font-semibold">Expansion</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Lancement de notre atelier de maintenance premium.
                </p>
              </div>
            </div>

            
            <div className="relative flex items-start mb-16 group">
              <span className="w-8 h-8 bg-yellow-500 rounded-full absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center text-black font-bold">
                2018
              </span>

              <div className="ml-16 md:ml-0 md:w-1/2 md:pr-12 md:text-right animate-slideUp delay-300">
                <h3 className="text-yellow-500 font-semibold">Digital</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Développement de notre plateforme en ligne.
                </p>
              </div>
            </div>

          
            <div className="relative flex items-start group">
              <span className="w-8 h-8 bg-yellow-500 rounded-full absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center text-black font-bold">
                2023
              </span>

              <div className="ml-16 md:ml-auto md:w-1/2 md:pl-12 animate-slideUp delay-500">
                <h3 className="text-yellow-500 font-semibold">Excellence</h3>
                <p className="text-gray-400 text-sm mt-2">
                  Plus de 2500 véhicules vendus et 98% de clients satisfaits.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


    </div>
  );
}

