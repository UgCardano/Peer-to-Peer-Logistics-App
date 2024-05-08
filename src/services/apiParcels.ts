const BASE_URL = "https://fakestoreapi.com/products";

export interface ArticleType {
  id: number;
  title: string;
  description: string;
  image: string;
}

export async function getParcels(signal: AbortSignal): Promise<ArticleType[]> {
  const response = await fetch(BASE_URL, {
    signal: signal,
  });
  const data = await response.json();

  return data;
}

export async function getSignleParcel(
  id: number,
  signal: AbortSignal
): Promise<ArticleType> {
  const response = await fetch(`${BASE_URL}/${id}`, { signal });
  const data = await response.json();

  return data;
}
