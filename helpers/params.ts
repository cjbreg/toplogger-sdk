export function appendParams(params: URLSearchParams, key: string, value: unknown) {
    if (value !== undefined && value !== null) {
      params.append(key, value.toString());
    }
  }