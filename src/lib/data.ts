export async function getData<T>(): Promise<T> {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL!);
  const data = (await res.json()) as T;

  return data;
}
