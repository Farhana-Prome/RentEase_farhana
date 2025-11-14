import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreVertical, Edit, Trash2, Mail, Phone } from "lucide-react";
import { tenants } from "@/dummy/data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function TenantsList() {
  const handleEdit = (id: string) => {
    console.log("Edit tenant:", id);
  };

  const handleDelete = (id: string) => {
    console.log("Delete tenant:", id);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tenants.map((tenant) => (
        <Card key={tenant.id} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={tenant.avatarUrl} />
                  <AvatarFallback>{tenant.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{tenant.name}</h3>
                  <Badge variant={tenant.status === "active" ? "default" : "secondary"}>
                    {tenant.status}
                  </Badge>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleEdit(tenant.id)}>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleDelete(tenant.id)}
                    className="text-destructive"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <div className="space-y-3">
              <div className="text-sm">
                <p className="text-muted-foreground mb-1">Property</p>
                <p className="font-medium">{tenant.propertyName}</p>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>{tenant.email}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>{tenant.phone}</span>
              </div>
              
              <div className="flex items-center justify-between pt-3 border-t">
                <span className="text-sm text-muted-foreground">Monthly Rent</span>
                <span className="font-semibold text-primary">${tenant.monthlyRent.toLocaleString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
