// **Descrizione:**
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// **Bonus:**
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue ({

  el: '#app',

  data:{
    messaggio: 'Hello World!',
    img: 'https://image.spreadshirtmedia.net/image-server/v1/mp/compositions/T773A1MPA1611PT10X29Y22D189000786FS782/views/3,width=550,height=550,appearanceId=1,backgroundColor=FFFFFF,noPt=true/hello-world-nel-linguaggio-di-programmazione-piet-tazza-termica.jpg'
  }
});