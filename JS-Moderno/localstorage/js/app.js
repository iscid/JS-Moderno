let formulario = document.querySelector("#formulario");
let listaTweets = document.querySelector("#lista-tweets");
let tweets = [];

eventListeners();

function eventListeners() {
  // Al agregar un nuevo tweet
  formulario.addEventListener("submit", agregarTweet);

  // Cuando el DOM está listo
  document.addEventListener("DOMContentLoaded", () => {
    tweets = JSON.parse(localStorage.getItem("tweets")) || [];
    console.log(tweets);

    crearHTML();
  });
}

function agregarTweet(e) {
  e.preventDefault();

  const tweet = document.querySelector("#tweet").value;
  if (tweet === "") {
    mostrarError("El Tweet no puede ir vacío");
    return;
  }

  const tweetObj = {
    id: Date.now(),
    tweet, // tweet: tweet,
  };

  tweets = [...tweets, tweetObj];
  console.log(tweets);

  crearHTML();

  // Reiniciar el formulario
  formulario.reset();
}

function mostrarError(error) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = error;
  mensajeError.classList.add("error");

  const contenido = document.querySelector("#contenido");
  contenido.appendChild(mensajeError);

  setTimeout(() => {
    mensajeError.remove();
  }, 3000);
}

function crearHTML() {
  limpiarHTML();

  if (tweets.length > 0) {
    tweets.forEach((tweet) => {
      const btnEliminar = document.createElement("a");
      btnEliminar.classList.add("borrar-tweet");
      btnEliminar.innerText = "X";

      const li = document.createElement("li");

      li.innerText = tweet.tweet;
      li.appendChild(btnEliminar);

      btnEliminar.onclick = () => {
        borrarTweet(tweet.id);
      };

      listaTweets.appendChild(li);
    });
  }

  sincronizarStorage();
}

function sincronizarStorage() {
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

function borrarTweet(id) {
  tweets = tweets.filter((tweet) => tweet.id != id);
  crearHTML();
}

function limpiarHTML() {
  while (listaTweets.firstChild) {
    listaTweets.removeChild(listaTweets.firstChild);
  }
}
