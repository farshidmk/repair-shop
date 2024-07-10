import { User } from "@prisma/client";
import React from "react";

const UserCard = ({
  firstName,
  lastName,
  id,
  phoneNumber,
  role,
  username,
  createdAt,
}: User) => {
  let createdAtConverted = new Date(createdAt).toLocaleDateString("fa");
  return (
    <div className="flex gap-4 bg-zinc-500 p-2 rounded-xl">
      <div className="flex gap-2">
        <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content w-10 rounded-full">
            <span className="text-xl">{Array.from(username!)[0]}</span>
          </div>
        </div>
        <div>
          <h4>{firstName + " " + lastName}</h4>
          <p className="text-xs">{username}</p>
        </div>
      </div>
      <div className="badge badge-primary badge-outline">{role}</div>
      <p>({createdAtConverted})</p>
      <p>({phoneNumber})</p>
    </div>
  );
};

export default UserCard;
