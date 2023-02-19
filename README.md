# Rig (WORK IN PROGRESS) - A Full Stack chat application with a React frontend and a AWS serverless backend made by Dylan Armstrong 2023

## Information about Software and AWS Infrastructure

Rig is developed in the React.JS framework with an AWS serverless backend. The messages and account/user details are stored in two seperate DynamoDB tables with encryption. The React.JS also uses bootstrap for it's styling. The API has CORS and API Keys enabled and the API Gateway (in AWS) triggers 4 Node.JS lambda functions depending on which path you take. The frontend is running on AWS Amplify with a built-in CI/CD pipeline from this Github repo as the source.

### Get Started

To get started, go to https://rig.dylanarmstrong.net and sign in with an account (no registration yet as it's still in development and people I pick get to test it. Don't worry! This is just for now.

