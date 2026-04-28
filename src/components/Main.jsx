import './Main.css';

function Main() {
    return <main className="blocco_principale">

        <div className="sezione_nera">
            <p className="testo_segnaposto">--&gt; Content goes here &lt;--</p>
        </div>
        <div className="sezione_blu">
            <div className="contenitore_servizi">
             <div className="singolo_servizio">
                        <img src="/img/buy-comics-digital-comics.png" alt="Digital Comics" className="immagine_servizio" />
                        <span className="testo_servizio">DIGITAL COMICS</span>
                    </div>
                    
                    <div className="singolo_servizio">
                        <img src="/img/buy-comics-merchandise.png" alt="Merchandise" className="immagine_servizio" />
                        <span className="testo_servizio">DC MERCHANDISE</span>
                    </div>
                    
                    <div className="singolo_servizio">
                        <img src="/img/buy-comics-subscriptions.png" alt="Subscriptions" className="immagine_servizio" />
                        <span className="testo_servizio">SUBSCRIPTION</span>
                    </div>
                    
                    <div className="singolo_servizio">
                        <img src="/img/buy-comics-shop-locator.png" alt="Shop Locator" className="immagine_servizio" />
                        <span className="testo_servizio">COMIC SHOP LOCATOR</span>
                    </div>

                    {/* Ho aggiunto la quinta icona presente nel layout originale */}
                    <div className="singolo_servizio">
                        <img src="/img/buy-dc-power-visa.svg" alt="Power Visa" className="immagine_servizio" />
                        <span className="testo_servizio">DC POWER VISA</span>
                    </div>
            </div>
        </div>
    </main>
}
export default Main;
