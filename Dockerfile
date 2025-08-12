# Step 1: Build stage
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

# Install ALL dependencies (including dev)
RUN npm install

# Copy source code
COPY . .

# Build the React app
RUN npm run build

# Step 2: Production stage (serving static files)
FROM nginx:alpine

# Copy build output to Nginx html folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
