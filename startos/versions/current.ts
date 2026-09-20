import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.14.1:2',
  releaseNotes: {
    en_US: "Restores the snowflake icon in the browser tab.",
    es_ES: "Restaura el icono del copo de nieve en la pestaña del navegador.",
    de_DE: "Stellt das Schneeflocken-Symbol im Browser-Tab wieder her.",
    pl_PL: "Przywraca ikonę płatka śniegu na karcie przeglądarki.",
    fr_FR: "Restaure l'icône du flocon de neige dans l'onglet du navigateur.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
