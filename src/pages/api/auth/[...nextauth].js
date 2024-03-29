import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions = {
  providers: [
    // For testing purposes using the default login page
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = await credentials;

        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`,
          {
            email,
            password,
          }
        );

        console.log(response?.data?.result + "this is token");
        if (response?.data.result?.accessToken) {
          return response?.data?.result;
        } else {
          return null;
        }
        // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      },
    }),

    // ... other providers
  ],
  // callbacks: {
  //   async jwt({ token, user }) {
  //     if (user) {
  //       token.accessToken = await user.accessToken;
  //       token.isVerified = await user.isVerified;
  //       token.name = `${user.firstName} ${user.lastName}`;
  //       console.log(token);
  //       console.log("token");
  //       return token;
  //     }
  //   },
  //   async session({ session, token }) {
  //     console.log(token);
  //     console.log("session");
  //     if (token) {
  //       session.user.accessToken = await token.accessToken;
  //       session.user.isVerified = await token.isVerified;
  //       session.user.email = await token.email;
  //       console.log(session);
  //       console.log("session in");
  //       return session;
  //     }
  //     return null;
  //   },
  // },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.isVerified = user.isVerified;
        token.name = `${user.firstName} ${user.lastName}`;
        console.log(token);
        console.log("token");
      }
      return Promise.resolve(token);
    },
    async session({ session, token }) {
      console.log(token);
      console.log("session");
      if (token) {
        session.user.accessToken = token.accessToken;
        session.user.isVerified = token.isVerified;
        session.user.email = token.email;
        console.log(session);
        console.log("session in");
        return session;
      }
    },
  },
  // Configure other NextAuth options as needed
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  pages: { signIn: "/" },
};

export default NextAuth(authOptions);
