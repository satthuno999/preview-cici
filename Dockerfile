FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Build the application
RUN npm run build

EXPOSE 8083

# Install serve to run the application
RUN npm install -g serve

CMD ["serve", "dist", "-p", "8083", "-s"]
