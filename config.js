// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'hmuy',
  imageBackground: false,
  openInNewTab: false,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'gm,',
  greetingAfternoon: 'ga,',
  greetingEvening: 'ge,',
  greetingNight: 'gn!',

  // Weather
  weatherKey: '',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '',
  defaultLongitude: '',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Facebook',
      icon: 'facebook',
      link: 'https://facebook.com',
    },
    {
      id: '3',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://youtube.com',
    },
    {
      id: '4',
      name: 'Twitter',
      icon: 'twitter',
      link: 'https://twitter.com',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'glasses',
      link: 'https://reddit.com',
    },
    {
      id: '6',
      name: 'Gmail',
      icon: 'mail',
      link: 'https://mail.google.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'music',
  secondListIcon: 'coffee',

  // Links
  lists: {
    firstList: [
      {
        name: 'sssshawnnnn',
        link: 'https://www.youtube.com/playlist?list=PLfYfxOO9uwT4q1T_-DlBFtoNoFjR7Q6Ao',
      },
      {
        name: '20syl',
        link: 'https://www.youtube.com/playlist?list=PLfYfxOO9uwT6dpdUxwvn3pG5Q5-OEU22c',
      },
      {
        name: 'DXY',
        link: 'https://www.youtube.com/playlist?list=PLfYfxOO9uwT6sKBEWhBu3PRWTU_A8M2NC',
      },
      {
        name: 'VPop',
        link: 'https://www.youtube.com/playlist?list=PLfYfxOO9uwT7_eEJyGYWui1c58rFS394F',
      },
    ],
    secondList: [
      {
        name: 'upload.systems',
        link: 'https://upload.systems',
      },
      {
        name: 'Google',
        link: 'https://google.com',
      },
      {
        name: 'Cambridge Dictionary',
        link: 'https://dictionary.cambridge.org',
      },
      {
        name: 'Top Gear',
        link: 'https://www.youtube.com/playlist?list=PLfYfxOO9uwT7uLy_fHPUTjI2fR5GmSGqX',
      },
    ],
  },
};
