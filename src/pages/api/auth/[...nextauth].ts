import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../../prisma/db";
import { NextAuthOptions } from "next-auth";
import CredentialsProviders from "next-auth/providers/credentials";
import { compare } from "bcrypt";

export const authConfig = {
    providers: [
        CredentialsProviders({
            name: "Credentials",
            credentials: {
                codeAgent: {},
                password: {}
            },
            async authorize(credentials): Promise<any> {
                if (!credentials) return null;
                const existingAgent = await prisma.agent.findUnique({
                    where: { codeAgent: credentials.codeAgent },
                });

                if (!existingAgent) {
                    return null;
                }

                const passwordMatch = await compare(credentials.password, existingAgent.password);
                console.log(passwordMatch)
                if (!passwordMatch) {
                    return null;
                }

                return {
                    id: existingAgent.id,
                    username: existingAgent.codeAgent,
                }
            },
        }),

    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks:
    {
        session: async ({ session, user }) => {
            if (session?.user) {
                session.user.id = user.id
            }
            console.log(session)
            return session;
        }
    },

    adapter: PrismaAdapter(prisma),
} satisfies NextAuthOptions;
export default NextAuth(authConfig)


// export {handler as GET  }