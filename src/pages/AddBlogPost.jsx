import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const AddBlogPost = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date || !content) {
      toast.error("All fields are required.");
      return;
    }

    const newPost = { title, date, content };
    const existingPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    localStorage.setItem("blogPosts", JSON.stringify([...existingPosts, newPost]));

    toast.success("Blog post added successfully!");
    navigate("/blog");
  };

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl mb-4">Add New Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-left mb-1">Title</label>
          <Input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="date" className="block text-left mb-1">Date</label>
          <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div>
          <label htmlFor="content" className="block text-left mb-1">Content</label>
          <Textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <Button type="submit" className="w-full">Add Post</Button>
      </form>
    </div>
  );
};

export default AddBlogPost;