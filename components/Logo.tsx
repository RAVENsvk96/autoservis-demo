import { Car } from "lucide-react";

export default function Logo() {
  return (
    <a href="#" className="flex items-center gap-3 font-bold tracking-tight">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white">
        <Car className="h-5 w-5" />
      </div>

      <span className="text-xl">
        Auto<span className="text-orange-500">Servis</span>
      </span>
    </a>
  );
}