# Use a lightweight official Node runtime snapshot
FROM node:20-alpine

# Establish the internal application folder
WORKDIR /usr/src/app

# Copy package profiles and install express variables
COPY package*.json ./
RUN npm ci --only=production

# Bundle remaining asset maps and markup code
COPY . .

# Broadcast internal port 10000 to the container engine
EXPOSE 10000

# Execute server setup command
CMD ["node", "server.js"]
