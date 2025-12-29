import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const whatsappUrl = "https://wa.me/5491168014839";

  return (
    <section className="relative pt-16 pb-12 lg:pt-24 lg:pb-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <header className="text-center lg:text-left">
            <span className="inline-block px-4 py-2 rounded-lg bg-blue-50 text-blue-700 text-sm font-bold mb-6">
              Todo empieza con una charla.
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6 tracking-tight">
              Sumamos manos para que <br/>
              tus <span className="text-blue-600 italic">ideas se hagan realidad.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              No venimos a decirte cómo hacer las cosas, sino a sumar manos y cabeza donde más lo necesitás para que llegues a donde querés.
            </p>
            
            <div className="mb-10 p-6 bg-slate-50 rounded-2xl border-2 border-blue-100 max-w-lg mx-auto lg:mx-0 shadow-sm">
              <p className="text-slate-800 font-bold leading-tight text-lg">
                Agendá tu primera charla sin cargo. <br/>
                <span className="text-blue-600">Invitamos nosotros.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 bg-green-500 text-white rounded-xl font-bold text-xl hover:bg-green-600 transition-all shadow-xl shadow-green-100 flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Escribinos
              </a>
            </div>
          </header>
          
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-100 to-cyan-50 via-white rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-2 border border-slate-100">
               <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                alt="Dueño de Pyme trabajando con equipo de POLDER" 
                className="rounded-2xl w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};