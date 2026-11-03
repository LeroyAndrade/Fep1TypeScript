export interface Rekeningen {
    rekeningenId: number
    naam: string;
    userId:number;
    bedrag: number;
    omschrijving: string;
    datumAfschrijving: Date;
    isAfgeschreven: boolean;
    terugkerendeAfschrijving: boolean;
}
