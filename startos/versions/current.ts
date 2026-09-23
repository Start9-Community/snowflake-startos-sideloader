import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.14.1:3',
  releaseNotes: {
    en_US:
      'Adds a "Proxy Relay Ports" interface (UDP 30000–30249). Enable its public address and forward the range on your router to give the proxy an unrestricted NAT type.',
    es_ES:
      'Añade una interfaz "Puertos de retransmisión del proxy" (UDP 30000–30249). Activa su dirección pública y reenvía el rango en tu router para darle al proxy un tipo de NAT sin restricciones.',
    de_DE:
      'Fügt eine Schnittstelle „Proxy-Relay-Ports“ hinzu (UDP 30000–30249). Aktivieren Sie ihre öffentliche Adresse und leiten Sie den Bereich an Ihrem Router weiter, um dem Proxy einen uneingeschränkten NAT-Typ zu geben.',
    pl_PL:
      'Dodaje interfejs „Porty przekaźnika proxy” (UDP 30000–30249). Włącz jego publiczny adres i przekieruj ten zakres na routerze, aby nadać proxy nieograniczony typ NAT.',
    fr_FR:
      'Ajoute une interface « Ports de relais du proxy » (UDP 30000–30249). Activez son adresse publique et transférez la plage sur votre routeur pour donner au proxy un type de NAT non restreint.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
