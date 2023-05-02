import { BEER_API_DOCUMENTATION } from "@/constants";

export const Nav = () => {
  return (
    <nav className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold">
              Oxbury | Beer API
            </a>
          </div>
          <div className="flex items-start">
            <input placeholder="Search..." className="bg-slate-800 w-96 px-4 py-2 rounded-md placeholder:text-slate-400"/>
          </div>
          <div>
            <a
              href={BEER_API_DOCUMENTATION}
              target="_blank"
              className="bg-slate-800 text-white px-4 py-2 rounded-md"
            >
              View Documentation
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
