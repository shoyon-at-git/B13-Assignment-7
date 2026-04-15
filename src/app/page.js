import FriendList from "@/components/friend-list/FriendList";
import SummaryCard from "@/components/summary-card/SummaryCard";
import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

export default function Home() {
  return (
    <div className="text-center w-11/12 mx-auto mt-6 lg:mt-20 ">
      <div className="flex flex-col items-center">
        <h1 className="text-bold text-2xl md:text-5xl">Friends to keep close in your life</h1>
      <p className="text-[#64748B]  mt-4 text-xs md:text-[16px]">Your personal shelf of meaningful connections. Browse, tend, and nurture <br></br> the
        relationships that matter most.</p>
      <Link href={"/add-a-friend"} className="mt-8 flex gap-2 btn bg-[#244d3f] text-white"><FaPlus></FaPlus> Add a Friend</Link>
      </div>
      <SummaryCard></SummaryCard>
      <div className="border-t max-w-277.5 mx-auto border-gray-300"></div>
      <FriendList></FriendList>
    </div>
  );
}
