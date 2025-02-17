class studente{
    constructor(nome,cognome,matricola){
        this.nome = nome;
        this.cognome = cognome;
        this.matricola = matricola;
    }
    result(){
        /*let newParagraph = document.createElement("p");
        newParagraph.textContent = this.nome + this.cognome + this.matricola;
        document.body.appendChild(newParagraph); */
        document.body.textContent = ` Il numero di matricola di ${this.nome}  ${this.cognome} è ${this.matricola} `;
    }
}
const studente1 = new studente("Mario ","Rossi ",12345);
studente1.result();