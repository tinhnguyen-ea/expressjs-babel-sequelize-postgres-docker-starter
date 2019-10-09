FROM node:10.16.3

# install vim
RUN apt-get update && apt-get upgrade -y && apt-get install -y vim

# Create app directory
WORKDIR /home/web

# Install app dependencies
RUN echo 'Install app dependencies'
COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY . .

EXPOSE 3000
CMD yarn && yarn build && yarn db && yarn start
