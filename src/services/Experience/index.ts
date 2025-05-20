/* eslint-disable @typescript-eslint/no-explicit-any */

export const getExperience = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/experience`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            next: {
                tags: ["experience"],
            },
        });
        const result = await res.json();
        return result;
    } catch (error: any) {
        return Error(error);
    }
}
