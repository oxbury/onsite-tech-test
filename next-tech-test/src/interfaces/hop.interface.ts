import { HopAddition } from "@/enums";
import { BoilVolume } from "./boil-volume.interface";
import { HopAttribute } from "@/enums/hop-attribute.enum";

export interface Hop {
  name: string;
  amount: BoilVolume;
  add: HopAddition;
  attribute: HopAttribute;
}
