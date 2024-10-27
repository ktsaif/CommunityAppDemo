
/**
 * The navigation routes used in the app.
 * @const {Object}
 */
export const Routes = {
    KUNDALISCREEN: 'KundaliScreen',
};

/**
 * Commom colors used
 * @const {Object}
 */

export const Colors = {
    STATUSBAR: '#ffffff',
    BGPRIMARY: '#1b221a',
    TEXTCOLOR: '#ffffff',
    GRADIENT1: '#70e1f5',
    GRADIENT2: '#ffd194',
    TEXTBLACK: '#000000',
    GLASSMRPH: 'rgba(255, 255, 255, 0.06)',
};

export const TABS = ['Basic', 'Chart', 'KP', 'Ashtakvarga', 'Dasha', 'Report'];
export const PlanetOptions = ['Sign', 'Nakshatra'];
export const DetailsOptions = ['General', 'Planetary', 'Yoga'];

export const kundaliData = [
    {
      title: 'Description',
      description:
        'Ascendant is one of the most sought concepts in astrology when it comes to predicting the minute events in your life. At the time of birth, the sign that rises in the sky is the person\'s ascendant. It helps in making predictions about the minute events, unlike your moon or sun sign that help in making weekly, monthly, or yearly predictions for you. Your ascendant is Pisces.',
    },
    {
      title: 'Personality',
      description:
        'Ascendant is one of the most sought concepts in astrology when it comes to predicting the minute events in your life. At the time of birth, the sign that rises in the sky is the person\'s ascendant. It helps in making predictions about the minute events, unlike your moon or sun sign that help in making weekly, monthly, or yearly predictions for you. Your ascendant is Pisces.',
    },
    {
      title: 'Career',
      description:
        'Ascendant is one of the most sought concepts in astrology when it comes to predicting the minute events in your life. At the time of birth, the sign that rises in the sky is the person\'s ascendant. It helps in making predictions about the minute events, unlike your moon or sun sign that help in making weekly, monthly, or yearly predictions for you. Your ascendant is Pisces.',
    },
    {
      title: 'Health',
      description:
        'Ascendant is one of the most sought concepts in astrology when it comes to predicting the minute events in your life. At the time of birth, the sign that rises in the sky is the person\'s ascendant. It helps in making predictions about the minute events, unlike your moon or sun sign that help in making weekly, monthly, or yearly predictions for you. Your ascendant is Pisces.',
    },
  ];

// Data for the planets
export const PlanetData = [
    { planet: 'Ascendant', sign: 'Pisces', lord: 'Jupiter', degree: '13°13’24', house: '1' },
    { planet: 'Sun', sign: 'Sagittarius', lord: 'Jupiter', degree: '13°13’24', house: '10' },
    { planet: 'Moon', sign: 'Aries', lord: 'Mars', degree: '13°13’24', house: '2' },
    { planet: 'Mercury', sign: 'Capricorn', lord: 'Saturn', degree: '13°13’24', house: '11' },
    { planet: 'Venus', sign: 'Capricorn', lord: 'Saturn', degree: '13°13’24', house: '11' },
    { planet: 'Mars', sign: 'Capricorn', lord: 'Saturn', degree: '13°13’24', house: '11' },
    { planet: 'Jupiter', sign: 'Sagittarius', lord: 'Jupiter', degree: '13°13’24', house: '10' },
    { planet: 'Saturn', sign: 'Aquarius', lord: 'Jupiter', degree: '13°13’24', house: '12' },
    { planet: 'Rahu', sign: 'Virgo', lord: 'Mercury', degree: '13°13’24', house: '12' },
    { planet: 'Ketu', sign: 'Pisces', lord: 'Mercury', degree: '13°13’24', house: '12' },
    { planet: 'Neptune', sign: 'Capricorn', lord: 'Saturn', degree: '13°13’24', house: '12' },
    { planet: 'Uranus', sign: 'Capricorn', lord: 'Saturn', degree: '13°13’24', house: '12' },
    { planet: 'Pluto', sign: 'Capricorn', lord: 'Saturn', degree: '13°13’24', house: '12' },
  ];

  // Data for the Kundali chart
  export const kundaliChartData = [
    {
        houseNumber: 1,
        houseNumberPosition: { x: 190, y: 135 },
        house: 'Ascendant (Lagna)',
        description: 'Associated with self-appearance and demeanour',
        value: 'Ve Sa',
        valuePosition: { x: 160, y: 170 },
    },
    {
        houseNumber: 2,
        houseNumberPosition: { x: 230, y: 210 },
        house: 'Wealth (Dhana)',
        description: 'Associated with finances, possessions and family',
        value: null,
        valuePosition: null,
    },
    {
        houseNumber: 3,
        houseNumberPosition: { x: 335, y: 140 },
        house: 'Siblings (Parakrama)',
        description: 'Associated with siblings, courage and short journeys',
        value: null,
        valuePosition: null,
    },
    {
        houseNumber: 4,
        houseNumberPosition: { x: 215, y: 120 },
        house: 'Home (Sukha)',
        description: 'Associated with home and domestic life',
        value: 'Ra',
        valuePosition: { x: 240, y: 120 },
    },
    {
        houseNumber: 5,
        houseNumberPosition: { x: 335, y: 100 },
        house: 'Creativity (Putra)',
        description: 'Associated with children, creativity and education',
        value: 'Mo',
        valuePosition: { x: 325, y: 55 },
    },
    {
        houseNumber: 6,
        houseNumberPosition: { x: 250, y: 35 },
        house: 'Health (Ripu)',
        description: 'Associated with health, enemies and obstacles',
        value: null,
        valuePosition: null,
    },
    {
        houseNumber: 7,
        houseNumberPosition: { x: 190, y: 100 },
        house: 'Partnerships (Kalatra)',
        description: 'Associated with marriage, partnerships and spouse',
        value: 'Ma',
        valuePosition: { x: 155, y: 65 },
    },
    {
        houseNumber: 8,
        houseNumberPosition: { x: 130, y: 35 },
        house: 'Transformation (Ayu)',
        description: 'Associated with longevity, inheritance and mysteries',
        value: null,
        valuePosition: null,
    },
    {
        houseNumber: 9,
        houseNumberPosition: { x: 50, y: 90 },
        house: 'Philosophy (Dharma)',
        description: 'Associated with beliefs, spirituality and long journeys',
        value: null,
        valuePosition: null,
    },
    {
        houseNumber: 10,
        houseNumberPosition: { x: 160, y: 120 },
        house: 'Career (Karma)',
        description: 'Associated with career, reputation and fame',
        value: 'Ke',
        valuePosition: { x: 75, y: 120 },
    },
    {
        houseNumber: 11,
        houseNumberPosition: { x: 50, y: 150 },
        house: 'Gains (Labha)',
        description: 'Associated with income, friendships and social circles',
        value: 'Me',
        valuePosition: { x: 20, y: 185 },
    },
    {
        houseNumber: 12,
        houseNumberPosition: { x: 150, y: 210 },
        house: 'Liberation (Vyaya)',
        description: 'Associated with endings, losses and spiritual pursuits',
        value: 'Su Ju',
        valuePosition: { x: 80, y: 210 },
    },
];

