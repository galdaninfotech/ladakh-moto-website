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
        {/* <!-- Google Tag Manager --> */}
            <script src="/js/google-tag-manager.js"></script>
        {/* <!-- End Google Tag Manager --> */}

          
        <title>{head.title}</title>

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ladakhmoto" />
        <meta name="twitter:creator" content="@ladakhmoto" />
        <meta name="twitter:title" content={head.title} />
        <meta name="twitter:description" content="Ladakh Moto is a locally based Ladakhi company offering premium motorbiking expeditions with experienced local guides and managers." />
        <meta name="twitter:image" content="https://ladakhmoto.com/img/og-image.jpg" />

        <link rel="canonical" href={loc.url.href} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

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

        {/* Gallery */}
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