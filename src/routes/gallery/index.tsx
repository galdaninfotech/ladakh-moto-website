import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from './index.css?inline';
import ImgGallerySMImage1 from '../../media/gallery/gallery-sm-1.webp?w=300&h=300&jsx';
import ImgGallerySMImage2 from '../../media/gallery/gallery-sm-2.webp?w=300&h=300&jsx';
import ImgGallerySMImage3 from '../../media/gallery/gallery-sm-3.webp?w=300&h=300&jsx';
import ImgGallerySMImage4 from '../../media/gallery/gallery-sm-4.webp?w=300&h=300&jsx';
import ImgGallerySMImage5 from '../../media/gallery/gallery-sm-5.webp?w=300&h=300&jsx';
import ImgGallerySMImage6 from '../../media/gallery/gallery-sm-6.webp?w=300&h=300&jsx';
import ImgGallerySMImage7 from '../../media/gallery/gallery-sm-7.webp?w=300&h=300&jsx';
import ImgGallerySMImage8 from '../../media/gallery/gallery-sm-8.webp?w=300&h=300&jsx';
import ImgGallerySMImage9 from '../../media/gallery/gallery-sm-9.webp?w=300&h=300&jsx';
import ImgGallerySMImage10 from '../../media/gallery/gallery-sm-10.webp?w=300&h=300&jsx';
import ImgGallerySMImage11 from '../../media/gallery/gallery-sm-11.webp?w=300&h=300&jsx';
import ImgGallerySMImage12 from '../../media/gallery/gallery-sm-12.webp?w=300&h=300&jsx';
import ImgGallerySMImage13 from '../../media/gallery/gallery-sm-13.webp?w=300&h=300&jsx';
import ImgGallerySMImage14 from '../../media/gallery/gallery-sm-14.webp?w=300&h=300&jsx';
import ImgGallerySMImage15 from '../../media/gallery/gallery-sm-15.webp?w=300&h=300&jsx';
import ImgGallerySMImage16 from '../../media/gallery/gallery-sm-16.webp?w=300&h=300&jsx';


