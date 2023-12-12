export function appendParams(params: URLSearchParams, key: string, value: any) {
    if (value !== undefined && value !== null) {
      params.append(key, value.toString());
    }
  }