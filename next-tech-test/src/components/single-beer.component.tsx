import { Beer } from "@/interfaces";
import { Spacer } from "./spacer.component";

export const SingleBeer = ({ beer }: { beer: Beer }) => {
  return (
    <div className="bg-slate-700 rounded-md">
      <p className="text-blue-400 text-lg px-4 py-2">{beer.name}</p>
      <Spacer className='bg-slate-600' />
      <div className="px-4 py-2">
        <p className="text-blue-200 text-xs">{beer.description}</p>
      </div>
    </div>
  );
};
