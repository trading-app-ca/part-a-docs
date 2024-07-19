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
    - [Logout](#logout)
    - [Delete Account](#delete-account)
    - [Static Pages](#static-pages)
    - [Page Redirects](#page-redirects)
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
  - [Database Schema](#database-schema)
    - [User Model](#user-model)
    - [Portfolio Model](#portfolio-model)
    - [Trade Model](#trade-model)
    - [Transaction Model](#transaction-model)
    - [Revoked Tokens Model](#revoked-tokens-model)
  - [API Endpoints](#api-endpoints)
    - [Authentication Endpoints](#authentication-endpoints)
      - [Register a new user](#register-a-new-user)
      - [Login a user](#login-a-user)
      - [Logout a user](#logout-a-user)
      - [Verify current password](#verify-current-password)
    - [User Endpoints](#user-endpoints)
      - [Deposit funds](#deposit-funds)
      - [Withdraw funds](#withdraw-funds)
      - [Get user info](#get-user-info)
      - [Update user info](#update-user-info)
      - [Delete user](#delete-user)
    - [Portfolio Endpoints](#portfolio-endpoints)
      - [Get user portfolio](#get-user-portfolio)
      - [Update user portfolio](#update-user-portfolio)
    - [Transaction Endpoints](#transaction-endpoints)
      - [Get user transactions](#get-user-transactions)
    - [Trade Endpoints](#trade-endpoints)
      - [Place a new trade](#place-a-new-trade)
      - [Get all trades for a user](#get-all-trades-for-a-user)
  - [Application Architecture Diagram](#application-architecture-diagram)
    - [Overview](#overview)
    - [Application Architecture Diagram](#application-architecture-diagram-1)
    - [Key Components and Interactions](#key-components-and-interactions)
    - [Conclusion](#conclusion-1)
  - [Data Flow Diagram](#data-flow-diagram)
  - [Overview](#overview-1)
  - [Data Flow Diagram](#data-flow-diagram-1)
  - [User Registration and Login](#user-registration-and-login)
    - [Guest:](#guest)
      - [Register Page:](#register-page)
      - [Login Page:](#login-page)
  - [Dashboard](#dashboard-1)
    - [Dashboard Page:](#dashboard-page)
  - [Portfolio](#portfolio-1)
    - [Portfolio Page:](#portfolio-page)
  - [Trade](#trade)
    - [Trade Page:](#trade-page)
  - [Transactions](#transactions-1)
    - [Transactions Page:](#transactions-page)
  - [Deposit/Withdraw](#depositwithdraw)
    - [Deposit/Withdraw Page:](#depositwithdraw-page)
  - [Account Settings](#account-settings-1)
    - [Account Settings Page:](#account-settings-page)
  - [Logout](#logout-1)
    - [Logout:](#logout-2)
  - [User Stories](#user-stories)
    - [User Authentication](#user-authentication-1)
    - [Dashboard](#dashboard-2)
    - [Trading](#trading-1)
    - [Portfolio](#portfolio-2)
    - [Transactions](#transactions-2)
    - [Funds Management](#funds-management-1)
    - [Account Settings](#account-settings-2)
    - [Static Pages](#static-pages-1)
    - [Error Handling](#error-handling-1)
    - [Buttons and Links](#buttons-and-links)
    - [Navbar](#navbar)
    - [Responsive Design](#responsive-design)
    - [Navigation and Layout](#navigation-and-layout)
  - [Figma Wireframes](#figma-wireframes)
  - [Project Management Plan | Asana](#project-management-plan--asana)
    - [What is Asana?](#what-is-asana)
    - [How was Asana used for our project?](#how-was-asana-used-for-our-project)
    - [Team Roles and Responsibilities](#team-roles-and-responsibilities)
    - [Task Management](#task-management)
    - [Timeline and Milestones](#timeline-and-milestones)
    - [Communication Plan](#communication-plan)

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
- Top 3 cryptocurrencies.

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

### Logout
- Logout confirmation
- Return to previous page
  
### Delete Account
- Confirm account deletion
- Return to Account Settings page

### Static Pages
- Home

### Page Redirects
- You have successfully logged in (redirects to dashboard page)
- You have successfully logged out (redirects to home page)
- You have successfully deleted account (redirects to home page)

### Error Handling
- 404 Page Not Found
  - Return to home (Un-authenticated user)
  - Return to Dashboard (Authenticated user)

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

**TradingView Widget**: A financial visualization platform used to display real-time cryptocurrency charts. TradingView integrates seamlessly with React to provide interactive and customizable charting solutions, enabling users to analyze market trends and make informed trading decisions.

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


## Database Schema

The database schema for Crypto Trader is designed to efficiently manage and store data related to users, their portfolios, trades, transactions, and revoked tokens. The schema is organized into the following models:

### User Model

The `User` model stores essential information about the users of the platform.

```javascript
  const UserSchema = new mongoose.Schema({
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      balance: { type: Number, default: 0 },
      createdAt: { type: Date, default: Date.now }
  });
```

### Portfolio Model

The `Portfolio` model represents a user's portfolio, which includes multiple assets. Each asset is defined by its name, quantity, and average purchase price.

```javascript
  const AssetSchema = new mongoose.Schema({
    asset: { type: String, required: true },
    quantity: { type: Number, required: true },
    averagePurchasePrice: { type: Number, required: true }
  });

  const PortfolioSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    assets: [AssetSchema]
  });
``` 

### Trade Model

The `Trade` model logs individual trades made by users. Each trade includes the user who made the trade, the asset traded, the quantity, the price at which the trade was made, and the date of the trade.

```javascript
  const TradeSchema = new mongoose.Schema({
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      asset: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      date: { type: Date, default: Date.now }
  });
```

### Transaction Model

The `Transaction` model records all financial transactions, such as deposits and withdrawals. Each transaction includes the user who made the transaction, the type of transaction (deposit or withdrawal), the amount, the date, and the status of the transaction.

```javascript
  const TransactionSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, enum: ['deposit', 'withdraw'], required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    status: { type: String, enum: ['completed', 'pending', 'failed'], default: 'completed' }
  });
```

### Revoked Tokens Model

The `RevokedTokens` model keeps track of tokens that have been revoked, ensuring that they cannot be used for authentication.

```javascript
  const RevokedTokensSchema = new mongoose.Schema({
    token: { type: String, required: true },
    revokedAt: { type: Date, default: Date.now, expires: 'EXPIRE_TIME' } // Placeholder for dynamic expiration
  });
```

These models collectively form the database schema for Crypto Trader, enabling the efficient storage, retrieval, and management of user data, portfolios, trades, transactions, and security tokens.


## API Endpoints

The API endpoints for Crypto Trader provide a structured way to interact with the application's backend services, handling various user-related actions such as authentication, managing user portfolios, executing trades, and handling transactions. Each endpoint is designed to perform specific operations, ensuring a seamless user experience and efficient data management. Below is a detailed description of the available API endpoints, including the request methods, routes, descriptions, authentication requirements, and example request bodies where applicable.

### Authentication Endpoints
These endpoints handle user authentication processes, including registration, login, logout, and password verification.

#### Register a new user
- **Method**: POST
- **Route**: `/api/auth/register`
- **Description**: Register a new user & retrieve token.
- **Authentication Required**: No
- **Request Body**: 
    ```json
    {
      "firstName": "John",
      "lastName": "Doe",
      "email": "johndoe@example.com",
      "password": "password123"
    }
    ```

#### Login a user
- **Method**: POST
- **Route**: `/api/auth/login`
- **Description**: Authenticate user & retrieve token.
- **Authentication Required**: No
- **Request Body**: 
    ```json
    {
      "email": "john.doe@example.com",
      "password": "password123"
    }
    ```

#### Logout a user
- **Method**: POST
- **Route**: `/api/auth/logout`
- **Description**: Logout user.
- **Authentication Required**: Yes
- **Headers**:
    ```json
    {
      "Authorization": "Bearer <token>"
    }
    ```

#### Verify current password
- **Method**: POST
- **Route**: `/api/auth/verify-password`
- **Description**: Verify current password.
- **Authentication Required**: Yes
- **Headers**:
    ```json
    {
      "Authorization": "Bearer <token>"
    }
    ```
- **Request Body**: 
    ```json
    {
      "currentPassword": "password123"
    }
    ```

### User Endpoints
These endpoints manage user-specific actions such as depositing and withdrawing funds, updating user information, and deleting accounts.

#### Deposit funds
- **Method**: POST
- **Route**: `/api/user/deposit`
- **Description**: Deposit funds into user account.
- **Authentication Required**: Yes
- **Headers**:
    ```json
    {
      "Authorization": "Bearer <token>"
    }
    ```
- **Request Body**: 
    ```json
    {
      "amount": 1000
    }
    ```

#### Withdraw funds
- **Method**: POST
- **Route**: `/api/user/withdraw`
- **Description**: Withdraw funds from user account.
- **Authentication Required**: Yes
- **Headers**:
    ```json
    {
      "Authorization": "Bearer <token>"
    }
    ```
- **Request Body**: 
    ```json
    {
      "amount": 500
    }
    ```

#### Get user info
- **Method**: GET
- **Route**: `/api/user`
- **Description**: Get user information.
- **Authentication Required**: Yes
- **Headers**:
    ```json
    {
      "Authorization": "Bearer <token>"
    }
    ```

#### Update user info
- **Method**: PUT
- **Route**: `/api/user`
- **Description**: Update user information.
- **Authentication Required**: Yes
- **Headers**:
    ```json
    {
      "Authorization": "Bearer <token>"
    }
    ```
- **Request Body**: 
    ```json
    {
      "firstName": "John",
      "lastName": "Doe",
      "email": "johndoe@example.com",
      "password": "newpassword"
    }
    ```

#### Delete user
- **Method**: DELETE
- **Route**: `/api/user`
- **Description**: Delete user account.
- **Authentication Required**: Yes
- **Headers**:
    ```json
    {
      "Authorization": "Bearer <token>"
    }
    ```

### Portfolio Endpoints
These endpoints handle actions related to user portfolios.

#### Get user portfolio
- **Method**: GET
- **Route**: `/api/portfolio`
- **Description**: Get user portfolio.
- **Authentication Required**: Yes
- **Headers**:
    ```json
    {
      "Authorization": "Bearer <token>"
    }
    ```

#### Update user portfolio
- **Method**: PUT
- **Route**: `/api/portfolio`
- **Description**: Update user portfolio.
- **Authentication Required**: Yes
- **Headers**:
    ```json
    {
      "Authorization": "Bearer <token>"
    }
    ```
- **Request Body**: 
  ```json
    {
      "assets": [
        {
          "asset": "Bitcoin",
          "quantity": 1.5,
          "averagePurchasePrice": 35000
        },
        {
          "asset": "Ethereum",
          "quantity": 10,
          "averagePurchasePrice": 2000
        }
      ]
    }
    ```

### Transaction Endpoints
These endpoints manage user transactions, such as deposits and withdrawals.

#### Get user transactions
- **Method**: GET
- **Route**: `/api/transactions`
- **Description**: Get user transactions.
- **Authentication Required**: Yes
- **Headers**:
    ```json
    {
      "Authorization": "Bearer <token>"
    }
    ```

### Trade Endpoints
These endpoints manage trading actions.

#### Place a new trade
- **Method**: POST
- **Route**: `/api/trades/new-trade`
- **Description**: Place a new trade.
- **Authentication Required**: Yes
- **Headers**:
    ```json
    {
      "Authorization": "Bearer <token>"
    }
    ```
- **Request Body**: 
  - `Buy`:
    ```json
    {
      "asset": "Bitcoin",
      "quantity": 1,
      "price": 40000,
      "type": "buy"
    }
    ```
  - `Sell`:
    ```json
    {
      "asset": "Bitcoin",
      "quantity": 1,
      "price": 45000,
      "type": "sell"
    }
    ```

#### Get all trades for a user
- **Method**: GET
- **Route**: `/api/trades`
- **Description**: Get all trades for a user.
- **Authentication Required**: Yes
- **Headers**:
    ```json
    {
      "Authorization": "Bearer <token>"
    }
    ```


## Application Architecture Diagram

### Overview

In the development of modern web applications, understanding the architecture of the system is crucial for building scalable, efficient, and maintainable software. This document provides a detailed application architecture diagram and explanation for Crypto Trader, an application where users can manage their cryptocurrency portfolios, perform trades, and track market data. The architecture illustrates the interaction between the React frontend, the Node.js/Express backend, and the MongoDB database, as well as the integration with third-party API services for real-time data. This comprehensive overview serves as a blueprint for understanding how each component communicates and processes data within the application.

### Application Architecture Diagram

![Application Architecture Diagram](./Images/Application%20Architecture%20Diagram.png)

### Key Components and Interactions

1. **User Interaction with UI (Client)**
2. **Client (React)**
    - Sends API requests to the back-end web server or a third-party API service.
    - Processes the response and renders the appropriate data to the user.
3. **API Requests to Back-End Server**
    - **Server (Express/NodeJS)**
        - Receives and processes API requests from the client (React).
        - Interacts with the database (MongoDB) to retrieve or update data.
        - Returns the processed data as a response to the client (React).
4. **Database Interaction**
    - **Database (MongoDB)**
        - Receives queries from the back-end web server (Express/NodeJS).
        - Returns the requested data to the back-end web server.
5. **API Requests to Third-Party Services**
    - **Third-Party API Service**
        - Processes the API requests sent from the client (React).
        - Returns the response directly to the client (React).
6. **Client (React) Processing**
    - **Client (React)**
        - Processes the responses received from either the back-end web server or third-party API services.
        - Renders the appropriate data to the user interface.

### Conclusion

The application architecture of Crypto Trader is designed to provide a seamless and efficient user experience by leveraging the strengths of each component: React for dynamic UIs, Node.js/Express for robust backend processing, MongoDB for scalable data storage, and third-party services for real-time data integration. This architecture ensures that users can manage their cryptocurrency portfolios, perform trades, and track market data effectively. By understanding this architecture, developers can build and maintain the application to meet the high demands of cryptocurrency trading and portfolio management.


## Data Flow Diagram

## Overview
This data flow diagram illustrates the flow of data within the Crypto Trader application, detailing user interactions, API requests, responses, and database interactions. The diagram covers various user actions, including registration, login, accessing different pages (Dashboard, Portfolio, Trade, Transactions, Deposit/Withdraw), account settings management, and logout processes.

## Data Flow Diagram

![Data Flow Diagram](./Images/Application%20DataFlow%20Diagram.png)

## User Registration and Login

### Guest:

#### Register Page:

- **User Form:** Registration Form
  - **Input:** First Name, Last Name, Email, Password
  - **Button:** Register
- **API Request:**
  - Method: POST
  - Route: /api/auth/register
  - Body: 
    ```json
    {
      "firstName": "John",
      "lastName": "Doe",
      "email": "johndoe@example.com",
      "password": "password123"
    }
    ```
- **Database Interaction:** Creates new user in users collection
- **API Response:** Successful or Unsuccessful

#### Login Page:

- **User Form:** Login Form
  - **Input:** Email, Password
  - **Button:** Login
- **API Request:**
  - Method: POST
  - Route: /api/auth/login
  - Body: 
    ```json
    {
      "email": "johndoe@example.com",
      "password": "password123"
    }
    ```
- **Database Interaction:** Verifies user credentials in users collection
- **API Response:** Successful or Unsuccessful
- **If Successful:** Add JWT to Local Storage, Redirect to Dashboard Page

## Dashboard

### Dashboard Page:

- **API Requests:**
  - /api/user
  - /api/portfolio
  - /api/transactions
  - /api/market
- **API Responses:** Returns user data, portfolio data, recent transactions, and top 3 cryptocurrencies
- **Database Interaction:** Retrieves data from users, portfolio, and transactions collections
- **Render Components:** Display Dashboard with the fetched data

## Portfolio

### Portfolio Page:

- **API Requests:**
  - /api/portfolio
- **API Responses:** Returns user portfolio data
- **Database Interaction:** Retrieves data from portfolio collection
- **Render Components:** Display Portfolio Page with the fetched data

## Trade

### Trade Page:

- **TradingView Widget:** Displays market data
- **API Requests:**
  - /api/portfolio
  - /api/transactions
  - /api/market
- **API Responses:** Returns portfolio, transactions, and market data
- **User Form:**
  - **Input:** Crypto Asset, Quantity
  - **Button:** Submit
- **Database Interaction:** Updates user portfolio and records trade in transactions collection
- **Render Components:** Display Trade Page with updated data

## Transactions

### Transactions Page:

- **API Requests:**
  - /api/transactions
- **API Responses:** Returns user transactions data
- **Database Interaction:** Retrieves data from transactions collection
- **Render Components:** Display Transactions Page with the fetched data

## Deposit/Withdraw

### Deposit/Withdraw Page:

- **API Requests:**
  - /api/user/deposit (for Deposit)
  - /api/user/withdraw (for Withdraw)
- **API Responses:** Updates user balance
- **Database Interaction:** Updates user balance in users collection
- **Render Components:** Display updated balance and transaction history

## Account Settings

### Account Settings Page:

- **User Form:**
  - **Input:** First Name, Last Name, Email
- **Password Form:** Current Password, New Password, Confirm New Password
- **Buttons:** Save, Delete
- **API Requests:**
  - **Update User Info:**
    - Method: PUT
    - Route: /api/user
    - Body: 
      ```json
      {
        "firstName": "John",
        "lastName": "Doe",
        "email": "johndoe@example.com",
        "password": "newpassword"
      }
      ```
  - **Delete User:**
    - Method: DELETE
    - Route: /api/user
- **Database Interaction:** Updates or deletes user data in users collection
- **API Responses:** Successful or Unsuccessful
- **Render Components:** Display Account Settings Page with updated information

## Logout

### Logout:

- **API Request:**
  - Method: POST
  - Route: /api/auth/logout
  - Headers: 
    ```json
    {
      "Authorization": "Bearer <token>"
    }
    ```
- **API Response:** Successful
- **Remove JWT from Local Storage**
- **Redirect to Home Page**

This documentation provides a comprehensive view of the data flow within the Crypto Trader application, detailing user interactions, API requests, responses, and database interactions across different pages and functionalities.

## User Stories

### User Authentication

**Persona:** Jane, a novice trader  
**What:** Wants to create an account  
**Why:** To start using the platform and explore cryptocurrency trading

* As Jane, I want to create an account by providing my first-name, last-name, email, and password so that I can start using the platform and explore cryptocurrency trading.

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
**Why:** To simulate realizing gains made on investments

* As David, I want to withdraw funds from my account so that I can simulate a real investment / trading environment and realized gains.

### Account Settings

**Persona:** Michael, a privacy-focused user  
**What:** Wants to update his profile information  
**Why:** To keep his account details current and secure

* As Michael, I want to update my profile information including my first-name, last-name, email and password so that I can keep my account details current and secure.

**Persona:** Karen, a user with multiple accounts  
**What:** Wants to delete her account  
**Why:** To consolidate her trading activities on another platform

* As Karen, I want to delete my account so that I can consolidate my trading activities on another platform.

### Static Pages

**Persona:** Tom, a potential new user  
**What:** Wants to learn about the platform  
**Why:** To understand its features and benefits

* As Tom, I want to visit the Home page to access information: About the platform and the Features available so that I can learn about the platform and make an informed decision.

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

* As Paul, I want quick acces to my account settings in the navbar so that I can quickly access and manage my account settings and details.

### Responsive Design

**Persona:** Kate, a mobile user  
**What:** Wants to access the platform on her smartphone  
**Why:** To trade and manage her portfolio on the go

* As Kate, I want the website to be fully responsive so that I can trade and manage my portfolio easily on my smartphone.

**Persona:** Oliver, a desktop user  
**What:** Wants to access the platform on his desktop  
**Why:** To take advantage of a larger screen for detailed analysis

* As Oliver, I want the website to utilize my desktop’s full screen so that I can view detailed charts and information without clutter.

**Persona:** Ava, a user switching devices  
**What:** Wants a consistent experience across different devices  
**Why:** To seamlessly transition between her phone, tablet, and desktop

* As Ava, I want a consistent user experience across my phone, tablet, and desktop so that I can seamlessly transition between devices without confusion.

### Navigation and Layout

**Persona:** Mia, a multi-tasking user  
**What:** Wants easy access to key actions on all devices  
**Why:** To efficiently perform actions without navigating through multiple screens

* As Mia, I want quick access to key actions (like trading and portfolio management) on all devices so that I can efficiently perform these actions without excessive navigation.

**Persona:** Ethan, a user with a small-screen device  
**What:** Wants an optimized layout for small screens  
**Why:** To avoid unnecessary scrolling and zooming

* As Ethan, I want an optimized layout for my small-screen device so that I don’t have to scroll or zoom excessively to use the platform.

## Figma Wireframes


## Project Management Plan | Asana

[Link to Asana project management Website](https://app.asana.com/0/1207743679349265/1207743679349281)

### What is Asana?
Asana is a powerful project management tool used to organize and track the progress of tasks within a project. For the Crypto Trader project, Asana helps team members manage tasks efficiently, from planning and development to deployment and testing. The provided Asana board showcases all tasks needed to complete the project, ensuring that deadlines are met and responsibilities are clear. Each task is assigned to team members, allowing for real-time collaboration and updates, making project management seamless and effective.

### How was Asana used for our project?

### Team Roles and Responsibilities

**Who are the team members and their roles?**

- **Sam**: Responsible for backend development, API creation, and database management.
- **Lucy**: Handles design, documentation, and layout for the frontend.

**How are tasks assigned and managed?**

- Tasks are evenly assigned between Sam and Lucy based on their strengths.
- Unassigned tasks are completed together to foster collaboration.

**What are the collaboration strategies?**

- Regular meetings and updates to ensure alignment.
- Use of Asana for task tracking and management.

### Task Management

**How are tasks created, assigned, and tracked?**

- Tasks are created based on project requirements and milestones.
- Assigned to team members through Asana.
- Tracked using Asana's task management features.

**What tools are used for task management?**

- **Asana**: For task creation, assignment, and tracking.

### Timeline and Milestones

**What are the major milestones?**

- **Planning Phase**: Completion of project documentation and design.
- **Development Phase**: Backend and frontend development.
- **Testing Phase**: Bug fixing and feature testing.
- **Deployment Phase**: Final deployment and review.

**What is the project timeline and schedule?**

- **Weeks 1-2**: Planning and documentation.
- **Weeks 3-5**: Development and initial testing.
- **Week 6**: Final testing and deployment.

### Communication Plan

**How will communication be handled within the team?**

- Regular scheduled meetings.
- Continuous communication via instant messaging and Discord.

**What tools and channels will be used for communication?**

- **Instant Messaging**: For quick, real-time communication.
- **Discord**: For team chats and voice communication.
- **Zoom**: For video conferencing and meetings.
- **Asana**: For task updates and progress tracking.

**Initial Management Plan**

![Asana - development plan](./Images/Asana%20-%20development%20plan.png)

**Review end of week 2 - Project update summary**

Zoom meeting 13/07/2024

- Objective: Review and refine project tasks for the next few days before submission after recent decision to scale down the app, focusing on core features.

**Key Outcomes:**
- Discussed removing some things from the initial plan 
- Wireframes and User Flow: Completed revisions during the meeting; final versions for review on Tuesday. (Assigned to Lucy)
- Data Flow Diagram: discussed structure and implementation; draft to be completed for review on Tuesday. (Assigned to Lucy)
- API Endpoints Design: Initial drafts for review on Tuesday (Assigned to Sam).
- Readme and User Stories: Review current documents in line with the new plan. (Assigned to Sam)
- Presentation Outline: Create a basic discussion outline for presentation for further discussion on Tuesday. (Assigned to Lucy)<br>

**Upcoming Deadlines:**
- All new tasks to be reviewed at next meeting on Tuesday the 16/07.
- New tasks to be assigned at next meeting.

![Updated Plan Overview](./Images/updated-plan-overview.png)

![Meeting Notes/ Task assignment](./Images/new-task-assignment.png)

![Draft tasks for week 3, scheduled further meetings](./Images/week-3-draft.png)

![Meeting agenda for 16/07](./Images/meeting-plan-1607.png)


