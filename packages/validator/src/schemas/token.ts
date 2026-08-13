import z from "zod";

export const revokeTokenSchema = z.object({
    refreshToken: z.string().min(3, "Enter refresh token")
})

export type RevokeTokenSchemaType = z.infer<typeof revokeTokenSchema> 