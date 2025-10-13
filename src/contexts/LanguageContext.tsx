import React, { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'es' | 'ca';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Smart Climate Monitoring for Pharmacies',
    'hero.subtitle': 'Real-time temperature and humidity tracking to ensure medication safety and regulatory compliance',
    'hero.cta.primary': 'Get Started',
    'hero.cta.secondary': 'Learn More',
    
    // Features
    'features.title': 'Complete Climate Monitoring Solution',
    'features.subtitle': 'Everything you need to maintain optimal conditions for pharmaceutical storage',
    
    'feature.realtime.title': 'Real-Time Monitoring',
    'feature.realtime.description': 'Track temperature and humidity across all your storage areas with live updates',
    
    'feature.alerts.title': 'Instant Alerts',
    'feature.alerts.description': 'Receive immediate notifications when sensors detect out-of-range conditions',
    
    'feature.export.title': 'Easy Data Export',
    'feature.export.description': 'Download complete telemetry data and alert history for compliance reporting',
    
    'feature.dashboard.title': 'Intuitive Dashboard',
    'feature.dashboard.description': 'Monitor all sensors from a single, easy-to-use interface',
    
    'feature.reliable.title': 'Reliable Hardware',
    'feature.reliable.description': 'Professional-grade sensors and gateway for continuous operation',
    
    'feature.support.title': '24/7 Support',
    'feature.support.description': 'Expert technical support whenever you need assistance',
    
    // Benefits
    'benefits.title': 'Why Choose ClimaFarma?',
    'benefits.compliance': 'Regulatory Compliance',
    'benefits.compliance.desc': 'Meet all pharmaceutical storage requirements with automated documentation',
    'benefits.safety': 'Medication Safety',
    'benefits.safety.desc': 'Protect your inventory with continuous monitoring and instant alerts',
    'benefits.efficiency': 'Operational Efficiency',
    'benefits.efficiency.desc': 'Save time with automated monitoring and easy reporting',
    
    // CTA Section
    'cta.title': 'Ready to Protect Your Pharmacy?',
    'cta.subtitle': 'Join hundreds of pharmacies already using ClimaFarma',
    'cta.button': 'Order Now',
    
    // Footer
    'footer.company': 'Company',
    'footer.about': 'About Us',
    'footer.careers': 'Careers',
    'footer.contact': 'Contact',
    'footer.support': 'Support',
    'footer.documentation': 'Documentation',
    'footer.help': 'Help Center',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.rights': 'All rights reserved.',
    
    // Portal
    'portal.title': 'Order Your Climate Monitoring Kit',
    'portal.subtitle': 'Select the perfect package for your pharmacy',
    
    'portal.starter': 'Essential Kit',
    'portal.starter.desc': 'Perfect for small pharmacies',
    'portal.starter.gateway': '1 Gateway',
    'portal.starter.sensors': '3 Temperature & Humidity Sensors',
    'portal.starter.support': 'Email Support',
    'portal.starter.warranty': 'Full Warranty',
    
    'portal.professional': 'Advanced Kit',
    'portal.professional.desc': 'Ideal for medium-sized pharmacies',
    'portal.professional.gateway': '1 Gateway',
    'portal.professional.sensors': '6 Temperature & Humidity Sensors',
    'portal.professional.support': 'Priority Support',
    'portal.professional.warranty': 'Full Warranty',
    'portal.professional.badge': 'Most Popular',
    
    'portal.enterprise': 'Enterprise Kit',
    'portal.enterprise.desc': 'For large pharmacy chains',
    'portal.enterprise.gateway': '∞ Gateways',
    'portal.enterprise.sensors': '∞ Temperature & Humidity Sensors',
    'portal.enterprise.support': '24/7 Phone Support',
    'portal.enterprise.warranty': 'Full Warranty',
    'portal.enterprise.custom': 'Custom Integration',
    
    'portal.subscription': 'Monthly Subscription',
    'portal.month': 'month',
    'portal.year': 'year',
    'portal.billing.monthly': 'Monthly',
    'portal.billing.yearly': 'Yearly',
    'portal.billing.yearly.discount': 'Enjoy a 15% discount when going yearly',
    'portal.billing.commitment': '3-month minimum commitment',
    'portal.billing.billed.annually': 'Billed annually',
    'portal.order': 'Order Now',
    'portal.contact.sales': 'Contact Sales',
    
    'portal.form.title': 'Complete Your Order',
    'portal.form.pharmacy': 'Pharmacy Name',
    'portal.form.contact': 'Contact Person',
    'portal.form.email': 'Email Address',
    'portal.form.phone': 'Phone Number',
    'portal.form.address': 'Installation Address',
    'portal.form.submit': 'Submit Order',
    'portal.form.cancel': 'Cancel',
    
    'portal.success': 'Order Submitted Successfully!',
    'portal.success.message': 'Our team will contact you within 24 hours to confirm your order and schedule installation.',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.features': 'Características',
    'nav.pricing': 'Precios',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.title': 'Monitorización Climática Inteligente para Farmacias',
    'hero.subtitle': 'Seguimiento en tiempo real de temperatura y humedad para garantizar la seguridad de los medicamentos y el cumplimiento normativo',
    'hero.cta.primary': 'Comenzar',
    'hero.cta.secondary': 'Saber Más',
    
    // Features
    'features.title': 'Solución Completa de Monitorización Climática',
    'features.subtitle': 'Todo lo que necesitas para mantener condiciones óptimas en el almacenamiento farmacéutico',
    
    'feature.realtime.title': 'Monitorización en Tiempo Real',
    'feature.realtime.description': 'Rastrea temperatura y humedad en todas tus áreas de almacenamiento con actualizaciones en vivo',
    
    'feature.alerts.title': 'Alertas Instantáneas',
    'feature.alerts.description': 'Recibe notificaciones inmediatas cuando los sensores detecten condiciones fuera de rango',
    
    'feature.export.title': 'Exportación Fácil de Datos',
    'feature.export.description': 'Descarga datos de telemetría completos e historial de alertas para informes de cumplimiento',
    
    'feature.dashboard.title': 'Panel Intuitivo',
    'feature.dashboard.description': 'Monitoriza todos los sensores desde una única interfaz fácil de usar',
    
    'feature.reliable.title': 'Hardware Confiable',
    'feature.reliable.description': 'Sensores y gateway de grado profesional para operación continua',
    
    'feature.support.title': 'Soporte 24/7',
    'feature.support.description': 'Soporte técnico experto cuando lo necesites',
    
    // Benefits
    'benefits.title': '¿Por qué elegir ClimaFarma?',
    'benefits.compliance': 'Cumplimiento Normativo',
    'benefits.compliance.desc': 'Cumple todos los requisitos de almacenamiento farmacéutico con documentación automatizada',
    'benefits.safety': 'Seguridad de Medicamentos',
    'benefits.safety.desc': 'Protege tu inventario con monitorización continua y alertas instantáneas',
    'benefits.efficiency': 'Eficiencia Operativa',
    'benefits.efficiency.desc': 'Ahorra tiempo con monitorización automatizada e informes fáciles',
    
    // CTA Section
    'cta.title': '¿Listo para proteger tu farmacia?',
    'cta.subtitle': 'Únete a cientos de farmacias que ya usan ClimaFarma',
    'cta.button': 'Solicitar Ahora',
    
    // Footer
    'footer.company': 'Empresa',
    'footer.about': 'Sobre Nosotros',
    'footer.careers': 'Carreras',
    'footer.contact': 'Contacto',
    'footer.support': 'Soporte',
    'footer.documentation': 'Documentación',
    'footer.help': 'Centro de Ayuda',
    'footer.legal': 'Legal',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.rights': 'Todos los derechos reservados.',
    
    // Portal
    'portal.title': 'Ordena tu kit de monitorización climática',
    'portal.subtitle': 'Selecciona el paquete perfecto para tu farmacia',
    
    'portal.starter': 'Kit Esencial',
    'portal.starter.desc': 'Perfecto para farmacias pequeñas',
    'portal.starter.gateway': '1 Gateway',
    'portal.starter.sensors': '3 Sensores de Temperatura y Humedad',
    'portal.starter.support': 'Soporte por Email',
    'portal.starter.warranty': 'Garantía Completa',
    
    'portal.professional': 'Kit Avanzado',
    'portal.professional.desc': 'Ideal para farmacias medianas',
    'portal.professional.gateway': '1 Gateway',
    'portal.professional.sensors': '6 Sensores de Temperatura y Humedad',
    'portal.professional.support': 'Soporte Prioritario',
    'portal.professional.warranty': 'Garantía Completa',
    'portal.professional.badge': 'Más Popular',
    
    'portal.enterprise': 'Kit Enterprise',
    'portal.enterprise.desc': 'Para cadenas de farmacias grandes',
    'portal.enterprise.gateway': '∞ Gateways',
    'portal.enterprise.sensors': '∞ Sensores de Temperatura y Humedad',
    'portal.enterprise.support': 'Soporte Telefónico 24/7',
    'portal.enterprise.warranty': 'Garantía Completa',
    'portal.enterprise.custom': 'Integración Personalizada',
    
    'portal.subscription': 'Suscripción Mensual',
    'portal.month': 'mes',
    'portal.year': 'año',
    'portal.billing.monthly': 'Mensual',
    'portal.billing.yearly': 'Anual',
    'portal.billing.yearly.discount': 'Disfruta de un 15% de descuento al elegir anual',
    'portal.billing.commitment': 'Compromiso mínimo de 3 meses',
    'portal.billing.billed.annually': 'Facturado anualmente',
    'portal.order': 'Solicitar Ahora',
    'portal.contact.sales': 'Contactar Ventas',
    
    'portal.form.title': 'Completa Tu Pedido',
    'portal.form.pharmacy': 'Nombre de la Farmacia',
    'portal.form.contact': 'Persona de Contacto',
    'portal.form.email': 'Correo Electrónico',
    'portal.form.phone': 'Número de Teléfono',
    'portal.form.address': 'Dirección de Instalación',
    'portal.form.submit': 'Enviar Pedido',
    'portal.form.cancel': 'Cancelar',
    
    'portal.success': '¡Solicitud enviada!',
    'portal.success.message': 'Nuestro equipo te contactará en 24 horas para confirmar tu pedido y programar la instalación.',
  },
  ca: {
    // Navigation
    'nav.home': 'Inici',
    'nav.features': 'Característiques',
    'nav.pricing': 'Preus',
    'nav.contact': 'Contacte',
    
    // Hero
    'hero.title': 'Monitorització Climàtica Intel·ligent per a Farmàcies',
    'hero.subtitle': 'Seguiment en temps real de temperatura i humitat per garantir la seguretat dels medicaments i el compliment normatiu',
    'hero.cta.primary': 'Començar',
    'hero.cta.secondary': 'Saber Més',
    
    // Features
    'features.title': 'Solució Completa de Monitorització Climàtica',
    'features.subtitle': 'Tot el que necessites per mantenir condicions òptimes en l\'emmagatzematge farmacèutic',
    
    'feature.realtime.title': 'Monitorització en Temps Real',
    'feature.realtime.description': 'Rastreja temperatura i humitat a totes les teves àrees d\'emmagatzematge amb actualitzacions en viu',
    
    'feature.alerts.title': 'Alertes Instantànies',
    'feature.alerts.description': 'Rep notificacions immediates quan els sensors detectin condicions fora de rang',
    
    'feature.export.title': 'Exportació Fàcil de Dades',
    'feature.export.description': 'Descarrega dades de telemetria completes i historial d\'alertes per a informes de compliment',
    
    'feature.dashboard.title': 'Panell Intuïtiu',
    'feature.dashboard.description': 'Monitoritza tots els sensors des d\'una única interfície fàcil d\'usar',
    
    'feature.reliable.title': 'Maquinari Fiable',
    'feature.reliable.description': 'Sensors i gateway de grau professional per a operació contínua',
    
    'feature.support.title': 'Suport 24/7',
    'feature.support.description': 'Suport tècnic expert quan el necessitis',
    
    // Benefits
    'benefits.title': 'Per què triar ClimaFarma?',
    'benefits.compliance': 'Compliment Normatiu',
    'benefits.compliance.desc': 'Compleix tots els requisits d\'emmagatzematge farmacèutic amb documentació automatitzada',
    'benefits.safety': 'Seguretat de Medicaments',
    'benefits.safety.desc': 'Protegeix el teu inventari amb monitorització contínua i alertes instantànies',
    'benefits.efficiency': 'Eficiència Operativa',
    'benefits.efficiency.desc': 'Estalvia temps amb monitorització automatitzada i informes fàcils',
    
    // CTA Section
    'cta.title': 'Preparat per protegir la teva farmàcia?',
    'cta.subtitle': 'Uneix-te a centenars de farmàcies que ja fan servir ClimaFarma',
    'cta.button': 'Sol·licitar Ara',
    
    // Footer
    'footer.company': 'Empresa',
    'footer.about': 'Sobre Nosaltres',
    'footer.careers': 'Carreres',
    'footer.contact': 'Contacte',
    'footer.support': 'Suport',
    'footer.documentation': 'Documentació',
    'footer.help': 'Centre d\'Ajuda',
    'footer.legal': 'Legal',
    'footer.privacy': 'Política de Privacitat',
    'footer.terms': 'Termes de Servei',
    'footer.rights': 'Tots els drets reservats.',
    
    // Portal
    'portal.title': 'Ordena el teu kit de monitorització climàtica',
    'portal.subtitle': 'Selecciona el paquet perfecte per a la teva farmàcia',
    
    'portal.starter': 'Kit Essencial',
    'portal.starter.desc': 'Perfecte per a farmàcies petites',
    'portal.starter.gateway': '1 Gateway',
    'portal.starter.sensors': '3 Sensors de Temperatura i Humitat',
    'portal.starter.support': 'Suport per Email',
    'portal.starter.warranty': 'Garantia Completa',
    
    'portal.professional': 'Kit Avançat',
    'portal.professional.desc': 'Ideal per a farmàcies mitjanes',
    'portal.professional.gateway': '1 Gateway',
    'portal.professional.sensors': '6 Sensors de Temperatura i Humitat',
    'portal.professional.support': 'Suport Prioritari',
    'portal.professional.warranty': 'Garantia Completa',
    'portal.professional.badge': 'Més Popular',
    
    'portal.enterprise': 'Kit Enterprise',
    'portal.enterprise.desc': 'Per a cadenes de farmàcies grans',
    'portal.enterprise.gateway': '∞ Gateways',
    'portal.enterprise.sensors': '∞ Sensors de Temperatura i Humitat',
    'portal.enterprise.support': 'Suport Telefònic 24/7',
    'portal.enterprise.warranty': 'Garantia Completa',
    'portal.enterprise.custom': 'Integració Personalitzada',
    
    'portal.subscription': 'Subscripció Mensual',
    'portal.month': 'mes',
    'portal.year': 'any',
    'portal.billing.monthly': 'Mensual',
    'portal.billing.yearly': 'Anual',
    'portal.billing.yearly.discount': 'Gaudeix d’un 15% de descompte si tries anual',
    'portal.billing.commitment': 'Permanència mínima de 3 mesos',
    'portal.billing.billed.annually': 'Facturat anualment',
    'portal.order': 'Sol·licitar Ara',
    'portal.contact.sales': 'Contactar Vendes',
    
    'portal.form.title': 'Completa la Teva Comanda',
    'portal.form.pharmacy': 'Nom de la Farmàcia',
    'portal.form.contact': 'Persona de Contacte',
    'portal.form.email': 'Correu Electrònic',
    'portal.form.phone': 'Número de Telèfon',
    'portal.form.address': 'Adreça d\'Instal·lació',
    'portal.form.submit': 'Enviar Comanda',
    'portal.form.cancel': 'Cancel·lar',
    
    'portal.success': 'Comanda Enviada Correctament!',
    'portal.success.message': 'El nostre equip et contactarà en 24 hores per confirmar la teva comanda i programar la instal·lació.',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const supportedLanguages: Language[] = ['en', 'es', 'ca'];

  const getInitialLanguage = (): Language => {
    // 1) Respect persisted choice if valid
    try {
      const saved = localStorage.getItem('climafarma-language') as Language | null;
      if (saved && supportedLanguages.includes(saved)) return saved;
    } catch (_) {
      // Ignore access errors (e.g., SSR or privacy mode)
    }

    // 2) Try to infer from browser settings (navigator.languages preferred)
    if (typeof navigator !== 'undefined') {
      const candidates = Array.isArray((navigator as any).languages)
        ? (navigator as any).languages
        : [(navigator as any).language || ''];

      for (const l of candidates) {
        const base = String(l || '')
          .toLowerCase()
          .split('-')[0] as Language;
        if (supportedLanguages.includes(base)) return base;
      }
    }

    // 3) Default fallback to Spanish
    return 'es';
  };

  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('climafarma-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
