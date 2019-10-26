# base image
FROM node:12.2.0


WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@7.3.9

COPY . /app

EXPOSE 4200 49153

CMD ng serve --host 0.0.0.0 --poll 1