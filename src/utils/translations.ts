export interface Translation {
  // Game UI
  welcome: {
    title: string;
    subtitle: string;
    features: string[];
    startButton: string;
    footer: string;
  };
  
  // Navigation
  nav: {
    hero: string;
    research: string;
    shop: string;
    inventory: string;
    mining: string;
    menu: string;
    back: string;
  };
  
  // Combat
  combat: {
    zone: string;
    streak: string;
    streakBonus: string;
    correctAnswers: string;
    timeLeft: string;
    revivalAvailable: string;
    revivalReady: string;
    correct: string;
    wrong: string;
    dealDamage: string;
    answerCorrectly: string;
    secondsToAnswer: string;
    freeRevival: string;
  };
  
  // Stats
  stats: {
    heroStatus: string;
    characterLevel: string;
    health: string;
    attack: string;
    defense: string;
    currentZone: string;
    coins: string;
    gems: string;
    shiny: string;
    startAdventure: string;
    defeated: string;
    noLives: string;
    changeMode: string;
    getBetter: string;
    premiumUnlocked: string;
    premiumMember: string;
    premiumDescription: string;
  };
  
  // Garden
  garden: {
    title: string;
    subtitle: string;
    plantSeed: string;
    howItWorks: string;
    features: string[];
    yourCoins: string;
    notEnough: string;
    growthStage: string;
    statBonus: string;
    water: string;
    remaining: string;
    growthProgress: string;
    waterLow: string;
    waterLowDesc: string;
    buyWater: string;
    cost: string;
    buyWaterButton: string;
    tip: string;
    description: string;
  };
  
  // Settings
  settings: {
    title: string;
    subtitle: string;
    visual: string;
    colorblind: string;
    colorblindDesc: string;
    darkMode: string;
    darkModeDesc: string;
    language: string;
    notifications: string;
    notificationsDesc: string;
    languageNote: string;
    autoSaved: string;
  };
  
  // Common
  common: {
    close: string;
    cancel: string;
    confirm: string;
    save: string;
    loading: string;
    error: string;
    success: string;
    level: string;
    experience: string;
    skillPoints: string;
    accuracy: string;
    total: string;
    progress: string;
    unlocked: string;
    locked: string;
    claimed: string;
    available: string;
    max: string;
    upgrade: string;
    sell: string;
    equip: string;
    equipped: string;
  };
}

