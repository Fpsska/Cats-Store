export function declinateByNum(quantity: number, array: any[]): string {
    quantity = Math.abs(quantity);

    const itemIDX = quantity <= 1 ? 0 : 1;

    return array[itemIDX];
}
