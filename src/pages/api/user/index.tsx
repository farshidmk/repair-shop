import { ServerResponseType } from "@/types/server";
import { userZodValidation } from "@/validations/userValidation";
import { Prisma, User } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ServerResponseType<User | User[]>>
) {
  if (req.method === "POST") {
    const validation = userZodValidation.safeParse(req.body);
    let body = req.body as User;
    console.log(body);
    try {
      if (validation.success) {
        try {
          const newUser = await prisma.user.create({
            data: body,
          });
          // const newUser = await prisma.user.create({ data: body });
          res.status(200).json({ isSuccessful: true, data: newUser });
        } catch (e) {
          if (e instanceof Prisma.PrismaClientKnownRequestError) {
            res.status(404);
          }
        }
      } else {
        res.status(200).json({
          isSuccessful: false,
          error: validation.error?.issues?.map((issue) => issue.message),
        });
      }
      res.status(500);
    } catch (error) {
      res.status(400);
    }
  } else if (req.method === "GET") {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json({ isSuccessful: true, data: users });
    } catch (error) {}
    res.status(200).json({ isSuccessful: true });
  }
  res.status(400);
}
