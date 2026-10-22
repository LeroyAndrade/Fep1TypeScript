export interface Rekeningen {
    rekeningenId: number
    naam: string;
    bedrag: number;
    omschrijving: string;
    datum: Date;
    terugkerendeAfschrijving: boolean;
}
