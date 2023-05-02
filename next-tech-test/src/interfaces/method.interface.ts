import { Fermentation } from "./fermentation.interface";
import { MashTemp } from "./mash-temp.interface";

export interface Method {
  mash_temp: MashTemp[];
  fermentation: Fermentation;
  twist: null | string;
}
