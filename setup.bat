@echo off
echo 🚀 Initialisation du projet Sentralis...

:: Étape 1 : Docker
echo 🔧 Lancement de Docker Compose...
docker-compose up -d

:: Étape 2 : Dépendances
echo 📦 Installation des dépendances...
npm install

:: Étape 3 : Migration Prisma
echo 🔄 Migration de la base de données...
npx prisma migrate dev --name init

:: Étape 4 : Génération Prisma
echo 🛠 Génération du client Prisma...
npx prisma generate

:: Étape 5 : .env
IF NOT EXIST .env (
  echo 📄 Copie du fichier .env.example vers .env
  copy .env.example .env
)

echo ✅ Projet prêt ! Lance :
echo   npm run dev
echo   npm run dev:workers
