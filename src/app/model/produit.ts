import {Ajout} from "./ajout";
import {User} from "./user";
import {Type} from "./type";

export class Produit {

    produitId: number;
    titre: string;
    quantite: number;
    prix: number;
    type?: Type;
    user?: User;

    ajouts?: Ajout[];
}
