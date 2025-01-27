# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Install git to clone the repository
RUN apt-get update && apt-get install -y git

# Clone the code from the specified git repository
RUN git clone https://github.com/Yashchaudhary05/Car_Listing_website.git .

# Install app dependencies
RUN npm install

# Expose the port the app will run on
EXPOSE 4000

# Command to run the app (runs server.js with node)
CMD ["node", "server.js"]
