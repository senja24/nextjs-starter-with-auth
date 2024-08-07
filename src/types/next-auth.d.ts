import type { DefaultSession } from "next-auth"
import type { AdapterUser as PrismaAdapterUser } from "@auth/prisma-adapter"

export type Role = "USER" | "ADMIN"

declare module "next-auth" {
    interface User {
        role: Role
    }

    interface Session {
        user: User & DefaultSession["user"]
    }
}

declare module "@auth/core/adapters" {
    interface AdapterUser extends PrismaAdapterUser {
        role: Role
    }
}
