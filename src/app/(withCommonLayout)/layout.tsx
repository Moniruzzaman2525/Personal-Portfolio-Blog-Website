import Navbar from "@/components/shared/Navbar";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { ReactNode } from "react";

interface CommonLayoutProps {
    children: ReactNode;
}

const CommonLayout = async ({ children }: CommonLayoutProps) => {
    const session = await getServerSession(authOptions);
    return (
        <div>
            <Navbar session={session} />
            <div className="min-h-screen w-[90%] mt-20 mx-auto">
                {children}
            </div>
        </div>
    );
};

export default CommonLayout;
