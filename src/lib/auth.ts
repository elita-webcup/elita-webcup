import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import {cookies} from "next/headers";
import prisma from "../../prisma/db";
import {compare} from "bcrypt";


export const handlers = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            id:"credentials",
            credentials:{
                codeAgent: {
                    label:"email",
                    type:"text",
                    placeholder: "Type here your email"
                },
                password:{
                    label:"Password",
                    type:"text",
                    placeholder: "your-cool-password"
                }
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
})