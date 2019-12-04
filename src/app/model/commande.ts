import {Caisse} from "./caisse";
import {Client} from "./client";
import {Apparition} from "./apparition";

export class Commande {

    commandeId: number;
    dateJour: any;
    laveur: string;
    caissiere: string;
    heureDebut: any;
    heureFin: any;
    typeVehicule: string;
    prix: number;
    matricule: string;
    montantVerse: number;
    montantRembourse: number;
    apparition?: Apparition;
    client?: Client;
    caisse?: Caisse;
}
