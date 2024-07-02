import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const Blog = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Blog Posts</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Blog Post 1</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Date: 2023-10-01</p>
            <p className="mt-2">This is a short excerpt from the blog post.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Blog Post 2</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Date: 2023-09-25</p>
            <p className="mt-2">This is a short excerpt from the blog post.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Blog Post 3</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Date: 2023-09-18</p>
            <p className="mt-2">This is a short excerpt from the blog post.</p>
          </CardContent>
        </Card>
      </div>
      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Blog;