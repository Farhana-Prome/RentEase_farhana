import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreVertical, Edit, Trash2 } from "lucide-react";
import { properties } from "@/dummy/data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function PropertiesList() {
  const handleEdit = (id: string) => {
    console.log("Edit property:", id);
  };

  const handleDelete = (id: string) => {
    console.log("Delete property:", id);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div 
            className="h-48 bg-cover bg-center"
            style={{ backgroundImage: `url(${property.imageUrl})` }}
          />
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-lg mb-1">{property.name}</h3>
                <p className="text-sm text-muted-foreground">{property.address}</p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleEdit(property.id)}>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleDelete(property.id)}
                    className="text-destructive"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <div className="space-y-2">
              <Badge variant="secondary">{property.type}</Badge>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Units</span>
                <span className="font-medium">
                  {property.occupiedUnits}/{property.units}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Monthly Rent</span>
                <span className="font-semibold text-primary">
                  ${property.monthlyRent.toLocaleString()}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
