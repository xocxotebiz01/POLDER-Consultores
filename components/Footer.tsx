import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 text-slate-500 py-16 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-sm">
            <span className="text-3xl font-black text-slate-900 mb-4 block tracking-tighter">POLDER</span>
            <p className="text-sm leading-relaxed mb-8">
              Acompañamos a dueños de Pymes que quieren recuperar el control de su vida sin que el negocio deje de crecer. No somos de la corpo, somos del equipo.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12 sm:gap-24">
            <div>
              <h4 className="text-slate-900 font-bold mb-6 text-xs uppercase tracking-widest">Navegación</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#soluciones" className="hover:text-blue-600 transition">Qué hacemos</a></li>
                <li><a href="#diferencial" className="hover:text-blue-600 transition">Diferencial</a></li>
                <li><a href="#empatia" className="hover:text-blue-600 transition">Nosotros</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-900 font-bold mb-6 text-xs uppercase tracking-widest">Contacto</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="https://wa.me/5491168014839" className="text-green-600 font-bold hover:underline transition">WhatsApp Directo</a></li>
                <li>hola@polderconsultores.com.ar</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-12 mt-12 border-t border-slate-200 text-[10px] flex flex-col md:flex-row justify-between items-center gap-4 uppercase font-bold tracking-[0.2em] text-slate-400">
          <p>© {new Date().getFullYear()} POLDER Consulting. Hecho para Pymes.</p>
          <p>Implementar es ganar.</p>
        </div>
      </div>
    </footer>
  );
};