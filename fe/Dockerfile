# Use the official Node.js runtime as the base image
FROM node:18 as build

# Set the working directory in the container
WORKDIR /app
RUN mkdir fe


# Copy package.json and package-lock.json to the working directory
COPY package*.json ./fe
RUN cd ./fe
# Install dependencies
RUN npm install
RUN cd ..
# Copy the entire application code to the container
COPY .. .
# Build the React app for production
RUN cd ./fe
RUN dir
RUN npm run build

# Use Nginx as the production server
FROM nginx:alpine

# Copy the built React app to Nginx's web server directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
