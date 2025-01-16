import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './home-teams.css?inline';
import ImgPhuntsogRigzin from '../../media/team/phuntsog-rigzin.jpg?jsx';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div class="container">
            <div class="row">
                <div class="intro">
                    <h2>Our Team</h2>
                    <span class="d-flex justify-content-center"><strong><i>Our team of local experts</i></strong></span>
                    <p>The team of local tour coordinators, bike marshals, mechanics, and support staff at Ladakhmoto has never let us down with their exceptional skill and knowledge of the region during all of our motorbiking tours. Because they are from Ladakh, these professionals place a high importance on providing you with a secure and genuine experience in the breathtaking and rugged terrain of the region.</p>
                </div>
                <div class="col-md-3">
                    <figure class="snip1477">
                        <ImgPhuntsogRigzin />
                        <div class="title">
                            <div>
                                <h2>Phunchok Rigzin</h2>
                                <h3>Tour Leader</h3>
                            </div>
                        </div>
                        <figcaption>
                            <span> <a style="margin-right: 10px;" href="https://www.facebook.com/ladakhmoto/" aria-label="Follow us on Facebook"><i class="fab fa-facebook-f"></i><span class="sr-only">Facebook</span></a> </span>
                            <span><a href="https://www.instagram.com/ladakhmototour/" aria-label="Follow us on Instagram"><i class="fab fa-instagram"></i><span class="sr-only">Instagram</span></a></span>
                        </figcaption>
                        <a href="/team/phunchok-rigzin" aria-label="Phunchok Rigzin"></a>
                    </figure>
                </div>

                <div class="col-md-3">
                    <figure class="snip1477">
                        <img width={440} height={320} src="/img/teams/skalzang-gyatso.jpg" alt="sample91" />
                        <div class="title">
                            <div>
                                <h2>Skalzang Gyatso</h2>
                                <h3>Marshal</h3>
                            </div>
                        </div>
                        <figcaption>
                            <span> <a style="margin-right: 10px;" href="https://www.facebook.com/ladakhmoto/" aria-label="Follow us on Facebook"><i class="fab fa-facebook-f"></i><span class="sr-only">Facebook</span></a> </span>
                            <span><a href="https://www.instagram.com/ladakhmototour/" aria-label="Follow us on Instagram"><i class="fab fa-instagram"></i><span class="sr-only">Instagram</span></a></span>
                        </figcaption>
                        <a href="/team/skalzang-gyatso" aria-label="Skalzang Gyatso"></a>
                    </figure>
                </div>

                <div class="col-md-3">
                    <figure class="snip1477"><img width={440} height={320} src="/img/teams/stanzin-namgyal.jpg" alt="sample35" />
                        <div class="title">
                            <div>
                            <h2>Stanzin Namgyal</h2>
                            <h3>Operation</h3>
                            </div>
                        </div>
                        <figcaption>
                            <span> <a style="margin-right: 10px;" href="https://www.facebook.com/ladakhmoto/" aria-label="Follow us on Facebook"><i class="fab fa-facebook-f"></i><span class="sr-only">Facebook</span></a> </span>
                            <span><a href="https://www.instagram.com/ladakhmototour/" aria-label="Follow us on Instagram"><i class="fab fa-instagram"></i><span class="sr-only">Instagram</span></a></span>
                        </figcaption>
                        <a href="/team/stanzin-namgyal" aria-label="Stanzin Namgyal"></a>
                    </figure>
                </div>

                <div class="col-md-3">
                    <figure class="snip1477">
                        <img width={440} height={320} src="/img/teams/stanzin-namgyal1.jpg" alt="sample38" />
                        <div class="title">
                            <div>
                                <h2>Stanzin Namgial</h2>
                                <h3>Operation</h3>
                            </div>
                        </div>
                        <figcaption>
                            <span> <a style="margin-right: 10px;" href="https://www.facebook.com/ladakhmoto/" aria-label="Follow us on Facebook"><i class="fab fa-facebook-f"></i><span class="sr-only">Facebook</span></a> </span>
                            <span><a href="https://www.instagram.com/ladakhmototour/" aria-label="Follow us on Instagram"><i class="fab fa-instagram"></i><span class="sr-only">Instagram</span></a></span>
                        </figcaption>
                        <a href="/team/stanzin-namgial" aria-label="Stanzin Namgial"></a>
                    </figure>
                </div>
            </div>
        </div>
    );
});