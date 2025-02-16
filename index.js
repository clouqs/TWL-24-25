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
        document.body.innerHTML += `<p>  ${this.nome}  ${this.cognome}  ${this.matricola}  </p>`;
    }
}
const studente1 = new studente("Mario ","Rossi ",12345);
studente1.result();