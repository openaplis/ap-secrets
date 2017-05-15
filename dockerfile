FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Create the secrets directory
RUN mkdir -p /usr/src/app/secrets

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 50050
CMD [ "npm", "run", "start-service" ]
