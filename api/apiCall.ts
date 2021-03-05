import qs from "qs";

import { API_ENDPOINT, API_KEY } from "../configs/env";

type Methods = "GET" | "POST" | "PUT" | "DELETE";

type ApiCall = {
  <Result>(
    endpointPart: string,
    method: Methods,
    req?: {
      body?: Record<string, any>;
      query?: Record<string, any>;
    }
  ): Promise<Result>;
};

export const apiCall: ApiCall = async (endpointPart, method, req) => {
  const { body: rawBody, query: rawQuery } = req || {};

  const body = JSON.stringify(rawBody);

  const query = qs.stringify(
    {
      api_key: API_KEY,
      ...rawQuery,
    },
    {
      addQueryPrefix: true,
    }
  );

  const request = await fetch(`${API_ENDPOINT}${endpointPart}${query}`, {
    body,
    method,
  });

  const result = await request.json();
  return result;
};
