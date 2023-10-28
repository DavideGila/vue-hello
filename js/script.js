// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

const { createApp } = Vue
createApp({
    data() {
        return {
            message: 'Goku',
            image: "https://i.pinimg.com/736x/06/6a/e7/066ae79c961041fca3a1745a838f5f29.jpg"
        }
    }
}).mount('#app')
  