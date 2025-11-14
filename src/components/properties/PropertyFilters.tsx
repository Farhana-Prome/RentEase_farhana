import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

export function PropertyFilters() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search properties..." 
          className="pl-10"
        />
      </div>
      <Select defaultValue="all">
        <SelectTrigger className="w-full sm:w-[200px]">
          <SelectValue placeholder="Property Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          <SelectItem value="apartment">Apartment Complex</SelectItem>
          <SelectItem value="loft">Loft Complex</SelectItem>
          <SelectItem value="townhouse">Townhouse</SelectItem>
          <SelectItem value="studio">Studio Complex</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
