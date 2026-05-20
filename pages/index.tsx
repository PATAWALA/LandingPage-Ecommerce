// pages/index.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import config from '../data/config';

// Types
interface Problem {
  icon: string;
  title: string;
  description: string;
}

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  business: string;
  location: string;
  text: string;
  image: string;
  result: string;
}

interface ExampleSite {
  name: string;
  description: string;
  location: string;
  features: string[];
  status: string;
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showUrgencyPopup, setShowUrgencyPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Popup d'urgence après 30 secondes
    const timer = setTimeout(() => {
      setShowUrgencyPopup(true);
    }, 30000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const problems: Problem[] = [
    {
      icon: "🔍",
      title: "Vos clients vous cherchent sur Google... et trouvent vos concurrents",
      description: "90% des acheteurs cherchent d'abord sur Internet avant d'acheter. Si vous n'apparaissez pas, c'est un autre qui encaisse."
    },
    {
      icon: "😰",
      title: "Vos clients doutent de votre sérieux",
      description: "En 2026, une entreprise sans site web, c'est comme une boutique sans porte. Les clients se demandent : 'Est-ce que c'est fiable ?' Et ils passent leur chemin."
    },
    {
      icon: "💸",
      title: "Vous perdez des ventes TOUS les jours",
      description: "Chaque jour sans site, c'est comme fermer votre boutique pendant que vos concurrents restent ouverts 24h/24."
    },
    {
      icon: "📱",
      title: "Vos produits sont mal présentés",
      description: "Sur WhatsApp, vous envoyez 30 photos en désordre. Sur un site, vos produits sont classés, beaux, avec les prix. Le client voit tout et achète plus vite."
    },
    {
      icon: "💳",
      title: "Le paiement est un parcours du combattant",
      description: "Sans site : capture d'écran, reçu, confirmation... Avec un site : le client paie en 1 clic par Mobile Money ou carte. Fini les discussions interminables."
    },
    {
      icon: "🏃‍♂️",
      title: "Pendant que vous hésitez, vos concurrents avancent",
      description: "Ceux qui ont un site captent les clients. Pire : ils donnent l'image d'être plus professionnels que vous. Même si vos produits sont meilleurs."
    },
    {
      icon: "😞",
      title: "Votre image en prend un coup",
      description: "Vos produits sont excellents. Mais sans vitrine digne de ce nom, vous passez pour un petit vendeur. Vos produits méritent mieux."
    }
  ];

  const benefits: Benefit[] = [
    {
      icon: "🌍",
      title: "Visible sur Google 24h/24",
      description: "Même quand vous dormez, votre boutique est ouverte. Les clients vous trouvent et commandent. Vous vous réveillez avec des commandes."
    },
    {
      icon: "💳",
      title: "Paiement en 30 secondes",
      description: "Mobile Money, carte bancaire, PayPal. Le client choisit, paie, et vous recevez l'argent. Sans stress, sans erreur."
    },
    {
      icon: "🏪",
      title: "Catalogue qui fait pro",
      description: "Tous vos produits bien rangés, avec belles photos, descriptions et prix. Le client voit tout, compare, et achète plus."
    },
    {
      icon: "📲",
      title: "Commandes direct sur votre téléphone",
      description: "Dès qu'un client achète, vous êtes notifié sur WhatsApp. Vous traitez la commande en 2 minutes."
    },
    {
      icon: "📱",
      title: "Site parfait sur mobile",
      description: "85% de vos clients sont sur téléphone. Votre site sera magnifique sur tous les écrans, comme les grands sites."
    },
    {
      icon: "⭐",
      title: "Vous inspirez confiance immédiate",
      description: "Un beau site, c'est la preuve que vous êtes sérieux. Les clients n'hésitent plus, ils commandent les yeux fermés."
    },
    {
      icon: "🏆",
      title: "Vous écrasez la concurrence",
      description: "La plupart de vos concurrents n'ont pas de site. Vous prenez une longueur d'avance. Vous devenez la référence."
    },
    {
      icon: "📊",
      title: "Vous voyez tout ce qui se passe",
      description: "Combien de visiteurs aujourd'hui ? Quels produits intéressent ? Vous savez tout, et vous prenez les bonnes décisions."
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Maman Dodo",
      business: "Vente de pagnes haut de gamme",
      location: "Cotonou, Bénin",
      text: "Franchement, j'étais sceptique. Je vendais déjà bien sur WhatsApp. Mais depuis que j'ai le site, c'est le jour et la nuit. Les clientes voient tous mes modèles, elles commandent directement, et le paiement est automatique. Je ne regrette pas UN Franc.",
      image: "/images/temoignage1.jpeg",
      result: "Ventes x2 en 2 mois"
    },
    {
      name: "Ibrahim Touré",
      business: "Chaussures et accessoires",
      location: "Abidjan, Côte d'Ivoire",
      text: "Avant, je courais après les clients. Maintenant, c'est eux qui m'appellent et disent 'j'ai vu votre site, je veux commander'. Abdoulaye m'a tout expliqué simplement, il a tout fait. Résultat : je reçois des commandes même la nuit.",
      image: "/images/temoignage2.jpeg",
      result: "+40 clients/mois"
    },
    {
      name: "Fatou Diop",
      business: "Produits de beauté naturels",
      location: "Dakar, Sénégal",
      text: "Le meilleur investissement de mon business. Mes clientes sont impressionnées par le site. Elles partagent le lien, ça m'amène des nouvelles clientes automatiquement. Et le paiement en ligne a tout changé. Zéro stress.",
      image: "/images/temoignage3.jpeg",
      result: "Chiffre d'affaires +150%"
    }
  ];

  const exampleSites: ExampleSite[] = [
    {
      name: "LuxeMode",
      description: "Boutique de vêtements et accessoires",
      location: "Lomé, Togo",
      features: [
        "Catalogue 200+ produits",
        "Paiement Mobile Money",
        "WhatsApp intégré",
        "Photos professionnelles"
      ],
      status: "En ligne et actif"
    },
    {
      name: "TechGadget Store",
      description: "Gadgets et accessoires tech",
      location: "Douala, Cameroun",
      features: [
        "Design moderne",
        "Paiement sécurisé",
        "Suivi de commande",
        "Avis clients"
      ],
      status: "En ligne et actif"
    },
    {
      name: "Douceurs de Fatou",
      description: "Pâtisseries et gourmandises",
      location: "Ouagadougou, Burkina",
      features: [
        "Catalogue par catégories",
        "Commandes WhatsApp",
        "Galerie photos",
        "Témoignages clients"
      ],
      status: "En ligne et actif"
    }
  ];

  const whatsappLink = `https://wa.me/${config.whatsapp}?text=Bonjour%20Abdoulaye%2C%20je%20suis%20intéressé%20par%20la%20création%20de%20ma%20boutique%20en%20ligne.%20Pouvez-vous%20m'expliquer%20comment%20ça%20marche%20%3F`;

  return (
    <>
      <Head>
        <title>Créez votre boutique en ligne | Abdoulaye Patawala</title>
        <meta name="description" content="Votre boutique en ligne clé en main. Arrêtez de perdre des ventes chaque jour. Je vous crée un site web pro qui attire des clients et fait exploser vos revenus." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Popup d'urgence */}
      <AnimatePresence>
        {showUrgencyPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setShowUrgencyPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white rounded-3xl p-8 max-w-md mx-auto text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-6xl mb-4">⚠️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ne quittez pas cette page !
              </h3>
              <p className="text-gray-600 mb-6">
                Chaque jour sans site web vous coûte <strong className="text-red-600">des clients et de l'argent</strong>. 
                Prenez 5 minutes pour découvrir comment arrêter de perdre des ventes.
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => {
                    setShowUrgencyPopup(false);
                    scrollToSection('opportunities');
                  }}
                  className="w-full bg-gradient-to-r from-purple-600 to-orange-500 text-white px-6 py-4 rounded-full font-bold hover:shadow-lg transition-all"
                >
                  Voir ce que vous perdez 💰
                </button>
                <button
                  onClick={() => setShowUrgencyPopup(false)}
                  className="w-full text-gray-400 text-sm hover:text-gray-600"
                >
                  Non merci, je préfère perdre des ventes
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">AP</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-bold text-gray-900">Abdoulaye Patawala</div>
                <div className="text-xs text-gray-500">Créateur de boutiques en ligne</div>
              </div>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('problems')} className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">
                Problèmes
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">
                Qui suis-je ?
              </button>
              <button onClick={() => scrollToSection('benefits')} className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">
                Avantages
              </button>
              <button onClick={() => scrollToSection('examples')} className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">
                Exemples
              </button>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-orange-500 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:shadow-xl transition-all hover:scale-105"
              >
                💬 Parlons business
              </a>
            </div>

            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 p-2 text-2xl"
              >
                {mobileMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-md shadow-lg overflow-hidden"
            >
              <div className="px-4 py-4 space-y-3">
                <button onClick={() => scrollToSection('problems')} className="block w-full text-left text-gray-700 py-2 font-medium">
                  🔍 Problèmes
                </button>
                <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 py-2 font-medium">
                  👨‍💻 Qui suis-je ?
                </button>
                <button onClick={() => scrollToSection('benefits')} className="block w-full text-left text-gray-700 py-2 font-medium">
                  ⭐ Avantages
                </button>
                <button onClick={() => scrollToSection('examples')} className="block w-full text-left text-gray-700 py-2 font-medium">
                  🏪 Exemples
                </button>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-purple-600 to-orange-500 text-white px-6 py-3 rounded-full font-bold"
                >
                  💬 Parlons business
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 pt-20 overflow-hidden">
        {/* Cercles décoratifs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full text-purple-600 font-bold shadow-lg border border-purple-100">
                <span className="text-yellow-500">★★★★★</span>
                Recommandé par 50+ entreprises
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight"
            >
              Chaque jour sans site web,<br/>
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                vous perdez des clients et de l'argent
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto font-medium"
            >
              Quand un client cherche vos produits sur Google, <br className="hidden md:block"/>
              <strong className="text-red-600">ce sont vos concurrents qu'il trouve.</strong>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto"
            >
              Je suis <strong className="text-gray-900">Abdoulaye Patawala</strong>. Depuis 3 ans, j'aide les vendeurs et entrepreneurs 
              à avoir leur propre boutique en ligne — pour <strong className="text-purple-600">vendre plus, jour et nuit, 
              sans remplacer leurs réseaux sociaux</strong>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <button 
                onClick={() => scrollToSection('opportunities')}
                className="group bg-gradient-to-r from-purple-600 to-orange-500 text-white px-10 py-5 rounded-full text-lg font-bold hover:shadow-2xl transition-all hover:scale-105"
              >
                <span className="inline-flex items-center gap-2">
                  💰 Voir ce que vous perdez
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="bg-white text-purple-600 px-10 py-5 rounded-full text-lg font-bold border-2 border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all"
              >
                👨‍💻 Qui suis-je ?
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-50">
                <div className="text-4xl font-extrabold text-purple-600 mb-1">50+</div>
                <div className="text-gray-600 font-medium">boutiques créées en 3 ans</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-50">
                <div className="text-4xl font-extrabold text-pink-500 mb-1">x3</div>
                <div className="text-gray-600 font-medium">plus de clients avec un site</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-50">
                <div className="text-4xl font-extrabold text-orange-500 mb-1">89%</div>
                <div className="text-gray-600 font-medium">des clients vérifient en ligne avant d'acheter</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problems" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-red-600 font-bold text-sm uppercase tracking-wider">⚠️ La vérité qui dérange</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6">
              Ce qui bloque vos ventes <span className="text-red-600">aujourd'hui</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vous avez de bons produits. Vos clients vous aiment. Mais il vous manque <strong>une pièce essentielle</strong> pour exploser vos ventes. Voici pourquoi :
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 hover:shadow-2xl transition-all border border-red-100 hover:border-red-200 hover:scale-[1.02]"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{problem.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-72 h-72 md:w-96 md:h-96 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src="/images/moi.jpeg" 
                  alt="Abdoulaye Patawala" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.classList.add('bg-gradient-to-br', 'from-purple-400', 'via-pink-400', 'to-orange-400', 'flex', 'items-center', 'justify-center');
                    target.parentElement!.innerHTML = '<span class="text-white text-8xl font-bold">AP</span>';
                  }}
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white rounded-full px-6 py-3 shadow-2xl border-2 border-purple-100">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500">⭐</span>
                  <span className="text-sm font-bold text-purple-600">3 ans d'expérience</span>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 bg-white rounded-full px-4 py-2 shadow-xl">
                <span className="text-sm font-bold text-gray-700">50+ boutiques créées</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-purple-600 font-bold text-sm uppercase tracking-wider">👨‍💻 Votre futur partenaire</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4 mb-6">
                Moi, c'est <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">Abdoulaye Patawala</span>
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                <strong>Voici la vérité :</strong> vous êtes excellent dans ce que vous faites. Vos produits sont de qualité, 
                vos clients vous font confiance. Mais aujourd'hui, en 2026, <strong>vendre uniquement sur WhatsApp et les réseaux sociaux, 
                c'est comme avoir une boutique sans porte.</strong>
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Je crée des boutiques en ligne qui <strong>travaillent pour vous 24h/24</strong>, même quand vous dormez. 
                Vos pages sociales restent actives — elles sont puissantes — mais en plus, vous avez un site web qui 
                <strong> attire des clients que vous n'auriez jamais eus autrement</strong>.
              </p>
              <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-600 mb-8 bg-white/50 py-3 px-4 rounded-r-lg">
                "Mon objectif n'est pas compliqué : <strong>vous aider à vendre plus</strong>, en gardant le contact direct 
                avec vos clients sur WhatsApp et les réseaux. Un site web, c'est un vendeur qui ne dort jamais."
              </blockquote>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  "Service 100% personnalisé",
                  "Paiement en plusieurs fois possible",
                  "Support réactif 7j/7",
                  "Formation incluse pour vous"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/70 rounded-xl px-3 py-2">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-sm text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-600 hover:shadow-2xl transition-all hover:scale-105"
              >
                <span className="text-2xl">💬</span>
                Demander une démonstration gratuite
                <span className="text-sm bg-white/20 px-3 py-1 rounded-full">⏱️ 5 min</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-purple-600 font-bold text-sm uppercase tracking-wider">🔄 La différence est énorme</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6">
              Votre business <span className="text-red-600">aujourd'hui</span> vs <span className="text-green-600">demain</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un site web <strong>ne remplace pas</strong> vos réseaux sociaux. Il les <strong>renforce</strong> et multiplie vos ventes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 md:p-10"
            >
              <div className="text-5xl mb-4 text-center">❌</div>
              <h3 className="text-2xl font-extrabold text-red-600 text-center mb-8">Sans site web</h3>
              <ul className="space-y-5">
                {[
                  "Invisible sur Google",
                  "Catalogue en désordre sur WhatsApp",
                  "Paiement compliqué et lent",
                  "Image amateur et peu rassurante",
                  "Clients qui doutent et partent",
                  "Concurrents qui prennent vos clients",
                  "Zéro visibilité la nuit"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-red-500 text-xl flex-shrink-0">✕</span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-green-50 border-2 border-green-200 rounded-3xl p-8 md:p-10"
            >
              <div className="text-5xl mb-4 text-center">✅</div>
              <h3 className="text-2xl font-extrabold text-green-600 text-center mb-8">Avec site web + réseaux</h3>
              <ul className="space-y-5">
                {[
                  "Visible sur Google 24h/24",
                  "Catalogue organisé et professionnel",
                  "Paiement facile en 1 clic",
                  "Image pro qui inspire confiance",
                  "Clients rassurés qui achètent",
                  "Vous prenez l'avantage",
                  "Commandes même quand vous dormez"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-purple-600 font-bold text-sm uppercase tracking-wider">🎁 Concrètement</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6">
              Ce que votre boutique en ligne va <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">changer pour vous</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Votre site travaille <strong>pour vous</strong> chaque jour. Il attire, rassure et fait vendre. Pendant ce temps, vous faites ce que vous aimez.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-6 hover:shadow-2xl transition-all hover:scale-[1.03] border border-transparent hover:border-purple-200"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform inline-block">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="examples" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-orange-600 font-bold text-sm uppercase tracking-wider">👀 Regardez</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6">
              Ces entreprises ont déjà leur boutique en ligne. <br/>
              <span className="text-red-600">Et la vôtre ?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elles ont compris qu'un site web n'est pas un luxe. C'est <strong>l'outil indispensable</strong> pour vendre plus et exister face à la concurrence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {exampleSites.map((site, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 flex items-center justify-center relative overflow-hidden">
                  <div className="text-7xl group-hover:scale-125 transition-transform">🛍️</div>
                  <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-3 py-1.5 rounded-full font-bold">
                    {site.status}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{site.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">{site.description}</p>
                  <p className="text-xs text-purple-600 font-medium mb-4">📍 {site.location}</p>
                  <div className="space-y-2">
                    {site.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <span className="text-green-500 text-xs">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-3xl p-8 md:p-12 text-white text-center max-w-3xl mx-auto"
          >
            <div className="text-5xl mb-4">💡</div>
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
              La seule différence entre ces entreprises et vous ?
            </h3>
            <p className="text-xl mb-8 opacity-90 font-medium">
              Elles ont fait le choix d'être visibles. <strong>Elles ne sont pas meilleures que vous.</strong> 
              Elles ont juste compris avant vous.
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-purple-600 px-10 py-5 rounded-full text-lg font-bold hover:shadow-2xl transition-all hover:scale-105"
            >
              <span>💬</span>
              Je veux la même chose pour mon business
            </a>
          </motion.div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section id="opportunities" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-red-600 font-bold text-sm uppercase tracking-wider">💸 L'argent qui s'envole</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6">
              Ce que vous perdez <span className="text-red-600">chaque mois</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sans site web, chaque jour qui passe, vous laissez de l'argent à vos concurrents. Voici le calcul :
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            {[
              { icon: "💰", value: `${config.stats.revenueLost.toLocaleString()} FCFA`, label: "de ventes perdues par mois", color: "from-red-50 to-orange-50 border-red-200", textColor: "text-red-600" },
              { icon: "👥", value: config.stats.clientsLost, label: "clients qui ne vous trouvent pas", color: "from-orange-50 to-yellow-50 border-orange-200", textColor: "text-orange-600" },
              { icon: "📉", value: config.stats.salesLost, label: "ventes manquées par mois", color: "from-yellow-50 to-amber-50 border-yellow-200", textColor: "text-yellow-600" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`bg-gradient-to-br ${item.color} rounded-2xl p-8 text-center border-2 ${item.color.split(' ')[2]} shadow-lg`}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className={`text-3xl md:text-4xl font-extrabold ${item.textColor} mb-2`}>{item.value}</div>
                <div className="text-gray-700 font-medium">{item.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-3xl p-8 md:p-12 text-white text-center max-w-3xl mx-auto shadow-2xl"
          >
            <div className="text-5xl mb-4">⚠️</div>
            <h3 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
              En un an, c'est plus de <span className="underline decoration-white/50">{config.stats.annualLoss.toLocaleString()} FCFA</span> qui vous échappent
            </h3>
            <p className="text-lg mb-8 opacity-90 font-medium">
              C'est l'équivalent d'une voiture neuve. D'un an de loyer. D'un capital pour investir.<br/>
              <strong>Et cet argent va directement dans la poche de vos concurrents.</strong>
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-purple-600 px-10 py-5 rounded-full text-lg font-bold hover:shadow-2xl transition-all hover:scale-105"
            >
              <span>💬</span>
              Arrêter de perdre cet argent
              <span className="text-sm bg-purple-50 px-3 py-1 rounded-full">⏱️ Réponse rapide</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-purple-600 font-bold text-sm uppercase tracking-wider">🗣️ La preuve</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6">
              Ils étaient comme vous. <span className="text-green-600">Regardez maintenant.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des entrepreneurs qui ont fait le choix d'ajouter un site web à leurs réseaux sociaux.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-50"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-orange-400 flex items-center justify-center text-xl font-bold text-white flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.business}</p>
                    <p className="text-xs text-purple-500 font-medium">📍 {testimonial.location}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic leading-relaxed mb-4">"{testimonial.text}"</p>
                <div className="bg-green-50 rounded-xl px-4 py-3 text-center">
                  <span className="text-green-700 font-bold text-sm">{testimonial.result}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-bold mb-8">
              🚀 Action immédiate
            </span>
            <h2 className="text-3xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Vous avez deux options.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left border border-white/20">
                <div className="text-3xl mb-3">❌</div>
                <h3 className="font-bold text-white mb-2">Option 1 : Ne rien faire</h3>
                <p className="text-white/80 text-sm">Continuer à perdre des clients chaque jour. Laisser vos concurrents prendre les ventes qui auraient dû être les vôtres.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left border border-white/20">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="font-bold text-white mb-2">Option 2 : Prendre 5 minutes</h3>
                <p className="text-white/80 text-sm">Discuter avec moi. Voir comment un site web peut transformer votre business. Sans engagement.</p>
              </div>
            </div>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto font-medium">
              <strong>La majorité des gens choisissent l'option 1.</strong> Et dans 6 mois, ils se demandent pourquoi leurs ventes n'augmentent pas. 
              <br/><br/>
              <strong className="text-white">Les 10% qui prennent l'option 2 ?</strong> Ce sont eux qu'on voit grandir.
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-purple-600 px-12 py-6 rounded-full text-xl font-bold hover:shadow-2xl transition-all hover:scale-105 mb-12 group"
            >
              <span className="text-2xl">💬</span>
              Je prends l'option 2 — Parlons de mon business
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </a>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { icon: "✅", title: "Conseil 100% gratuit", desc: "On discute de vos besoins, sans pression" },
                { icon: "⚡", title: "Réponse en 5 minutes", desc: "Je suis disponible maintenant" },
                { icon: "🤝", title: "Zéro engagement", desc: "Vous n'avez rien à perdre" }
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white border border-white/20">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-400 to-orange-400 flex items-center justify-center font-bold">
                  AP
                </div>
                <div>
                  <h3 className="font-bold">Abdoulaye Patawala</h3>
                  <p className="text-gray-400 text-sm">Créateur de boutiques en ligne</p>
                </div>
              </div>
              <p className="text-gray-400 mt-4 leading-relaxed">
                J'aide les entrepreneurs et PME à avoir leur propre boutique en ligne professionnelle. 
                Mon objectif : vous faire vendre plus, jour et nuit.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">🚀 Services</h3>
              <ul className="space-y-3 text-gray-400">
                {[
                  "Création de site boutique",
                  "Visibilité sur Google",
                  "Paiement en ligne",
                  "Catalogue produits pro",
                  "Formation et support"
                ].map((service, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-purple-400">→</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">📞 Me contacter</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <span>📱</span>
                  {config.phone}
                </li>
                <li className="flex items-center gap-2">
                  <span>📧</span>
                  {config.email}
                </li>
                <li className="flex items-center gap-2">
                  <span>💬</span>
                  WhatsApp : {config.whatsapp}
                </li>
              </ul>
              <div className="flex gap-3 mt-6">
                <a 
                  href={config.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all text-lg"
                >
                  📘
                </a>
                <a 
                  href={config.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all text-lg"
                >
                  📷
                </a>
                <a 
                  href={config.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all text-lg"
                >
                  💼
                </a>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-all text-lg"
                >
                  💬
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Abdoulaye Patawala. Tous droits réservés.</p>
            <p className="mt-2">Créé avec ❤️ pour les entrepreneurs qui veulent grandir.</p>
          </div>
        </div>
      </footer>

      {/* Style pour animations supplémentaires */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
}