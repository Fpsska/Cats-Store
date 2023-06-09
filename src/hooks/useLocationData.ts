import { useLocation } from 'react-router-dom';

// /. imports

interface returnedPropsTypes {
    hash: string;
    key: string;
    pathname: string;
    search: string;
    state: any;
}

// /. Interfaces

export function useLocationData(): returnedPropsTypes {
    const location = useLocation();

    return location;
}
