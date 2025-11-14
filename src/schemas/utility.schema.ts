import { z } from "zod";

export const utilitySchema = z.object({
  propertyId: z.string().min(1, "Please select a property"),
  type: z.string().min(1, "Please select a utility type"),
  provider: z.string().min(2, "Provider name must be at least 2 characters"),
  accountNumber: z.string().min(2, "Account number is required"),
  monthlyAverage: z.coerce.number().min(0, "Monthly average must be positive"),
  lastBillAmount: z.coerce.number().min(0, "Last bill amount must be positive"),
  dueDate: z.string().min(1, "Due date is required"),
});

export type UtilityFormData = z.infer<typeof utilitySchema>;
