import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.14.1:3',
  releaseNotes: {
    en_US:
      'Adds a Proxy Relay Ports interface (UDP 30000–30249). Enable its public address and forward the range on your router to give the proxy an unrestricted NAT type.',
    es_ES:
      'Añade una interfaz de Puertos de Retransmisión del Proxy (UDP 30000–30249). Activa su dirección pública y reenvía el rango en tu router para darle al proxy un tipo de NAT sin restricciones.',
    de_DE:
      'Fügt eine Proxy-Relay-Ports-Schnittstelle hinzu (UDP 30000–30249). Aktiviere ihre öffentliche Adresse und leite den Bereich an deinem Router weiter, um dem Proxy einen uneingeschränkten NAT-Typ zu geben.',
    pl_PL:
      'Dodaje interfejs Portów Przekaźnikowych Proxy (UDP 30000–30249). Włącz jego publiczny adres i przekieruj ten zakres na routerze, aby nadać proxy nieograniczony typ NAT.',
    fr_FR:
      'Ajoute une interface Ports de Relais du Proxy (UDP 30000–30249). Activez son adresse publique et transférez la plage sur votre routeur pour donner au proxy un type de NAT non restreint.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
