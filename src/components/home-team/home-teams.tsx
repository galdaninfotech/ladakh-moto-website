import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './home-teams.css?inline';
import ImgPhuntsogRigzin from '../../media/team/phuntsog-rigzin.webp?jsx';
import ImgSkalzangGyatso from '../../media/team/skalzang-gyatso.webp?jsx';
import ImgStanzinNamgyal from '../../media/team/stanzin-namgyal.webp?jsx';
import ImgStanzinNamgial from '../../media/team/stanzin-namgial.webp?jsx';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div id="our-team" class="container">
            <div class="row">
                <div class="intro">
                    <h2>Our Team</h2>
                    <span class="d-flex justify-content-center"><strong><i>Our team of local experts.</i></strong></span>
                    <p>The team of local tour coordinators, bike marshals, mechanics, and support staff at Ladakhmoto has never let us down with their exceptional skill and knowledge of the region during all of our motorbiking tours. Because they are from Ladakh, these professionals place a high importance on providing you with a secure and genuine experience in the breathtaking and rugged terrain of the region.</p>
                </div>
                <div class="col-md-3">
                    <figure class="snip1477">
                        <ImgPhuntsogRigzin alt="Phuntsog Rigzin" />
                        <div class="title">
                            <div>
                                <h3>Phunchok Rigzin</h3>
                                <h4>Tour Leader</h4>
                            </div>
                        </div>
                        <figcaption>
                            <span> <a style="margin-right: 10px;" href="https://www.facebook.com/ladakhmoto/" aria-label="Follow us on Facebook" title="Follow us on Facebook"><i class="fab fa-facebook-f"></i><span class="sr-only">Facebook</span></a> </span>
                            <span><a href="https://www.instagram.com/ladakhmototour/" aria-label="Follow us on Instagram" title="Follow us on Instagram"><i class="fab fa-instagram"></i><span class="sr-only">Instagram</span></a></span>
                        </figcaption>
                        <a href="/team/phunchok-rigzin" aria-label="Phunchok Rigzin" title="Phunchok Rigzin"></a>
                    </figure>
                    <a href="/about/our-team" class="button-text width-6 float-right" aria-label="Read More" title="Read More">Read More...</a>
                </div>

                <div class="col-md-3">
                    <figure class="snip1477">
                        <ImgSkalzangGyatso alt="Skalzang Gyatso" />
                        <div class="title">
                            <div>
                                <h3>Skalzang Gyatso</h3>
                                <h4>Marshal</h4>
                            </div>
                        </div>
                        <figcaption>
                            <span> <a style="margin-right: 10px;" href="https://www.facebook.com/ladakhmoto/" aria-label="Follow us on Facebook" title="Follow us on Facebook"><i class="fab fa-facebook-f"></i><span class="sr-only">Facebook</span></a> </span>
                            <span><a href="https://www.instagram.com/ladakhmototour/" aria-label="Follow us on Instagram" title="Follow us on Instagram"><i class="fab fa-instagram"></i><span class="sr-only">Instagram</span></a></span>
                        </figcaption>
                        <a href="/team/skalzang-gyatso" aria-label="Skalzang Gyatso" title="Skalzang Gyatso"></a>
                    </figure>
                    <a href="/about/our-team" class="button-text width-6 float-right" aria-label="Read More" title="Read More">Read More...</a>
                </div>

                <div class="col-md-3">
                    <figure class="snip1477">
                        <ImgStanzinNamgyal alt="Stanzin Namgyal" />
                        <div class="title">
                            <div>
                            <h3>Stanzin Namgyal</h3>
                            <h4>Operation</h4>
                            </div>
                        </div>
                        <figcaption>
                            <span> <a style="margin-right: 10px;" href="https://www.facebook.com/ladakhmoto/" aria-label="Follow us on Facebook" title="Follow us on Facebook"><i class="fab fa-facebook-f"></i><span class="sr-only">Facebook</span></a> </span>
                            <span><a href="https://www.instagram.com/ladakhmototour/" aria-label="Follow us on Instagram" title="Follow us on Instagram"><i class="fab fa-instagram"></i><span class="sr-only">Instagram</span></a></span>
                        </figcaption>
                        <a href="/team/stanzin-namgyal" aria-label="Stanzin Namgyal" title="Stanzin Namgyal"></a>
                    </figure>
                    <a href="/about/our-team" class="button-text width-6 float-right" aria-label="Read More" title="Read More">Read More...</a>
                </div>

                <div class="col-md-3">
                    <figure class="snip1477">
                        <ImgStanzinNamgial alt="Stanzin Namgial" />
                        <div class="title">
                            <div>
                                <h3>Stanzin Namgial</h3>
                                <h4>Operation</h4>
                            </div>
                        </div>
                        <figcaption>
                            <span> <a style="margin-right: 10px;" href="https://www.facebook.com/ladakhmoto/" aria-label="Follow us on Facebook" title="Follow us on Facebook"><i class="fab fa-facebook-f"></i><span class="sr-only">Facebook</span></a> </span>
                            <span><a href="https://www.instagram.com/ladakhmototour/" aria-label="Follow us on Instagram" title="Follow us on Instagram"><i class="fab fa-instagram"></i><span class="sr-only">Instagram</span></a></span>
                        </figcaption>
                        <a href="/team/stanzin-namgial" aria-label="Stanzin Namgial" title="Stanzin Namgial"></a>
                    </figure>
                    <a href="/about/our-team" class="button-text width-6 float-right" aria-label="Read More" title="Read More">Read More...</a>
                </div>
            </div>
        </div>
    );
});