import { useEffect, useRef, useState } from "react";
import { ArticleType, getSignleParcel } from "../services/apiParcels";

export function useGetSingleParcel(parcelId: number) {
  const [parcel, setParcel] = useState<ArticleType>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    async function getProducts() {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      setIsLoading(true);
      try {
        const data = await getSignleParcel(
          parcelId,
          abortControllerRef.current?.signal
        );

        setParcel(data);
      } catch (error: any) {
        if (error.name === "AbortError") {
          return;
        }
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getProducts();
  }, [parcelId]);

  return { data: parcel, isLoading, error };
}
