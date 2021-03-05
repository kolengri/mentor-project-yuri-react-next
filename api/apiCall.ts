import qs from "qs";

const API_ENDPOINT = "https://api.themoviedb.org/3/search/movie";
const API_KEY = "35c2658e0e706d145f4d4f7e995e368f";

type Methods = "GET" | "POST" | "PUT" | "DELETE";

type ApiCall = {
  <Result>(
    endpointPart: string,
    method: Methods,
    req: {
      body?: Record<string, any>;
      query?: Record<string, any>;
    }
  ): Promise<Result>;
};

//test

export const apiCall: ApiCall = async (endpointPart, method, req) => {
  const { body: rawBody, query: rawQuery } = req;

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
