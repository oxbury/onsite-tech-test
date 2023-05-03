import { Hop } from "./hop.interface";
import { Malt } from "./malt.interface";

export interface Ingredients {
  malt?: Malt[];
  hops?: Hop[];
  yeast?: string;
}
