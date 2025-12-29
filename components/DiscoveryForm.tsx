import React, { useState } from 'react';

interface DiscoveryFormProps {
  onClose: () => void;
}

export const DiscoveryForm: React.FC<DiscoveryFormProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    pain: '',
    employees: ''
  });

  const nextStep = () => setStep(s => s + 1);

  const handleWhatsAppRedirect = () => {
    const text = `Hola POLDER, estuve haciendo el diagnóstico. Mi empresa es ${formData.company} y nuestro dolor principal es: ${formData.pain}. Me gustaría charlar.`;
    window.open(`https://wa.me/5491168014839?text=${encodeURIComponent(text)}`, '_blank');
    onClose();
  };

  return (
    <div className="text-slate-900">
      <div className="mb-8">
        <h3 className="text-3xl font-black mb-2">Diagnóstico POLDER</h3>
        <p className="text-slate-500 font-medium">Contestá 2 preguntas y charlemos sobre cómo destrabarlo.</p>
        <div className="mt-4 flex gap-2">
          {[1, 2].map(i => (
            <div key={i} className={`h-1.5 flex-grow rounded-full ${step >= i ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
          ))}
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-6">
          <label className="block">
            <span className="text-sm font-bold uppercase text-slate-500 block mb-4 italic">¿Qué es lo que hoy más te traba?</span>
            <div className="grid gap-3">
              {[
                { id: 'owner', label: '¿La empresa sos vos? (Todo depende de tu presencia)' },
                { id: 'team', label: '¿Tu equipo "no te sigue"? (Falta de autonomía)' },
                { id: 'money', label: '¿A dónde se va la guita? (Ceguera de rentabilidad)' },
                { id: 'chaos', label: 'Cansado del día a día (El fuego tapa la idea)' }
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => { setFormData({...formData, pain: p.label}); nextStep(); }}
                  className="w-full text-left p-4 border-2 border-slate-100 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition font-bold text-slate-700"
                >
                  {p.label}
                </button>
              ))}
            </div>
          </label>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <label className="block">
            <span className="text-sm font-bold uppercase text-slate-500 block mb-2">Un par de datos finales y charlemos</span>
            <input 
              type="text" 
              placeholder="Nombre y Empresa" 
              className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl mb-4 outline-none focus:border-blue-500"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input 
              type="text" 
              placeholder="Tu empresa" 
              className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-xl mb-4 outline-none focus:border-blue-500"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
            />
          </label>
          <button 
            onClick={handleWhatsAppRedirect}
            className="w-full py-4 bg-green-500 text-white rounded-xl font-black text-xl hover:bg-green-600 transition shadow-xl shadow-green-100 flex items-center justify-center gap-3"
          >
             <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Escribinos
          </button>
        </div>
      )}
    </div>
  );
};