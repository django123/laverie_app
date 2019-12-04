import {Apparition} from "./apparition";
import {Categorie} from "./categorie";
import {User} from "./user";

export class Vehicle {


    vehicleId: number;
    matricule: string;
    marque: string;
    dateEnregistrement: any;
    user?: User;
    categorie?: Categorie;
    apparitions?: Apparition[];
}
