export default function Home() {
  return (
    <section className="container mx-auto p-8">
        <h2 className="text-4xl font-bold mb-4">📢 Conheça a GM Software Solutions</h2>
      {/* Hero */}
      <div className="text-center py-16">
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Tecnologia com propósito, inovação, compromisso e qualidade.
        </p>
      </div>

      {/* Serviços (3 cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Sistemas sob medida</h3>
          <p>Aplicações web rápidas, seguras e escaláveis, desenhadas para o seu processo.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Sites profissionais e automações</h3>
          <p>Presença digital moderna (SEO, performance) e integrações que economizam tempo.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Montagem & Suporte</h3>
          <p>PCs sob demanda (gamer/profissional/empresarial), manutenção e suporte completo.</p>
        </div>
      </div>
    </section>
  );
}
