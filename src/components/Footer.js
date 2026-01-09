import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b0f14] text-gray-400">
      
      <div className="container mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">
        
        
        <div>
          <h2 className="text-xl font-bold text-yellow-500 mb-4">
            NextVibe
          </h2>
          <p className="text-sm leading-relaxed">
            Votre partenaire de confiance pour l'achat, la vente et l'entretien de véhicules premium
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">
            Navigation
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-yellow-500">Accueil</Link></li>
            <li><Link href="/services" className="hover:text-yellow-500">Services</Link></li>
            <li><Link href="/about" className="hover:text-yellow-500">À propos</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-500">Contact</Link></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-white font-semibold mb-4">
            Nos Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Vente de véhicules</li>
            <li>Reprise automobile</li>
            <li>Entretien & Révision</li>
            <li>Financement</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-4">
            Contact
          </h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Casablanca, Maroc</li>
            <li>📧 contact@nextvibe.ma</li>
            <li>📞 +212 6 00 00 00 00</li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-800"></div>

      
      <div className="text-center text-sm py-6">
        © {new Date().getFullYear()} NextVibe Studio. Tous droits réservés.
      </div>
    </footer>
  );
}
