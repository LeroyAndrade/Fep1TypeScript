// Eenmalige fetch: gebruik een const met een Promise.

// Herbruikbare API-call: gebruik een functie.

// Data die je op meerdere plekken nodig hebt: overweeg een gedeelde Promise of caching.

// Data die regelmatig verandert: gebruik een functie met bijvoorbeeld React Query of SWR.

/**
 * FetchDB
 * Haalt data op uit db.json en retourneert een Promise.
 *
 * @param endpoint - JSON-server endpoint.
 * @returns Een Promise met de opgehaalde JSON-data.
 */

export function FetchDB<T>(endpoint: string): Promise<T> {
  return new Promise((resolve, reject) => {
    // fetch('../../db.json')
    fetch(`http://localhost:3000/${endpoint}`)
      .then(response => {
        if (!response.ok) {
           throw new Error(`HTTP Error: ${response.status}`);   
        }
        console.log(response.status)

        // Converteer Json
        return response.json();
      })

      .then(data => {
        //  console.table(data)
        resolve(data as T);
      })

      .catch(error => {
        reject(error);
      });
  });
}