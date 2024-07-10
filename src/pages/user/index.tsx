"use client";
import ShowErrors from "@/components/showError/ShowErrors";
import UserCard from "@/components/user/UserCard";
import { getQueryServerCall } from "@/services/api";
import { ServerResponseType } from "@/types/server";
import { User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Users = () => {
  const { data, status } = useQuery<
    unknown,
    Error,
    User[] | undefined,
    string[]
  >({
    queryKey: ["user"],
    queryFn: getQueryServerCall,
    select(data: ServerResponseType<User[]>): User[] | undefined {
      if (data.isSuccessful) {
        return data.data!;
      }

      return undefined;
    },
  });
  //@ts-ignore
  if (status === "pending") return <div className="skeleton h-32 w-32"></div>;
  if (status === "error")
    return <ShowErrors errors={"خطا در ارتباط با سرور"} />;
  return (
    <div className="flex flex-col gap-3 mt-4 border-zinc-500 border rounded-xl p-1 w-2/4 m-auto">
      {data?.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};

export default Users;
