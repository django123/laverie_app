import {Commande} from "./commande";

export class Client {

    clientId: number;
    nom: string;
    telephone: string;
    dateAjout: any;

    commandes?: Commande[];
}
