import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  AvatarIcon,
  CaretSortIcon,
  ChatBubbleIcon,
  EyeNoneIcon,
  MixIcon,
} from "@radix-ui/react-icons";

export default function Landing() {
  return (
    <div className="container mx-auto font-Geist h-screen">
      <div className="py-10 space-y-6 mb-20">
        <div className="rounded-[40px] bg-[#FFF1EE] h-[80vh] p-10 flex flex-col items-center">
          <p className="pt-32 pb-4 text-[70px] font-Nunito font-semibold text-center tracking-widest text-[#723838]">
            HIVE
          </p>
          <p className="lg:px-32 text-xl tracking-wider text-center text-[#6e3434cc]">
            A buzzing community platform where every voice matters.
            <br /> Join us and become part of the hive mind.
          </p>
          <Link to={"/home"}>
            <Button className="my-10 rounded-full w-[140px] h-[50px] text-md bg-[#6a3e3e1f] text-[#723838] tracking-widest hover:bg-[#3d2121] hover:text-[#f49072]">
              Visit Site
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 py-10 lg:px-32 gap-10">
          <div className="w-full bg-[#ff3b0026] rounded-[40px] py-20 lg:py-24 px-10 lg:px-20 space-y-6">
            <EyeNoneIcon className="w-8 h-8" style={{ color: "#bc2c00c5" }} />
            <p className="text-4xl font-semibold font-Nunito text-[#bc2c00c5]">
              Anonymous
            </p>
            <p className="text-lg text-[#c42f02dc]">
              Express yourself freely without revealing your identity. Your
              words, your thoughts, your anonymity
            </p>
          </div>

          <div className="w-full bg-[#00d8cb36] rounded-[40px] py-20 lg:py-24 px-10 lg:px-20 space-y-6">
            <CaretSortIcon className="w-8 h-8" style={{ color: "#005e81" }} />
            <p className="text-4xl font-semibold font-Nunito text-[#005e81]">
              Votes
            </p>
            <p className="text-lg text-[#005e81]">
              Upvote and downvote content to curate and rank the best
              submissions.
            </p>
          </div>

          <div className="w-full bg-[#5a2b2b0a] rounded-[40px] py-20 lg:py-24 px-10 lg:px-20 space-y-6">
            <ChatBubbleIcon className="w-8 h-8" style={{ color: "#723838" }} />
            <p className="text-4xl font-semibold font-Nunito text-[#723838] ">
              Comments
            </p>
            <p className="text-lg text-[#6e3434bf]">
              Facilitate threaded discussions through comments beneath each
              post.
            </p>
          </div>

          <div className="w-full bg-[#ffc50026] rounded-[40px] py-20 lg:py-24 px-10 lg:px-20 space-y-6">
            <MixIcon className="w-8 h-8" style={{ color: "#723838" }} />
            <p className="text-4xl font-semibold font-Nunito text-[#723838] ">
              About
            </p>
            <p className="text-lg text-[#6e3434bf]">
              This is just a taste of what I'm capable of. Visit my{" "}
              <Link
                to="https://rohanny.me/"
                className="text-[#208dcccc] underline underline-offset-4"
              >
                {" "}
                portfolio{" "}
              </Link>{" "}
              to see more innovative projects.
            </p>
          </div>
        </div>

        <Separator />
      </div>
    </div>
  );
}
