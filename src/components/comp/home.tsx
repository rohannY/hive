import { Separator } from "@/components/ui/separator";
import Arrow from "../../assets/icons/arrow";
import PostCard from "./card";

export default function Home() {
  return (
    <div className="container mx-auto font-Geist">
      <div className="p-2 w-full max-h-screen">
        <div className="flex flex-col lg:grid lg:grid-cols-5">
          <div className="col-span-1 order-last lg:-order-1 mx-8 lg:mx-2 ">
            <div className="p-6 my-4 lg:my-20 bg-white border border-slate-100 rounded-lg shadow-md shadow-gray-100 dark:shadow-none dark:bg-[#020817] dark:border-gray-800">
              <h2 className="text-xl font-medium pb-3 pl-3">Boards</h2>
              <Separator />
              <div className="py-3 space-y-1">
                <div className="text-md text-slate-600">
                  <div className="p-3 flex place-content-between hover:bg-blue-400 dark:hover:bg-blue-600 hover:text-white rounded-sm">
                    <p>Sports</p>
                    <Arrow />
                  </div>
                </div>
                <div className="text-md text-slate-600">
                  <div className="p-3 flex place-content-between hover:bg-blue-400 dark:hover:bg-blue-600 hover:text-white rounded-sm">
                    <p>Sports</p>
                    <Arrow />
                  </div>
                </div>
                <div className="text-md text-slate-600">
                  <div className="p-3 flex place-content-between hover:bg-blue-400 dark:hover:bg-blue-600 hover:text-white rounded-sm">
                    <p>Sports</p>
                    <Arrow />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3" id="popular">
            <div className="py-3 space-y-4 mx-10">
              <h2 className="text-2xl font-bold text-gray-400">Popular</h2>
              <Separator />
            </div>
            <div className="mx-6 p-2 space-y-5 ">
              <PostCard />
              <PostCard />

            </div>
          </div>
          <div className="col-span-1" />
        </div>
      </div>
    </div>
  );
}
