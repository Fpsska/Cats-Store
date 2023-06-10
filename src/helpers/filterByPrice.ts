import { Ipet } from 'types/cardTypes';

// /. imports

export function filterByPrice(array: Ipet[], valueToCompare: number): Ipet[] {
    return array.filter(({ price }) => price <= valueToCompare);
}
