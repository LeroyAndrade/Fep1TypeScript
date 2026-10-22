import type { Rekeningen } from "../interfaces/Rekeningen.ts";

export class AfschrijvingenClass {

    public async createNewAfschrijving(rekening: Rekeningen): Promise<Rekeningen> {
        let naam = rekening.naam;
        let bedrag = rekening.bedrag;
        let omschrijving = rekening.omschrijving;
        let datum = rekening.datum;
        let terugkerendeAfschrijving = rekening.terugkerendeAfschrijving;

        return {
            rekeningId:rekening.rekeningId,
            naam: naam, 
            bedrag: bedrag,
            omschrijving:omschrijving,
            datum:datum,
            terugkerendeAfschrijving:terugkerendeAfschrijving
        }
    }
}