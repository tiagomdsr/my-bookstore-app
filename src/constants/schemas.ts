import { z } from "zod";

const loginSchema = z.object({
	email: z.string().email("Email inválido"),
	password: z.string().min(6, "A senha precisa de pelo menos 6 caracteres"),
});

export type LoginData = z.infer<typeof loginSchema>
