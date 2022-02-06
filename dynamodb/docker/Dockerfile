# Use the base image with Node.js 14.15.4
FROM node:14

# Copy the current directory into the Docker image
COPY . /model-api-dynamodb

# Set working directory for future use
WORKDIR /model-api-dynamodb

# Install the dependencies from package.json
RUN npm install
ENTRYPOINT npm start
