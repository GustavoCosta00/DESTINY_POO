import { resolve } from "path"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  alias : {
    "@" : resolve(__dirname, "/")
  },
    app: {
      baseURL: '/DESTINY_POO/', // Substitua pelo nome do seu repositório no GitHub
    },
    build: {
      transpile: [],
    },
    generate: {
      fallback: '404.html',
    }  
})
