# Base image
FROM node:20-alpine AS base

# Install dependencies layer
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /src

# Copy necessary files for yarn berry (PnP)
COPY .yarn ./.yarn
COPY .pnp.cjs ./
COPY .pnp.loader.mjs ./
COPY package.json yarn.lock* .yarnrc.yml ./

COPY .env .env

# Install dependencies with yarn berry
RUN yarn install --immutable

# Build layer
FROM base AS builder
WORKDIR /src

ENV NEXT_TELEMETRY_DISABLED 1

# Copy dependencies from deps stage
COPY --from=deps /src/ ./

# Copy the rest of the source code and build
COPY . .
RUN yarn build

# Production runner
FROM base AS runner
WORKDIR /src

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 sixgroup
RUN adduser --system --uid 1001 challenger

# Copy build artifacts from builder stage
COPY --from=builder /src/public ./public
COPY --from=builder /src/.next ./.next
COPY --from=builder /src/package.json ./package.json

# Set up the permissions for the app
USER challenger

EXPOSE 3000
ENV PORT 3000

CMD ["yarn", "start"]