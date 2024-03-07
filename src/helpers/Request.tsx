import { ParametersProps, Options, ResultProps } from "./interface";


export async function Request(parameters: ParametersProps): Promise <ResultProps> {
    const {method, url, formData} = parameters;

    const endPoint = "https://covid-193.p.rapidapi.com";
    const apiKey = '84322a106dmshb54a1d718bb42abp1bfd8ejsncc5d76b48a17';
    const apiHost = 'covid-193.p.rapidapi.com'

    const appEndpoint = endPoint + url;

    console.log(appEndpoint)

    const options: Options = {
        method: method,
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': apiHost
        }
    }

    if (method == 'POST' || method == 'PUT' || method == "PATCH") {
        options.body = formData ? formData : undefined;
    }

    const response: Response = await fetch(appEndpoint, options);

    const data = await response.json();

    return data;
}