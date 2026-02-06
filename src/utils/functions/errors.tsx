interface ErrorResponse {
    error?: string;
}

interface ApiError {
    response?: {
        data?: ErrorResponse;
    };
    data?: ErrorResponse;
    message?: string;
}

export function getErrorMessage(err: ApiError): string {
    return err?.response?.data?.error || err?.data?.error || err?.message || "Unknown error";
}

export async function handleResponse<T>(res: Response): Promise<T> {
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Unknown error");
    return data;
}
