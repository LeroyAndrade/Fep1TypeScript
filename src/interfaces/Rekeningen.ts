export interface Rekeningen {
    rekeningenId: number
    naam: string;
    userId:number;
    bedrag: number;
    omschrijving: string;
    datumAfschrijving: string;
    isAfgeschreven: boolean;
    terugkerendeAfschrijving: boolean;
}
 