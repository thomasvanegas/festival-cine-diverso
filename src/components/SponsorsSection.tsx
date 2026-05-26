import React from 'react';

const SponsorsSection = () => {
  const SponsorHeader = ({ title, bgColor = "bg-purple-900", textColor = "text-purple-900" }: { 
    title: string; 
    bgColor?: string;
    textColor?: string;
  }) => (
    <div className="mb-8">
      <h3 className={`${bgColor} ${textColor} text-center py-4 rounded-2xl font-bold text-lg`}>
        {title}
      </h3>
    </div>
  );

  return (
    <section id="patrocinadores" className="py-16 bg-white relative overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 opacity-10 pointer-events-none -z-10">
        <img src="/Fondo.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-20 w-48 h-48 bg-pink-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-300 rounded-full blur-xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-purple-900 mb-4">
            Nuestros Patrocinadores
          </h2>
          <p className="text-xl text-purple-700 max-w-3xl mx-auto">
            Gracias a nuestros aliados que hacen posible la promoción del cine inclusivo y la diversidad en la industria audiovisual.
          </p>
        </div>

        {/* Solo Aliados Estratégicos */}
        <div className="space-y-8">
          <SponsorHeader 
            title="ALIADOS ESTRATÉGICOS" 
            bgColor="bg-purple-100"
            textColor="text-purple-900"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-8 justify-items-center items-center">
            <img src="/sponsors/5.PNG" alt="Sponsor 1" className="h-24 w-full object-contain" />
            <img src="/sponsors/4.PNG" alt="Sponsor 2" className="h-24 w-full object-contain" />
            <img src="/sponsors/10.png" alt="Sponsor 3" className="h-24 w-full object-contain" />
            <img src="/sponsors/11.png" alt="Sponsor 4" className="h-24 w-full object-contain" />
            <img src="/sponsors/2.png" alt="Sponsor 5" className="h-24 w-full object-contain" />
            <img src="/sponsors/7.png" alt="Sponsor 7" className="h-24 w-full object-contain" />
            <img src="/sponsors/8.png" alt="Sponsor 8" className="h-24 w-full object-contain" />
            <img src="/sponsors/9.png" alt="Sponsor 9" className="h-24 w-full object-contain" />
            <img src="/sponsors/3.png" alt="Sponsor 10" className="h-24 w-full object-contain" />
            <img src="/sponsors/1.png" alt="Sponsor 11" className="h-24 w-full object-contain" />
            <img src="/sponsors/12.png" alt="Sponsor 12" className="h-24 w-full object-contain" />
            <img src="/sponsors/13.png" alt="Sponsor 13" className="h-24 w-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;