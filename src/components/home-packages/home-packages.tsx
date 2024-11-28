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
                            <h1>Holiday Packages</h1>
                        </div>
                    </div>

                    <div class="col-6 col-lg-3">
                        <div class="package-card">
                            <img src="/img/packages/all-ladakh-tour/all-ladakh-tour-overview.jpg" alt="" />
                            <div class="description">
                                <h2>All Ladakh Tour</h2>
                                <p>This 10-day Ladakh holiday package combines adventure...</p>
                                <a href="/packages/all-ladakh-tour"><button>Know More</button></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-lg-3">
                        <div class="package-card">
                            <img src="/img/packages/amazing-ladakh/amazing-ladakh-overview.jpg" alt="" />
                            <div class="description">
                                <h2>Amazing Ladakh</h2>
                                <p>6-day Ladakh holiday package designed for travelers seeking an...</p>
                                <a href="/packages/amazing-ladakh"><button>Know More</button></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-lg-3">
                        <div class="package-card">
                            <img src="/img/packages/ladakh-tour-with-hanle/ladakh-tour-with-hanle-overview.jpg" alt="" />
                            <div class="description">
                                <h2>Ladakh Tour With Hanle</h2>
                                <p>8-day Ladakh holiday package offers a balanced blend of...</p>
                                <a href="/packages/ladakh-tour-with-hanle"><button>Know More</button></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-lg-3">
                        <div class="package-card">
                            <img src="/img/packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-overview.jpg" alt="" />
                            <div class="description">
                                <h2>Ladakh Zanskar Tour</h2>
                                <p>A tour of Hemis, Diskit and Thiksey monasteries will...</p>
                                <a href="/packages/ladakh-zangskar-valley-tour"><button>Know More</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});