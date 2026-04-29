 import './Main.css';
// Importo il file con i dati dei fumetti
import dati_fumetti from './comics.js';

function Main() {
    // Creo un array di oggetti per rendere dinamica anche la sezione blu
    const lista_servizi = [
        { testo: 'DIGITAL COMICS', url_img: '/img/buy-comics-digital-comics.png' },
        { testo: 'DC MERCHANDISE', url_img: '/img/buy-comics-merchandise.png' },
        { testo: 'SUBSCRIPTION', url_img: '/img/buy-comics-subscriptions.png' },
        { testo: 'COMIC SHOP LOCATOR', url_img: '/img/buy-comics-shop-locator.png' },
        { testo: 'DC POWER VISA', url_img: '/img/buy-dc-power-visa.svg' }
    ];

    return (
        <main className="blocco_principale">
            
            {/* Sezione per il Jumbotron con l'immagine di sfondo */}
            <div className="sezione_jumbotron"></div>

            <div className="sezione_nera">
                <div className="contenitore_centrale">
                    
                    {/* Etichetta azzurra che si sovrappone al bordo */}
                    <div className="etichetta_serie">CURRENT SERIES</div>

                    {/* Inizio della griglia dei fumetti dinamica */}
                    <div className="griglia_fumetti">
                        {dati_fumetti.map((singolo_fumetto) => (
                            <div key={singolo_fumetto.id} className="carta_fumetto">
                                <div className="contenitore_immagine">
                                    <img src={singolo_fumetto.thumb} alt={singolo_fumetto.series} />
                                </div>
                                <h4 className="titolo_fumetto">{singolo_fumetto.series}</h4>
                            </div>
                        ))}
                    </div>

                    <div className="contenitore_pulsante">
                        <button className="pulsante_carica">LOAD MORE</button>
                    </div>

                </div>
            </div>

            <div className="sezione_blu">
                <div className="contenitore_servizi">
                    {/* Iterazione sulla lista dei servizi per creare le icone blu */}
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