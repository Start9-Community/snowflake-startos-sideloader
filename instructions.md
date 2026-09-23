# Snowflake

## Documentation

- [Snowflake](https://snowflake.torproject.org/) — the Tor Project's page on what Snowflake is and who it helps.
- [Running a Snowflake proxy](https://community.torproject.org/relay/setup/snowflake/) — the Tor Project's guide for proxy operators.

## What you get on StartOS

A Snowflake proxy that starts relaying for censored Tor users the moment the service is running, and a **Dashboard** interface showing what it has done: the NAT type it detected, bandwidth relayed today, this week, this month and all-time, and an hour-by-hour chart of the last day.

There is nothing to configure and no account to make. The proxy never learns what anyone is browsing, and the traffic it carries leaves the Tor network from a Tor bridge — not from your address. Forwarding a port range on your router (see NAT type below) is optional and only improves how many clients the proxy can help; the service runs and relays clients without it.

## Getting set up

1. Start the service.
2. Open the **Dashboard** from the Dashboard tab.

The NAT type appears a minute or so after each start. Bandwidth and connection figures are added once an hour, so the first ones show up after the first full hour; the page refreshes itself every five minutes.

## Using Snowflake

### NAT type

**unrestricted** means clients behind strict NATs can reach your proxy, which is the most useful kind of proxy to run. **restricted** means only clients with permissive NATs can; the proxy still helps, just fewer people.

Flipping a restricted proxy to unrestricted needs three things in place, in this order:

1. **Enable the public address.** Open this service's **Proxy Relay Ports** interface and turn on its public IP address — whichever one applies to your setup (a direct WAN address, or a clearnet tunnel/VPN provider's address if that's how this server reaches the internet). StartOS then shows the exact port range to forward (UDP 30000–30249).
2. **Allow that range in front of the server.** Forward UDP 30000–30249 to this server wherever traffic actually enters your network before reaching it — port forwarding on a home router, or a firewall/security-group rule on a VPS or tunnel provider. Some tunnel providers publish the range for you automatically once the address is enabled (StartTunnel does, over PCP); check your provider's own port list if you're not sure whether you need this step.
3. **Restart the service, then be patient.** A restart forces an immediate NAT check instead of waiting for the proxy's normal ~24-hour recheck. If it still reads "restricted" right after enabling everything above, that doesn't necessarily mean something's misconfigured — a tunnel or VPN provider's own side can take a few hours to fully apply the change. Check back later and restart again before assuming it's broken.

```
 Enable public address on the
 Proxy Relay Ports interface
            │
            ▼
 Forward/allow UDP 30000-30249
 in front of the server
 (router, or VPS/tunnel firewall)
            │
            ▼
      Restart the service
            │
            ▼
   Dashboard still "restricted"?
            │
    ┌───────┴────────┐
    ▼                 ▼
   yes                no
    │                 │
    ▼                 ▼
 Wait a few hours,   Done —
 then restart again  "unrestricted"
```

### Reading the figures

Everything on the dashboard comes from the proxy's own hourly summaries, so a figure is up to an hour behind and "0 connections" in the first hour is normal. The history lives on this server and survives restarts and updates.
