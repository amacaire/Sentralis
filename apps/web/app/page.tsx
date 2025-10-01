export default function HomePage() {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold text-blue-600">Bienvenue sur Sentralis</h1>
        <p className="mt-4 text-lg text-gray-600">
          Diagnostiquez les vulnérabilités de votre entreprise en quelques clics.
        </p>
        <a
          href="/dashboard"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Accéder au Dashboard
        </a>
      </div>
    );
  }
  