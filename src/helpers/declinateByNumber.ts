export function declinateByNum<T>(quantity: number, array: T[]): T {
    quantity = Math.abs(quantity);

    const itemIDX = quantity <= 1 ? 0 : 1;

    return array[itemIDX];
}
