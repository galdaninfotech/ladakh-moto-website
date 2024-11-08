import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './home-packages.css?inline';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="intro">
                            <h1>Tour Packages</h1>
                        </div>
                    </div>

                    <div class="col-6 col-lg-3">
                        <div class="package-card">
                            <img src="https://codingyaar.com/wp-content/uploads/card-image-boat-scaled.jpg" alt="" />
                            <div class="description">
                                <h2>Leh Manali Tour</h2>
                                <p>A tour of Hemis, Diskit and Thiksey monasteries will acquaint you with...</p>
                                <button>Know More</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-lg-3">
                        <div class="package-card">
                            <img src="https://codingyaar.com/wp-content/uploads/card-image-boat-scaled.jpg" alt="" />
                            <div class="description">
                                <h2>Tsomoriri Tour</h2>
                                <p>A tour of Hemis, Diskit and Thiksey monasteries will acquaint you with...</p>
                                <button>Know More</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-lg-3">
                        <div class="package-card">
                            <img src="https://codingyaar.com/wp-content/uploads/card-image-boat-scaled.jpg" alt="" />
                            <div class="description">
                                <h2>Amazing Ladakh</h2>
                                <p>A tour of Hemis, Diskit and Thiksey monasteries will acquaint you with...</p>
                                <button>Know More</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-lg-3">
                        <div class="package-card">
                            <img src="https://codingyaar.com/wp-content/uploads/card-image-boat-scaled.jpg" alt="" />
                            <div class="description">
                                <h2>Zanskar Valley Tour</h2>
                                <p>A tour of Hemis, Diskit and Thiksey monasteries will acquaint you with...</p>
                                <button>Know More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});