### Esercizio finale node.js

Ci è stato richiesto di creare un modulo di backend per poter gestire l'inventario di un ristorante.

Vista la mancanza di tempo, useremo gli `array` come `database`.

Si richiede quindi di:
- Creare un progetto node.js con express;
- Strutturare il progetto nella maniera più opportuna;
- Creare un file `data.js` (`data.ts`) che va semplicemente a dichiarare ed esportare i due array forniti che useremo come `db`, e quindi come fonte per i nostri dati;
- Creare un endpoint `/api/categories` che restituisce tutte le categorie;
- Creare un endpoint `/api/categories/:id` che restituisce la categoria passata come parametro, 404 se non esiste;
- Creare un endpoint `/api/categories/category` che permette l'inserimento di una categoria;
- Creare un endpoint `/api/products` che restituisce tutti i prodotti presenti;
- Creare un endpoint `/api/products/product` che permette l'inserimento di un nuovo prodotto. Si richiede un controllo relativo alla categoria (se l'utente mi passsa una categoria errata, ritorno 400);

Bonus tips:
- Utilizzo di typescript;
- Utilizzo del router di express;
- Struttura *decente* del progetto a livello di cartelle e file;


### Array prodotti

```
 [
    {
      "id": 1,
      "name": "Pizza Margherita",
      "price": 6,
      "img": "https://thumbs.dreamstime.com/b/pizza-58914487.jpg",
      "category_id": 1
    },
    {
      "id": 2,
      "name": "Hamburger",
      "price": "9",
      "img": "https://media-assets.lacucinaitaliana.it/photos/61fae7f75f740bfb879f54e8/3:2/w_1500,h_1000,c_limit/iStock-636305290.jpg",
      "category_id": 1
    },
    {
      "id": 3,
      "name": "Caprese",
      "price": 7,
      "img": "https://media-assets.lacucinaitaliana.it/photos/62a99392745318cb493d342e/16:9/w_2560%2Cc_limit/1371874164",
      "category_id": 2
    },
    {
      "id": 4,
      "name": "Prosciutto e melone",
      "price": 8,
      "img": "https://blog.giallozafferano.it/ricettepanedolci/wp-content/uploads/2017/08/prosciutto-e-melone.jpg",
      "category_id": 2
    },
    {
      "id": 5,
      "name": "Gin Tonic",
      "price": 8,
      "img": "https://static.cookist.it/wp-content/uploads/sites/21/2018/08/gin-tonic.jpg",
      "category_id": 3
    },
    {
      "id": 6,
      "name": "Campari",
      "price": 4,
      "img": "https://www.gustissimo.it/articoli/drink/cocktail-pre-dinner/spritz-campari.jpg",
      "category_id": 3
    },
    {
      "id": 7,
      "name": "Acqua Naturale",
      "price": 1.5,
      "img": "https://www.comunicaffe.it/wp-content/uploads/2018/12/bicchiere-dacqua.jpg",
      "category_id": 3
    },
    {
      "id": 8,
      "name": "Acqua Frizzante",
      "price": 1.5,
      "img": "https://www.informazioneoggi.it/wp-content/uploads/2022/08/acqua-frizzante.jpg",
      "category_id": 3
    }
  ],
  ```

  ### Array categorie


  ```

  [
    {
      "id": 1,
      "name": "Piatti caldi"
    },
    {
      "id": 2,
      "name": "Piatti freddi"
    },
    {
      "id": 3,
      "name": "Bevande"
    },
    {
      "name": "Test",
      "id": 4
    }
  ]
  ```
