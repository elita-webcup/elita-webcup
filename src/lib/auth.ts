import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
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
            async authorize(credentials):Promise<any> {
                if(!credentials) return null
                const agent = await prisma.agent.findUnique({
                    where: { codeAgent: credentials.codeAgent },
                });
                if (!agent) {
                    return null
                }
                const passwordMatch = await compare(credentials.password, agent.password);
                console.log(passwordMatch)
                if (!passwordMatch) {
                    return null;
                }
                const user = {
                    name:agent.codeAgent,
                    id:agent.id,
                    email:agent.email,
                    image:agent.role

                }
                return user
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
            },
            async signIn({ user, account, profile, email, credentials}){

                return true
            },
        },
})
