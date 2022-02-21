# Use the base image with Node.js
FROM node:14

# Copy the current directory into the Docker image
COPY . /model-api

# Set working directory for future use
WORKDIR /model-api

# Install the dependencies from package.json
RUN npm install

CMD npm start
