import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { payments } from "@/dummy/data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function PaymentsList() {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "paid":
        return "default";
      case "pending":
        return "secondary";
      case "overdue":
        return "destructive";
      default:
        return "secondary";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tenant</TableHead>
              <TableHead>Property</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Paid Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell className="font-medium">{payment.tenantName}</TableCell>
                <TableCell className="text-muted-foreground">{payment.propertyName}</TableCell>
                <TableCell className="font-semibold">${payment.amount.toLocaleString()}</TableCell>
                <TableCell>{payment.dueDate}</TableCell>
                <TableCell>{payment.paidDate || "-"}</TableCell>
                <TableCell>
                  <Badge variant={getStatusVariant(payment.status)}>
                    {payment.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{payment.method || "-"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
