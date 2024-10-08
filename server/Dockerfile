# Use an official Node.js runtime as a parent image
FROM node:22-alpine3.19

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json /app

# Install production dependencies
RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 7000

# Command to run the application
CMD ["npm", "run", "server"]
