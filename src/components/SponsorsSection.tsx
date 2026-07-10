import React, { useState } from 'react';
import { CreditCard, Heart, Copy, Check, Info } from 'lucide-react';

const SponsorsSection = () => {
  const [copied, setCopied] = useState(false);
  const accountNo = "114070201734"; // Account number to be edited manually by user later

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNo);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans pt-32 pb-20 relative overflow-hidden">
      {/* Texture Background Overlay */}
      <div className="absolute inset-0 bg-texture-196 opacity-[0.09] pointer-events-none mix-blend-overlay -z-10" />

      {/* Decorative radial glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-festivalRed/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-festivalRed/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 space-y-20 relative z-10">
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center justify-center bg-festivalRed/20 border border-festivalRed/50 rounded-full p-2.5 px-5 mb-4">
            <Heart className="w-5 h-5 text-festivalRed fill-current mr-2" />
            <span className="text-xs uppercase font-bold tracking-widest text-red-200">Colabora con el Festival</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight font-futura text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-festivalRed">
            APOYA AL FESTIVAL
          </h1>
          <p className="text-base md:text-lg font-light text-zinc-300 max-w-2xl mx-auto font-sans leading-relaxed">
            Gracias a nuestros aliados estrategicos y a personas como tu, hacemos posible la promocion del cine inclusivo y la visibilidad de narrativas diversas.
          </p>
        </div>

        {/* Section 1: Aliados Estrategicos */}
        <section className="bg-zinc-950/75 backdrop-blur-md border border-zinc-800/80 rounded-3xl p-8 md:p-12 shadow-2xl relative">
          {/* Section textures overlay */}
          <div className="absolute inset-0 bg-texture-188 opacity-[0.05] pointer-events-none rounded-3xl -z-10" />

          <h2 className="text-2xl md:text-3xl font-extrabold text-center tracking-wide font-futura text-festivalRed mb-12 uppercase">
            Aliados Estrategicos
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center items-center">
            <img src="/sponsors/5.PNG" alt="Sponsor 1" className="h-20 w-full object-contain filter grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300" />
            <img src="/sponsors/4.PNG" alt="Sponsor 2" className="h-20 w-full object-contain filter grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300" />
            <img src="/sponsors/10.png" alt="Sponsor 3" className="h-20 w-full object-contain filter grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300" />
            <img src="/sponsors/11.png" alt="Sponsor 4" className="h-20 w-full object-contain filter grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300" />
            <img src="/sponsors/2.png" alt="Sponsor 5" className="h-20 w-full object-contain filter grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300" />
            <img src="/sponsors/7.png" alt="Sponsor 7" className="h-20 w-full object-contain filter grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300" />
            <img src="/sponsors/8.png" alt="Sponsor 8" className="h-20 w-full object-contain filter grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300" />
            <img src="/sponsors/9.png" alt="Sponsor 9" className="h-20 w-full object-contain filter grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300" />
            <img src="/sponsors/3.png" alt="Sponsor 10" className="h-20 w-full object-contain filter grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300" />
            <img src="/sponsors/1.png" alt="Sponsor 11" className="h-20 w-full object-contain filter grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300" />
            <img src="/sponsors/12.png" alt="Sponsor 12" className="h-20 w-full object-contain filter grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300" />
            <img src="/sponsors/13.png" alt="Sponsor 13" className="h-20 w-full object-contain filter grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300" />
          </div>
        </section>

        {/* Section 2: Colabora - Cuenta Ahorros Falabella */}
        <section className="bg-zinc-950/70 border border-festivalRed/20 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Section textures overlay */}
          <div className="absolute inset-0 bg-texture-238 opacity-[0.06] pointer-events-none rounded-3xl -z-10" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side text info */}
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-festivalRed/20 flex items-center justify-center">
                <Heart className="w-6 h-6 text-festivalRed fill-current animate-pulse" />
              </div>
              <h2 className="text-3xl font-black font-futura tracking-wide text-white">
                Haz parte de la resistencia cultural
              </h2>
              <p className="text-zinc-300 leading-relaxed font-light font-sans text-sm md:text-base">
                Toda contribución nos ayuda a sostener los costos logísticos, a acoger a cineastas independientes, a organizar talleres formativos gratuitos y a mantener viva la memoria de nuestras comunidades a través de la pantalla grande.
              </p>

              <div className="bg-black/80 border border-zinc-800 rounded-2xl p-5 flex items-start gap-3">
                <Info className="w-5 h-5 text-festivalRed mt-0.5 flex-shrink-0" />
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  *Esta cuenta bancaria recibe aportes directos para la autogestión y sostenimiento del festival. La información de transacciones se maneja de forma transparente.
                </p>
              </div>
            </div>

            {/* Right side Bank Card mockup */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-[1.586/1] rounded-2xl bg-white text-black shadow-2xl p-6 flex flex-col justify-between overflow-hidden border border-zinc-200 transform hover:-rotate-1 hover:scale-102 transition-all duration-300 group">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-9 bg-zinc-200 rounded-lg"></div>
                  <div className="text-right">
                    <span className="block font-black text-lg font-futura tracking-wider">Ahorros Falabella</span>
                  </div>
                </div>

                <div>
                  <span className="block text-xs uppercase font-bold tracking-widest text-zinc-500 mb-1">Número de cuenta</span>
                  <div className="flex items-center justify-between bg-zinc-100 rounded-lg p-2.5">
                    <span className="text-2xl font-mono font-bold tracking-wider">
                      {accountNo}
                    </span>
                    <button
                      onClick={handleCopy}
                      className="p-1.5 hover:bg-zinc-200 rounded-md transition-colors"
                      title="Copiar número de cuenta"
                    >
                      {copied ? (
                        <Check className="w-5 h-5 text-green-600" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-end">
                  <div>
                    <span className="block text-[9px] uppercase font-bold tracking-widest text-zinc-500">Titular</span>
                    <span className="block text-sm font-bold font-futura tracking-wide uppercase">
                      FESTIVAL DE CINE DIVERSO
                    </span>
                  </div>
                  {copied && (
                    <span className="text-xs bg-black text-white font-bold py-1 px-3 rounded-full animate-bounce">
                      ¡Copiado!
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SponsorsSection;