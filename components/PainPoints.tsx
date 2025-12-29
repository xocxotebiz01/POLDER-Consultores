import React from 'react';

export const PainPoints: React.FC = () => {
  const pains = [
    {
      title: "¿La empresa sos vos?",
      desc: "Si tenés que estar en todo para que no se frene, sos el cuello de botella. Tu Pyme facturó pero te robó la libertad.",
      img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "¿Tu equipo 'no te sigue'?",
      desc: "Les falta herramientas para hacerse cargo. No es que no quieran, es que no saben cómo soltarte la mano.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "¿A dónde se va la guita?",
      desc: "Vender no es ganar. Si no tenés claro el número real hasta el final del mes, estás manejando a ciegas.",
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Cansado del día a día",
      desc: "Tenés mil ideas pero el incendio te las mata. Precisás alguien que venga a empujar la rueda con vos.",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section id="problemas" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Sabemos lo que cuesta <br/>
            <span className="text-blue-600">mantener el barco a flote.</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">Hacer crecer una Pyme es para valientes. Pero no tenés por qué hacerlo solo.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pains.map((pain, idx) => (
            <article key={idx} className="relative overflow-hidden rounded-3xl group h-[400px]">
              <img 
                src={pain.img} 
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105" 
                alt={pain.title}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900/10 transition-opacity group-hover:opacity-90"></div>
              <div className="absolute bottom-0 p-8 text-white">
                <h3 className="text-xl font-bold mb-3">{pain.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {pain.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};