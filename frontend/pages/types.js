import {z} from "zod";

export const personalInfoSchema = z.object(
    {
        firstName: z.string().min(1, "First Name is required"),
        email: z.string().email("Invalid Email Address"),
        phone: z.string().min(10, "Phone number is short")
    }
)

