import { Link, useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import Create from "../post/create";
import { useEffect, useState } from "react";
import { Post } from "../utils/type";
import { Component1Icon } from "@radix-ui/react-icons";

export default function Board() {
  const { category } = useParams<{ category: string }>();
  const [posts, setPosts] = useState<Post[]>([]);

  const loadPost = () => {
    fetch(`http://localhost:7000/api/v1/post/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success && Array.isArray(data.data)) {
          const formattedPosts: Post[] = data.data;
          setPosts(formattedPosts.filter((post) => post.category === category));
        } else {
          console.error("Error: Data received is not in the expected format");
        }
      })
      .catch((error) => console.error("Error fetching posts:", error.message));
  };

  useEffect(() => {
    loadPost();
  }, []);

  return (
    <div className="container mx-auto font-Geist h-full">
      <div className="sm:mx-12 my-10 space-y-6">
        <div className="flex place-content-between">
          <h1 className="font-semibold text-2xl md:pl-8 pl-4">
            {category!.charAt(0).toUpperCase() +
              category!.slice(1).toLowerCase()}
          </h1>
          <Create className="" />
        </div>
        <Separator />

        {posts?.length === 0 ? (
          <div className="flex flex-col items-center py-24 space-y-2">
            <Component1Icon className="w-10 h-10" />
            <p className="text-xl font-medium dark:text-neutral-300">
              Wow! Such a quiet one here
            </p>
            <p className="dark:text-neutral-400">Be the first one to post</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6 mx-2">
            {posts.map((post, index) => (
              <Link to={`/post/${post.id}`} key={index}>
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
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 md:p-6 md:pt-0">
                    <p className="line-clamp-4 text-[10px] md:text-sm font-light text-center text-slate-600 dark:text-slate-200">
                      {post.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
