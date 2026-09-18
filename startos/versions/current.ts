import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.14.1:1',
  releaseNotes: {
    en_US: 'Fixes an absurd trend-percentage badge (e.g. hundreds of thousands of percent) that could appear on the today/7-day/30-day bandwidth tiles right as history first crosses each window boundary. The badge is now hidden until history actually covers a full comparison window, not just until the previous window has any data at all.',
    es_ES: 'Corrige un porcentaje de tendencia absurdo (p. ej., cientos de miles por ciento) que podía aparecer en los paneles de ancho de banda de hoy/7 días/30 días justo cuando el historial cruza cada límite de ventana por primera vez. La insignia ahora se oculta hasta que el historial cubra realmente una ventana de comparación completa, no solo hasta que la ventana anterior tenga algún dato.',
    de_DE: 'Behebt eine absurde Trendprozentanzeige (z. B. mehrere hunderttausend Prozent), die auf den Bandbreiten-Kacheln für heute/7 Tage/30 Tage auftreten konnte, sobald der Verlauf erstmals eine Fensterschwelle überschreitet. Das Abzeichen wird jetzt erst angezeigt, wenn der Verlauf tatsächlich ein vollständiges Vergleichsfenster abdeckt, nicht schon, sobald das vorherige Fenster irgendwelche Daten enthält.',
    pl_PL: 'Naprawia absurdalny wskaźnik procentowy trendu (np. setki tysięcy procent), który mógł pojawić się na kafelkach przepustowości dzisiaj/7 dni/30 dni dokładnie w momencie, gdy historia po raz pierwszy przekracza granicę danego okna. Odznaka jest teraz ukrywana, dopóki historia faktycznie nie obejmie pełnego okna porównawczego, a nie tylko dopóki poprzednie okno zawiera jakiekolwiek dane.',
    fr_FR: "Corrige un pourcentage de tendance absurde (par ex. plusieurs centaines de milliers de pour cent) pouvant apparaître sur les tuiles de bande passante aujourd'hui/7 jours/30 jours juste au moment où l'historique franchit pour la première fois chaque limite de fenêtre. Le badge est désormais masqué tant que l'historique ne couvre pas réellement une fenêtre de comparaison complète, et non plus seulement tant que la fenêtre précédente contient des données.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
