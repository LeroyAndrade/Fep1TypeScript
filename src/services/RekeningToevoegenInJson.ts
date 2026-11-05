import type { Rekeningen } from "@interfaces/Rekeningen.ts"

export async function RekeningToevoegen(nieuwRekening: Rekeningen): Promise<Rekeningen> {
    const response = await fetch("http://localhost:3000/rekeningen", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(nieuwRekening)
    });

    if (!response.ok) {
        const error = await response.text();
        console.log(response.status)
        console.log(response.text)
        throw new Error("Rekening toevoegen is mislukt")
    }

    // Moet voldoen aan de Rekeningen Interface
    return await response.json() as Rekeningen;
}
