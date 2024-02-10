import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Reply from "./reply";
import ReplyDialog from "./reply-dialog";
import BoardList from "../others/board-list";

export default function Post() {
  return (
    <div className="container mx-auto font-Geist pb-12">
      <div className="p-2 w-full max-h-screen">
        <div className="flex flex-col lg:grid lg:grid-cols-5">
          <div className="hidden md:block col-span-1 order-last lg:-order-1 mx-8 lg:mx-2 ">
            <BoardList />
          </div>
          <div className="col-span-3" id="popular">
            <div className="py-3 space-y-4 md:mx-8">
              <h2 className="text-2xl font-bold dark:text-gray-100">Sports</h2>
              <Separator />
            </div>
            <div className="md:mx-6 p-2 space-y-5 ">
              <Card className="shadow-none rounded-none border p-2">
                <div>
                  <CardHeader>
                    <CardTitle className="tracking-wide text-md md:text-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm md:text-md pb-6 text-slate-700 dark:text-slate-400">
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
                  <CardFooter className="py-5 flex justify-between">
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
            <div className="p-2 md:p-0 md:mx-8 space-y-4">
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
