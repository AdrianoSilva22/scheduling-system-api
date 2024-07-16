import { hash } from "bcrypt"

export const passwordHash = async (password: string) => {
    return await hash(password, 10)
}