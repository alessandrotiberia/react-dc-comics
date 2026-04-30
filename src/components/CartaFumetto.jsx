

// Importo il file CSS specifico per questo componente
import './CartaFumetto.css';

// Definisco la funzione del componente accettando la prop singolo_fumetto
function CartaFumetto({ singolo_fumetto }) {
    return (
        <div className="carta_fumetto">
            <div className="contenitore_immagine">
                {/* Accedo alle proprietà thumb e series dell'oggetto passato come prop */}
                <img src={singolo_fumetto.thumb} alt={singolo_fumetto.series} />
            </div>
            {/* Mostro il titolo della serie in basso */}
            <h4 className="titolo_fumetto">{singolo_fumetto.series}</h4>
        </div>
    );
}

// Esporto il componente per poterlo utilizzare in altri file
export default CartaFumetto;