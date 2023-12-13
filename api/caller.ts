export const serverUrl: string = "https://api.toplogger.nu/v1";

export type FetchResponse<B> = ErrorResponse | SuccessResponse<B>;

export interface ErrorResponse {
  ok: false;
  response: Response;
  message?: string;
  body?: unknown;
}

export interface SuccessResponse<B> {
  ok: true;
  response: Response;
  body: B;
}


export default class APICaller {
    _baseUrl: string;
    _namespace: string;

    constructor(namespace: string, customServerUrl?: string) {
        this._baseUrl = customServerUrl ? `${customServerUrl}/` : `${serverUrl}/`;
        this._namespace = `${namespace}/`;
    }

    public async _get(
        endpoint: string,
        headers?: { [header: string]: string },
        bypassNamespace?: boolean
    ): Promise<SuccessResponse<unknown> | ErrorResponse> {
        const url = bypassNamespace
          ? this._baseUrl + endpoint
          : this._baseUrl + this._namespace + endpoint;
    
        const response = await fetch(url, {
          headers,
        });

        let responseBody;

        // Attempt to parse as JSON
        try {
            responseBody = await response.json();
        } catch (e) {
            console.log(e);
        }

        if (!responseBody) {
          // Attempt to parse as text
            try {
                responseBody = await response.text();
            } catch (e) {
                console.log(e);
            }
        }

        if (!response.ok) {
            try {
                return {
                    ok: false,
                    response,
                    message: responseBody?.message,
                    body: responseBody,
                };
            } catch (e) {
                return {
                    ok: false,
                    response,
                    message: "Network request failed",
                };
            }
        }

        return {
            ok: true,
            response,
            body: responseBody,
        };
    }
}