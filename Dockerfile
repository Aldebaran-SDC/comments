FROM node
RUN mkdir -p /usr/src
COPY . /usr/src/comments
EXPOSE 8081
CMD [ "node", "/usr/src/comments/server/server.js" ]