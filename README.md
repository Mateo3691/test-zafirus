# 💥 Pokemon Ionic App

Aplicación híbrida desarrollada con **Ionic 7** y **Angular 19**, que consume datos de la API de Pokemon. Incluye soporte multilenguaje y arquitectura modular basada en componentes standalone.

---

## 🧰 Versiones utilizadas

| Herramienta | Versión     |
|-------------|-------------|
| Angular     | 19.2.9      |
| Ionic       | 7.2.1       |
| Node.js     | 22.13.0     |
| Capacitor   | latest      |

---

## 🚀 Cómo iniciar el proyecto
1. Hace un npm install
2. corre el comando ionic serve

---

## 🚀 Comentarios
1. Integre un plugin de Rest con Capacitor, y aun asi decidí dejarlo de forma híbrida (httpCliente y Capacitor) porque cada uno tiene un mejor funcionamiento
dependiendo de en que dispositivo se este usando la app.
2. Usé una arquitectura basada en Clean Architecture, pero aplicada a un proyecto simple como es el caso, priorizando la facil navegacion por el código.
3. En la pantalla incial, no se agrego la imagen de cada pokemon porque eeso venia en el endpoint que trae el detalle de cada uno, y haber invocado de antemano el endpoint para cada uno (20 veces) cuanod quiza el usuario solo queria ver dos pokemones, hubiese sido una perdida de tiempo en termino de espera a que los servicios respondan