import { z } from "zod";
import { imageSchema } from "./common";

export const createMarathonDistanceDTOSchema = z.object({
  marathonId: z.string().min(2, "At least 2 characters"),

  attemptNo: z.coerce.number().min(1, "At least 1"),

  distanceKm: z.coerce.number().min(0.001),

  description: z.string().optional(),
});

export const createMarathonDTOSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(3),
  about: z.string().min(3),

  distanceKm: z.coerce.number().min(0.001),

  location: z.string().optional(),

  startDate: z.coerce.date(),
  endDate: z.coerce.date(),

  rewards: z.array(z.string()).optional(),
  reward: z.string().min(2),

  imagePath: imageSchema.optional(),

  type: z.enum(["onsite", "virtual"]),

  distanceRule: z.preprocess(
    (value) => {
      // multipart form data sends the array as a JSON string
      if (typeof value === "string") {
        try {
          return JSON.parse(value);
        } catch {
          return value;
        }
      }
      return value;
    },
    z
      .array(
        createMarathonDistanceDTOSchema
          .extend({ distanceRuleId: z.string().optional() })
          .omit({ marathonId: true }),
      )
      .optional(),
  ),
});

export const updateMarathonDTOSchema = createMarathonDTOSchema.partial();

export const marathonsQuerySchema = z.object({
  sort: z.enum(["asc", "desc"]).default("desc"),
  type: z.enum(["onsite", "virtual"]).optional(),
  active: z.enum(["0", "1"]).optional(),
  page: z.coerce.number().int().default(1),
  size: z.coerce.number().default(20),
  search: z.string().optional(),
});

export type createMarathonInputsTypes = z.infer<typeof createMarathonDTOSchema>;
export type updateMarathonInputTypes = z.infer<typeof updateMarathonDTOSchema>;
export type marathonsQueryInputTypes = z.infer<typeof marathonsQuerySchema>;
