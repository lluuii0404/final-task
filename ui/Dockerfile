FROM node:10 as build
WORKDIR /ui
ENV PATH /ui/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install -qy
COPY . .
RUN npm run build

# production environment
FROM nginx:1.16.0-alpine
COPY --from=build /ui/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
