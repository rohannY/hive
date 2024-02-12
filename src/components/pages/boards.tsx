import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import Create from "../post/create";

export default function Board() {
  return (
    <div className="container mx-auto font-Geist">
      <div className="sm:mx-12 my-10 space-y-6">
        <div className="flex place-content-between">
          <h1 className="font-semibold text-2xl md:pl-8 pl-4">Sports</h1>
          <Create className="" />
        </div>
        <Separator />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6 mx-2">
          <Link to="/post">
            <Card
              className="rounded-sm h-fit border border-zinc-300 dark:border-slate-800 -space-y-1 md:-space-y-3 hover:drop-shadow-xl dark:hover:bg-slate-900
             dark:hover:border-slate-700 cursor-pointer"
            >
              <CardHeader className="p-1 md:p-6">
                <img
                  loading="lazy"
                  className="p-2 rounded-sm w-[150px] h-[120px] md:w-[300px] md:h-[200px]"
                  src="https://source.unsplash.com/200x300"
                ></img>
                <CardTitle className="text-center line-clamp-2 text-sm md:text-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi possimus ratione nulla praesentium odio minus,
                  necessitatibus facilis voluptatem adipisci delectus quia?
                  Temporibus pariatur, tenetur dolores hic dolorum dolor?
                  Explicabo, velit!
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 md:p-6 md:pt-0">
                <p className="line-clamp-4 text-[10px] md:text-sm font-light text-center text-slate-600 dark:text-slate-200">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quidem magni cum temporibus porro sint labore ipsam a quia
                  sunt nesciunt est, maxime pariatur expedita optio aliquam
                  neque assumenda autem! Exercitationem.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
