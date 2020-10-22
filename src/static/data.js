export const portfolioItems = [
  {
    id: 0,
    title: 'Market Simulator',
    description: 'The first finished React App is worth showing. Created by the end of 2018. Small stock market, 4 companies, £5000 cash, it\'s up to yo to decide when to enter or leave the market.',
    image: 'market-simulator.png',
    github: 'https://github.com/barcel0/market-simulator',
    demo: 'https://react-market-simulator.herokuapp.com',
    stack: ['ReactJS']
  },
  {
    id: 1,
    title: 'Authentication Shopping List',
    description: 'A MERN shopping list with a basic JWT authentication system. Feel free to create a new user. It already has a demo account created, username is legit@email.com and password is hireluis. Database in MongoDB Cloud, hosted in Heroku (Free plan).',
    image: 'auth-shoppinglist.png',
    github: 'https://github.com/barcel0/mern-auth-shoppinglist',
    demo: 'https://mern-redux-auth-shoppinglist.herokuapp.com/',
    stack: ['ReactJS', 'Redux', 'Mongoose', 'Express', 'SASS']
  },
  {
    id: 2,
    title: 'User Profile with Image Upload',
    description: 'User profile with avatar image upload as well as image gallery. Images were initially hosted locally using multer and fs. Due to Heroku limitations with file uploads, images are now hosted using Amazon Web Services S3 (multer-s3).',
    image: 'image-uploader.png',
    github: 'https://github.com/barcel0/mern-image-uploader',
    demo: 'https://mern-image-uploader.herokuapp.com/',
    stack: ['ReactJS', 'Redux', 'Mongoose', 'Express', 'TailwindCSS']
  },
  {
    id: 3,
    title: 'Traders CMT',
    description: 'On a weekly basis, the Commodity Futures Trading Commission (CFTC) emits a report detailing the big traders activity. The way data is displayed isn\'t very "reader-friendly". This app aims to solve that. Detailed information of +440 contracts and +140,000 weeks of information.',
    image: 'positions.png',
    github: 'pending',
    demo: 'https://www.traderscmt.com',
    stack: ['ReactJS', 'Redux', 'Mongoose', 'Express', 'SASS']
  },
  {
    id: 4,
    title: 'Stock Tracker',
    description: "React Native Stock Tracker App. Relying on the Alpha Vantage API, it allows you to search wordlwide stocks and track the ones you are interested in by adding them to your account's watchlist.",
    image: 'stocktracker.png',
    gallery: ['./img/stocktracker-diagram.png', './img/stocktracker.png'],
    github: 'https://github.com/barcel0/stock-tracker',
    youtube: 'https://www.youtube.com/playlist?list=PLK-fkRFvMEL1vK7XBwnEz87UHgfDqlRGo',
    stack: ['ReactJS', 'React Native', 'Expo', 'Redux', 'Mongoose', 'Express']
  },
  {
    id: 5,
    title: 'Shop',
    description: "React Native Shop App. Basic shop app created as udemy course excercise. It involves navigation setup (React Navigation v4), user input, http requests as well as authentication. Existing username legit@email.com with password 123456.",
    image: 'rn-shop.png',
    gallery: ['./img/rn-shop.png'],
    github: 'https://github.com/barcel0/rn-shop',
    expo: 'https://exp.host/@lbarcelo/rn-shop',
    youtube: 'https://www.youtube.com/playlist?list=PLK-fkRFvMEL1BonqTANMutDLRMAVcu8kL',
    stack: ['ReactJS', 'React Native', 'Expo', 'Redux', 'Firebase']
  },
];