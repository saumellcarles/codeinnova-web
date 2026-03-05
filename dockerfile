# Etapa 1: Build
FROM node:20-alpine AS builder

# Instalar pnpm
RUN npm install -g pnpm

# Crear directorio de la app
WORKDIR /app

# Copiar package.json y lockfile primero (para cache de dependencias)
COPY package.json pnpm-lock.yaml* ./

# Instalar dependencias con pnpm
RUN pnpm install

# Copiar el resto de la app
COPY . .

# Construir Next.js
RUN pnpm run build

# Etapa 2: Producción
FROM node:20-alpine AS runner

WORKDIR /app

# Copiar solo lo necesario
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Exponer puerto
EXPOSE 3000

# Comando para producción
CMD ["pnpm", "run", "start"]