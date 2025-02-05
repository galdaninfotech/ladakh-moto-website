import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";
/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();
 
  return (
    <>

        <link rel="canonical" href={loc.url.href} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        {/* <!-- Google Tag Manager --> */}
        {/* <link rel='preconnect' href='https://www.googletagmanager.com' crossOrigin /> */}
        <script src="/js/google-tag-manager.js"></script>
        {/* <!-- End Google Tag Manager --> */}

          
        <title>{head.title}</title>

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@LadakhMoto" />
        <meta name="twitter:creator" content="@LadakhMoto" />
        <meta name="twitter:title" content={head.title} />
        <meta name="twitter:description" content={head.meta[0].content} />
        <meta name="twitter:image" content="https://ladakhmoto.com/img/og-image.jpg" />


        {/* Open Graph Tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={head.title} />
        <meta property="og:description" content={head.meta[0].content} />
        <meta property="og:url" content="https://www.ladakhmoto.com//leh-ladakh-adventure" />
        <meta property="og:site_name" content="@LadakhMoto" />
        <meta property="og:image" content="https://vl-prod-static.b-cdn.net/system/images/000/300/878/160b26bc2e280d83db6ada2224d6107e/banner/DSC00399.jpg?1594207788" />
        <meta property="og:image:width" content="4177" />
        <meta property="og:image:height" content="2790" />

        {/*
        <link rel="icon" type="image/png" href="https://filestore/ladakhmoto.png?h=50&amp;w=50" />
        <link rel="apple-touch-icon" type="image/png" href="https://media1.thrillophilia.com/filestore/thrillophilia.png?h=50&amp;w=50" />
        <link rel="apple-touch-icon" type="image/png" href="https://media1.thrillophilia.com/filestore/thrillophilia.png?h=50&amp;w=50" size='60x60' />
        <link rel="apple-touch-icon" type="image/png" href="https://media1.thrillophilia.com/filestore/thrillophilia.png?h=76&amp;w=76" size='76x76' />
        <link rel="apple-touch-icon" type="image/png" href="https://media1.thrillophilia.com/filestore/thrillophilia.png?h=120&amp;w=120" size='120x120' />
        <link rel="apple-touch-icon" type="image/png" href="https://media1.thrillophilia.com/filestore/thrillophilia.png?h=152&amp;w=152" size='152x152' />
        <link rel="apple-touch-icon" type="image/png" href="https://media1.thrillophilia.com/filestore/thrillophilia.png?h=167&amp;w=167" size='167x167' />
        <link rel="apple-touch-icon" type="image/png" href="https://media1.thrillophilia.com/filestore/thrillophilia.png?h=180&amp;w=180" size='180x180' />
        <meta name="apple-mobile-web-app-title" content="LadakhMoto" />
        */}


        {head.meta.map((m) => (
            <meta key={m.key} {...m} />
        ))}

        <link rel="shortcut icon" href="/img/favicon.png" />


        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=PT+Sans+Narrow:wght@400;700&display=swap" rel="stylesheet" />

        {/* CSS */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
        <link rel="stylesheet" href="/css/animate.min.css" />
        <link rel="stylesheet" href="/fonts/fontawesome/css/fontawesome.all.min.css" />
        <link rel="stylesheet" href="/css/owl-carousel.min.css" />
        <link rel="stylesheet" href="/css/meanmenu.min.css" />
        <link rel="stylesheet" href="/css/cssanimation.min.css" />
        <link rel="stylesheet" href="/css/range-slider.min.css" />
        <link rel="stylesheet" href="/css/default.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/custom.css" />
        <link rel="stylesheet" href="/css/responsive.css" />

        {/* Gallery => now added in gallery page itself - can be safely remove from here*/}
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" /> */}
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" /> */}


        {head.links.map((l) => (
            <link key={l.key} {...l} />
        ))}

        {head.styles.map((s) => (
            <style
            key={s.key}
            {...s.props}
            {...(s.props?.dangerouslySetInnerHTML
                ? {}
                : { dangerouslySetInnerHTML: s.style })}
            />
        ))}

        {head.scripts.map((s) => (
            <script
            key={s.key}
            {...s.props}
            {...(s.props?.dangerouslySetInnerHTML
                ? {}
                : { dangerouslySetInnerHTML: s.script })}
            />
        ))}
    </>
  );
});