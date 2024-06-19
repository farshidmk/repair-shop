import { ServerResponseType } from "@/types/server";
import { carZodValidation } from "@/validations/carValidation";
import { Car } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";

// export default function GET(request: NextRequest, response:NextResponse<any>) {
//   return response.status(200).json({ name: 'John Doe' })
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ServerResponseType<Car>>
) {
  try {
    if (req.method === "POST") {
      const validation = carZodValidation.safeParse(req.body);
      let body = req.body as Car;
      if (validation.success) {
        const newCar = await prisma.car.create({ data: body });
        res.status(200).json({ isSuccessful: true, data: newCar });
      } else {
        res.status(200).json({
          isSuccessful: false,
          error: validation.error?.issues?.map((issue) => issue.message),
        });
      }
    }
  } catch (error) {
    res.status(400);
  }
}
