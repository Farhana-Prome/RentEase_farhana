import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreVertical, Edit, Trash2 } from "lucide-react";
import { utilities } from "@/dummy/data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function UtilitiesList() {
  const handleEdit = (id: string) => {
    console.log("Edit utility:", id);
  };

  const handleDelete = (id: string) => {
    console.log("Delete utility:", id);
  };

  const getStatusVariant = (status: string) => {
    return status === "paid" ? "default" : "secondary";
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Utility Bills</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Property</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Provider</TableHead>
              <TableHead>Account #</TableHead>
              <TableHead>Last Bill</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {utilities.map((utility) => (
              <TableRow key={utility.id}>
                <TableCell className="font-medium">{utility.propertyName}</TableCell>
                <TableCell>
                  <Badge variant="outline">{utility.type}</Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{utility.provider}</TableCell>
                <TableCell className="text-muted-foreground">{utility.accountNumber}</TableCell>
                <TableCell className="font-semibold">${utility.lastBillAmount}</TableCell>
                <TableCell>{utility.dueDate}</TableCell>
                <TableCell>
                  <Badge variant={getStatusVariant(utility.status)}>
                    {utility.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleEdit(utility.id)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => handleDelete(utility.id)}
                        className="text-destructive"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
