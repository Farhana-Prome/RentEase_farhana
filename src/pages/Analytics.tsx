import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { AnalyticsOverview } from "@/components/analytics/AnalyticsOverview";
import { RevenueChart } from "@/components/analytics/RevenueChart";
import { OccupancyChart } from "@/components/analytics/OccupancyChart";

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-muted-foreground">Performance insights and trends</p>
        </div>
        
        <AnalyticsOverview />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RevenueChart />
          <OccupancyChart />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
