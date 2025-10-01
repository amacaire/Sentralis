# Sentralis 🚀

Sentralis est un SaaS de cybersécurité qui permet aux PME de diagnostiquer automatiquement leurs vulnérabilités.

## 🛠 Stack
- Next.js (App Router, TypeScript)
- TailwindCSS
- Prisma (PostgreSQL)
- Redis + BullMQ (workers)
- NextAuth.js (auth)
- APIs externes : SSL Labs, Wappalyzer, HaveIBeenPwned...

## ⚡️ Lancer le projet

### 1. Cloner le repo
```bash
git clone https://github.com/tonrepo/cybercheck
cd cybercheck





# Installer les dépendances
sudo apt update
sudo apt install ca-certificates curl gnupg lsb-release

# Ajouter la clé GPG officielle de Docker
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \
  sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# Ajouter le dépôt officiel Docker (pour Ubuntu Noble)
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Mettre à jour les dépôts
sudo apt update

# Installer Docker Engine + CLI + Compose plugin
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
