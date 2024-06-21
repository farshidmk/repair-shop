"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
type Props = {
  children: React.ReactElement;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      // queryFn: ({},)=>
    },
  },
});

const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Providers;
