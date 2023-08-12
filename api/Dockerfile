# Establece la imagen base
FROM node:latest
LABEL authors="dferreto"

# Establece el directorio de trabajo dentro del contenedor
RUN mkdir -p /apps/productosexpress
WORKDIR /apps/productosexpress

# Copia el archivo package.json y package-lock.json al contenedor
COPY package.json /apps/productosexpress/

# Instala las dependencias del proyecto
RUN npm i cors helmet jsonwebtoken class-validator bcryptjs mysql2
RUN npm i -D @types/cors @types/jsonwebtoken @types/express @types/node @types/bcryptjs typescript ts-node-dev 


# Copia los archivos de la aplicación al contenedor
COPY . /apps/productosexpress/

# Expone el puerto en el que se ejecuta la aplicación
EXPOSE 3000

# Establece el comando predeterminado para ejecutar la aplicación
CMD ["npm", "run", "dev"]
