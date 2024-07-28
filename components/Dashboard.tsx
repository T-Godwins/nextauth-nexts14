"use client";

import { signIn, useSession } from "next-auth/react"
import React from "react"

const Dashboard = () => {
    const { data: session } = useSession();

    return(
        <>
            { session ? (
                <>
                <h1 className="text-white">Welcome back</h1>
                </>
            ) : (
                <>
                <h1 className="text-3xl text-red-500 font-bold">You're not logged in</h1>
                <button onClick ={() => signIn("google")} className="border border-white rounded-lg p-2 bg-blue-800">Sign in with google</button>
                <button onClick ={() => signIn("github")} className="border border-white rounded-lg p-2 bg-blue-800">Sign in with github</button>
                </>
            )}
        </>
    );
};

export default Dashboard