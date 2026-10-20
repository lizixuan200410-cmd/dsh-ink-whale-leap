import { readFileSync } from 'node:fs'

/**
 * Ink-whale opening splash, host-only.
 *
 * Deliberately NOT a client bundle: a client entry that fails to activate
 * aborts the web boot ("1 entry did not activate") and the app refuses to
 * open. This plugin only pushes one inline script row through
 * `webserver/index-inject` (the desktop shell's supported channel) and serves
 * the splash source at /ink-whale/splash.js. The row creates the script tag
 * itself and swallows its own error, so a missing route can never reject the
 * boot.
 *
 * Activation safety:
 *  - a plain object plugin with `apply` (the shape the installed
 *    dsh-whale-widget uses in this same app version);
 *  - nothing service-dependent runs at activation time;
 *  - every step is wrapped, so apply() cannot throw.
 */

const SPLASH_PATH = '/ink-whale/splash.js'

function readSplash() {
  return readFileSync(new URL('./splash.js', import.meta.url), 'utf8')
}

function onIndexInject(table) {
  try {
    if (!Array.isArray(table)) return
    for (const row of table) {
      if (!row) continue
      if (row.kind === 'script-src' && String(row.src || '') === SPLASH_PATH) return
      if (row.kind === 'script' && typeof row.text === 'string' && row.text.indexOf('__INK_WHALE_SPLASH__') >= 0) return
    }
    const source = readSplash()
    if (!source) return
    table.push({ kind: 'script', placement: 'body', text: source })
  } catch (err) {}
}

function serveSplash(req, res) {
  try {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      res.statusCode = 405
      res.setHeader('allow', 'GET, HEAD')
      res.end()
      return
    }
    const body = readSplash()
    res.statusCode = 200
    res.setHeader('content-type', 'application/javascript; charset=utf-8')
    res.setHeader('cache-control', 'no-store')
    if (req.method === 'HEAD') {
      res.end()
      return
    }
    res.end(body)
  } catch (err) {
    try {
      res.statusCode = 500
      res.end()
    } catch (err2) {}
  }
}

export default {
  name: 'ink-whale-splash',
  apply(root) {
    const disposers = []

    try {
      disposers.push(root.on('webserver/index-inject', onIndexInject))
    } catch (err) {}

    try {
      root.inject(['webServer'], (ctx) => {
        try {
          ctx.webServer.register({ kind: 'exact', path: SPLASH_PATH, handler: serveSplash })
        } catch (err) {}
      })
    } catch (err) {}

    try {
      root.effect(() => () => {
        for (const dispose of disposers) {
          try {
            if (typeof dispose === 'function') dispose()
          } catch (err) {}
        }
      })
    } catch (err) {}
  },
}
