# Crypto Trader - A Simulated Trading Website

**Table of Contents**
- [Crypto Trader - A Simulated Trading Website](#crypto-trader---a-simulated-trading-website)
  - [Authors](#authors)
  - [Project Overview:](#project-overview)
    - [Purpose:](#purpose)
    - [Real-World Problem:](#real-world-problem)
  - [Functionality / Features](#functionality--features)
    - [User Authentication](#user-authentication)
    - [Dashboard](#dashboard)
    - [Portfolio](#portfolio)
    - [Trading](#trading)
    - [Transactions](#transactions)
    - [Funds Management](#funds-management)
    - [Account Settings](#account-settings)
    - [Static Pages](#static-pages)
    - [Error Handling](#error-handling)
  - [Target Audience](#target-audience)
    - [Beginner Traders](#beginner-traders)
    - [Intermediate Traders](#intermediate-traders)
    - [Experienced Traders](#experienced-traders)
    - [Students and Educators](#students-and-educators)
    - [Casual Investors](#casual-investors)
    - [Conclusion](#conclusion)
  - [Tech Stack](#tech-stack)
    - [MERN Stack](#mern-stack)
    - [Additional Technologies and Libraries](#additional-technologies-and-libraries)
    - [Frontend Dependencies](#frontend-dependencies)
    - [Backend Dependencies](#backend-dependencies)
    - [Backend Dev Dependencies](#backend-dev-dependencies)
  - [Dataflow Diagram](#dataflow-diagram)
  - [Application Architecture Diagram](#application-architecture-diagram)
  - [User Stories](#user-stories)
  - [Figma Wireframes](#figma-wireframes)
  - [Project Management Plan | Asana](#project-management-plan--asana)

## Authors

- **Sam Owen**
  - **LinkedIn:** [Sam Owen](https://www.linkedin.com/in/sam-owen-044631285/)
  - **Github:** [StructuredTrading](https://github.com/StructuredTrading)

- **Lucy Shepherd**
  - **LinkedIn:** [Lucy Shepherd](https://www.linkedin.com/in/lucy-shepherd-44236928a/)
  - **Github:** [lushepherd](https://github.com/lushepherd)

## Project Overview:

### Purpose:
Crypto Trader is a simulated cryptocurrency trading application designed to provide users with a realistic trading experience. Utilising the MERN stack and the TradingView Lite Charting Library, this application offers a robust platform for users to manage their cryptocurrency portfolios, execute trades, monitor their investment performance, and experience trading without the risk of actual financial loss.

### Real-World Problem:
Cryptocurrency trading can be complex and intimidating for new traders. There is a high risk of financial loss due to market volatility and lack of experience. Crypto Trader aims to solve this problem by providing a risk-free simulated trading environment where users can practice and hone their trading skills. By offering realistic trading features and portfolio management tools, users can learn how to analyze market trends, make informed trading decisions, and manage their investments effectively without the fear of losing real money.


## Functionality / Features

### User Authentication
- Create an account
- Login and logout
- Password management

### Dashboard
- View account summary
- Quick actions (deposit, withdraw, trade, view transactions)
- Recent activity
- Portfolio overview
- Market overview with top 3 cryptocurrencies.

### Portfolio
- View portfolio value and performance
- Breakdown of assets and their performance
- Recent transactions
- Portfolio allocation chart

### Trading
- View TradingView chart for selected cryptocurrency
- Place buy and sell orders
- View recent trade history

### Transactions
- View transaction log of all: (deposits, withdrawals, trades)

### Funds Management
- Deposit and withdraw funds
- View recent transaction history

### Account Settings
- Update profile information
- Change password
- Delete account

### Static Pages
- Home
- About
- Features
- Contact
- Privacy Policy
- Terms of Service

### Error Handling
- 404 Page Not Found

## Target Audience

### Beginner Traders
**Description**: Individuals new to cryptocurrency trading who want to learn and practice without risking real money.
**Needs**:
- A safe environment to experiment with trades.
- Tools to track their progress and gain confidence.

### Intermediate Traders
**Description**: Traders with some experience who want to test new strategies and techniques without financial risk.
**Needs**:
- Advanced trading tools and features to simulate real market conditions.
- Historical data and analytics to refine strategies.
- A platform to practice and hone their skills before applying them in real markets.

### Experienced Traders
**Description**: Seasoned traders who want to refine their strategies and stay updated with market trends.
**Needs**:
- Comprehensive tools for detailed market analysis.
- Features to simulate complex trading strategies.
- Insights into market trends and performance metrics.

### Students and Educators
**Description**: Students studying finance, economics, or blockchain technology, and educators looking for practical teaching tools.
**Needs**:
- Simulated trading environments to apply theoretical knowledge.
- Analytical tools to study market trends and behaviors.

### Casual Investors
**Description**: People interested in cryptocurrencies but hesitant to invest real money.
**Needs**:
- A platform to understand how trading works without financial risk.
- Insights into portfolio management and investment strategies.
- Tools to simulate long-term investment outcomes and scenarios.

### Conclusion
Crypto Trader is designed to cater to a diverse audience with varying levels of experience and interest in cryptocurrency trading. By providing a comprehensive and engaging platform, it aims to entertain users while enhancing their trading skills and knowledge.

## Tech Stack

### MERN Stack

**MongoDB**: A NoSQL database used to store user data, transaction history, and portfolio information. MongoDB offers a flexible schema design that accommodates the diverse and evolving data requirements of Crypto Trader. It ensures efficient data storage and retrieval, making it a suitable choice for handling the dynamic and varied nature of cryptocurrency trading data.

**Express.js**: A web application framework for Node.js, used to build the backend API and handle HTTP requests. Express.js simplifies the development of robust APIs and server-side applications, providing essential middleware for handling routing, authentication, and data processing.

**React**: A JavaScript library for building user interfaces, used to create the frontend components and manage the application state. React's component-based architecture ensures a modular and maintainable codebase, facilitating dynamic and responsive user experiences.

**Node.js**: A JavaScript runtime environment used to execute server-side code and build the backend of the application. Node.js offers a scalable and efficient environment for handling concurrent connections and real-time data updates.

### Additional Technologies and Libraries

**TradingView**: A financial visualization platform used to display real-time cryptocurrency charts. TradingView integrates seamlessly with React to provide interactive and customizable charting solutions, enabling users to analyze market trends and make informed trading decisions.

**Binance API**: Used to fetch real-time cryptocurrency prices and market data. The Binance API ensures accurate and up-to-date information, supporting functionalities such as trading, portfolio management, and market analysis.

**CSS**: For styling the application and ensuring a responsive, user-friendly design. CSS enables the creation of visually appealing interfaces, enhancing the user experience across different devices and screen sizes.

**React Router**: For managing navigation and routing within the application. React Router allows for the creation of single-page applications with dynamic routing, ensuring smooth transitions between different views and maintaining the overall user experience.

### Frontend Dependencies

**react**: A JavaScript library for building user interfaces.

**react-dom**: Provides DOM-specific methods that can be used at the top level of a web app to enable an efficient way of managing the DOM.

**react-icons**: A library that provides popular icons to be used in React projects.

**react-router-dom**: A library for routing in React applications, enabling navigation among different components.

### Backend Dependencies

**bcryptjs**: A library to hash passwords for secure storage and comparison.

**cors**: A middleware to enable Cross-Origin Resource Sharing, allowing the backend to handle requests from different origins.

**dotenv**: A module to load environment variables from a `.env` file into `process.env`.

**express**: A minimal and flexible Node.js web application framework used to create the API endpoints.

**jsonwebtoken**: A library to create and verify JSON Web Tokens (JWT) for secure user authentication.

**mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js, used to interact with the MongoDB database.

### Backend Dev Dependencies

**faker**: A library to generate fake data for testing and development purposes.

**nodemon**: A tool to automatically restart the Node.js application when file changes in the directory are detected.

These technologies collectively provide a robust and scalable foundation for Crypto Trader, enabling the development of a comprehensive and engaging cryptocurrency trading simulation platform.


## Dataflow Diagram


## Application Architecture Diagram


## User Stories


## Figma Wireframes


## Project Management Plan | Asana
