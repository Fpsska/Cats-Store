export function filterByPrice(array: any[], filterProps: number): any[] {
    return array.filter(({ price }) => price <= filterProps);
}
