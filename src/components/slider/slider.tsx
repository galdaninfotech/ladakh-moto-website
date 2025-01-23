import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './slider.css?inline';
import ImgSlide1 from '../../media/slider/slide1.jpg?w=1920&h=720&jsx';
import ImgSlide2 from '../../media/slider/slide2.jpg?w=1920&h=720&jsx';
import ImgSlide3 from '../../media/slider/slide3.jpg?w=1920&h=720&jsx';
import ImgSlide4 from '../../media/slider/slide4.jpg?w=1920&h=720&jsx';

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
                        <ImgSlide1 id="slide1" class="d-block" alt="Slide One" />
                      <div class="carousel-caption kb-caption kb-caption-left">
                        <span class="slider-title" data-animation="animated">Leh Ladakh Adventure</span>
                        <p data-animation="animated">This 11-day journey takes you through the most captivating landscapes of Ladakh and Kashmir...</p>
                        <span data-animation="animated"><a href="/leh-ladakh-adventure" class="button-text width-6">More Details</a></span>
                      </div>
                    </div>
                    <div class="carousel-item">
                        <ImgSlide2 id="slide2" class="d-block" alt="Slide Two" />
                      <div class="carousel-caption kb-caption kb-caption-right">
                        <span class="slider-title" data-animation="animated">Catch Your Eye</span>
                        <p data-animation="animated">It attracts the attention of customer</p>
                        <span data-animation="animated"><a href="/leh-ladakh-adventure" class="button-text width-6">More Details</a></span>
                      </div>
                    </div>
                    <div class="carousel-item">
                        <ImgSlide3 id="slide3" class="d-block" alt="Slide Three" />
                      <div class="carousel-caption kb-caption kb-caption-center">
                        <span class="slider-title" data-animation="animated">Super Effects</span>
                        <p data-animation="animated">Demonstrate your benefits</p>
                        <span data-animation="animated"><a href="/leh-ladakh-adventure" class="button-text width-6">More Details</a></span>
                      </div>
                    </div>
                    <div class="carousel-item">
                        <ImgSlide4 id="slide4" class="d-block" alt="Slide Four" />
                      <div class="carousel-caption kb-caption kb-caption-left">
                        <span class="slider-title" data-animation="animated">Super Effects</span>
                        <p data-animation="animated">Captivating landscapes of Ladakh and Kashmir</p>
                        <span data-animation="animated"><a href="/leh-ladakh-adventure" class="button-text width-6">More Details</a></span>
                      </div>
                    </div>
                  <div id="slider-bottom-image"></div>
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