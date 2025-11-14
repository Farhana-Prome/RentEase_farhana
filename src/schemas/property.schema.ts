import { z } from "zod";

export const propertySchema = z.object({
  name: z.string().min(2, "Property name must be at least 2 characters"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  type: z.string().min(1, "Please select a property type"),
  units: z.coerce.number().min(1, "Units must be at least 1"),
  monthlyRent: z.coerce.number().min(0, "Monthly rent must be positive"),
  imageUrl: z.string().url("Please enter a valid URL").optional(),
});

export type PropertyFormData = z.infer<typeof propertySchema>;
