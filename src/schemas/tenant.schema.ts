import { z } from "zod";

export const tenantSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  propertyId: z.string().min(1, "Please select a property"),
  propertyName: z.string().min(1, "Property name is required"),
  leaseStart: z.string().min(1, "Lease start date is required"),
  leaseEnd: z.string().min(1, "Lease end date is required"),
  monthlyRent: z.coerce.number().min(0, "Monthly rent must be positive"),
});

export type TenantFormData = z.infer<typeof tenantSchema>;
