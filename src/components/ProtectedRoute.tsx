"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Spinner } from "@/components/svg";

export default function ProtectedRoute({ children }: any) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.replace("/login");
        }
    }, [user, loading, router]);

    // wait until auth check complete
    if (loading) 
        return (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
                <Spinner />
            </div>
        )

    // block render if no user
    if (!user) return null;

    // finally show page
    return children;
}