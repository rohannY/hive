// import ReplyDialog from "./reply-dialog";
import { Reply } from "../others/type";
import { formatDistanceToNow } from "date-fns";

interface ReplyProps {
  data: Reply;
}

const _Reply: React.FC<ReplyProps> = ({ data }) => {
  return (
    <div className="border rounded-sm py-6 px-8 space-y-3">
      <div>
        <p className="text-sm text-slate-800 dark:text-slate-400">
          {data.reply_text}
        </p>
      </div>
      <div className="w-full flex place-content-between py-2 text-slate-500">
        <p className="text-sm md:text-md items-center flex flex-col md:flex-row gap-1">
          Replying to :{" "}
          <span className="text-sm text-teal-500">#{data.parent_id}</span>
        </p>
        <div className="space-x-4 flex flex-col md:flex-row items-center text-sm">
          <span className="hidden md:block">
            {data?.createdAt
              ? formatDistanceToNow(new Date(data.createdAt), {
                  addSuffix: true,
                })
              : ""}
          </span>
          <span className="text-blue-600">#{data.id}</span>
          {/* <ReplyDialog post_id={post_id} parent_id={data.id} /> */}
        </div>
      </div>
    </div>
  );
};

export default _Reply;
