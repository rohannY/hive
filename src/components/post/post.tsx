import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import _Reply from "./reply";
import ReplyDialog from "./reply-dialog";
import BoardList from "../others/board-list";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Post } from "../others/type";
import { formatDistanceToNow } from "date-fns";

export default function _Post() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post>();

  const loadById = () => {
    fetch(`http://localhost:7000/api/v1/post/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data.data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching posts:", error.message));
  };

  useEffect(() => {
    loadById();
  }, []);

  return (
    <div className="container mx-auto font-Geist pb-12">
      <div className="p-2 w-full max-h-screen">
        <div className="flex flex-col lg:grid lg:grid-cols-5">
          <div className="hidden md:block col-span-1 order-last lg:-order-1 mx-8 lg:mx-2 ">
            <BoardList />
          </div>
          <div className="col-span-3">
            <div className="py-3 space-y-4 md:mx-10">
              <h2 className="text-2xl font-bold dark:text-gray-100">
                {post?.category}
              </h2>
              <Separator />
            </div>
            <div className="md:mx-6 md:p-2 space-y-5 mb-2">
              <Card className="shadow-none border border-cyan-400 dark:border-cyan-800 p-2">
                <div>
                  <CardHeader>
                    <CardTitle className="tracking-wide text-md md:text-lg">
                      {post?.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm md:text-md pb-6 text-slate-800 dark:text-slate-400">
                    {post?.description}
                  </CardContent>
                  <div className="mx-6">
                    <Separator />
                  </div>
                  <CardFooter className="py-2 flex justify-between">
                    <div className="flex gap-3 items-center">
                      <p className="text-[10px] w-10 md:w-auto md:text-sm text-slate-400">
                        {post?.createdAt
                          ? formatDistanceToNow(new Date(post.createdAt), {
                              addSuffix: true,
                            })
                          : ""}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-sm text-blue-600">#{post?.id}</p>
                      <ReplyDialog type="post" id={post?.id} />
                    </div>
                  </CardFooter>
                </div>
              </Card>
            </div>
            {/* Replies */}
            <div className="py-2 md:mx-8 space-y-4">
              {post?.replies.map((reply, index) => (
                <_Reply key={index} data={reply} />
              ))}
            </div>
            {/* Replies End */}
          </div>

          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
}
