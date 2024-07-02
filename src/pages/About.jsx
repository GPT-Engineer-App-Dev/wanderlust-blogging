import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

const About = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">About Me</h1>
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>John Doe</CardTitle>
        </CardHeader>
        <CardContent>
          <Avatar className="mx-auto mb-4" src="/images/author.jpg" alt="Author's photo" />
          <p>Hello! I'm John Doe, the author of this blog. I love writing about technology, travel, and personal development. This blog is a place where I share my thoughts, experiences, and ideas with the world. Thank you for visiting!</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;