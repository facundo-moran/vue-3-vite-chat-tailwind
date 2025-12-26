# Chat App with Vue 3 - Yes/No API response

Se trata de mi primer app hecha con el poder de Vue 3. La idea es implementando conceptos de vue 3 Composition API.

## Cositas practicadas en esta simple App

### Escuchar y emitir eventos.

- Vue permite como todo framework que sus componentes puedan escuchar eventos emitidos por otros. Ejemplo en el componente ui "MessageInbox.vue" especificamos "@keyup.enter="emitInboxMessage" para emitir nuevo el mensaje del input.

### Enviar propiedades.

- Vue permite ademas de manera sencilla y tipada definir que propiedades van a necesitas nuestros componentes. Ejemplo en el componente ui "MessageContainer.vue" con ayuda de "defineProps" especificamos que necesitamos una lista de tipo "IChatMessage" obligatoria para renderizar.

### Reactividad

- Vue es reactivo y una de las herramientas mas utilizadas para definir estado reactivo es con "ref()" lo que permite trabajar con signals

### Composables

- Vue se inspira en react y nos permite crear "composables" que son funciones que suelen comenzar su identificador con la palabra "use". Ejemplo en el composable "useChat" donde definimos "estado reactivo", ya que tenemos nuestra lista de mensajes del Chat, entre la lógica de este simple Chat App.

### Tailwind

- Tailwind version 4, instalado siguiente la guia oficinal de Vite desde su página oficial. Es el gestor de estilos css y tambien tomamos el template de el chat basado en estilos tailwindcss.

### Peticiones HTTP y Separación en componentes

- Nos comunicamos con la famosa API Yes/No response utilizando solo fetch API nativo. Tambien intentamos separara en 3 componentes distintos a nuestro template de Chat: "ChatBubble.vue", "MessageContainer.vue" y "MessageInBox.vue".

### Referencias al DOM.

- Utilizamos "ref" en un elemento HTML para hacer una referencia, valga la redundancia, hacia el mismo dentro del archivo "MessageContainer.vue". Lo interesante es utilizar el mismo nombre de la variable que de la referencia en el template y a su vez es importante utilizar "ref()" para convertir el valor en signal. Las referencias HTML no se inicializan automaticamente dentro del script setup 💡

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Clona y Ejecuta por ti mismo

```sh
# Asegurate de usar una version de Node.js actualiada
git clone + npm install
```

### Compila con Hot-Reload en desarrollo

```sh
# haz tus pruebas
npm run dev
```

### Type-Check, compila and Minify para el /dist de produccion

```sh
# Esta app fue hosteada gratuitamente usando netlify
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Integrando Vitest de manera manual

```sh
# Crear la rama test 
$ git switch -c test/add-vitest

# Instalar vitest (desarrollo)
$ npm install -D vitest

# Instalar herramientas para testear componentes de Vue 3
$ npm install -D @vue/test-utils
```

### Integrando estilos CSS

- [Instalacion Bootstrap 5.3.8 CSS CDN & Tailwind 4.1 para Vite](https://chatgpt.com/?utm_match=e&gad_campaignid=22634265511)

### Template de chat Reutilizado

- [Template de chat reutilizado](https://www.creative-tim.com/twcomponents/component/chat-layout)

### API Yes-No

- [API para respuesta Yes or Not con gifs](https://yesno.wtf/api)

### Guia de Vitest 

- [Vitest - Guia oficial](https://vitest.dev/guide/)
