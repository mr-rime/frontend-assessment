import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../api/create-product";
import type { Product } from "../schemas/product.schema";
import { getProductsQueryOptions } from "../queries/products.queries";

export const useCreateProductMutation = () => {
    const queryClient = useQueryClient();
    const { queryKey } = getProductsQueryOptions();

    const mutate = useMutation<Product, Error, Product, { previousProducts?: Product[] }>({
        mutationFn: createProduct,
        onMutate: async (newProduct) => {
            await queryClient.cancelQueries({ queryKey });

            const previousProducts = queryClient.getQueryData<Product[]>(queryKey);

            queryClient.setQueryData<Product[]>(queryKey, (old) => {
                const optimisticProduct = { ...newProduct, id: String("temp-" + Date.now()).slice(0, 7) };
                return old ? [...old, optimisticProduct] : [optimisticProduct];
            });

            return { previousProducts };
        },
        onError: (_err, _newProduct, context) => {
            if (context?.previousProducts) {
                queryClient.setQueryData(queryKey, context.previousProducts);
            }
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey });
        },
    });

    return mutate;
};
