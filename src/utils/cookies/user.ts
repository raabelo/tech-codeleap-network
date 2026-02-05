export function setUser(username: string, days = 7) {
    if (!username) return;

    const expires = new Date();
    expires.setDate(expires.getDate() + days);

    document.cookie = `username=${encodeURIComponent(
        username,
    )}; expires=${expires.toUTCString()}; path=/`;
}

export function getUser(): string | null {
    if (typeof document === "undefined") return null;

    const cookies = document.cookie.split("; ");

    const userCookie = cookies.find((row) => row.startsWith("username="));

    if (!userCookie) return null;

    return decodeURIComponent(userCookie.split("=")[1]);
}

export function removeUser() {
    if (typeof document === "undefined") return null;

    document.cookie = "username=; path=/; max-age=0";
}
