export type Dictionary = {
  common: {
    brand: string;
    tagline: string;
    nav: {
      home: string;
      about: string;
      events: string;
      resources: string;
      contact: string;
    };
    ctaFirstTime: string;
    ctaEvents: string;
    learnMore: string;
    viewAll: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    aboutTitle: string;
    aboutText: string;
    nextEventsTitle: string;
  };
  about: {
    title: string;
    intro: string;
    whatIsTitle: string;
    whatIsText: string;
    practiceTitle: string;
    practiceText: string;
    practiceItems: string[];
    communityTitle: string;
    communityText: string;
  };
  events: {
    title: string;
    subtitle: string;
    filterAll: string;
    filterMeditation: string;
    filterWorkshop: string;
    filterRetreat: string;
    filterCommunity: string;
    noEvents: string;
  };
  resources: {
    title: string;
    subtitle: string;
    guidesTitle: string;
    booksTitle: string;
    podcastsTitle: string;
    scienceTitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    firstTimeTitle: string;
    firstTimeText: string;
    formName: string;
    formEmail: string;
    formExperience: string;
    formExperienceOptions: string[];
    formMessage: string;
    formSubmit: string;
    formSuccess: string;
  };
};
