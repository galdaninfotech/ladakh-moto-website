import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";
import Slider from "~/components/slider/slider";

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
  return (
    <>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NFMMQ5LD"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        
        {/* Start Preloader */}
		<div class="preloader-wrap">
			<div class="cube-wrapper">
				<div class="cube-folding">
					<span class="leaf1"></span>
					<span class="leaf2"></span>
					<span class="leaf3"></span>
					<span class="leaf4"></span>
				</div>
				<span class="loading" data-name="Loading">Loading</span>
			</div>
		</div>
		{/* End Preloader */}

        <div class="wrapper">
            <main>
                <Header />
                <div style="background: #222; color: #fff">
                    <div class="container">
                        <div class="d-md-none d-flex justify-content-between">
                            <a href="tel:9622958013"><i class="fal fa-phone-alt" style="margin-right: 8px;"></i>9622958013</a>
                            <a href="tel:9906979962"><i class="fal fa-phone-alt" style="margin-right: 8px;"></i>9906979962</a>
                        </div>
                    </div>
                </div>
                <Slider />
                <section>
                    <Slot />
                </section>
            </main>
            <Footer />
            {/* <Fab /> */}
        </div>

        <script src="/js/vendor/jquery-3.3.1.min.js"></script>
        
        <script src="/js/bootstrap.min.js"></script>	
        <script src="/js/popper.min.js"></script>
        <script src="/js/meanmenu.min.js"></script>

        <script src="/js/main.js"></script>
        <script src="/js/slider.js"></script>
        <script src="/js/custom.js"></script>

        {/* Gallery */}
        <script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.umd.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></script>

        
    </>
  );
});
