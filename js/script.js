/* 

Scrivi un programma che stampi in console i numeri da 1 a 100.

1. MILESTONE 1
-Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
-Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

2. MILESTONE 2
-Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.

3. MILESTONE 3
-Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5. 

*/

const container = document.querySelector(".box-container");

for (let i = 1; i <= 100; i++){
  const boxEl = document.createElement("div");
  boxEl.className = "box";
  boxEl.append(i);

  if(i % 15 == 0){
    boxEl.classList.add("box-trecinque");
    boxEl.textContent= "Dom";
  } else if(i % 3 == 0){
    boxEl.classList.add("box-tre");
    boxEl.textContent= "Fizz";
  } else if(i % 5 == 0){
    boxEl.classList.add("box-cinque");
    boxEl.textContent= "Buzz";
  }

  container.append(boxEl);
}
