import { Separator } from "@/components/ui/separator";
import PostCard from "./card";
import BoardList from "./board-list";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container mx-auto font-Geist h-screen">
      <div className="md:p-2 w-full max-h-screen">
        <div className="flex flex-col lg:grid lg:grid-cols-5">
          <div className="col-span-1 order-last lg:-order-1 lg:mx-2 ">
            <BoardList />
          </div>
          <div className="col-span-3" id="popular">
            <div className="py-3 space-y-4 md:mx-10">
              <h2 className="text-2xl font-bold dark:text-gray-200">Popular</h2>
              <Separator />
            </div>
            <div className="md:mx-6 md:p-2 flex flex-col gap-4">
              <Link to="/post" className="md:my-2">
                <PostCard />
              </Link>
              <Link to="/post">
                <PostCard />
              </Link>
            </div>
          </div>
          <div className="col-span-1" />
        </div>
      </div>
    </div>
  );
}
