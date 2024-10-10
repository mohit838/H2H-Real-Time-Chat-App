# Use an official Node.js runtime as a parent image
FROM node:22-alpine3.19

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (only production dependencies)
# RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# Install all dependencies including devDependencies temporarily
RUN npm install

# Build the Vite project
# RUN npm run build

# Install `serve` to serve the build files
# RUN npm install -g serve

# Remove devDependencies after build to reduce image size
# RUN npm prune --production

# Expose the port the app runs on
EXPOSE 5173

# Command to serve the application
# CMD ["serve", "-s", "dist"]
CMD ["npm", "run", "dev"]
