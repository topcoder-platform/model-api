# Use the base image with Node.js 14.15.4
FROM node:14.15.4

# Copy the current directory into the Docker image
COPY . /model-api

# Set working directory for future use
WORKDIR /model-api

# Install the dependencies from package.json
RUN npm install
ENTRYPOINT npm start
