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
    - [User Authentication](#user-authentication-1)
    - [Dashboard](#dashboard-1)
    - [Trading](#trading-1)
    - [Portfolio](#portfolio-1)
    - [Transactions](#transactions-1)
    - [Funds Management](#funds-management-1)
    - [Account Settings](#account-settings-1)
    - [Static Pages](#static-pages-1)
    - [Error Handling](#error-handling-1)
    - [Buttons and Links](#buttons-and-links)
    - [Navbar](#navbar)
    - [Footer](#footer)
    - [Responsive Design](#responsive-design)
    - [Navigation and Layout](#navigation-and-layout)
  - [Figma Wireframes](#figma-wireframes)
  - [Project Management Plan | Asana](#project-management-plan--asana)
    - [What is Asana used for?](#what-is-asana-used-for)

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

### User Authentication

**Persona:** Jane, a novice trader  
**What:** Wants to create an account  
**Why:** To start using the platform and explore cryptocurrency trading

* As Jane, I want to create an account by providing my email, username, and password so that I can start using the platform and explore cryptocurrency trading.

**Persona:** John, a returning user  
**What:** Wants to log in  
**Why:** To access his portfolio and manage his trades

* As John, I want to log in using my email and password so that I can access my portfolio and manage my trades.

### Dashboard

**Persona:** Emily, an experienced trader  
**What:** Wants to view her account summary  
**Why:** To quickly check her balance and portfolio value

* As Emily, I want to view my account summary on the dashboard so that I can quickly check my balance and portfolio value.

**Persona:** Robert, a proactive trader  
**What:** Wants quick access to key actions  
**Why:** To efficiently manage his trading activities

* As Robert, I want quick access to deposit, withdraw, trade, and view transactions buttons so that I can efficiently manage my trading activities.

### Trading

**Persona:** Sarah, an active trader  
**What:** Wants to place a buy order  
**Why:** To invest in a new cryptocurrency

* As Sarah, I want to place a buy order for a specific cryptocurrency so that I can invest in new assets.

**Persona:** Mark, a strategic trader  
**What:** Wants to place a sell order  
**Why:** To liquidate some of his holdings for profit

* As Mark, I want to place a sell order for a specific cryptocurrency so that I can liquidate some of my holdings for profit.

### Portfolio

**Persona:** Lisa, a detail-oriented investor  
**What:** Wants to view her portfolio's performance  
**Why:** To analyze the performance of her investments

* As Lisa, I want to view my portfolio’s performance including individual asset performance so that I can analyze my investments.

### Transactions

**Persona:** James, a meticulous record-keeper  
**What:** Wants to view his transaction history  
**Why:** To keep track of his financial activities

* As James, I want to view my transaction history including deposits, withdrawals, and trades so that I can keep track of my financial activities.

### Funds Management

**Persona:** Alice, a careful planner  
**What:** Wants to deposit funds  
**Why:** To increase her trading balance

* As Alice, I want to deposit funds into my account so that I can increase my trading balance and make more investments.

**Persona:** David, a budget-conscious trader  
**What:** Wants to withdraw funds  
**Why:** To transfer profits to his bank account

* As David, I want to withdraw funds from my account so that I can transfer profits to my bank account.

### Account Settings

**Persona:** Michael, a privacy-focused user  
**What:** Wants to update his profile information  
**Why:** To keep his account details current and secure

* As Michael, I want to update my profile information including my email and password so that I can keep my account details current and secure.

**Persona:** Karen, a user with multiple accounts  
**What:** Wants to delete her account  
**Why:** To consolidate her trading activities on another platform

* As Karen, I want to delete my account so that I can consolidate my trading activities on another platform.

### Static Pages

**Persona:** Tom, a potential new user  
**What:** Wants to learn about the platform  
**Why:** To understand its features and benefits

* As Tom, I want to visit the Home, About, Features, and Contact pages so that I can learn about the platform and understand its features and benefits.

**Persona:** Rachel, a concerned user  
**What:** Wants to read the privacy policy  
**Why:** To understand how her data is being used

* As Rachel, I want to read the privacy policy so that I can understand how my data is being used and protected.

**Persona:** Steve, a cautious user  
**What:** Wants to read the terms of service  
**Why:** To know the rules and regulations of using the platform

* As Steve, I want to read the terms of service so that I can know the rules and regulations of using the platform.

### Error Handling

**Persona:** Bob, a new user  
**What:** Wants to be informed when a page doesn't exist  
**Why:** To navigate to a correct page

* As Bob, I want to see a 404 Page Not Found message if I navigate to a non-existent page so that I can understand that the page doesn’t exist and find my way back to the correct section.

### Buttons and Links

**Persona:** Linda, an efficient user  
**What:** Wants a clear call-to-action button  
**Why:** To quickly deposit funds

* As Linda, I want a clear "Deposit Funds" button on the dashboard so that I can easily add funds to my account.

**Persona:** Eric, a goal-oriented user  
**What:** Wants a link to view transaction history  
**Why:** To quickly access his financial records

* As Eric, I want a "View Transactions" link on the dashboard so that I can quickly access my financial records.

### Navbar

**Persona:** Megan, a new user  
**What:** Wants to easily navigate through the website  
**Why:** To explore different sections of the platform

* As Megan, I want a clear and intuitive navbar so that I can easily navigate through the website and explore different sections.

**Persona:** Paul, a returning user  
**What:** Wants quick access to his profile  
**Why:** To manage his account settings

* As Paul, I want a profile dropdown in the navbar so that I can quickly access and manage my account settings.

### Footer

**Persona:** Natalie, a detail-oriented user  
**What:** Wants to find contact information easily  
**Why:** To get support if needed

* As Natalie, I want the footer to contain contact information so that I can easily get support if needed.

**Persona:** Sam, a privacy-conscious user  
**What:** Wants to read the privacy policy  
**Why:** To understand how his data is being used

* As Sam, I want a link to the privacy policy in the footer so that I can understand how my data is being used.

### Responsive Design

**Persona:** Kate, a mobile user  
**What:** Wants to access the platform on her smartphone  
**Why:** To trade and manage her portfolio on the go

* As Kate, I want the website to be fully responsive so that I can trade and manage my portfolio easily on my smartphone.

**Persona:** Daniel, a tablet user  
**What:** Wants to access the platform on his tablet  
**Why:** To have a better viewing experience than on a mobile phone but more portable than a laptop

* As Daniel, I want the website to adapt to my tablet’s screen size so that I can have a better viewing experience while still being portable.

**Persona:** Oliver, a desktop user  
**What:** Wants to access the platform on his desktop  
**Why:** To take advantage of a larger screen for detailed analysis

* As Oliver, I want the website to utilize my desktop’s full screen so that I can view detailed charts and information without clutter.

**Persona:** Ava, a user switching devices  
**What:** Wants a consistent experience across different devices  
**Why:** To seamlessly transition between her phone, tablet, and desktop

* As Ava, I want a consistent user experience across my phone, tablet, and desktop so that I can seamlessly transition between devices without confusion.

### Navigation and Layout

**Persona:** Liam, a user with vision impairment  
**What:** Wants large buttons and clear text  
**Why:** To easily navigate the site

* As Liam, I want large buttons and clear text on all screen sizes so that I can easily navigate the site despite my vision impairment.

**Persona:** Mia, a multi-tasking user  
**What:** Wants easy access to key actions on all devices  
**Why:** To efficiently perform actions without navigating through multiple screens

* As Mia, I want quick access to key actions (like trading and portfolio management) on all devices so that I can efficiently perform these actions without excessive navigation.

**Persona:** Ethan, a user with a small-screen device  
**What:** Wants an optimized layout for small screens  
**Why:** To avoid unnecessary scrolling and zooming

* As Ethan, I want an optimized layout for my small-screen device so that I don’t have to scroll or zoom excessively to use the platform.

**Persona:** Sophia, a busy professional  
**What:** Wants intuitive touch controls on mobile  
**Why:** To perform actions quickly using touch gestures

* As Sophia, I want intuitive touch controls on my mobile device so that I can quickly perform actions using touch gestures.

## Figma Wireframes


## Project Management Plan | Asana

[Link to Asana project management Website](https://app.asana.com/0/1207743679349265/1207743679349281)

### What is Asana used for?
Asana is a powerful project management tool used to organize and track the progress of tasks within a project. For the Crypto Trader project, Asana helps team members manage tasks efficiently, from planning and development to deployment and testing. The provided Asana board showcases all tasks needed to complete the project, ensuring that deadlines are met and responsibilities are clear. Each task is assigned to team members, allowing for real-time collaboration and updates, making project management seamless and effective.

![Asana - development plan](./Images/Asana%20-%20development%20plan.png)