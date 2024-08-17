# Use an official Node.js runtime as a parent image
FROM node:22-alpine3.19

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite project
RUN npm run build

# Install serve to serve the build files
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Command to serve the application
CMD ["serve", "-s", "dist"]
