import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import type { RequestHandler  } from "@builder.io/qwik-city";
import { useLocation  } from "@builder.io/qwik-city";
import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";
import Slider from "~/components/slider/slider";
import SliderItinerary from "~/components/slider-itinerary/slider-itinerary";

import bootstrapStyles from "../../public/css/bootstrap.min.css?inline";
// import meanmenu from "../../public/css/meanmenu.min.css?inline";
import defaultCss from "../../public/css/default.css?inline";
// import style from "../../public/css/style.css?inline";
// import custom from "../../public/css/custom.css?inline";
import responsive from "../../public/css/responsive.css?inline";
 
export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
    useStyles$(bootstrapStyles);
    // useStyles$(meanmenu);
    useStyles$(defaultCss);
    // useStyles$(style);
    // useStyles$(custom);
    useStyles$(responsive);
    const loc = useLocation();
  return (
    <>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NFMMQ5LD" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        
        
        {/* Start Preloader */}
		{/* <div class="preloader-wrap">
			<div class="cube-wrapper">
				<div class="cube-folding">
					<span class="leaf1"></span>
					<span class="leaf2"></span>
					<span class="leaf3"></span>
					<span class="leaf4"></span>
				</div>
				<span class="loading" data-name="Loading">Loading</span>
			</div>
		</div> */}
		{/* End Preloader */}

        <div class="wrapper">
            <main>
                <Header />
                <div class="d-md-none" style="background: #1c1c1c; color: #fff; padding: 6px 5px;">
                    <div class="container">
                        <div class="d-flex justify-content-between">
                            <a href="tel:+91-9906989962"><i class="fal fa-phone-alt" style="margin-right: 8px;" aria-label="Phone Number" title="Phone Number"></i>+91-9906989962</a>
                            <a href="tel:+91-9622958013"><i class="fal fa-phone-alt" style="margin-right: 8px;" aria-label="Phone Number" title="Phone Number"></i>+91-9622958013</a>
                        </div>
                    </div>
                </div>

                {/* Slider */}
                { loc.url.pathname == '/' ? <Slider /> : <SliderItinerary /> }

                <section>
                    <Slot />
                </section>
            </main>
            <Footer />
            {/* <Fab /> */}
        </div>

        <script src="/js/vendor/jquery-3.3.1.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>	
        {/* <script src="/js/popper.min.js"></script> */}
        {/* <script src="/js/meanmenu.min.js"></script> */}

        <script src="/js/main.js"></script>

        {/* Gallery */}
        {loc.url.pathname == '/gallery/' ? 
            <script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.umd.js"></script>
            // <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></script>
        : null }
        
    </>
  );
});
