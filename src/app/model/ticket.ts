import {Consomation} from "./consomation";

export class Ticket {

    ticketId: number;
    montantTotal: number;
    sommeVerse: number;
    sommeRembourse: number;

    consomations?: Consomation[];
}
