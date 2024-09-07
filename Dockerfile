FROM node:20-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile;
RUN rm -rf ./.next/cache

# Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

# Production RUN
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 sixgroup
RUN adduser --system --uid 1001 challenger

COPY --from=builder /app/public ./public
COPY --from=builder --chown=challenger:sixgroup /app/.next/standalone ./
COPY --from=builder --chown=challenger:sixgroup /app/.next/static ./.next/static

USER challenger

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
