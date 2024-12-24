# Step 1: Use the official Node.js image as the base image
FROM node:18 AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock) to the container
COPY package.json package-lock.json ./

# Step 4: Install dependencies (run this step first to leverage Docker's cache for faster builds)
RUN npm install

# Step 5: Copy the rest of the application source code into the container
COPY . ./

# Step 6: Build the React app for production
RUN npm run build

# Step 7: Use a smaller web server to serve the built app
FROM nginx:alpine

# Step 8: Copy the built React app from the build stage to the nginx html directory
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose port 80 to the host so the app can be accessed
EXPOSE 80

# Step 10: Start nginx server to serve the React app
CMD ["nginx", "-g", "daemon off;"]
