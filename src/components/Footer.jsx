import './Footer.css';

function Footer() {
    // Racchiudo tutto nelle parentesi tonde
    return (
        <footer className="pie_di_pagina">
            
            {/* --- SEZIONE SUPERIORE CON SFONDO E LINK --- */}
            <div className="sezione_superiore">
                <div className="contenitore_superiore">
                    
                    {/* Blocco che contiene le tre colonne dei link */}
                    <div className="contenitore_colonne">
                        
                        {/* Prima colonna: contiene sia DC Comics che Shop */}
                        <div className="colonna_link">
                            <h3 className="titolo_lista">DC Comics</h3>
                            <ul className="lista_footer">
                                <li><a href="/">Characters</a></li>
                                <li><a href="/">Comics</a></li>
                                <li><a href="/">Movies</a></li>
                                <li><a href="/">TV</a></li>
                                <li><a href="/">Games</a></li>
                                <li><a href="/">Videos</a></li>
                                <li><a href="/">News</a></li>
                            </ul>

                            <h3 className="titolo_lista">Shop</h3>
                            <ul className="lista_footer">
                                <li><a href="/">Shop DC</a></li>
                                <li><a href="/">Shop DC Collectibles</a></li>
                            </ul>
                        </div>

                        {/* Seconda colonna: contiene DC */}
                        <div className="colonna_link">
                            <h3 className="titolo_lista">DC</h3>
                            <ul className="lista_footer">
                                <li><a href="/">Terms Of Use</a></li>
                                <li><a href="/">Privacy policy (New)</a></li>
                                <li><a href="/">Ad Choices</a></li>
                                <li><a href="/">Advertising</a></li>
                                <li><a href="/">Jobs</a></li>
                                <li><a href="/">Subscriptions</a></li>
                                <li><a href="/">Talent Workshops</a></li>
                                <li><a href="/">CPSC Certificates</a></li>
                                <li><a href="/">Ratings</a></li>
                                <li><a href="/">Shop Help</a></li>
                                <li><a href="/">Contact Us</a></li>
                            </ul>
                        </div>

                        {/* Terza colonna: contiene Sites */}
                        <div className="colonna_link">
                            <h3 className="titolo_lista">Sites</h3>
                            <ul className="lista_footer">
                                <li><a href="/">DC</a></li>
                                <li><a href="/">MAD magazine</a></li>
                                <li><a href="/">DC Kids</a></li>
                                <li><a href="/">DC Universe</a></li>
                                <li><a href="/">DC Power Visa</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Immagine del logo gigante di sfondo posizionata a destra */}
                    <div className="contenitore_logo_sfondo">
                        <img src="/img/dc-logo-bg.png" alt="Logo DC Sfondo" className="logo_sfondo" />
                    </div>

                </div>
            </div>

            {/* --- SEZIONE INFERIORE GRIGIA CON BOTTONE E SOCIAL --- */}
            <div className="sezione_inferiore">
                <div className="contenitore_inferiore">
                    
                    <div className="blocco_bottone">
                        <button className="bottone_registrazione">Sign-up now!</button>
                    </div>

                    <div className="blocco_social">
                        <h3 className="titolo_social">Follow us</h3>
                        <div className="contenitore_icone">
                            <img src="/img/footer-facebook.png" alt="Facebook" className="icona_social" />
                            <img src="/img/footer-twitter.png" alt="Twitter" className="icona_social" />
                            <img src="/img/footer-youtube.png" alt="YouTube" className="icona_social" />
                            <img src="/img/footer-pinterest.png" alt="Pinterest" className="icona_social" />
                            <img src="/img/footer-periscope.png" alt="Periscope" className="icona_social" />
                        </div>
                    </div>

                </div>
            </div>

        </footer>
    );
}

export default Footer;