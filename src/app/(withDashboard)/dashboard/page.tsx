import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";


const DashboardPage = async () => {
    const session = await getServerSession(authOptions)
    return (
        <div>
            <h1 className="text-4xl text-center mt-10">
                Welcome {session?.user?.name}
           </h1>
            <h1 className="text-4xl text-center mt-10">
                Welcome {session?.user?.email}
           </h1>
        </div>
    );
};

export default DashboardPage;
