import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
export const NEXT_AUTH ={
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: 'Username', type: 'text', placeholder: 'Email' },
                password: { label: 'Password', type: 'password', placeholder: 'Password' }
            },
            async authorize(credentials: any) {
                console.log(credentials);
                // return null;
                return {
                    id: "user1",
                    email:credentials.username,
                    name:"manish",
                };
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
          })
    ],
    secret:process.env.NEXTAUTH_SECRET,
    callbacks:{
        jwt:({token,user}:any)=>{
            token.newField = 'newField'
            console.log(token);
            return token;
        },
        session:({session,token,user}:any)=>{
            session.user.id = token.sub
            return session
        }
    }
}