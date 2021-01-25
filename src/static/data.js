export const portfolioItems = [
  {
    id: 7,
    title: 'COT Reports',
    description: 'On a weekly basis, the Commodity Futures Trading Commission (CFTC) emits a report detailing the big traders activity. The way data is displayed isn\'t very "reader-friendly". This app aims to solve that. Detailed information of +440 contracts and +140,000 reports.',
    image: 'cotreports.png',
    demo: 'https://www.cotreports.org',
    stack: ['ReactJS', 'Redux', 'NextJS', 'Mongoose', 'Express', 'TailwindCSS']
  },
  {
    id: 6,
    title: 'Live Chat',
    description: "Live chat app built with ReactJS and Apollo. In adition to queries and mutations, it relies on subscriptions (WebSocket) for keeping messages and users sections up to date.",
    image: 'graphql-chat.png',
    github: 'https://github.com/barcel0/hasura-chat-app',
    demo: 'https://hasura-chat-app.netlify.app/',
    stack: ['ReactJS', 'Apollo', 'GraphQL', 'Hasura', 'PostgreSQL', 'TailwindCSS']
  },
  {
    id: 5,
    title: 'Companies',
    description: "8 companies and 100 candidates. Using GraphQL, retrieve (query) companies as well as candidates information and update or delete them (mutation) through Apollo.",
    image: 'graphql-companies.png',
    github: 'https://github.com/barcel0/graphql-companies',
    demo: 'https://graphql-companies.herokuapp.com/',
    stack: ['ReactJS', 'GraphQL', 'Express', 'TailwindCSS']
  },
  {
    id: 4,
    title: 'Shop',
    description: "Created as udemy course excercise. It involves navigation setup (React Navigation v4), user input, http requests as well as authentication. Existing login legit@email.com with password 123456.",
    image: 'rn-shop.png',
    gallery: ['./img/rn-shop.png'],
    github: 'https://github.com/barcel0/rn-shop',
    expo: 'https://exp.host/@lbarcelo/rn-shop',
    youtube: 'https://www.youtube.com/playlist?list=PLK-fkRFvMEL1BonqTANMutDLRMAVcu8kL',
    stack: ['ReactJS', 'React Native', 'Expo', 'Redux', 'Firebase']
  },
  {
    id: 3,
    title: 'Stock Tracker',
    description: "React Native Stock Tracker App. Relying on the Alpha Vantage API, it allows you to search wordlwide stocks and track the ones you are interested in by adding them to your account's watchlist.",
    image: 'stocktracker.png',
    gallery: ['./img/stocktracker-diagram.png', './img/stocktracker.png'],
    github: 'https://github.com/barcel0/stock-tracker',
    youtube: 'https://www.youtube.com/playlist?list=PLK-fkRFvMEL1vK7XBwnEz87UHgfDqlRGo',
    stack: ['ReactJS', 'React Native', 'Expo', 'Redux', 'Mongoose', 'Express']
  },

  {
    id: 2,
    title: 'User Profile with Image Upload',
    description: 'User profile with avatar upload as well as image gallery. Images initially hosted locally using multer and fs. Due to Heroku limitations with file uploads, it now uses Amazon Web Services S3 (multer-s3).',
    image: 'image-uploader.png',
    github: 'https://github.com/barcel0/mern-image-uploader',
    demo: 'https://mern-image-uploader.herokuapp.com/',
    stack: ['ReactJS', 'Redux', 'Mongoose', 'Express', 'Bootstrap']
  },
  {
    id: 1,
    title: 'Authentication Shopping List',
    description: 'MERN shopping list with basic JWT authentication system. Sign up and log in. Demo login with username legit@email.com and password hireluis. DB in MongoDB Cloud, hosted with Heroku Free plan.',
    image: 'auth-shoppinglist.png',
    github: 'https://github.com/barcel0/mern-auth-shoppinglist',
    demo: 'https://mern-redux-auth-shoppinglist.herokuapp.com/',
    stack: ['ReactJS', 'Redux', 'Mongoose', 'Express', 'SASS']
  },
  {
    id: 0,
    title: 'Market Simulator',
    description: 'First ReactJS App. Created by the end of 2018. Small stock market, 4 companies, £5000 cash, it\'s up to yo to decide when to enter or leave the market.',
    image: 'market-simulator.png',
    github: 'https://github.com/barcel0/market-simulator',
    demo: 'https://react-market-simulator.herokuapp.com',
    stack: ['ReactJS']
  },
];