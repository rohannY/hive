import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Arrow from "@/assets/icons/arrow";
import { Button } from "../ui/button";
import Reply from "./reply";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import ReplyDialog from "./reply-dialog";

export default function Post() {
  return (
    <div className="container mx-auto font-Geist pb-12">
      <div className="p-2 w-full max-h-screen">
        <div className="grid grid-cols-5">
          <div className="col-span-1 order-last lg:-order-1 mx-8 lg:mx-2 ">
            <div className="p-6 my-4 lg:my-20 bg-white border border-slate-100 rounded-2xl shadow-md shadow-gray-100 dark:shadow-none dark:bg-[#020817] dark:border-gray-800">
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
            <div className="py-3 space-y-4 mx-8">
              <h2 className="text-2xl font-bold text-gray-100">Sports</h2>
              <Separator />
            </div>
            <div className="mx-6 p-2 space-y-5 ">
              <Card className="shadow-none rounded-none border p-2">
                <div>
                  <CardHeader>
                    <CardTitle className="tracking-wide text-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-md pb-6 text-slate-400">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aliquam ducimus praesentium iure. Dolor, dignissimos minus
                    ab, minima quasi repellat vel, illum quidem doloremque
                    magnam autem non fugit. Voluptate, sunt eos! Lorem ipsum
                    dolor, sit amet consectetur adipisicing elit. Aliquam
                    ducimus praesentium iure. Dolor, dignissimos minus ab,
                    minima quasi repellat vel, illum quidem doloremque magnam
                    autem non fugit. Voluptate, sunt eos!
                  </CardContent>
                  <div className="mx-6">
                    <Separator />
                  </div>
                  <CardFooter className="py-5 flex justify-between ">
                    <div className="flex gap-3 items-center">
                      <p className="text-sm text-slate-400">12hr ago</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-sm text-slate-400">#323213</p>
                      <ReplyDialog />
                    </div>
                  </CardFooter>
                </div>
              </Card>
            </div>
            {/* Replies */}
            <div className="mx-8 space-y-4">
              <Reply />
              <Reply />
            </div>
            {/* Replies End */}
          </div>

          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
}
