// Eenmalige fetch: gebruik een const met een Promise.

import type { User } from "@rootPathsrc/interfaces/User";

// Herbruikbare API-call: gebruik een functie.

// Data die je op meerdere plekken nodig hebt: overweeg een gedeelde Promise of caching.

// Data die regelmatig verandert: gebruik een functie met bijvoorbeeld React Query of SWR.

/**
 * FetchDB
 * Haalt data op uit db.json en retourneert een Promise.
 *
 * @param endpoint - JSON-server endpoint.
 * @returns Een Promise met de opgehaalde array van User en of Rekening
 */

// omdat ik weet dat de return van de Promise een User of Rekening is, 
// kan ik dit afdwingen ipv Promise<unkown> te gebruiken of een generieke <T>
type DBData = User[] | Rekeningen[];

export function FetchDB(endpoint: string): Promise<DBData> {
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
        resolve(data);
      })

      .catch(error => {
        reject(error);
      });
  });
}