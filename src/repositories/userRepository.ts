import { prisma } from "../config/database.js";
import { User } from "../protocols.js";

export async function insertUserDB(user:User) {
    await prisma.users.create({
        data:user
    });
}