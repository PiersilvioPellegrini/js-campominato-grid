// varibaile del bottone
const btnPLay = document.querySelector('.btn-play');

// evento sul bottone in cui richiamo la fuzione generaGrigliaCelle();
btnPLay.addEventListener('click', function() {
    // richimao funzione
    generaGrigliaCelle(10);
    
});

/**
 *
 * @param {number} numCelleRiga Numero di celle da generare ogni riga
 */


function generaGrigliaCelle(numCelleRiga){
    // variabile che contiene il valore delle celle da generare 
    const totalCells= numCelleRiga * numCelleRiga;

    const container = document.querySelector('.container-cells');
    // resetto il contenuto del contenitore
    container.innerHTML = '';
    // ciclo che crea le celle base al valore delle celle totali
    for(let i=0; i<totalCells; i++){
        // creaziione elemento div
        const cell = document.createElement('div');
        // aggiungo la classe cell
        cell.classList.add('cell');
        // aggiungo style inline
        cell.style.flexBasis = `calc(100% / ${numCelleRiga})`;
        // inserisco il contenuto nella cella (i)
        cell.innerHTML = i+1;
        // padding inline
        container.style.padding = '80px 0';
        
        // creo evento sull'elemento cella sinìgola
        cell.addEventListener('click', function(){
            const numInsideCell = parseInt(this.textContent);
            // inserisco la classe se non è presente e la rimuovo se è presente
            cell.classList.toggle('bg-celeste');
            // output console con il numero della cella cliccata 
            console.log('hai cliccato la cella numero: ' + numInsideCell);
        });
        // aggiungo la cella al contenitore
        container.appendChild(cell);
    }

}