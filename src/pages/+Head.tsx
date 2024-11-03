export function Head () {
  return (
    <>
      <meta name="theme-color" content="#ffbff7" />
      <link rel="manifest" href="/manifest.json" />
      <script
        id="mcjs"
        dangerouslySetInnerHTML={{
          __html: '!function (c, h, i, m, p) { m = c.createElement(h), p = c.getElementsByTagName(h)[0], m.async = 1, m.src = i, p.parentNode.insertBefore(m, p) }(document, "script", "https://chimpstatic.com/mcjs-connected/js/users/8e65f5f5d2757dca4e36309d9/b5909f323f5f79f98c20855a1.js");'
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `!function (f, b, e, v, n, t, s) {
          if (f.fbq) return; n = f.fbq = function () {
            n.callMethod ?
              n.callMethod.apply(n, arguments) : n.queue.push(arguments)
          };
          if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
          n.queue = []; t = b.createElement(e); t.async = !0;
          t.src = v; s = b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
          'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1056549233018348');
        fbq('track', 'PageView');`
        }}
      />
    </>
  )
}
