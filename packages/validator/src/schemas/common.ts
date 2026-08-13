import z from "zod";

const MAX_FILE_SIZE = 500 * 1024 // 500 Kb


export const imageSchema = z.instanceof(File, { message: 'Upload a image file' })
    .refine(
        (file) => file.type.toLowerCase().startsWith("image/"),
        "Upload only jpg, png",
    )
    .refine(
        (file) => file.size < MAX_FILE_SIZE,
        "File size is not more than 500 KB",
    ) // 500 Kb,

