import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.14.1:2',
  releaseNotes: {
    en_US: "Restores the browser-tab favicon (the snowflake icon), which was dropped when the dashboard was rewritten as an awk-based CGI script and never carried over from the old scripts/dashboard.sh.",
    es_ES: "Restaura el favicon de la pestaña del navegador (el icono del copo de nieve), que se perdió al reescribir el panel como un script CGI basado en awk y no se trasladó desde el antiguo scripts/dashboard.sh.",
    de_DE: "Stellt das Favicon im Browser-Tab (das Schneeflocken-Symbol) wieder her, das beim Umschreiben des Dashboards in ein awk-basiertes CGI-Skript verloren ging und nicht aus dem alten scripts/dashboard.sh übernommen wurde.",
    pl_PL: "Przywraca favicon karty przeglądarki (ikonę płatka śniegu), która zniknęła podczas przepisywania panelu na skrypt CGI oparty na awk i nie została przeniesiona ze starego scripts/dashboard.sh.",
    fr_FR: "Restaure le favicon de l'onglet du navigateur (l'icône du flocon de neige), qui avait disparu lors de la réécriture du tableau de bord en script CGI basé sur awk et n'avait pas été reporté depuis l'ancien scripts/dashboard.sh.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
