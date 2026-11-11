import { FetchDB } from "@services/FetchDB.ts";
import { AfschrijvingenClass } from "@rekeningService/AfschrijvingenClass.ts";
import { RekeningToevoegen } from "@rekeningService/RekeningToevoegenInJson.ts"

const afschrijvingenClass = new AfschrijvingenClass();

const rekeningToevoegenForm = document.querySelector("#rekeningToevoegenForm");


if (rekeningToevoegenForm) {
    rekeningToevoegenForm.addEventListener("submit", async (e) => {
        //defaultGedrag (bijvoorbeeld refresh cancelen)
        e.preventDefault();

        // get JSON data
        const data = await FetchDB("rekeningen");

        // data vanuit het formulier
        const formData = new FormData(rekeningToevoegenForm)


        // console.log(nieuwId)
        // window.alert(nieuwId)

        // Zoek hoogste nummer RekeningID, begin bij 0, pak hoogste en tel er 1 bij op
        const nieuwId = Math.max(0, ...data.map(rekening => rekening.rekeningenId)) + 1;


  const nieuwRekening = await afschrijvingenClass.createNewAfschrijving({
            rekeningenId: nieuwId,
            naam: formData.get("naam")?.toString() ?? "",
            userId: Number(formData.get("userId")?.toString() ?? ""),
            bedrag: Number(formData.get("bedrag") ?? 0),
            omschrijving: String(formData.get("omschrijving")?.toString() ?? ""),
            datumAfschrijving: new Date(
                String(formData.get("datumAfschrijving") ?? "")
            ),
            isAfgeschreven: formData.has("isAfgeschreven"),
            terugkerendeAfschrijving: formData.has("terugkerendeAfschrijving")
        });
        console.log(nieuwRekening);
        const dataOpslaan = await RekeningToevoegen(nieuwRekening);
    });
    // window.alert(JSON.stringify([...formData.entries()]))

}

