import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import GitHubProvider from  "next-auth/providers/github"
import prisma from "../../prisma/db";
import {compare} from "bcrypt";


// @ts-ignore
// @ts-ignore
export const handlers = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            id:"credentials",
            credentials:{
                username: {
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
                const authResponse = await prisma.agent.findUnique({
                    where:{codeAgent: credentials?.username}
                })
                if(!authResponse){
                    return null
                }
                const passwordMatcher = await compare(credentials?.password!,authResponse.password!)
                if (!passwordMatcher) {
                    return null
                }

                const user = {
                    name:authResponse.codeAgent,
                    id:authResponse.id,
                    email:authResponse.email,
                }
                return user
            }
        }),
    ],
    callbacks:{
        async signIn({ user, account, profile, email, credentials}){

            return true
        },
    },
})