export const translations: Record<string, Translation> = {
  en: {
    welcome: {
      title: "🏰 Welcome to Hugoland! 🗡️",
      subtitle: "The ultimate fantasy adventure game where knowledge is your greatest weapon!",
      features: [
        "Answer trivia questions to defeat enemies",
        "Collect powerful weapons and armor",
        "Mine gems and find rare shiny gems",
        "Unlock achievements and build knowledge streaks",
        "Explore multiple game modes and challenges",
        "Progress through infinite zones of adventure",
        "Discover ancient relics in the Yojef Market",
        "Level up and unlock powerful skills",
        "Earn daily rewards and offline progress",
        "Grow plants in the Garden of Growth"
      ],
      startButton: "Start Your Adventure",
      footer: "Begin your journey in the magical world of Hugoland"
    },
    nav: {
      hero: "Hero",
      research: "Research",
      shop: "Shop",
      inventory: "Inventory",
      mining: "Mining",
      menu: "Menu",
      back: "Back to Game"
    },
    combat: {
      zone: "Zone",
      streak: "Knowledge Streak!",
      streakBonus: "reward bonus",
      correctAnswers: "correct answers in a row",
      timeLeft: "s",
      revivalAvailable: "Revival Available",
      revivalReady: "💖 Revival Ready",
      correct: "🎉 Correct! You deal damage!",
      wrong: "❌ Wrong! The enemy attacks you!",
      dealDamage: "Answer correctly to deal damage!",
      answerCorrectly: "Answer correctly to",
      secondsToAnswer: "You have {time} seconds to answer!",
      freeRevival: "💖 Don't worry - you get one free revival if you die!"
    },
    stats: {
      heroStatus: "Hero Status",
      characterLevel: "Character Level",
      health: "Health",
      attack: "Attack",
      defense: "Defense",
      currentZone: "Current Zone",
      coins: "Coins",
      gems: "Gems",
      shiny: "Shiny",
      startAdventure: "Start Adventure",
      defeated: "You are defeated!",
      noLives: "No lives remaining!",
      changeMode: "Change game mode or reset to continue!",
      getBetter: "Visit the shop to get better equipment and try again!",
      premiumUnlocked: "🎉 PREMIUM MEMBER UNLOCKED! 🎉",
      premiumMember: "👑 PREMIUM MEMBER",
      premiumDescription: "You've reached Zone 50! Enjoy exclusive rewards and special features!"
    },
    garden: {
      title: "Garden of Growth",
      subtitle: "Grow plants for permanent stat bonuses",
      plantSeed: "Plant Your First Seed",
      howItWorks: "How it works:",
      features: [
        "Plant costs {cost} coins (one-time)",
        "Every cm of growth = +5% bonus to ALL stats (ATK, DEF, HP)",
        "Grows automatically, even when offline",
        "Must keep watered to continue growing",
        "Water costs {waterCost} coins per 24 hours",
        "Maximum growth: {maxGrowth}cm (+{maxBonus}% bonus!)"
      ],
      yourCoins: "Your coins:",
      notEnough: "Not enough coins",
      growthStage: "Growth",
      statBonus: "Stat Bonus",
      water: "Water",
      remaining: "Remaining",
      growthProgress: "Growth Progress",
      waterLow: "Water Running Low!",
      waterLowDesc: "Your plant will stop growing when water runs out.",
      buyWater: "Buy Water",
      cost: "Cost:",
      buyWaterButton: "Buy Water ({label})",
      tip: "💡 Your plant grows in real-time, even when you're not playing!",
      description: "The Garden of Growth provides permanent stat bonuses that stack with research."
    },
    settings: {
      title: "Game Settings",
      subtitle: "Customize your game experience",
      visual: "Visual Settings",
      colorblind: "Colorblind Mode",
      colorblindDesc: "Enhanced contrast and patterns for better visibility",
      darkMode: "Dark Mode",
      darkModeDesc: "Toggle dark/light theme",
      language: "Language",
      notifications: "Notifications",
      notificationsDesc: "Game notifications and alerts",
      languageNote: "🚧 Full language support is coming soon! Currently only English is fully supported.",
      autoSaved: "Settings are automatically saved to your device."
    },
    common: {
      close: "Close",
      cancel: "Cancel",
      confirm: "Confirm",
      save: "Save",
      loading: "Loading...",
      error: "Error",
      success: "Success",
      level: "Level",
      experience: "XP",
      skillPoints: "SP",
      accuracy: "Accuracy",
      total: "Total",
      progress: "Progress",
      unlocked: "Unlocked",
      locked: "Locked",
      claimed: "Claimed",
      available: "Available",
      max: "Max",
      upgrade: "Upgrade",
      sell: "Sell",
      equip: "Equip",
      equipped: "Equipped"
    }
  },
  
  es: {
    welcome: {
      title: "🏰 ¡Bienvenido a Hugoland! 🗡️",
      subtitle: "¡El juego de aventuras fantásticas definitivo donde el conocimiento es tu mejor arma!",
      features: [
        "Responde preguntas de trivia para derrotar enemigos",
        "Recolecta armas y armaduras poderosas",
        "Extrae gemas y encuentra gemas brillantes raras",
        "Desbloquea logros y construye rachas de conocimiento",
        "Explora múltiples modos de juego y desafíos",
        "Progresa a través de zonas infinitas de aventura",
        "Descubre reliquias antiguas en el Mercado Yojef",
        "Sube de nivel y desbloquea habilidades poderosas",
        "Gana recompensas diarias y progreso offline",
        "Cultiva plantas en el Jardín del Crecimiento"
      ],
      startButton: "Comienza Tu Aventura",
      footer: "Comienza tu viaje en el mundo mágico de Hugoland"
    },
    nav: {
      hero: "Héroe",
      research: "Investigación",
      shop: "Tienda",
      inventory: "Inventario",
      mining: "Minería",
      menu: "Menú",
      back: "Volver al Juego"
    },
    combat: {
      zone: "Zona",
      streak: "¡Racha de Conocimiento!",
      streakBonus: "bonificación de recompensa",
      correctAnswers: "respuestas correctas seguidas",
      timeLeft: "s",
      revivalAvailable: "Revivir Disponible",
      revivalReady: "💖 Revivir Listo",
      correct: "🎉 ¡Correcto! ¡Infliges daño!",
      wrong: "❌ ¡Incorrecto! ¡El enemigo te ataca!",
      dealDamage: "¡Responde correctamente para infligir daño!",
      answerCorrectly: "Responde correctamente para",
      secondsToAnswer: "¡Tienes {time} segundos para responder!",
      freeRevival: "💖 No te preocupes - ¡tienes una revivir gratis si mueres!"
    },
    stats: {
      heroStatus: "Estado del Héroe",
      characterLevel: "Nivel del Personaje",
      health: "Salud",
      attack: "Ataque",
      defense: "Defensa",
      currentZone: "Zona Actual",
      coins: "Monedas",
      gems: "Gemas",
      shiny: "Brillante",
      startAdventure: "Comenzar Aventura",
      defeated: "¡Has sido derrotado!",
      noLives: "¡No quedan vidas!",
      changeMode: "¡Cambia el modo de juego o reinicia para continuar!",
      getBetter: "¡Visita la tienda para conseguir mejor equipo e inténtalo de nuevo!",
      premiumUnlocked: "🎉 ¡MIEMBRO PREMIUM DESBLOQUEADO! 🎉",
      premiumMember: "👑 MIEMBRO PREMIUM",
      premiumDescription: "¡Has alcanzado la Zona 50! ¡Disfruta de recompensas exclusivas y características especiales!"
    },
    garden: {
      title: "Jardín del Crecimiento",
      subtitle: "Cultiva plantas para bonificaciones permanentes de estadísticas",
      plantSeed: "Planta Tu Primera Semilla",
      howItWorks: "Cómo funciona:",
      features: [
        "Plantar cuesta {cost} monedas (una vez)",
        "Cada cm de crecimiento = +5% de bonificación a TODAS las estadísticas (ATQ, DEF, HP)",
        "Crece automáticamente, incluso cuando estás offline",
        "Debe mantenerse regado para seguir creciendo",
        "El agua cuesta {waterCost} monedas por 24 horas",
        "Crecimiento máximo: {maxGrowth}cm (¡+{maxBonus}% de bonificación!)"
      ],
      yourCoins: "Tus monedas:",
      notEnough: "No hay suficientes monedas",
      growthStage: "Crecimiento",
      statBonus: "Bonificación de Estadísticas",
      water: "Agua",
      remaining: "Restante",
      growthProgress: "Progreso de Crecimiento",
      waterLow: "¡Agua Escaseando!",
      waterLowDesc: "Tu planta dejará de crecer cuando se acabe el agua.",
      buyWater: "Comprar Agua",
      cost: "Costo:",
      buyWaterButton: "Comprar Agua ({label})",
      tip: "💡 ¡Tu planta crece en tiempo real, incluso cuando no estás jugando!",
      description: "El Jardín del Crecimiento proporciona bonificaciones permanentes de estadísticas que se acumulan con la investigación."
    },
    settings: {
      title: "Configuración del Juego",
      subtitle: "Personaliza tu experiencia de juego",
      visual: "Configuración Visual",
      colorblind: "Modo Daltónico",
      colorblindDesc: "Contraste mejorado y patrones para mejor visibilidad",
      darkMode: "Modo Oscuro",
      darkModeDesc: "Alternar tema oscuro/claro",
      language: "Idioma",
      notifications: "Notificaciones",
      notificationsDesc: "Notificaciones y alertas del juego",
      languageNote: "🚧 ¡El soporte completo de idiomas llegará pronto! Actualmente solo el inglés es totalmente compatible.",
      autoSaved: "La configuración se guarda automáticamente en tu dispositivo."
    },
    common: {
      close: "Cerrar",
      cancel: "Cancelar",
      confirm: "Confirmar",
      save: "Guardar",
      loading: "Cargando...",
      error: "Error",
      success: "Éxito",
      level: "Nivel",
      experience: "EXP",
      skillPoints: "PH",
      accuracy: "Precisión",
      total: "Total",
      progress: "Progreso",
      unlocked: "Desbloqueado",
      locked: "Bloqueado",
      claimed: "Reclamado",
      available: "Disponible",
      max: "Máx",
      upgrade: "Mejorar",
      sell: "Vender",
      equip: "Equipar",
      equipped: "Equipado"
    }
  },
  
  fr: {
    welcome: {
      title: "🏰 Bienvenue à Hugoland ! 🗡️",
      subtitle: "Le jeu d'aventure fantastique ultime où la connaissance est votre plus grande arme !",
      features: [
        "Répondez aux questions de trivia pour vaincre les ennemis",
        "Collectez des armes et armures puissantes",
        "Extrayez des gemmes et trouvez des gemmes brillantes rares",
        "Débloquez des succès et construisez des séries de connaissances",
        "Explorez plusieurs modes de jeu et défis",
        "Progressez à travers des zones infinies d'aventure",
        "Découvrez des reliques anciennes au Marché Yojef",
        "Montez de niveau et débloquez des compétences puissantes",
        "Gagnez des récompenses quotidiennes et des progrès hors ligne",
        "Cultivez des plantes dans le Jardin de Croissance"
      ],
      startButton: "Commencez Votre Aventure",
      footer: "Commencez votre voyage dans le monde magique de Hugoland"
    },
    nav: {
      hero: "Héros",
      research: "Recherche",
      shop: "Boutique",
      inventory: "Inventaire",
      mining: "Minage",
      menu: "Menu",
      back: "Retour au Jeu"
    },
    combat: {
      zone: "Zone",
      streak: "Série de Connaissances !",
      streakBonus: "bonus de récompense",
      correctAnswers: "bonnes réponses d'affilée",
      timeLeft: "s",
      revivalAvailable: "Résurrection Disponible",
      revivalReady: "💖 Résurrection Prête",
      correct: "🎉 Correct ! Vous infligez des dégâts !",
      wrong: "❌ Faux ! L'ennemi vous attaque !",
      dealDamage: "Répondez correctement pour infliger des dégâts !",
      answerCorrectly: "Répondez correctement pour",
      secondsToAnswer: "Vous avez {time} secondes pour répondre !",
      freeRevival: "💖 Ne vous inquiétez pas - vous avez une résurrection gratuite si vous mourez !"
    },
    stats: {
      heroStatus: "Statut du Héros",
      characterLevel: "Niveau du Personnage",
      health: "Santé",
      attack: "Attaque",
      defense: "Défense",
      currentZone: "Zone Actuelle",
      coins: "Pièces",
      gems: "Gemmes",
      shiny: "Brillant",
      startAdventure: "Commencer l'Aventure",
      defeated: "Vous êtes vaincu !",
      noLives: "Plus de vies !",
      changeMode: "Changez de mode de jeu ou redémarrez pour continuer !",
      getBetter: "Visitez la boutique pour obtenir un meilleur équipement et réessayez !",
      premiumUnlocked: "🎉 MEMBRE PREMIUM DÉBLOQUÉ ! 🎉",
      premiumMember: "👑 MEMBRE PREMIUM",
      premiumDescription: "Vous avez atteint la Zone 50 ! Profitez de récompenses exclusives et de fonctionnalités spéciales !"
    },
    garden: {
      title: "Jardin de Croissance",
      subtitle: "Cultivez des plantes pour des bonus de statistiques permanents",
      plantSeed: "Plantez Votre Première Graine",
      howItWorks: "Comment ça marche :",
      features: [
        "Planter coûte {cost} pièces (une fois)",
        "Chaque cm de croissance = +5% de bonus à TOUTES les statistiques (ATQ, DÉF, HP)",
        "Pousse automatiquement, même quand vous êtes hors ligne",
        "Doit être arrosé pour continuer à pousser",
        "L'eau coûte {waterCost} pièces par 24 heures",
        "Croissance maximale : {maxGrowth}cm (+{maxBonus}% de bonus !)"
      ],
      yourCoins: "Vos pièces :",
      notEnough: "Pas assez de pièces",
      growthStage: "Croissance",
      statBonus: "Bonus de Statistiques",
      water: "Eau",
      remaining: "Restant",
      growthProgress: "Progrès de Croissance",
      waterLow: "Eau Faible !",
      waterLowDesc: "Votre plante arrêtera de pousser quand l'eau sera épuisée.",
      buyWater: "Acheter de l'Eau",
      cost: "Coût :",
      buyWaterButton: "Acheter de l'Eau ({label})",
      tip: "💡 Votre plante pousse en temps réel, même quand vous ne jouez pas !",
      description: "Le Jardin de Croissance fournit des bonus de statistiques permanents qui s'accumulent avec la recherche."
    },
    settings: {
      title: "Paramètres du Jeu",
      subtitle: "Personnalisez votre expérience de jeu",
      visual: "Paramètres Visuels",
      colorblind: "Mode Daltonien",
      colorblindDesc: "Contraste amélioré et motifs pour une meilleure visibilité",
      darkMode: "Mode Sombre",
      darkModeDesc: "Basculer le thème sombre/clair",
      language: "Langue",
      notifications: "Notifications",
      notificationsDesc: "Notifications et alertes du jeu",
      languageNote: "🚧 Le support complet des langues arrive bientôt ! Actuellement, seul l'anglais est entièrement pris en charge.",
      autoSaved: "Les paramètres sont automatiquement sauvegardés sur votre appareil."
    },
    common: {
      close: "Fermer",
      cancel: "Annuler",
      confirm: "Confirmer",
      save: "Sauvegarder",
      loading: "Chargement...",
      error: "Erreur",
      success: "Succès",
      level: "Niveau",
      experience: "EXP",
      skillPoints: "PC",
      accuracy: "Précision",
      total: "Total",
      progress: "Progrès",
      unlocked: "Débloqué",
      locked: "Verrouillé",
      claimed: "Réclamé",
      available: "Disponible",
      max: "Max",
      upgrade: "Améliorer",
      sell: "Vendre",
      equip: "Équiper",
      equipped: "Équipé"
    }
  }
};

export const getTranslation = (language: string): Translation => {
  return translations[language] || translations.en;
};

export const t = (language: string, key: string, params?: Record<string, any>): string => {
  const translation = getTranslation(language);
  const keys = key.split('.');
  let value: any = translation;
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  if (typeof value !== 'string') {
    return key; // Return key if translation not found
  }
  
  // Replace parameters in the string
  if (params) {
    return value.replace(/\{(\w+)\}/g, (match: string, paramKey: string) => {
      return params[paramKey]?.toString() || match;
    });
  }
  
  return value;
};