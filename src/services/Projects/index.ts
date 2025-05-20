/* eslint-disable @typescript-eslint/no-explicit-any */
export const getProjects = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            next: {
                tags: ["projects"],
            },
        });
        const result = await res.json();

        return result;
    } catch (error: any) {
        return Error(error);
    }
}
export const getSingleProject = async (id: any) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            next: {
                tags: ["projects"],
            },
        });
        const result = await res.json();
        return result;
    } catch (error: any) {
        return Error(error);
    }
}
