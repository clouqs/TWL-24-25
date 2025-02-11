Guida ai Selettori CSS
In CSS, per selezionare e applicare stili agli elementi HTML, si utilizzano diversi selettori. Ecco una panoramica dei principali:

1. Selettore di tipo (elemento)
Si usa direttamente il nome dell'elemento HTML (es. div, p, h1).

Esempio:

css
Copy
p { color: red; }
Applica lo stile a tutti i paragrafi (<p>).

2. Selettore di classe (.)
Si usa un punto (.) seguito dal nome della classe.

Le classi possono essere assegnate a più elementi HTML.

Esempio:

css
Copy
.testo-rosso { color: red; }
Applica lo stile a tutti gli elementi con la classe testo-rosso (<p class="testo-rosso">).

3. Selettore di ID (#)
Si usa un cancelletto (#) seguito dal nome dell'ID.

Gli ID devono essere univoci all'interno di una pagina HTML.

Esempio:

css
Copy
#intestazione { font-size: 24px; }
Applica lo stile all'elemento con l'ID intestazione (<h1 id="intestazione">).

4. Selettore universale (*)
Si usa l'asterisco (*) per selezionare tutti gli elementi.

Esempio:

css
Copy
* { margin: 0; padding: 0; }
Applica lo stile a tutti gli elementi della pagina.

5. Selettore di attributo ([attributo])
Si usano le parentesi quadre per selezionare elementi con un attributo specifico.

Esempio:

cssasd
Copy
a[target="_blank"] { color: blue; }
Applica lo stile ai link (<a>) con l'attributo target="_blank".

6. Selettore di discendenti (spazio)
Si usa uno spazio per selezionare un elemento discendente di un altro.

Esempio:

css
Copy
div p { font-size: 16px; }
Applica lo stile a tutti i paragrafi (<p>) all'interno di un <div>.

7. Selettore di figli diretti (>)
Si usa il simbolo > per selezionare solo i figli diretti di un elemento.

Esempio:

css
Copy
ul > li { list-style: none; }
Applica lo stile solo ai <li> che sono figli diretti di <ul>.

8. Selettore di pseudo-classi (:)
Si usa il due punti (:) per selezionare elementi in uno stato specifico (es. :hover, :focus).

Esempio:

css
Copy
a:hover { color: green; }
Applica lo stile ai link quando sono in hover.

9. Selettore di pseudo-elementi (::)
Si usa il doppio due punti (::) per selezionare parti specifiche di un elemento (es. ::before, ::after).

Esempio:

css
Copy
p::first-line { font-weight: bold; }
Applica lo stile alla prima riga di un paragrafo.

Quando usare ., # o altri selettori?
Usa . (punto) per le classi, quando vuoi applicare uno stile a più elementi.

Usa # (cancelletto) per gli ID, quando vuoi applicare uno stile a un elemento specifico e unico.

Usa i selettori di tipo per applicare stili a tutti gli elementi di un certo tipo.

Usa i selettori universali o di attributo per casi più specifici o generici.