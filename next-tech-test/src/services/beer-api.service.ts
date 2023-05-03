import { BEER_API_ENDPOINT, BEER_API_PAGE_SIZE } from "@/constants";
import { ApiResponse, Beer, BeerSearch } from "@/interfaces";

export class BeerApiService {
  /**
   * Get a list of beers
   *
   * @returns {Promise<ApiResponse<Beer[]>>} List of beers
   */
  public static async getBeers(
    searchParams?: BeerSearch
  ): Promise<ApiResponse<Beer[]>> {
    return this.callApi<Beer[]>("beers", {
      // Set the default page size
      per_page: BEER_API_PAGE_SIZE,
      ...searchParams,
    });
  }

  /**
   * Get a single beer by its ID
   *
   * @param id ID of the beer to get
   * @returns {Promise<ApiResponse<Beer>>} Beer with the given ID
   */
  public static async getBeerById(id: string): Promise<ApiResponse<Beer>> {
    return this.callApi<Beer>(`beers/${id}`);
  }

  /**
   * Calls the API with the given endpoint and returns the response
   * 
   * Example of how to call this method:
   * 
   * ```typescript
   * const { data, errors } = await this.callApi<Beer[]>("beers");
   * 
   * if (!data || errors) {
  *   console.error("Error whilst getting beers: ", { errors })
   *  return; 
   * }
   * 
   * console.log("Beers: ", { data });
   * ```
   * 
   * @param endpoint Endpoint within the API to call
   * @returns {Promise<ApiResponse<T>>} Response from the API
   */
  public static async callApi<
    T,
    P extends Record<string, any> = Record<string, any>
  >(endpoint: string, params?: P): Promise<ApiResponse<T>> {
    let fullEndpoint = `${BEER_API_ENDPOINT}/${endpoint}`;

    // Add any params to the endpoint if they exist
    if (params) {
      fullEndpoint += `?${new URLSearchParams(params)}`;
    }

    // Call the API and return the response
    const response = await fetch(fullEndpoint);

    try {
      console.log(`Calling API ${fullEndpoint}`);
      const data = await response.json();
      console.log(`API ${fullEndpoint} returned: `, { data });
      return { data };
    } catch (error: any) {
      console.error(`Error whilst calling API ${fullEndpoint}: `, { error });
      return {
        data: null,
        errors: [error?.message ?? "Unknown error occurred"],
      };
    }
  }
}
