import { Request, Response } from "express";
import prisma from "../../prisma";

async function getUser(request: Request, response: Response) {
  try {
    const userId = parseInt(request.params.id);

    const user = await prisma.user.findUnique({
      where: { user_id: userId },
    });

    if (!user) {
      return response.status(404).json("User not found");
    }

    response.status(200).json(user);
  } catch (error) {
    console.error(error);
    response.status(500).json("Internal Server Error");
  }
}

async function getAllUsers(request: Request, response: Response) {
  try {

    const user = await prisma.user.findMany();

    response.status(200).json(user);
    
  } catch (error) {
    console.error(error);
    response.status(500).json("Internal Server Error");
  }
}

async function createUser(request: Request, response: Response) {
  try {
    const { username, email, bio, country } = request.body;
    console.log(request.body);
    const user = await prisma.user.create({
      data: {
        username,
        email,
        bio,
        country,
      },
    });

    response.status(201).json(user);
  } catch (error) {
    console.error(error);
    response.status(500).json("Internal Server Error");
  }
}

//! important read this please.
// async function createUserWithRoom(request: Request, response: Response) {
//   try {
//     const { username, email, bio, country, roomName, roomDescription } = request.body;

//     const result = await prisma.user.create({
//       data: {
//         username,
//         email,
//         bio,
//         country,
//         rooms: {
//           create: {
//             room_name: roomName,
//             room_description: roomDescription,
//             created_date: new Date(),
//           },
//         },
//       },
//       include: {
//         rooms: true,
//       },
//     });

//     response.status(201).json(result);
//   } catch (error) {
//     console.error(error);
//     response.status(500).json("Internal Server Error");
//   }
// }

export default { getAllUsers, getUser, createUser };


