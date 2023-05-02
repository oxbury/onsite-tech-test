export interface BeerSearch {
  per_page?: number;
  page?: number;
  abv_gt?: number;
  abv_lt?: number;
  ibu_gt?: number;
  ibu_lt?: number;
  ebc_gt?: number;
  ebc_lt?: number;
  beer_name?: string;
  yeast?: string;
  brewed_before?: string;
  brewed_after?: string;
  hops?: string;
  malt?: string;
  food?: string;
  ids?: string;
}
