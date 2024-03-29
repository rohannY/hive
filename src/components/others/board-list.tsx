import { Separator } from "../ui/separator";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { topics } from "../utils/topics";

export default function BoardList() {
  return (
    <>
      <div className="p-6 my-4 lg:my-20 bg-white border border-zinc-300 rounded-2xl shadow  dark:bg-[#020817] dark:border-gray-800">
        <h2 className="text-xl font-medium pb-3 pl-3">Boards</h2>
        <Separator />
        <div className="py-3 space-y-1">
          <div className="text-md dark:text-slate-400 text-slate-600">
            {topics.map((topic) => (
              <Link to={`/board/${topic.value}`}>
                <div className="p-3 flex items-center place-content-between hover:bg-blue-400 hover:shadow-md dark:hover:bg-blue-600 hover:text-white rounded-sm cursor-pointer">
                  <p>{topic.label}</p>
                  <ArrowRightIcon />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
