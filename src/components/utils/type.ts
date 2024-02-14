export interface Post {
  votes: number;
  id: number;
  title: string;
  description: string;
  category: string;
  images: string | undefined;
  createdAt: string;
  replies: Reply[];
}

export interface Reply {
  reply_text: string;
  parent_id: string;
  parent_type: "post" | "comment";
  id: number;
  createdAt: string;
}
