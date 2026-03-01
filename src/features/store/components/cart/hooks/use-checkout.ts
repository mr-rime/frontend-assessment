import { useMutation } from '@tanstack/react-query';
import { goeyToast } from 'goey-toast';
import { checkout } from '../api/checkout';



export function useCheckout() {
    const mutate = useMutation({
        mutationFn: checkout,
        onSuccess: () => {
            goeyToast.success("Checkout successful", { description: "Your order has been placed successfully" });
        },
        onError: () => {
            goeyToast.error("Error during checkout", { description: "There was an error processing your checkout" });
        },
    });
    return mutate;
}
