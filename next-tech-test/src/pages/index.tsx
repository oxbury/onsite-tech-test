import { BeerList } from "@/components";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl bold">All Beers</h1>
      <p className="text-sm my-2">
        Please refer to README.md found in root of this project for the full
        requirements
      </p>
      <BeerList />
    </div>
  );
}
