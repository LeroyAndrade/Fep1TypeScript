// Eenmalige fetch: gebruik een const met een Promise.

// Herbruikbare API-call: gebruik een functie.

// Data die je op meerdere plekken nodig hebt: overweeg een gedeelde Promise of caching.

// Data die regelmatig verandert: gebruik een functie met bijvoorbeeld React Query of SWR.

/**
 * FetchDB
 * Haalt data op uit db.json en retourneert een Promise.
 *
 * @returns {Promise<Object>} De opgehaalde JSON-data.
 */

export function FetchDB() {
  return new Promise((resolve, reject) => {
    fetch('../../db.json')

      .then(response => {
        if (!response.ok) {
           throw new Error(`HTTP Error: ${response.status}`);   
        }
        console.log(response.status)

        // Converteer Json
        console.table(response)
        return response.json();
      })

      .then(data => {
         console.table(data)
        resolve(data);
      })

      .catch(error => {
        reject(error);
      });
  });
}