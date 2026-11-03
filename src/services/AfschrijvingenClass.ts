import type { Rekeningen } from "../interfaces/Rekeningen.ts";

export class AfschrijvingenClass {

    public async createNewAfschrijving(rekening: Rekeningen): Promise<Rekeningen> {
        // let rekeningenId = rekening.rekeningenId;
        // let naam = rekening.naam;
        // let userId = rekening.userId;
        // let bedrag = rekening.bedrag;
        // let omschrijving = rekening.omschrijving;
        // let datumAfschrijving = rekening.datumAfschrijving;
        // let isAfgeschreven = rekening.isAfgeschreven;
        // let terugkerendeAfschrijving = rekening.terugkerendeAfschrijving;
        
        return {
            rekeningenId: rekening.rekeningenId,
            naam: rekening.naam,
            userId: rekening.userId,
            bedrag: rekening.bedrag,
            omschrijving: rekening.omschrijving,
            datumAfschrijving: rekening.datumAfschrijving,
            isAfgeschreven: rekening.isAfgeschreven,
            terugkerendeAfschrijving: rekening.terugkerendeAfschrijving
        }
    }
}
