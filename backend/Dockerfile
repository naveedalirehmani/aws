# Use an official Node.js runtime as your base image
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if you have one)
COPY package.json package-lock.json ./

# Install your application's dependencies
RUN npm install

# Copy the rest of your application source code
COPY . ./

# Install PM2 for process management
RUN npm install -g pm2

# Install Prisma CLI globally (if you haven't already)
RUN npm install -g prisma

# Run initial migrations
RUN prisma migrate dev --name init

# Expose the necessary port(s) for your application
EXPOSE 8000

# Start your application with PM2
CMD ["pm2-runtime", "start", "ecosystem.config.js"]
