import {Produit} from "./produit";
import {Vehicle} from "./vehicle";

export class User {

    userId: number;
    nom: string;
    email: string;
    telephone: string;
    avatar: string;
    password: string;
    vehicles?: Vehicle[];
    produits?: Produit[];
}
