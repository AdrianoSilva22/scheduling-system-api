import { hash } from "bcryptjs"

export const passwordHash = async (password: string) => {
    return await hash(password, 10)
}