import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return new Response("Email et mot de passe requis", { status: 400 });
  }

  const userExists = await prisma.user.findUnique({ where: { email } });
  if (userExists) {
    return new Response("Utilisateur déjà existant", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  return new Response(JSON.stringify({ id: user.id, email: user.email }), {
    status: 201,
  });
}
