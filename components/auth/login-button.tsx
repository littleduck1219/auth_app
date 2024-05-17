"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
}

export const LoginButton = ({ children, mode = "redirect", asChild }: LoginButtonProps) => {
    const router = useRouter();

    if (mode === "modal") {
        return <span>TODO: Implement modal</span>;
    }

    const onClick = () => {
        console.log("clicked");
        router.push("/auth/login");
    };

    return <span onClick={onClick}>{children}</span>;
};
