// apps/web/app/api/auth/signup/route.ts
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

// Initialisation de PrismaClient une seule fois
const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    // Récupérer les données de la requête
    const { email, password } = await req.json();

    // Vérifier que les données sont présentes
    if (!email || !password) {
      return new Response("Email et mot de passe requis", { status: 400 });
    }

    // Vérifier si l'utilisateur existe déjà
    const userExists = await prisma.user.findUnique({ where: { email } });
    if (userExists) {
      return new Response("Utilisateur déjà existant", { status: 400 });
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer un nouvel utilisateur
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    // Retourner la réponse avec l'utilisateur créé
    return new Response(JSON.stringify({ id: user.id, email: user.email }), {
      status: 201,
    });
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur", error);
    return new Response("Erreur interne du serveur", { status: 500 });
  }
}
