FROM node:9.3.0-alpine
RUN mkdir -p /app
WORKDIR /app
COPY / /app
RUN ["npm", "install"]
EXPOSE 4200/tcp
CMD ["npm", "start"]



