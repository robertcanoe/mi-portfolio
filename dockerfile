FROM node:20

RUN npm install -g pnpm

# RUN git clone https://github.com/robertcanoe/mi-portfolio.git

WORKDIR /app

COPY . /app

RUN pnpm install

# EXPOSE 4321 -> no hace falta porque al hacer el pnpm run dev se expone el puerto 4321 por default

CMD pnpm run dev

# Para el docker run no olvidar poner el --network=host para que pueda acceder a la red local
