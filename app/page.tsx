import Link from "next/link";
import { links } from "./data";

export default function Home() {
  return (
   <div className="h-screen bg-white px-20 flex items-center justify-center w-screen">
     <div className="flex justify-center flex-wrap gap-3 ">
      {links.map((e: any) => (
        <Link
          key={e.id}
          href={e.linkName}
          className="border-gray-600 border rounded-full px-5 py-1 font-bold">
          {e.linkName}
        </Link>
      ))}
    </div>
   </div>
  );
}

