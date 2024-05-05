import NextAuth , {AuthOptions ,} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions = {
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async signIn({user}) {
            console.log(user);
            return !!user;

        },
        async session( {session, token, user}) {
            return session
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: true,
    providers: [
        CredentialsProvider({
            id: "login" ,
            type: "credentials" ,
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                try{
                    return {
                        id: "12563",
                        username: "James Bond"
                    }
                } catch (e) {
                    throw new Error(e.message);
                }

            }
        })
    ],
}
export const handler = NextAuth(authOptions as AuthOptions);
export {handler as GET, handler as POST}
