// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
// BONUS
// 1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
// 2- popolare le options della select della milestone 3 dinamicamente.
// Consigli del giorno
// Come sempre, iniziamo prima di tutto dall'analisi e comprensione della consegna. Scomponiamo il problema in micro-passaggi logici che solamente in un secondo momento trasformeremo in codice.
// Le icone presenti nella struttura dati fanno riferimento alla nota libreria Font Awesome, perciò come prima cosa assicuriamoci di aver inserito il link alla cdn nell'head della pagina.
// Dopodiché, basandoci sul codice di riferimento nel sito di Font Awesome, analizziamo come è formato il tag <i> di un'icona qualsiasi, in particolare focalizziamoci sulle classi.
// Come possiamo usare i dati presenti nella nostra struttura dati per creare l'elemento html nel modo corretto e visualizzare l'icona in pagina?
// Inizialmente può essere sufficiente stampare dei semplici div, senza alcuno stile, con all'interno l'icona e uno span con il nome. Solamente quando la parte logica è completa, ci dedichiamo al css.
// Buon lavoro !

// STRUTTURA DATI INIZIALE

const data = [
	{
	  name: "cat",
	  prefix: "fa-",
	  type: "animal",
	  family: "fas",
	  color: "orange",
	},
	{
	  name: "crow",
	  prefix: "fa-",
	  type: "animal",
	  family: "fas",
	  color: "orange",
	},
	{
	  name: "dog",
	  prefix: "fa-",
	  type: "animal",
	  family: "fas",
	  color: "orange",
	},
	{
	  name: "dove",
	  prefix: "fa-",
	  type: "animal",
	  family: "fas",
	  color: "orange",
	},
	{
	  name: "dragon",
	  prefix: "fa-",
	  type: "animal",
	  family: "fas",
	  color: "orange",
	},
	{
	  name: "horse",
	  prefix: "fa-",
	  type: "animal",
	  family: "fas",
	  color: "orange",
	},
	{
	  name: "hippo",
	  prefix: "fa-",
	  type: "animal",
	  family: "fas",
	  color: "orange",
	},
	{
	  name: "fish",
	  prefix: "fa-",
	  type: "animal",
	  family: "fas",
	  color: "orange",
	},
	{
	  name: "carrot",
	  prefix: "fa-",
	  type: "vegetable",
	  family: "fas",
	  color: "green",
	},
	{
	  name: "apple-alt",
	  prefix: "fa-",
	  type: "vegetable",
	  family: "fas",
	  color: "green",
	},
	{
	  name: "lemon",
	  prefix: "fa-",
	  type: "vegetable",
	  family: "fas",
	  color: "green",
	},
	{
	  name: "pepper-hot",
	  prefix: "fa-",
	  type: "vegetable",
	  family: "fas",
	  color: "green",
	},
	{
	  name: "user-astronaut",
	  prefix: "fa-",
	  type: "user",
	  family: "fas",
	  color: "blue",
	},
	{
	  name: "user-graduate",
	  prefix: "fa-",
	  type: "user",
	  family: "fas",
	  color: "blue",
	},
	{
	  name: "user-ninja",
	  prefix: "fa-",
	  type: "user",
	  family: "fas",
	  color: "blue",
	},
	{
	  name: "user-secret",
	  prefix: "fa-",
	  type: "user",
	  family: "fas",
	  color: "blue",
	},
  ];
  // console.log(data);
  
  //POPOLARE LE OPTION DELLA SELECT DINAMICAMENTE
  const options = ["all", "animal", "vegetable", "user"];
  
  for (let i = 0; i < options.length; i++) {
	let option = `
			  <option value=${options[i]}>${options[i]}</option>
		  `;
	// console.log(option);
	document.getElementById("type").innerHTML += option;
  }
  
  //CREAZIONE ARRAY PER I DIVERSI TIPI DI OGGETTO
  const animals = data.filter((animali) => {
	return animali.type === "animal";
  });
  console.log(animals);
  
  const vegetables = data.filter((vegetali) => {
	return vegetali.type === "vegetable";
  });
  console.log(vegetables);
  
  const users = data.filter((utenti) => {
	return utenti.type === "user";
  });
  console.log(users);
  
  // FUNZIONE CHE STAMPA LA GRIGLIA DI DEFAULT
  data.forEach(stampaGriglia);
  
  function stampaGriglia(item, index) {
	// console.log(item, index, arr);
	let card = `
		<div class="card">
			<i class="${item.prefix}solid ${item.prefix}${item.name}"></i>
			<span>${item.name}</span>
		</div>
		`;
	document.getElementById("container").innerHTML += card;
	let cards = document.getElementsByClassName("card");
	// console.log(cards.item(index));
	let cardsEffect = cards.item(index);
	//   console.log(cardsEffect);
	cardsEffect.style.color = item.color;
  }
  
  // FUNZIONE CHE STAMPA LA GRIGLIA A SECONDA DELLA SCELTA DELL'UTENTE
  const select = document.getElementById("type");
  select.addEventListener("change", displayCards);
  
  function displayCards() {
	if (select.value === "animal") {
	  document.getElementById("container").innerHTML = "";
	  animals.forEach(stampaGriglia);
	} else if (select.value === "vegetable") {
	  document.getElementById("container").innerHTML = "";
	  vegetables.forEach(stampaGriglia);
	} else if (select.value === "user") {
	  document.getElementById("container").innerHTML = "";
	  users.forEach(stampaGriglia);
	} else {
	  document.getElementById("container").innerHTML = "";
	  data.forEach(stampaGriglia);
	}
  }
  
  // CREA COLORE RANDOMICAMENTE
  const randColor = () => {
	return (
	  "#" +
	  Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, "0")
		.toUpperCase()
	);
  };
  // console.log(randColor());
  
  data.forEach(cambiaColore);
  
  function cambiaColore(item) {
	item.color = randColor();
  }
  