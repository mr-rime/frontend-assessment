export function formatDate(
    date?: Date,
    locale: string = "en-US"
): string {
    if (!date) return "-";

    return new Intl.DateTimeFormat(locale, {
        year: "numeric",
        month: "short",
        day: "2-digit",
    }).format(date);
}