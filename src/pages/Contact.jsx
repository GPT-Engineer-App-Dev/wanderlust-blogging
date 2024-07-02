import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Contact Me</h1>
      <form className="max-w-lg mx-auto space-y-4">
        <div>
          <label htmlFor="name" className="block text-left mb-1">Name</label>
          <Input id="name" type="text" placeholder="Your Name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-left mb-1">Email</label>
          <Input id="email" type="email" placeholder="Your Email" />
        </div>
        <div>
          <label htmlFor="message" className="block text-left mb-1">Message</label>
          <Textarea id="message" placeholder="Your Message" />
        </div>
        <Button type="submit" className="w-full">Send Message</Button>
      </form>
      <div className="mt-8">
        <h2 className="text-2xl mb-4">Follow Me</h2>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-muted-foreground hover:text-foreground">Twitter</a>
          <a href="#" className="text-muted-foreground hover:text-foreground">LinkedIn</a>
          <a href="#" className="text-muted-foreground hover:text-foreground">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;