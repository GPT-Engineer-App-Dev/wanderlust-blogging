import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Welcome to My Blog</h1>
      <p className="mb-8">A place to share my thoughts and experiences.</p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Recent Post 1</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Date: 2023-10-01</p>
            <p className="mt-2">This is a short excerpt from the recent post.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Post 2</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Date: 2023-09-25</p>
            <p className="mt-2">This is a short excerpt from the recent post.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Post 3</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Date: 2023-09-18</p>
            <p className="mt-2">This is a short excerpt from the recent post.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;