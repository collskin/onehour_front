FROM nginx:alpine

WORKDIR /usr/share/nginx/html
RUN apk add --no-cache bash

COPY ./build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
# RUN tar -xf app-build.tar

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
