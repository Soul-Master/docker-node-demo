# Use base image from Node LTS
# https://github.com/nodejs/docker-node/blob/main/18/alpine3.17/Dockerfile
FROM node:18-alpine3.17

# Change directory to source folder to make it easier to specify files
WORKDIR /src

# Copy all source files
COPY index.js ./index.js

# Expose network port to OS
EXPOSE 8080

# Create web server on port 8080
CMD node index.js 8080