export interface ParametersProps {
    method?: string,
    url?: string,
    formData?: FormData | null
}

export interface Options {
    method?: string;
    headers?: {
        'X-RapidAPI-Key': string,
        'X-RapidAPI-Host': string
    };
    body?: FormData | undefined;
}

export interface ResponseProp {
    cases?: {new: boolean, active: number, critical: boolean, recovered: number, '1M_pop': string, total: number}
    continent?: string
    country?: string
    day?: string
    deaths?: {new: boolean, '1M_pop': string, total: number}
    population: number
    tests: {'1M_pop': string, total: number}
    time: string
}

export interface ResultProps {
    errors?:any[]
    get?:string
    parameters?:any[]
    response: ResponseProp[]
    results?: number
}