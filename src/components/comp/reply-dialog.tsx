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

export default function ReplyDialog() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-transparent border border-emerald-500 dark:border-slate-100 text-neutral-800 dark:text-white hover:text-white">
            Reply
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] font-Geist">
          <DialogHeader>
            <DialogTitle>Reply to Thread No. 312313</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="items-center gap-4">
              <Textarea id="name" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Comment</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
