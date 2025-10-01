#!/bin/bash

echo "🚀 Initialisation du projet Sentralis..."

# Étape 1 : Lancer Docker
echo "🔧 Lancement de l'infrastructure (Postgres + Redis)..."
docker-compose up -d

# Étape 2 : Installer les dépendances
echo "📦 Installation des dépendances npm..."
npm install

# Étape 3 : Générer le client Prisma
echo "🔄 Migration de la base de données avec Prisma..."
npx prisma migrate dev --name init

# Étape 4 : Générer le client Prisma
echo "🛠 Génération du client Prisma..."
npx prisma generate

# Étape 5 : Copier l’exemple d’environnement
if [ ! -f .env ]; then
  echo "📄 Copie du fichier .env.example vers .env"
  cp .env.example .env
fi

# Étape 6 : Terminé
echo "✅ Projet prêt ! Tu peux maintenant lancer :"
echo "   npm run dev  → pour lancer l'application"
echo "   npm run dev:workers → pour les workers"
