import React from 'react';

export const Services: React.FC = () => {
  const services = [
    {
      title: "Trabajo en equipo Pyme",
      desc: "Pasar de 'la empresa soy yo' a un equipo que mide, prioriza y delega con autonomía.",
      features: ["Tableros de control", "Delegación efectiva", "Conducción por objetivos", "Diseño organizacional"]
    },
    {
      title: "Eficiencia y Rentabilidad",
      desc: "Optimizar lo que ya tenés para que el negocio rinda lo que debe. Menos costo, más margen.",
      features: ["Reingeniería de procesos", "Detección de fugas", "Simplificación operativa", "Integración tecnológica"]
    },
    {
      title: "Soluciones de Reclutamiento",
      desc: "Buscamos a la gente que se pone la camiseta. Te ayudamos a armar un equipo que no te deja solo.",
      features: ["Búsqueda y Selección", "Cultura de alto rendimiento", "Inducción efectiva", "Desarrollo de Marca Empleadora"]
    },
    {
      title: "Capacitaciones In-Company",
      desc: "Herramientas reales para que tus mandos medios dejen de ser operativos y empiecen a liderar.",
      features: ["Liderazgo Pyme", "Herramientas de gestión", "Ventas y CRM", "Trabajo en equipo y comunicación efectiva"]
    }
  ];

  return (
    <section id="soluciones" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4 block">Punto de partida</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">Soluciones para el <br/><span className="italic">mundo real.</span></h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, idx) => (
            <article key={idx} className="p-10 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all">
              <h3 className="text-2xl font-black text-slate-900 mb-4">{s.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">{s.desc}</p>
              <ul className="space-y-3">
                {s.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
