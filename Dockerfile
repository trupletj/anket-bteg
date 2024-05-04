FROM node:18-alpine AS base
WORKDIR /app

COPY . .
RUN npm install

ENV NODE_ENV production

RUN npx prisma generate
RUN npx prisma db push

RUN chown nextjs:nodejs .next

USER nextjs

RUN npm run build
EXPOSE 3000
CMD ["npm", "run" "start"]