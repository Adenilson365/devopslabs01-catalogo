FROM node:18.20-alpine
WORKDIR /app
COPY package.json .
RUN npm install && npm install --save @opentelemetry/instrumentation-http @opentelemetry/instrumentation-express
RUN npm install @opentelemetry/sdk-node \
@opentelemetry/api \
@opentelemetry/auto-instrumentations-node \
@opentelemetry/sdk-metrics \
@opentelemetry/sdk-trace-node 
COPY . .
EXPOSE 3333
CMD ["npm", "run", "dev"]