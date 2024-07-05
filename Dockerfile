FROM cypress/base:latest

WORKDIR /app
COPY . .

RUN npm install
RUN npx cypress verify

CMD ["npx", "cypress", "run"]
