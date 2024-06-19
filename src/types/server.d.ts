export type ServerCallType = {
  entity: string | number | Array<string | number>;
  data?: any;
  method: THttpMethods;
  // method: AXIOS
};

export type ServerResponseType<T = unknown> = {
  isSuccessful: boolean;
  error?: string[];
  data?: T;
};
