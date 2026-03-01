

export function formatNumberToUSD(num: number) {
    const formattedNumber = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(num)

    return formattedNumber ?? "$0.00"
}