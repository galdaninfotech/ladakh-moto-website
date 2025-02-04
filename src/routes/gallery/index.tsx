import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from './index.css?inline';

import type { DocumentHead } from "@builder.io/qwik-city";

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
                        <a data-fancybox="gallery" data-src="/img/gallery/gallery-lg-1.jpg" data-caption="">
                            <img width="300" height="300" src="/img/gallery/gallery-sm-1.jpg" class="w-100" alt="Ladakh Moto Slide1" />
                        </a>
                    </div>
            
                    <div class="col-sm-6 col-md-3 text-center">
                        <a data-fancybox="gallery" data-src="/img/gallery/gallery-lg-2.jpg" data-caption="">
                            <img width="300" height="300" src="/img/gallery/gallery-sm-2.jpg" class="w-100" alt="Ladakh Moto Slide2" />
                        </a>
                    </div>
            
                    <div class="col-sm-6 col-md-3 text-center">
                        <a data-fancybox="gallery" data-src="/img/gallery/gallery-lg-3.jpg" data-caption="">
                            <img width="300" height="300" src="/img/gallery/gallery-sm-3.jpg" class="w-100" alt="Ladakh Moto Slide3" />
                        </a>
                    </div>
            
                    <div class="col-sm-6 col-md-3 text-center">
                        <a data-fancybox="gallery" data-src="/img/gallery/gallery-lg-4.jpg" data-caption="">
                            <img width="300" height="300" src="/img/gallery/gallery-sm-4.jpg" class="w-100" alt="Ladakh Moto Slide4" />
                        </a>
                    </div>
            
                    <div class="col-sm-6 col-md-3 text-center">
                        <a data-fancybox="gallery" data-src="/img/gallery/gallery-lg-5.jpg" data-caption="">
                            <img width="300" height="300" src="/img/gallery/gallery-sm-5.jpg" class="w-100" alt="Ladakh Moto Slide5" />
                        </a>
                    </div>
            
                    <div class="col-sm-6 col-md-3 text-center">
                        <a data-fancybox="gallery" data-src="/img/gallery/gallery-lg-6.jpg" data-caption="">
                            <img width="300" height="300" src="/img/gallery/gallery-sm-6.jpg" class="w-100" alt="Ladakh Moto Slide6" />
                        </a>
                    </div>
            
                    <div class="col-sm-6 col-md-3 text-center">
                        <a data-fancybox="gallery" data-src="/img/gallery/gallery-lg-7.jpg" data-caption="">
                            <img width="300" height="300" src="/img/gallery/gallery-sm-7.jpg" class="w-100" alt="Ladakh Moto Slide7" />
                        </a>
                    </div>
                    <div class="col-sm-6 col-md-3 text-center">
                        <a data-fancybox="gallery" data-src="/img/gallery/gallery-lg-8.jpg" data-caption="">
                            <img width="300" height="300" src="/img/gallery/gallery-sm-8.jpg" class="w-100" alt="Ladakh Moto Slide8" />
                        </a>
                    </div>
                    <div class="col-sm-6 col-md-3 text-center">
                        <a data-fancybox="gallery" data-src="/img/gallery/gallery-lg-9.jpg" data-caption="">
                            <img width="300" height="300" src="/img/gallery/gallery-sm-9.jpg" class="w-100" alt="Ladakh Moto Slide9" />
                        </a>
                    </div>
            
                    <div class="col-sm-6 col-md-3 text-center">
                        <a data-fancybox="gallery" data-src="/img/gallery/gallery-lg-10.jpg" data-caption="">
                            <img width="300" height="300" src="/img/gallery/gallery-sm-10.jpg" class="w-100" alt="Ladakh Moto Slide10" />
                        </a>
                    </div>
            
                    <div class="col-sm-6 col-md-3 text-center">
                        <a data-fancybox="gallery" data-src="/img/gallery/gallery-lg-11.jpg" data-caption="">
                            <img width="300" height="300" src="/img/gallery/gallery-sm-11.jpg" class="w-100" alt="Ladakh Moto Slide11" />
                        </a>
                    </div>
            
                    <div class="col-sm-6 col-md-3 text-center">
                        <a data-fancybox="gallery" data-src="/img/gallery/gallery-lg-12.jpg" data-caption="">
                            <img width="300" height="300" src="/img/gallery/gallery-sm-12.jpg" class="w-100" alt="Ladakh Moto Slide12" />
                        </a>
                    </div>
            
                    <div class="col-sm-6 col-md-3 text-center">
                        <a data-fancybox="gallery" data-src="/img/gallery/gallery-lg-13.jpg" data-caption="">
                            <img width="300" height="300" src="/img/gallery/gallery-sm-13.jpg" class="w-100" alt="Ladakh Moto Slide13" />
                        </a>
                    </div>
            
                    <div class="col-sm-6 col-md-3 text-center">
                        <a data-fancybox="gallery" data-src="/img/gallery/gallery-lg-14.jpg" data-caption="">
                            <img width="300" height="300" src="/img/gallery/gallery-sm-14.jpg" class="w-100" alt="Ladakh Moto Slide14" />
                        </a>
                    </div>
            
                    <div class="col-sm-6 col-md-3 text-center">
                        <a data-fancybox="gallery" data-src="/img/gallery/gallery-lg-15.jpg" data-caption="">
                            <img width="300" height="300" src="/img/gallery/gallery-sm-15.jpg" class="w-100" alt="Ladakh Moto Slide15" />
                        </a>
                    </div>
                    <div class="col-sm-6 col-md-3 text-center">
                        <a data-fancybox="gallery" data-src="/img/gallery/gallery-lg-16.jpg" data-caption="">
                            <img width="300" height="300" src="/img/gallery/gallery-sm-16.jpg" class="w-100" alt="Ladakh Moto Slide16" />
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
