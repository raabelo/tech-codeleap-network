import { cookies } from "next/headers";

export async function getUser() {
    const storage = await cookies();
    
    const token = storage.get("token")?.value;

    if (!token) return null;

    // validar token / buscar usuário
    return { id: 1, name: "User" };
}
