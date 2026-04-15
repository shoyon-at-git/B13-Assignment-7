import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

export default function Home() {
  return (
    <div className="text-center border w-11/12 mx-auto mt-20 ">
      <div className="flex flex-col items-center">
        <h1 className="text-bold text-5xl">Friends to keep close in your life</h1>
      <p className="text-[#64748B]  mt-4">Your personal shelf of meaningful connections. Browse, tend, and nurture <br></br> the
        relationships that matter most.</p>
      <Link href={"add-a-friend"} className="mt-8 flex gap-2 btn bg-[#244d3f] text-white"><FaPlus></FaPlus> Add a Friend</Link>
      </div>

    </div>
  );
}
