import { useMutation } from '@tanstack/react-query';
import { goeyToast } from 'goey-toast';
import { AddToCart } from '../api/add-to-cart';


export function useAddToCart() {
    const mutate = useMutation({
        mutationFn: AddToCart,
        onSuccess: () => {
            goeyToast.success("Product added to cart", { description: "Product added to cart successfully" });
        },
        onError: () => {
            goeyToast.error("Error adding product to cart", { description: "Error adding product to cart" });
        },
    });
    return mutate;
}
