import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { TenantsList } from "@/components/tenants/TenantsList";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { TenantFormDialog } from "@/components/tenants/TenantFormDialog";

const Tenants = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Tenants</h1>
            <p className="text-muted-foreground">Manage your tenants and leases</p>
          </div>
          <Button onClick={() => setIsDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Tenant
          </Button>
        </div>
        
        <TenantsList />
        <TenantFormDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      </div>
    </DashboardLayout>
  );
};

export default Tenants;
