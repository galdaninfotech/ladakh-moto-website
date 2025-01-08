import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './slider.css?inline';
// import { useDocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    useStylesScoped$(styles);
    // const head = useDocumentHead();

    return (
        <section id="main-carousel">
          <div class="container-fluid">
            <div class="row">
              <div class="col px-0">
                <div class="carousel slide kb-carousel carousel-fade" id="carouselKenBurns" data-bs-ride="carousel">
                  {/* <!-- Carousel Items --> */}
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="/img/slider/slider5.jpg" class="d-block" alt="Slide 1" />
                      <div class="carousel-caption kb-caption kb-caption-left">
                        <h1 data-animation="animated">Ladakh Srinagar With Umling La</h1>
                        <p data-animation="animated">This 11-day journey takes you through the most captivating landscapes of Ladakh and Kashmir...</p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img src="/img/slider/slider2.jpg" class="d-block" alt="Slide 2" />
                      <div class="carousel-caption kb-caption kb-caption-right">
                        <h1 data-animation="animated">Catch Your Eye</h1>
                        <p data-animation="animated">It attracts the attention of customers</p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img src="/img/slider/slider3.jpg" class="d-block" alt="Slide 3" />
                      <div class="carousel-caption kb-caption kb-caption-center">
                        <h1 data-animation="animated">Super Effects</h1>
                        <p data-animation="animated">Demonstrate your benefits</p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img src="/img/slider/slider4.jpg" class="d-block" alt="Slide 4" />
                      <div class="carousel-caption kb-caption kb-caption-center">
                        <h1 data-animation="animated">Super Effects</h1>
                        <p data-animation="animated">Captivating landscapes of Ladakh and Kashmir</p>
                      </div>
                    </div>
                  </div>
  
                  {/* <!-- Carousel Arrows --> */}
                  <button class="carousel-control-prev kb-control-prev" type="button" data-bs-target="#carouselKenBurns" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next kb-control-next" type="button" data-bs-target="#carouselKenBurns" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
});