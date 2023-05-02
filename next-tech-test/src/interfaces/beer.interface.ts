import { BoilVolume } from "./boil-volume.interface";
import { Ingredients } from "./ingredients.interface";
import { Method } from "./method.interface";

export interface Beer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number | null;
  target_fg: number;
  target_og: number;
  ebc: number | null;
  srm: number | null;
  ph: number | null;
  attenuation_level: number;
  volume: BoilVolume;
  boil_volume: BoilVolume;
  method: Method;
  ingredients: Ingredients;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
}