export default component$(() => {
    useStylesScoped$(styles);

    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="intro">
                            <h1 class="main-heading">Image Gallery</h1>
                        </div>
                    </div>
                </div>
            </div>
            
            <section class="container mt-5 mb-5">
                <article class="row row-cols-1 row-cols-sm-2 g-2 d-flex justify-content-center">
                    <div class="col-sm-6 col-md-3 text-center">
                        <a data-fancybox="gallery" data-src="/img/gallery/gallery-lg-1.webp" href="/img/gallery/gallery-lg-1.webp" aria-label="Ladakh Moto Slide1" title="Ladakh Moto Slide1" data-caption="">
                            <ImgGallerySMImage1 alt="Ladakh Moto Slide1" />
                        </a>
                    </div>
            
                    <div class="col-sm-6 col-md-3 text-center">
                        <a data-fancybox="gallery" data-src="/img/gallery/gallery-lg-2.webp" href="/img/gallery/gallery-lg-2.webp" aria-label="Ladakh Moto Slide2" title="Ladakh Moto Slide2" data-caption="">
                            <ImgGallerySMImage2 alt="Ladakh Moto Slide2" />
                        </a>
                    </div>
            
                    <div class="col-sm-6 col-md-3 text-center">
                        <a data-fancybox="gallery" data-src="/img/gallery/gallery-lg-3.webp"  href="/img/gallery/gallery-lg-3.webp" aria-label="Ladakh Moto Slide3" title="Ladakh Moto Slide3" data-caption="">
                            <ImgGallerySMImage3 alt="Ladakh Moto Slide3" />
                        </a>
                    </div>
            
                    <div class="col-sm-6 col-md-3 text-center">
                        <a data-fancybox="gallery" data-src="/img/gallery/gallery-lg-4.webp"  href="/img/gallery/gallery-lg-4.webp" aria-label="Ladakh Moto Slide4" title="Ladakh Moto Slide4" data-caption="">
                            <ImgGallerySMImage4 alt="Ladakh Moto Slide4" />
                        </a>
                    </div>
            
                    <div class="col-sm-6 col-md-3 text-center">
                        <a data-fancybox="gallery" data-src="/img/gallery/gallery-lg-5.webp"  href="/img/gallery/gallery-lg-5.webp" aria-label="Ladakh Moto Slide5" title="Ladakh Moto Slide5" data-caption="">
                            <ImgGallerySMImage5 alt="Ladakh Moto Slide5" />
                        </a>
                    </div>
            
                    <div class="col-sm-6 col-md-3 text-center">
                        <a data-fancybox="gallery" data-src="/img/gallery/gallery-lg-6.webp"  href="/img/gallery/gallery-lg-6.webp" aria-label="Ladakh Moto Slide6" title="Ladakh Moto Slide6" data-caption="">
                            <ImgGallerySMImage6 alt="Ladakh Moto Slide6" />
                        </a>
                    </div>
            
                    <div class="col-sm-6 col-md-3 text-center">
                        <a data-fancybox="gallery" data-src="/img/gallery/gallery-lg-7.webp"  href="/img/gallery/gallery-lg-7.webp" aria-label="Ladakh Moto Slide7" title="Ladakh Moto Slide7" data-caption="">
                            <ImgGallerySMImage7 alt="Ladakh Moto Slide7" />
                        </a>
                    </div>
                    <div class="col-sm-6 col-md-3 text-center">
                        <a data-fancybox="gallery" data-src="/img/gallery/gallery-lg-8.webp"  href="/img/gallery/gallery-lg-8.webp" aria-label="Ladakh Moto Slide8" title="Ladakh Moto Slide8" data-caption="">
                            <ImgGallerySMImage8 alt="Ladakh Moto Slide8" />
                        </a>
                    </div>
                    <div class="col-sm-6 col-md-3 text-center">
                        <a data-fancybox="gallery" data-src="/img/gallery/gallery-lg-9.webp"  href="/img/gallery/gallery-lg-9.webp" aria-label="Ladakh Moto Slide9" title="Ladakh Moto Slide9" data-caption="">
                            <ImgGallerySMImage9 alt="Ladakh Moto Slide9" />
                        </a>
                    </div>
            
                    <div class="col-sm-6 col-md-3 text-center">
                        <a data-fancybox="gallery" data-src="/img/gallery/gallery-lg-10.webp" href="/img/gallery/gallery-lg-10.webp" aria-label="Ladakh Moto Slide10" title="Ladakh Moto Slide10" data-caption="">
                            <ImgGallerySMImage10 alt="Ladakh Moto Slide10" />
                        </a>
                    </div>
            
                    <div class="col-sm-6 col-md-3 text-center">
                        <a data-fancybox="gallery" data-src="/img/gallery/gallery-lg-11.webp" href="/img/gallery/gallery-lg-11.webp" aria-label="Ladakh Moto Slide11" title="Ladakh Moto Slide11" data-caption="">
                            <ImgGallerySMImage11 alt="Ladakh Moto Slide11" />
                        </a>
                    </div>
            
                    <div class="col-sm-6 col-md-3 text-center">
                        <a data-fancybox="gallery" data-src="/img/gallery/gallery-lg-12.webp" href="/img/gallery/gallery-lg-12.webp" aria-label="Ladakh Moto Slide12" title="Ladakh Moto Slide12" data-caption="">
                            <ImgGallerySMImage12 alt="Ladakh Moto Slide12" />
                        </a>
                    </div>
            
                    <div class="col-sm-6 col-md-3 text-center">
                        <a data-fancybox="gallery" data-src="/img/gallery/gallery-lg-13.webp" href="/img/gallery/gallery-lg-13.webp" aria-label="Ladakh Moto Slide13" title="Ladakh Moto Slide13" data-caption="">
                            <ImgGallerySMImage13 alt="Ladakh Moto Slide13" />
                        </a>
                    </div>
            
                    <div class="col-sm-6 col-md-3 text-center">
                        <a data-fancybox="gallery" data-src="/img/gallery/gallery-lg-14.webp" href="/img/gallery/gallery-lg-14.webp" aria-label="Ladakh Moto Slide14" title="Ladakh Moto Slide14" data-caption="">
                            <ImgGallerySMImage14 alt="Ladakh Moto Slide14" />
                        </a>
                    </div>
            
                    <div class="col-sm-6 col-md-3 text-center">
                        <a data-fancybox="gallery" data-src="/img/gallery/gallery-lg-15.webp" href="/img/gallery/gallery-lg-15.webp" aria-label="Ladakh Moto Slide15" title="Ladakh Moto Slide15" data-caption="">
                            <ImgGallerySMImage15 alt="Ladakh Moto Slide15" />
                        </a>
                    </div>
                    <div class="col-sm-6 col-md-3 text-center">
                        <a data-fancybox="gallery" data-src="/img/gallery/gallery-lg-16.webp" href="/img/gallery/gallery-lg-16.webp" aria-label="Ladakh Moto Slide16" title="Ladakh Moto Slide16" data-caption="">
                            <ImgGallerySMImage16 alt="Ladakh Moto Slide16" />
                        </a>
                    </div>
                </article>
            </section>
        </>
    );
});

export const head: DocumentHead = {
  title: "Photo Gallery - Ladakh Moto",
  meta: [
    {
      name: "description",
      content: "Photo Gallery - Ladakh Moto",
    },
  ],
  links: [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css"
    },
    {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    }
  ]
};
