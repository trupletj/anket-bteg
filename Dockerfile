FROM node:20-alpine AS base

WORKDIR /app
COPY . .


RUN npm install
# RUN npm run build
RUN npx prisma generate

CMD npm run dev