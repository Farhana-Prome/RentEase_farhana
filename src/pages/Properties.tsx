import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { PropertiesList } from "@/components/properties/PropertiesList";
import { PropertyFilters } from "@/components/properties/PropertyFilters";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { PropertyFormDialog } from "@/components/properties/PropertyFormDialog";

const Properties = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Properties</h1>
            <p className="text-muted-foreground">Manage your rental properties</p>
          </div>
          <Button onClick={() => setIsDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Property
          </Button>
        </div>
        
        <PropertyFilters />
        <PropertiesList />
        <PropertyFormDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      </div>
    </DashboardLayout>
  );
};

export default Properties;
