# pull official base image
FROM node:20.16.0-alpine

RUN apk add --update python3 make g++\
   && rm -rf /var/cache/apk/*

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g

# add app
COPY . ./

RUN npm run build

# start app
CMD ["npm", "start"]