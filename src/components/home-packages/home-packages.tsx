import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './home-packages.css?inline';
import ImgAllLadakhTour from '../../media/bike-tour-packages/all-ladakh-tour/all-ladakh-tour-overview.jpg?jsx';
import ImgAmazingLadakhTour from '../../media/bike-tour-packages/amazing-ladakh/amazing-ladakh-overview.jpg?jsx';
import ImgLadakhWithHanle from '../../media/bike-tour-packages/ladakh-tour-with-hanle/ladakh-tour-with-hanle-overview.jpg?jsx';
import ImgLadakhZanskarTour from '../../media/bike-tour-packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-overview.jpg?jsx';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="intro">
                            <h2>Holiday Packages</h2>
                        </div>
                    </div>

                    <div class="col-6 col-lg-3">
                        <div class="package-card">
                            <ImgAllLadakhTour alt="All Ladakh Tour" />
                            {/* <img width={1500} height={800} src="/img/packages/all-ladakh-tour/all-ladakh-tour-overview.jpg" alt="ddddccdd" /> */}
                            <div class="description">
                                <h2>All Ladakh Tour</h2>
                                <p>This 10-day Ladakh holiday package combines adventure...</p>
                                <a href="/bike-tour-packages/all-ladakh-tour" aria-label="More Details" title="More Details"><button>More Details</button></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-lg-3">
                        <div class="package-card">
                            <ImgAmazingLadakhTour alt="Amazing Ladakh Tour" />
                            {/* <img width={1500} height={800} src="/img/packages/amazing-ladakh/amazing-ladakh-overview.jpg" alt="Amazing Ladakh Tour" /> */}
                            <div class="description">
                                <h2>Amazing Ladakh</h2>
                                <p>6-day Ladakh holiday package designed for travelers seeking...</p>
                                <a href="/bike-tour-packages/amazing-ladakh" aria-label="More Details" title="More Details"><button>More Details</button></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-lg-3">
                        <div class="package-card">
                            <ImgLadakhWithHanle alt="Ladakh With Hanle" />
                            {/* <img width={1500} height={800} src="/img/packages/ladakh-tour-with-hanle/ladakh-tour-with-hanle-overview.jpg" alt="cccc" /> */}
                            <div class="description">
                                <h2>Ladakh With Hanle</h2>
                                <p>8-day Ladakh holiday package offers a balanced blend of...</p>
                                <a href="/bike-tour-packages/ladakh-tour-with-hanle" aria-label="More Details" title="More Details"><button>More Details</button></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-lg-3">
                        <div class="package-card">
                            <ImgLadakhZanskarTour alt="Ladakh Zanskar Tour" />
                            {/* <img width={1500} height={800} src="/img/packages/ladakh-zangskar-valley-tour/ladakh-zangskar-valley-tour-overview.jpg" alt="Ladakh Zanskar Tour" /> */}
                            <div class="description">
                                <h2>Ladakh Zanskar</h2>
                                <p>A tour of Hemis, Diskit and Thiksey monasteries will take...</p>
                                <a href="/bike-tour-packages/ladakh-zangskar-valley-tour" aria-label="More Details" title="More Details"><button>More Details</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});