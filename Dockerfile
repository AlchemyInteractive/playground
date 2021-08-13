FROM node:14-alpine

WORKDIR /usr/src/app

ADD . .

RUN npm install
RUN npm run build
RUN npm run export


FROM pagespeed/nginx-pagespeed:stable
COPY --from=0 /usr/src/app/out /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000
