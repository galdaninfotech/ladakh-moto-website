import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";


const trimTitle = (str: string) => {

    // Define the special characters you want to check for
    const specialChars = "!@#$%^&*()-+?_=,<>/";

    // Find the index of the first special character
    let index = str.length; // Default to the end of the string
    for (let i = 0; i < str.length; i++) {
        if (specialChars.includes(str[i]) ) {
            index = i;
            break;
        }
    }

    // Extract the substring up to the special character

    return str.substring(0, index);
}

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
    const head = useDocumentHead();
    const loc = useLocation();

    const pathSegments = loc.url.pathname.split('/').filter(Boolean);
    const urlSection = pathSegments.length > 1 
        ? pathSegments[0]
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
        : null;

    const titleSlug = trimTitle(head.title).trimEnd().replace(/ /g,"-").toLowerCase();
    let imageUrl: string;
    if(urlSection === 'Bike Tours') {
        imageUrl = `img/bike-tours/${titleSlug}/${titleSlug}`;
    } else if(urlSection === 'Bike Tour Packages') {
        imageUrl = `img/bike-tour-packages/${titleSlug}/${titleSlug}`;
    } else if(urlSection === 'About') {
        imageUrl = `img/about/${titleSlug}`;
    } else {
        imageUrl = `img/${titleSlug}`;
    }

  return (
    <>

        <link rel="canonical" href={loc.url.href} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          
        <title>{head.title}</title>

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content="ladakhmoto.com" />
        <meta name="twitter:creator" content="LadakhMoto" />
        <meta name="twitter:title" content={head.title} />
        <meta name="twitter:description" content={head.meta[0].content} />
        {
            loc.url.pathname == '/' 
            ? <meta name="twitter:image" content="https://ladakhmoto.com/img/ladakhmoto-twitter.webp" />
            : <meta name="twitter:image" content={`https://www.ladakhmoto.com/${imageUrl}-twitter.webp`} />
        }
        


        {/* Open Graph Tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={head.title} />
        <meta property="og:description" content={head.meta[0].content} />
        {
            loc.url.pathname == '/' 
            ? <meta property="og:url" content={`https://www.ladakhmoto.com/`} />
            : <meta property="og:url" content={`https://www.ladakhmoto.com/${imageUrl}`} />
        }
        <meta property="og:site_name" content="LadakhMoto" />
        {
            loc.url.pathname == '/' 
            ? <meta name="og:image" content="https://ladakhmoto.com/img/ladakhmoto-og.webp" />
            : <meta name="og:image" content={`https://www.ladakhmoto.com/${imageUrl}-og.webp`} />
        }
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />

        {/*
        <link rel="icon" type="image/png" href="https://filestore/ladakhmoto.png?h=50&amp;w=50" />
        <link rel="apple-touch-icon" type="image/png" href="https://ladakhmot.com/img/ladakhmot.png?h=50&amp;w=50" />
        <link rel="apple-touch-icon" type="image/png" href="https://ladakhmot.com/img/ladakhmot.png?h=50&amp;w=50" size='60x60' />
        <link rel="apple-touch-icon" type="image/png" href="https://ladakhmot.com/img/ladakhmot.png?h=76&amp;w=76" size='76x76' />
        <link rel="apple-touch-icon" type="image/png" href="https://ladakhmot.com/img/ladakhmot.png?h=120&amp;w=120" size='120x120' />
        <link rel="apple-touch-icon" type="image/png" href="https://ladakhmot.com/img/ladakhmot.png?h=152&amp;w=152" size='152x152' />
        <link rel="apple-touch-icon" type="image/png" href="https://ladakhmot.com/img/ladakhmot.png?h=167&amp;w=167" size='167x167' />
        <link rel="apple-touch-icon" type="image/png" href="https://ladakhmot.com/img/ladakhmot.png?h=180&amp;w=180" size='180x180' />
        <meta name="apple-mobile-web-app-title" content="LadakhMoto" />
        */}


        {head.meta.map((m) => (
            <meta key={m.key} {...m} />
        ))}


        {/* Google Fonts */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=PT+Sans+Narrow:wght@400;700&display=swap" rel="stylesheet" /> */}

        {/* CSS */}
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/custom.css" />


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