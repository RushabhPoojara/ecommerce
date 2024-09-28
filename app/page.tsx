import { Container } from "@/components/container";
import { Navbar } from "@/components/navbar/navbar";
import { Table } from "@/components/table";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="w-full h-auto flex flex-col">
      <Navbar/>
      <Container>
        <Card className="bg-muted-foreground/5">
          <CardHeader></CardHeader>
          <CardContent className="">
            <Table/>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
