import React from 'react';

export const ImplementationFocus: React.FC = () => {
  return (
    <section id="diferencial" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
            Buscamos <span className="text-blue-400 italic">mejoras y cambios</span> <br/>
            percibibles desde el primer día.
          </h2>
          <p className="text-xl text-slate-400 mb-12 leading-relaxed">
            No te traemos planes eternos. Identificamos lo que nos traba hoy y le metemos manos a la obra para que el cambio se note rápido.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold text-xl text-white mb-4 underline underline-offset-8 decoration-blue-500 decoration-4">Sumamos manos</h4>
              <p className="text-slate-400">
                - A tu escala: desde destrabar un tema puntual hasta rediseñar la operación completa.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xl text-white mb-4 underline underline-offset-8 decoration-blue-500 decoration-4">Aprovechar para pensar</h4>
              <p className="text-slate-400">
                Aprovechamos la ejecución para frenar la pelota y rediseñar <span className="text-blue-300">lo que nos traba</span>. Ordenamos mientras hacemos.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xl text-white mb-4 underline underline-offset-8 decoration-blue-500 decoration-4">Acción sin vueltas</h4>
              <p className="text-slate-400">
                Cultura de menos PowerPoints y más acción. Somos profesionales que nos hicimos de abajo y crecimos con esfuerzo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};