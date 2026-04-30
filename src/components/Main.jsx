
import './Main.css';
import dati_fumetti from './comics.js';
// Importo il nuovo componente creato
import CartaFumetto from './CartaFumetto.jsx';

function Main() {
    
    // Array contenente i dati per la sezione blu
    const lista_servizi = [
        { testo: 'DIGITAL COMICS', url_img: '/img/buy-comics-digital-comics.png' },
        { testo: 'DC MERCHANDISE', url_img: '/img/buy-comics-merchandise.png' },
        { testo: 'SUBSCRIPTION', url_img: '/img/buy-comics-subscriptions.png' },
        { testo: 'COMIC SHOP LOCATOR', url_img: '/img/buy-comics-shop-locator.png' },
        { testo: 'DC POWER VISA', url_img: '/img/buy-dc-power-visa.svg' }
    ];

    return (
        <main className="blocco_principale">
            
            <div className="sezione_jumbotron"></div>

            <div className="sezione_nera">
                <div className="contenitore_centrale">
                    
                    <div className="etichetta_serie">CURRENT SERIES</div>

                    <div className="griglia_fumetti">
                        {/* Itero sull'array dei fumetti. Per ogni elemento, renderizzo il componente CartaFumetto */}
                        {dati_fumetti.map((elemento_corrente) => (
                            <CartaFumetto 
                                key={elemento_corrente.id} 
                                singolo_fumetto={elemento_corrente} 
                            />
                        ))}
                    </div>

                    <div className="contenitore_pulsante">
                        <button className="pulsante_carica">LOAD MORE</button>
                    </div>

                </div>
            </div>

            <div className="sezione_blu">
                <div className="contenitore_servizi">
                    
                    {lista_servizi.map((elemento_servizio, indice_servizio) => (
                        <div key={indice_servizio} className="singolo_servizio">
                            <img 
                                src={elemento_servizio.url_img} 
                                alt={elemento_servizio.testo} 
                                className="immagine_servizio" 
                            />
                            <span className="testo_servizio">{elemento_servizio.testo}</span>
                        </div>
                    ))}
                    
                </div>
            </div>

        </main>
    );
}

export default Main;