import { Separator } from "@/components/ui/separator";
import PostCard from "../others/card";
import BoardList from "../others/board-list";
import { Link } from "react-router-dom";
import Create from "../post/create";

export default function Home() {
  return (
    <div className="container mx-auto font-Geist h-screen">
      <div className="md:p-2 w-full max-h-screen">
        <div className="flex flex-col lg:grid lg:grid-cols-5">
          <div className="col-span-1 order-last lg:-order-1 lg:p-2 md:mx-6 md:px-2 lg:mx-0">
            <BoardList />
          </div>
          <div className="col-span-3" id="popular">
            <div className="py-3 space-y-4 md:mx-10">
              <div className="flex place-content-between">
                <h2 className="text-2xl font-bold dark:text-gray-200">
                  Popular
                </h2>
                <Create className="flex lg:hidden" />
              </div>
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
          <div className="col-span-1 hidden lg:block">
            <div className="my-20 p-2">
              <Create className="rounded w-full text-md" />
              <div className="my-3 border border-slate-200 dark:border-slate-800 w-full h-[200px] rounded shadow items-center justify-items-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
