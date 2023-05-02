import { ApiResponse, Beer } from "@/interfaces";
import { BeerApiService } from "@/services";
import { useEffect, useState } from "react";
import { SingleBeer } from "./single-beer.component";

export const BeerList = () => {
  const [beerResponse, setBeerResponse] = useState<ApiResponse<Beer[]>>();
  const [isLoadingBeers, setLoadingBeers] = useState(false);

  useEffect(() => {
    setLoadingBeers(true);

    BeerApiService.getBeers().then((response) => {
      setBeerResponse(response);
      setLoadingBeers(false);
    });
  }, []);

  return (
    <div>
      {isLoadingBeers && <div className="text-center">Loading...</div>}
      {beerResponse?.data && (
        <div className="grid grid-cols-4 grid-flow-row gap-4">
          {beerResponse.data.map((beer) => (
            <SingleBeer key={beer.id} beer={beer} />
          ))}
        </div>
      )}
    </div>
  );
};
