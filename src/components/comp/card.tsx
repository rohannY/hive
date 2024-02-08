import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

export default function PostCard() {
  const [loaded, isLoaded] = useState(false);

  return (
    <>
      <Card
        className="rounded-lg shadow-md shadow-gray-100 p-2 border 
      border-slate-100 dark:shadow-none dark:border-gray-800 cursor-pointer dark:hover:bg-slate-900 dark:hover:border-slate-600"
      >
        {loaded ? (
          <div className="space-y-3 rounded-sm px-10 py-8">
            <Skeleton className="w-full h-[20px] rounded-full" />
            <div className="space-y-2">
              <Skeleton className="w-full h-[10px] rounded-sm" />
              <Skeleton className="w-5/6 h-[10px] rounded-sm" />
              <Skeleton className="w-5/6 h-[10px] rounded-sm" />
            </div>
          </div>
        ) : (
          <div>
            <CardHeader>
              <CardTitle className="tracking-wide text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </CardTitle>
            </CardHeader>
            <CardContent className="text-md pb-6 text-zinc-700 dark:text-zinc-500 flex space-x-4">
              <img
                src="https://source.unsplash.com/random/150x100"
                className="rounded"
              />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam ducimus praesentium iure. Dolor, dignissimos minus ab,
                minima quasi repellat vel, illum quidem doloremque magnam autem
                non fugit. Voluptate, sunt eos!
              </p>
            </CardContent>
            <div className="mx-5">
              <Separator />
            </div>
            <CardFooter className="py-2 flex justify-between ">
              <div className="flex gap-3 items-center">
                <p className="text-blue-500 font-medium">Sports</p>
                <p className="text-sm text-slate-400">12hr ago</p>
              </div>
              <div className="flex space-x-2">
                <ToggleGroup type="single">
                  <ToggleGroupItem value="+1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  </ToggleGroupItem>
                  <p>30</p>
                  <ToggleGroupItem value="b">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </CardFooter>
          </div>
        )}
      </Card>
    </>
  );
}
