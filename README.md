# RiverSpain Frontend - Angular 19

## Descripción

RiverSpain es una aplicación web frontend desarrollada con **Angular 19**, diseñada para interactuar con la API de microservicios del proyecto [RiverSpain Microservices](https://github.com/MiguelCocoHdez/proyecto-microservicios-riverspain). La aplicación permite visualizar y gestionar datos relacionados con los ríos de España, ofreciendo una experiencia de usuario interactiva, moderna y eficiente. Aprovecha las capacidades avanzadas de Angular 19, como componentes standalone, lazy loading etc, para garantizar un rendimiento óptimo y una arquitectura modular y escalable.

El proyecto implementa operaciones CRUD y otras funcionalidades más complejas mediante la integración con la API REST proporcionada por el repositorio de microservicios, sigue las mejores prácticas de desarrollo frontend e incluye soporte para internacionalización (i18n) y un diseño responsivo que se adapta a diferentes dispositivos.

## Características principales

- **Componentes Standalone**: Arquitectura modular basada en componentes independientes para una mayor flexibilidad y reutilización.
- **Lazy Loading**: Carga diferida de módulos para optimizar el rendimiento y reducir el tiempo de carga inicial.
- **Integración con API REST**: Consumo de la API de microservicios [RiverSpain Microservices](https://github.com/MiguelCocoHdez/proyecto-microservicios-riverspain) para operaciones CRUD (crear, leer, actualizar y eliminar datos).
- **Internacionalización (i18n)**: Soporte para múltiples idiomas, facilitando la accesibilidad global.
- **Diseño Responsivo**: Interfaz adaptable a dispositivos móviles, tabletas y escritorios para una experiencia de usuario consistente.

## Tecnologías utilizadas

- **Angular 19**: Framework principal para el desarrollo del frontend.
- **TypeScript**: Lenguaje de programación para un desarrollo robusto y tipado.
- **Angular CLI**: Herramienta para la generación, gestión y automatización de tareas del proyecto.
- **RxJS**: Biblioteca para manejar flujos de datos asíncronos en la comunicación con la API.
- **HttpClient**: Módulo de Angular para realizar peticiones HTTP a la API de microservicios.
- **Bootstrap**: Para estilos modernos y diseño responsivo.

## Requisitos previos

Antes de configurar el proyecto, asegúrate de tener instalado:

- **Node.js**: Versión 20.x o superior (descarga desde [nodejs.org](https://nodejs.org)).
- **Angular CLI**: Versión 19.x (`npm install -g @angular/cli@19`).
- Un editor de código como **Visual Studio Code**.
- La API de microservicios [RiverSpain Microservices](https://github.com/MiguelCocoHdez/proyecto-microservicios-riverspain) configurada y en ejecución.

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto localmente:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/MiguelCocoHdez/proyecto-angular19-riverspain.git

2. Navega al directorio del proyecto:
   ```bash
   cd proyecto-angular19-riverspain

3. Instala las dependencias:
   ```bash
   npm install

4. Configura la URL de la API:
   - Edita los archivos `src/environments/environment.ts` (para desarrollo) y `src/environments/environment.prod.ts` (para producción) para configurar la URL de la API de microservicios (por ejemplo, `http://localhost:8080/api`).
   - Asegúrate de que la API [RiverSpain Microservices](https://github.com/MiguelCocoHdez/proyecto-microservicios-riverspain) esté en ejecución antes de continuar.

5. Inicia el servidor de desarrollo:
   ```bash
   ng serve

## Dependencia de la API

Este proyecto depende de la API de microservicios ubicada en [RiverSpain Microservices](https://github.com/MiguelCocoHdez/proyecto-microservicios-riverspain). La API proporciona los endpoints necesarios para las operaciones CRUD y otras funcionalidades del sistema. Asegúrate de que la API esté configurada y en ejecución antes de iniciar la aplicación Angular. Consulta el repositorio de la API para instrucciones de configuración.

## Colaboradores

Este proyecto ha sido desarrollado con la colaboración de:

- **Miguel Coco** - [GitHub](https://github.com/MiguelCocoHdez)
- **Jose Quispe** - [GitHub](https://github.com/JoseR23072)
- **Marcos García** - [GitHub](https://github.com/MarcosGarcia2)
- **Carlos Pacheco** - [GitHub](https://github.com/CarlosPachecoFr)

Agradecemos sus contribuciones para hacer de RiverSpain una realidad.

## Contribuciones

Si deseas contribuir al proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama:
   ```bash
   git checkout -b feature/nueva-funcionalidad

3. Realiza tus cambios y haz commit:
   ```bash
   git commit -m "Añade nueva funcionalidad"

4. Sube tus cambios:
   ```bash
   git push origin feature/nueva-funcionalidad

5. Abre un Pull Request en GitHub.

Por favor, asegúrate de seguir las mejores prácticas de Angular y TypeScript, y documenta tus cambios adecuadamente.

## Contacto

Para consultas, sugerencias o reportes de problemas, abre un issue en el repositorio o contacta con el equipo a través de GitHub.
