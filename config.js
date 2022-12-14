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
  greetingMorning: 'good morning,',
  greetingAfternoon: 'good afternoon,',
  greetingEvening: 'good evening,',
  greetingNight: 'good night,',

  // Layout
  bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: 'b805605b06e09d151ba0b9b4a662a474', // Write here your API Key
  weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '37.775',
  defaultLongitude: '-122.419',

  // Autochange
  autoChangeTheme: true,

  // Autochabge by OS
  changeThemeByOS: true,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: '18:00',
  hourDarkThemeInactive: '06:00',

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
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

  secondButtonsContainer: [
    {
      id: '1',
      name: 'Music',
      icon: 'headphones',
      link: 'https://open.spotify.com',
    },
    {
      id: '2',
      name: 'twitter',
      icon: 'twitter',
      link: 'https://twitter.com/',
    },
    {
      id: '3',
      name: 'bot',
      icon: 'bot',
      link: 'https://discord.com/app',
    },
    {
      id: '4',
      name: 'Amazon',
      icon: 'shopping-bag',
      link: 'https://amazon.com/',
    },
    {
      id: '5',
      name: 'Hashnode',
      icon: 'pen-tool',
      link: 'https://hashnode.com/',
    },
    {
      id: '6',
      name: 'Figma',
      icon: 'figma',
      link: 'https://figma.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  firstlistsContainer: [
    {
      icon: 'music',
      id: '1',
      links: [
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
    },
    {
      icon: 'coffee',
      id: '2',
      links: [
        {
          name: 'upload.systems',
          link: 'https://upload.systems',
        },
        {
          name: 'Cambridge Dict.',
          link: 'https://dictionary.cambridge.org',
        },
        {
          name: 'Messenger',
          link: 'https://messenger.com',
        },
        {
          name: 'osu!',
          link: 'https://osu.ppy.sh',
        },
      ],
    },
  ],

  // Second Links Container
  secondListsContainer: [
    {
      icon: 'binary',
      id: '1',
      links: [
        {
          name: 'Spotify',
          link: 'https://www.spotify.com',
        },
        {
          name: 'Reddit',
          link: 'https://www.reddit.com',
        },
        {
          name: 'Hashnode',
          link: 'https://www.hashnode.com',
        },
        {
          name: 'Pocket',
          link: 'https://www.pocket.com',
        },
      ],
    },
    {
      icon: 'github',
      id: '2',
      links: [
        {
          name: 'Front',
          link: 'https://www.reddit.com/r/Frontend/',
        },
        {
          name: 'Rust',
          link: 'https://www.reddit.com/r/rust/',
        },
        {
          name: 'Go',
          link: 'https://www.reddit.com/r/golang/',
        },
        {
          name: 'Repos',
          link: 'https://github.com/migueravila',
        },
      ],
    },
  ],
};
