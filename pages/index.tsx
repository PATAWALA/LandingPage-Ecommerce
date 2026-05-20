// pages/index.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import config from '../data/config';

// Types pour TypeScript
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
}

interface OnlineStore {
  name: string;
  description: string;
  image: string;
  location: string;
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      title: "Les clients ne vous trouvent pas sur Google",
      description: "Quand quelqu'un cherche vos produits sur Internet, il ne tombe que sur vos concurrents. Vous êtes invisible."
    },
    {
      icon: "😕",
      title: "Les clients doutent sans site web",
      description: "Aujourd'hui, un vendeur sans site, c'est comme une boutique sans enseigne. Les gens hésitent à commander."
    },
    {
      icon: "🚶",
      title: "Les clients partent sans acheter",
      description: "Sur les réseaux, les gens scrollent, likent et oublient. Un site web, c'est un endroit calme pour décider d'acheter."
    },
    {
      icon: "📋",
      title: "Pas de catalogue organisé",
      description: "Sur WhatsApp, vous envoyez 50 photos. Sur un site, tout est rangé, avec les prix. Le client voit tout d'un coup d'œil."
    },
    {
      icon: "💳",
      title: "Paiement compliqué",
      description: "Sans site, c'est transfert, reçu, capture... Avec un site, le client paie en un clic. Plus simple pour lui, plus rapide pour vous."
    },
    {
      icon: "🏃",
      title: "D'autres prennent vos clients",
      description: "Ceux qui ont déjà un site apparaissent avant vous. Chaque jour, ce sont des clients qui vont chez eux."
    },
    {
      icon: "😟",
      title: "Image amateur",
      description: "Un bon produit vendu sans site, ça fait petit. Vos produits méritent une belle vitrine."
    }
  ];

  const beforeAfterComparisons = [
    {
      icon: "❌",
      title: "Sans site web",
      items: [
        "Invisible sur Google",
        "Catalogue en désordre",
        "Paiement compliqué",
        "Image peu professionnelle",
        "Clients qui doutent"
      ]
    },
    {
      icon: "✅",
      title: "Avec site web + réseaux",
      items: [
        "Visible sur Google",
        "Catalogue clair et organisé",
        "Paiement facile (Mobile Money, carte)",
        "Image pro et rassurante",
        "Clients en confiance"
      ]
    }
  ];

  const benefits: Benefit[] = [
    {
      icon: "🌐",
      title: "Apparaître sur Google",
      description: "Quand un client cherche vos produits, il vous trouve tout de suite. Votre boutique devient visible 24h/24."
    },
    {
      icon: "💳",
      title: "Paiement simple et rapide",
      description: "Mobile Money, carte bancaire, PayPal... Vos clients paient comme ils veulent, en un clic."
    },
    {
      icon: "🏪",
      title: "Catalogue bien organisé",
      description: "Tous vos produits avec photos, prix et description. Le client voit tout, compare et achète."
    },
    {
      icon: "📱",
      title: "Commandes sur votre téléphone",
      description: "Dès qu'un client commande, vous recevez une notification. Où que vous soyez."
    },
    {
      icon: "📲",
      title: "Site adapté au mobile",
      description: "80% de vos clients regardent sur téléphone. Votre site sera parfait sur tous les écrans."
    },
    {
      icon: "⭐",
      title: "Image plus professionnelle",
      description: "Un site web montre que vous êtes sérieux. Les clients vous font confiance plus vite."
    },
    {
      icon: "🏆",
      title: "Vous démarquer des autres",
      description: "La plupart des vendeurs n'ont pas de site. Vous serez celui qu'on remarque et qu'on choisit."
    },
    {
      icon: "📊",
      title: "Voir vos visites",
      description: "Chaque jour, vous voyez combien de personnes visitent votre boutique. Vous savez ce qui plaît."
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Maman Dodo",
      business: "Vendeuse de pagnes",
      location: "Cotonou, Bénin",
      text: "Avant, je vendais seulement sur WhatsApp. Depuis que j'ai mon site, les clientes voient tous mes modèles et commandent directement. Mes ventes ont doublé ! Abdoulaye a tout fait pour moi, je n'ai rien eu à faire.",
      image: "/images/temoignage1.jpeg"
    },
    {
      name: "Ibrahim",
      business: "Vendeur de chaussures",
      location: "Abidjan, Côte d'Ivoire",
      text: "Le site web a changé ma vie. Des clients m'appellent et disent 'j'ai vu votre site, je veux commander'. Ça n'arrivait jamais quand j'étais seulement sur les réseaux. Je recommande à tout le monde.",
      image: "/images/temoignage2.jpeg"
    },
    {
      name: "Fatou",
      business: "Boutique produits de beauté",
      location: "Dakar, Sénégal",
      text: "Avec le site, mes clientes peuvent payer directement en ligne. Plus besoin de discuter 30 minutes pour un paiement. C'est tellement plus simple. Merci Abdoulaye pour ton travail !",
      image: "/images/temoignage3.jpeg"
    }
  ];

  const onlineStores: OnlineStore[] = [
    {
      name: "LuxeMode",
      description: "Boutique de vêtements haut de gamme",
      image: "/images/store1.jpeg",
      location: "Lomé, Togo"
    },
    {
      name: "TechGadget",
      description: "Accessoires tech et gadgets",
      image: "/images/store2.jpeg",
      location: "Douala, Cameroun"
    },
    {
      name: "Douceurs de Fatou",
      description: "Pâtisseries artisanales",
      image: "/images/store3.jpeg",
      location: "Ouagadougou, Burkina Faso"
    }
  ];

  const whatsappLink = `https://wa.me/${config.whatsapp}?text=Bonjour%20Abdoulaye%2C%20je%20veux%20en%20savoir%20plus%20sur%20la%20création%20de%20ma%20boutique%20en%20ligne.`;

  return (
    <>
      <Head>
        <title>Abdoulaye Patawala | Création de boutiques en ligne pour vendeurs</title>
        <meta name="description" content="Je crée des boutiques en ligne pour vous aider à vendre plus. Gardez vos réseaux sociaux, ajoutez un site web et multipliez vos ventes." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent"
              >
                AP
              </motion.div>
            </div>
            
            {/* Menu desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('problems')} className="text-gray-700 hover:text-purple-600 transition-colors">
                Problèmes
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-purple-600 transition-colors">
                Qui suis-je ?
              </button>
              <button onClick={() => scrollToSection('comparison')} className="text-gray-700 hover:text-purple-600 transition-colors">
                Avant / Après
              </button>
              <button onClick={() => scrollToSection('benefits')} className="text-gray-700 hover:text-purple-600 transition-colors">
                Avantages
              </button>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Parlons business
              </a>
            </div>

            {/* Menu mobile */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 p-2"
              >
                {mobileMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-4 py-4 space-y-4">
              <button onClick={() => scrollToSection('problems')} className="block w-full text-left text-gray-700 py-2">
                Problèmes
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 py-2">
                Qui suis-je ?
              </button>
              <button onClick={() => scrollToSection('comparison')} className="block w-full text-left text-gray-700 py-2">
                Avant / Après
              </button>
              <button onClick={() => scrollToSection('benefits')} className="block w-full text-left text-gray-700 py-2">
                Avantages
              </button>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-purple-600 to-orange-500 text-white px-6 py-3 rounded-full font-semibold"
              >
                Parlons business
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <span className="inline-block bg-white px-4 py-2 rounded-full text-purple-600 font-semibold shadow-md">
                ⭐ Recommandé par 50+ vendeurs
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Chaque jour sans site web, <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                vous passez à côté de ventes
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Quand un client cherche vos produits sur Google, il ne vous trouve pas. 
              Vos réseaux sociaux marchent bien, un site web va les renforcer et vous apporter encore plus de clients.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-lg text-gray-700 mb-8"
            >
              Je suis Abdoulaye. Depuis 3 ans, j'aide les vendeurs à avoir leur propre boutique sur Internet.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <button 
                onClick={() => scrollToSection('opportunities')}
                className="bg-gradient-to-r from-purple-600 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all"
              >
                Voir ce que vous perdez
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-purple-200 hover:border-purple-400 transition-all"
              >
                Qui suis-je ?
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-600">boutiques créées</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-pink-500 mb-2">3x plus</div>
                <div className="text-gray-600">de clients avec un site</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-orange-500 mb-2">89%</div>
                <div className="text-gray-600">des clients vérifient sur Internet avant d'acheter</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problems" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Ce qui bloque vos ventes aujourd'hui
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vous avez de bons produits et vos pages sociales marchent, mais il vous manque quelque chose pour vendre plus.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 hover:shadow-xl transition-all border border-red-100"
              >
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
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
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-purple-200 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 flex items-center justify-center text-white text-6xl font-bold">
                  AP
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full px-6 py-3 shadow-xl">
                <div className="text-sm font-semibold text-purple-600">⭐ 3 ans d'expérience</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Moi, c'est <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">Abdoulaye Patawala</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Je crée des boutiques en ligne qui vous aident à vendre plus, jour et nuit. 
                Vos pages sociales restent actives, et en plus vous avez un site web qui travaille pour vous 24 heures sur 24.
              </p>
              <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-600 mb-8">
                "Mon objectif : vous aider à vendre plus, tout en gardant le contact direct avec vos clients sur WhatsApp et les réseaux."
              </blockquote>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-gray-700">Service personnalisé</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-gray-700">Rapide et efficace</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-gray-700">Support réactif</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  <span className="text-gray-700">Prix abordable</span>
                </div>
              </div>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-all shadow-lg"
              >
                <span>💬</span>
                Demander une démonstration gratuite
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Avant / Après
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un site web ne remplace pas vos réseaux, il les renforce pour vous faire vendre plus.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beforeAfterComparisons.map((comparison, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`rounded-2xl p-8 ${index === 0 ? 'bg-red-50 border-2 border-red-200' : 'bg-green-50 border-2 border-green-200'}`}
              >
                <div className="text-4xl mb-6 text-center">{comparison.icon}</div>
                <h3 className={`text-2xl font-bold text-center mb-8 ${index === 0 ? 'text-red-600' : 'text-green-600'}`}>
                  {comparison.title}
                </h3>
                <ul className="space-y-4">
                  {comparison.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className={index === 0 ? 'text-red-500' : 'text-green-500'}>
                        {index === 0 ? '✗' : '✓'}
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Ce que votre site boutique va vous apporter
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chaque jour, votre site travaille pour vous. Il trouve des clients, montre vos produits et reçoit des commandes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section id="opportunities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Ce que vous perdez chaque mois
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sans site web, chaque jour qui passe, vous laissez de l'argent sur la table.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 text-center border-2 border-red-200"
            >
              <div className="text-5xl mb-4">💰</div>
              <div className="text-3xl font-bold text-red-600 mb-2">{config.stats.revenueLost.toLocaleString()} FCFA</div>
              <div className="text-gray-700">de ventes perdues par mois</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 text-center border-2 border-orange-200"
            >
              <div className="text-5xl mb-4">👥</div>
              <div className="text-3xl font-bold text-orange-600 mb-2">{config.stats.clientsLost}</div>
              <div className="text-gray-700">clients qui ne vous trouvent pas</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 text-center border-2 border-yellow-200"
            >
              <div className="text-5xl mb-4">📉</div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">{config.stats.salesLost}</div>
              <div className="text-gray-700">ventes manquées par mois</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-3xl p-8 md:p-12 text-white text-center max-w-3xl mx-auto"
          >
            <div className="text-4xl mb-4">⚠️</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              En un an, c'est plus de {config.stats.annualLoss.toLocaleString()} FCFA de ventes qui vous échappent
            </h3>
            <p className="text-lg mb-8 opacity-90">
              C'est l'équivalent d'une voiture, d'un loyer annuel ou d'un investissement pour votre avenir.
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all"
            >
              <span>💬</span>
              Je veux arrêter de perdre des ventes
            </a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Ceux qui l'ont fait
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des vendeurs comme vous, qui ont ajouté un site à leurs réseaux sociaux.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-orange-400 flex items-center justify-center text-2xl font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.business}</p>
                    <p className="text-xs text-purple-500">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Stores Examples Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Voici ce que d'autres vendeurs ont déjà
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des boutiques en ligne qui marchent, créées pour des vendeurs comme vous.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {onlineStores.map((store, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 flex items-center justify-center">
                    <div className="text-6xl">🛍️</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-1">{store.name}</h3>
                      <p className="text-sm opacity-90">{store.description}</p>
                      <p className="text-xs opacity-75 mt-1">📍 {store.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Prêt à vendre plus ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Gardez vos pages WhatsApp, Facebook et Instagram. Ajoutez un site web et regardez vos ventes décoller.
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-10 py-5 rounded-full text-xl font-semibold hover:shadow-2xl transition-all transform hover:scale-105 mb-12"
            >
              <span>💬</span>
              Je veux voir ce que ça donne pour ma boutique
            </a>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <div className="text-3xl mb-2">✅</div>
                <h3 className="font-semibold mb-2">Conseil gratuit</h3>
                <p className="text-white/80 text-sm">On discute de vos besoins sans engagement</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-semibold mb-2">Réponse rapide</h3>
                <p className="text-white/80 text-sm">Je vous réponds en quelques minutes</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <div className="text-3xl mb-2">🤝</div>
                <h3 className="font-semibold mb-2">Sans engagement</h3>
                <p className="text-white/80 text-sm">Vous n'avez rien à perdre à discuter</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent mb-4">
                AP
              </div>
              <h3 className="text-lg font-semibold mb-2">Abdoulaye Patawala</h3>
              <p className="text-gray-400">Créateur de boutiques en ligne</p>
              <p className="text-gray-400 mt-4">
                J'aide les vendeurs à avoir leur propre site web professionnel et à vendre plus.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">→</span>
                  Création de site boutique
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">→</span>
                  Visibilité Google
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">→</span>
                  Paiement en ligne
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">→</span>
                  Catalogue produits
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
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
                  <span>📍</span>
                  Disponible à distance
                </li>
              </ul>
              <div className="flex gap-4 mt-6">
                <a 
                  href={config.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <span className="text-lg">📘</span>
                </a>
                <a 
                  href={config.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <span className="text-lg">📷</span>
                </a>
                <a 
                  href={config.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <span className="text-lg">💼</span>
                </a>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-all"
                >
                  <span className="text-lg">💬</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 Abdoulaye Patawala. Tous droits réservés.</p>
            <p className="mt-2">Créé avec ❤️ pour les vendeurs qui veulent grandir.</p>
          </div>
        </div>
      </footer>
    </>
  );
}