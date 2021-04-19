# Proyecto 1: Página Web
El proyecto consiste en una "réplica" de la página de [luchadores de Super Smash Bros Ultimate](https://www.smashbros.com/en_US/fighter/index.html) utilizando un conjunto de tecnologías configuradas manualmente que se especifican en la Tabla 1.

### Tabla 1
| Tecnología        | Versión           | Dependencias derivadas  | Descripción |Decisión de uso |
| ------------- |:---------------------:| ------------:| ---------------:| -------:|
| Webpack      | ^5.31.0        | webpack-cli, webpack-dev-server, webpack-merge, html-webpack-plugin, clean-webpack-plugin, dotenv-webpack      |  Webpack es un _module bundler_ que se encarga de unificar todos los archivos del proyecto para su uso en un navegador web.  | Webpack es una tecnología que está creciendo últimamente y aunque hay otras alternativas como _Rollup_, se decidió usar webpack para entender el funcionamiento más profundo de un _module bundler_, cosa que _Rollup_ simplifica en mayor parte por su uso con plugins |
| React      | ^17.0.2         |   react-dom, prop-types        |   React es una librería para el desarrollo de interfaces basadas en componentes   | React facilita el desarrollo de interfaces gracias a su reutilización de componentes, en este proyecto se puede apreciar en gran parte por la reutilización de componentes como `FightersIdCard` que se reutiliza para mostrar a todos los luchadores, también facilita la organización del código |
| Babel | ^7.13.14           |  @babel/preset-env, @babel/preset-react, babel-loader        |  Babel es un transcompilador de JavaScript que transforma diferentes sabores de JavaScript a versiones entendibles a los navegadores según las especificaciones en `.babelrc`  |  Babel nos ayuda a transformar el código de react (JSX) a una forma que sea entendible por los navegadores, así como la posibilidad de integrar nuevas _features_ de JavaScript para poder aprovecharlas |
| Eslint | ^7.23.0   |  eslint-config-standard, eslint-plugin-import, eslint-plugin-node, eslint-plugin-promise, eslint-plugin-react   |   Eslint es una herramienta de análisis de código que establece un conjunto de reglas sobre la sintaxis de nuestro código, ya sea reglas estándar o definidas por nosotros en `.eslintrc.js` para encontrar patrones problemáticos y estilos de programación   |  Eslint es una herramienta indispensable para las buenas prácticas de desarrollo, que nos ayuda a largo plazo a ser constantes en nuestro código y que este sea entendible para otros desarrolladores siguiendo las reglas definidas |
| PostCSS | ^8.2.9  | autoprefixer, css-loader, postcss-loader, postcss-nested, postcss-preset-env, postcss-simple-vars, style-loader |   PostCSS es una herramienta para transformar css con plugins de JavaScript que nos permite utilizar diferentes _features_ de css como el anidado de SCSS, las variables, entre otros plugins, entre ellos autoprefixer que transforma nuestro css en versiones entendibles para la mayoría de navegadores   | Se decidió utilizar PostCSS ya que el tener los estilos separados del código JavaScript es discutible pero mantiene un orden importante en nuestros componentes, además nos brinda de estas herramientas que otras tecnologías no implementan |

## Instalación
Para hacer uso de este proyecto clona el repositorio en instala las dependencias necesarias especificadas en `package.json` con el comando
```
npm install
```
Las dependencias especificadas están clasificadas en _dependencias_ y _dependencias de desarrollo_.
* Dependencias: Se consideraron como dependencias del proyecto aquellas librerías necesarias para el correcto funcionamiento del código desarrollado en la carpeta `src`.
* Dependencias de desarrollo: Se consideraron como dependencias de desarrollo aquellas librerías necesarias para el correcto funcionamiento del entorno de desarrollo.

### Ejecución
Los comandos definidos en `package.json` fueron `start` ejecutado con 
```
npm start
```
que levanta el servidor de desarrollo de _webpack_ con una configuración específica para este entorno que se encuentra en `webpack.dev.js`. El comando `build` ejecutado con
```
npm run build
```
se encarga de la compilación del empaquetado de _webpack_ para el entorno de producción, igualmente con una configuración específica para este entorno que se encuentra en `webpack.prod.js`. La configuración que se comparte en ambos entornos se especifica en `webpack.common.js`.

## Uso
La estructura del proyecto es simple ya que se trata de una sola página, sin embargo se trató como si fueran a agregarse más páginas, definiendo a falta de un _router_ para navegación en React, el componente `fighters` que unifica todos los diferentes componentes presentes en la página y que se encuetra en la carpeta `pages`, que incluye el fondo `FightersBackground` y al mismo tiempo `NewFighterBackground`, también la barra `TopBar` y los contenedores que incluyen todos los peleadores normales en `DisplayFighters` y los de _DLC_ en `DlcFighters` que se renderizan por medio del componente `FighterIdCard`.

Los datos que se cargan como imágenes de la interfaz están incluidos en la carpeta `assets` que contiene una estructura con subcarpetas de igual nombre a los componentes que utilizan esos recursos. Los recursos como imágenes de los personajes, información de estos y aquellos datos "variantes" se cargan mediante archivos externos como `fighters.json` o `series.json` así como las imágenes de los personajes se obtienen directamente de su dirección original.

Los componentes que requieren de algún recurso estándarizado como patrón de fondo, color o fuente son cargados desde el CSS. Los componentes principales definen su propia posición en una página, siendo que el compente `Fighters` solamente une los componentes y define estilos de posicionamiento para la página completa, no para componentes individuales.