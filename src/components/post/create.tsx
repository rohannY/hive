import {
  Dialog,
  DialogClose,
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
import { topics } from "../utils/topics";
import { useToast } from "@/components/ui/use-toast";

const Create: React.FC<{ className: string }> = ({ className }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [category, setCategory] = useState<string>("");
  const { toast } = useToast();

  async function addPost(title: string, description: string, category: string) {
    try {
      const response = await fetch("http://localhost:7000/api/v1/post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          description: description,
          category: category,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add post");
      }

      const data = await response.json();
      console.log("Data Successfully Submitted:", data);
      return data;
    } catch (error: any) {
      console.error("Error adding document:", error.message);
      throw error;
    }
  }

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
                    {category
                      ? topics.find((topic) => topic.value === category)?.label
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
                            setCategory(
                              currentValue === category ? "" : currentValue
                            );
                            setOpen(false);
                          }}
                          className="rounded cursor-pointer"
                        >
                          {topic.label}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              category === topic.value
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
            <DialogClose asChild>
              <Button
                type="submit"
                className="hover:text-white"
                onClick={() => {
                  if (!title || !description || !category) {
                    toast({
                      variant: "destructive",
                      title: "Error",
                      description: "Missing Values",
                    });
                  }
                  addPost(title, description, category);
                }}
              >
                Create
              </Button>
            </DialogClose>{" "}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Create;
