import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "../ui/textarea";
import { DialogClose } from "../ui/dialog";
import { useState } from "react";

interface ReplyDialogProps {
  id?: number;
  type: "post" | "comment";
}

const ReplyDialog: React.FC<ReplyDialogProps> = ({ type, id }) => {
  const [comment, setComment] = useState<string>("");
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-transparent border border-cyan-500 dark:border-slate-600 text-neutral-800 dark:text-slate-300 hover:text-white">
            Reply
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] font-Geist">
          <DialogHeader>
            <DialogTitle>
              Replying to {type} #{id}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="items-center gap-4">
              <Textarea
                id="comment"
                className="col-span-3"
                onChange={(event) => setComment(event.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                type="submit"
                className="text-white"
                onClick={() => handleReply(comment, type, id)}
              >
                Comment
              </Button>
            </DialogClose>{" "}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

const handleReply = async (
  comment: string,
  type: string,
  id: number | undefined
) => {
  try {
    const response = await fetch(
      `http://localhost:7000/api/v1/post/${id}/reply`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reply_text: comment,
          parent_type: type,
          parent_id: id,
        }),
      }
    );

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage || "Failed to send reply");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error sending reply:", error);
    throw error;
  }
};

export default ReplyDialog;
