import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "../ui/textarea";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { CaretSortIcon, CheckIcon, PlusIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const topics = [
  {
    value: "sports",
    label: "Sports",
  },
  {
    value: "politics",
    label: "Politics",
  },
  {
    value: "technology",
    label: "Technology",
  },
  {
    value: "entertainment",
    label: "Entertainment",
  },
  {
    value: "science",
    label: "Science",
  },
];

function addPost(title: string, description: string) {
  // let db = fb.firestore();
  // const Blogs = db.collection("blogs");
  console.log("Title :" + title);
  console.log("Description :" + description);
}

const Create: React.FC<{ className: string }> = ({ className }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className={cn(
              "text-white space-x-3 flex items-center bg-blue-700",
              className
            )}
          >
            <span>Add Post</span>
            <PlusIcon className={cn("h-4 w-4 stroke-current")} />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] font-Geist">
          <DialogHeader className="space-y-5">
            <DialogTitle className="text-2xl">Create Post</DialogTitle>
            <DialogDescription>
              Post responsibly. Failure to adhere to community guidelines will
              result in automatic deletion of your post.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-3 py-4">
            <div className="grid w-full gap-3">
              <Label htmlFor="title">Title</Label>
              <Input
                className="rounded"
                placeholder="Any Title"
                id="title"
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
            <div className="grid w-full gap-3">
              <Label htmlFor="description">Description</Label>
              <Textarea
                className="rounded"
                placeholder="Type your message here."
                id="description"
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
            <div className="grid w-full space-y-2">
              {/* Category Start */}
              <Popover open={open} onOpenChange={setOpen}>
                <span>Category</span>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between rounded"
                  >
                    {value
                      ? topics.find((topic) => topic.value === value)?.label
                      : "Select topic..."}
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0 font-Geist">
                  <Command>
                    <CommandInput
                      placeholder="Search topic..."
                      className="h-9"
                    />
                    <CommandEmpty>No topic found.</CommandEmpty>
                    <CommandGroup>
                      {topics.map((topic) => (
                        <CommandItem
                          key={topic.value}
                          value={topic.value}
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? "" : currentValue
                            );
                            setOpen(false);
                          }}
                          className="rounded cursor-pointer"
                        >
                          {topic.label}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              value === topic.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              {/* Category end */}
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="hover:text-white"
              onClick={() => addPost(title, description)}
            >
              Create
            </Button>
            <p></p>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Create;
