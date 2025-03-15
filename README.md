# Zerodha 

## Overview
Zerodha(Clone) is a web-based trading platform that replicates the core functionalities of Zerodha, India's leading stock brokerage platform. This project allows users to manage their holdings, positions, and orders efficiently.

## Features
- **User Authentication**: Signup, login, and logout using Passport.js.
- **Holdings Management**: View and delete holdings.
- **Order Placement**: Buy and sell stocks with real-time updates.
- **Portfolio Overview**: Track investment performance and profit/loss.
- **Secure Sessions**: Using JWT and session-based authentication.
- **CORS Handling**: Configured for secure cross-origin requests.

## Tech Stack
- **Frontend**: React.js, Bootstrap 5
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: Passport.js, bcrypt.js, JWT
- **Database**: MongoDB with Mongoose ODM
- **Hosting**: Render

## Installation
### Prerequisites
- Node.js (v16 or later)
- MongoDB (local or cloud instance)
- Render (for hosting)

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/zerodha-clone.git
   cd zerodha-clone
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and configure the following:
   ```sh
   PORT=5000
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
4. Start the server:
   ```sh
   npm start
   ```
5. Navigate to `http://localhost:5000` in your browser.

## API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/allHoldings` | Fetch all user holdings |
| GET | `/allPositions` | Fetch all user positions |
| POST | `/newOrder` | Place a new buy/sell order |
| DELETE | `/deleteHolding/:id` | Remove a holding |
| POST | `/signup` | User registration |
| POST | `/login` | User login |
| GET | `/currentUser` | Get authenticated user details |
| POST | `/logout` | Logout user |

## Deployment
This project is deployed on Render. Update your `.env` variables accordingly when deploying.

## Contributors
- **Harsh Kumar** - Developer

## License
This project is licensed under the MIT License.

## Acknowledgements
- Inspired by [Zerodha](https://zerodha.com/)
- Built with [MERN Stack](https://www.mongodb.com/mern-stack)

