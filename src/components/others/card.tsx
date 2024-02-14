import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { ThickArrowDownIcon, ThickArrowUpIcon } from "@radix-ui/react-icons";
import { Post } from "../utils/type";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";

export default function CardList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const loadPost = () => {
    fetch("http://localhost:7000/api/v1/post")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success && Array.isArray(data.data)) {
          setPosts(data.data);
          setLoading(false);
          console.log(data);
        } else {
          console.error("Error: Data received is not in the expected format");
        }
      })
      .catch((error) => console.error("Error fetching posts:", error.message));
  };

  useEffect(() => {
    loadPost();
  }, []);

  if (loading)
    return (
      <>
        <div className="space-y-3 rounded-sm p-10 border">
          <Skeleton className="w-full h-[20px] rounded-full" />
          <div className="space-y-2">
            <Skeleton className="w-full h-[10px] rounded-sm" />
            <Skeleton className="w-5/6 h-[10px] rounded-sm" />
            <Skeleton className="w-5/6 h-[10px] rounded-sm" />
          </div>
        </div>
        <div className="space-y-3 rounded-sm p-10 border">
          <Skeleton className="w-full h-[20px] rounded-full" />
          <div className="space-y-2">
            <Skeleton className="w-full h-[10px] rounded-sm" />
            <Skeleton className="w-5/6 h-[10px] rounded-sm" />
            <Skeleton className="w-5/6 h-[10px] rounded-sm" />
          </div>
        </div>
      </>
    );

  if (posts.length === 0) return <div>there are no videos yet</div>;

  return (
    <>
      {posts.map((post) => (
        <Card
          className="rounded-md shadow-sm shadow-gray-100 p-2 border 
      border-slate-300 dark:shadow-none dark:border-gray-800 cursor-pointer hover:drop-shadow-xl dark:hover:bg-slate-900 dark:hover:border-slate-600"
          key={post.id}
        >
          <Link to={`/post/${post.id}`}>
            <CardHeader>
              <CardTitle className="tracking-wide text-md md:text-lg">
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-md pb-6 text-zinc-700 dark:text-zinc-500 flex flex-col md:flex-row md:space-x-4">
              <img src={post.images} className="rounded" />
              <p className="line-clamp-4 py-1">{post.description}</p>
            </CardContent>
            <div className="mx-5">
              <Separator />
            </div>
          </Link>

          <CardFooter className="pt-2 pb-4 flex justify-between ">
            <div className="flex h-5 items-center space-x-4 text-sm">
              <p className="text-blue-500 font-medium">{post.category}</p>
              <Separator orientation="vertical" />
              <p className="text-sm text-slate-400">
                {formatDistanceToNow(new Date(post.createdAt), {
                  addSuffix: true,
                })}
              </p>
            </div>

            <div className="space-x-2 hidden md:flex">
              <ToggleGroup type="single">
                <ToggleGroupItem value="+1">
                  <ThickArrowUpIcon className="w-6 h-5" />
                </ToggleGroupItem>
                <p>{post.votes}</p>
                <ToggleGroupItem value="b">
                  {" "}
                  <ThickArrowDownIcon className="w-6 h-5" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
