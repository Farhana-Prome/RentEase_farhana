import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { UtilitiesList } from "@/components/utilities/UtilitiesList";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { UtilityFormDialog } from "@/components/utilities/UtilityFormDialog";

const Utilities = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Utilities Management</h1>
            <p className="text-muted-foreground">Track utility bills and expenses</p>
          </div>
          <Button onClick={() => setIsDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Utility
          </Button>
        </div>
        
        <UtilitiesList />
        <UtilityFormDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      </div>
    </DashboardLayout>
  );
};

export default Utilities;
