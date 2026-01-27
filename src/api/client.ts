export const BASE_URL = import.meta.env.VITE_API_URL ?? ''

export async function fetchData<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(BASE_URL + url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers as Record<string, string> | undefined),
    },
  })
  if (!res.ok) throw new Error(res.statusText || `HTTP ${res.status}`)
  return res.json() as Promise<T>
}

export function normalizeError(e: unknown): string {
  if (e instanceof Error) return e.message
  if (e && typeof e === 'object' && 'message' in e)
    return String((e as { message?: unknown }).message)
  return String(e)
}
