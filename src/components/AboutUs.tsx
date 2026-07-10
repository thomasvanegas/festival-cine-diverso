import React from 'react';
import { Heart, Users, Film, Award, BookOpen, ShieldCheck, Compass } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">

      {/* Hero Section con textura grunge */}
      <div className="relative py-28 md:py-36 overflow-hidden">
        {/* Textura de fondo grunge */}
        <div className="absolute inset-0 bg-texture-196 opacity-[0.12] pointer-events-none" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black pointer-events-none" />
        {/* Glow decorativo */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-festivalRed/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-festivalRed/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pb-20 space-y-16 relative z-10">

        {/* Carta de Jorge Andrés Escorcia Cantillo */}
        <section className="bg-zinc-950/80 border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-texture-238 opacity-[0.04] pointer-events-none rounded-3xl" />
          {/* Watermark logo */}
          <div className="absolute -bottom-10 -right-10 opacity-[0.03] pointer-events-none w-72">
            <img src="/2026/FICIDI_IV_PIEZAS_GRAFICAS/Logotipos/ICONO ROJO.png" alt="" />
          </div>

          <h2 className="text-xl md:text-2xl font-extrabold mb-8 tracking-wide font-futura text-festivalRed border-b border-zinc-800 pb-4 uppercase">
            Una carta para quienes llegan aquí
          </h2>

          <div className="prose prose-invert max-w-none text-zinc-300 font-sans space-y-5 leading-relaxed text-sm md:text-base font-light">
            <p className="font-semibold text-white text-base">Hola.</p>
            <p>Mi nombre es <span className="font-semibold text-white">Jorge Andrés Escorcia Cantillo</span>.</p>
            <p>Antes que cualquier otra cosa, quiero darte las gracias por llegar hasta este espacio.</p>
            <p>
              Muchas veces pienso que este festival nació mucho antes de existir oficialmente. Nació en las preguntas que me hacía, en las historias que sentía cercanas, en la necesidad de encontrarme y encontrarnos en una pantalla.
            </p>
            <p>
              Todo comenzó mientras realizaba junto a unes amigues un documental universitario sobre la vida de una drag queen en Barranquilla. Recuerdo que durante ese proceso algo hizo clic dentro de mí: entendí que nuestras historias estaban llenas de belleza, sensibilidad, dolor, resistencia y humanidad, pero que muchas veces no tenían espacios reales donde ser vistas, escuchadas o celebradas.
            </p>
            <p>
              Tiempo después, mientras trabajaba como actor en una producción audiovisual, esa sensación volvió a aparecer. Me di cuenta de que sí existía cine LGBTIQ+ en Colombia, sí había personas creando desde la diversidad, pero seguían siendo pocos los escenarios donde esas narrativas pudieran habitar con libertad.
            </p>

            <div className="my-8 pl-6 border-l-4 border-festivalRed italic space-y-2 text-red-200 font-ample text-base py-1">
              <p>Y entonces apareció esta idea.</p>
              <p>No como una gran empresa.</p>
              <p>No como algo perfectamente planeado.</p>
              <p>Sino como una necesidad profundamente humana.</p>
              <p>La necesidad de crear un espacio seguro para nuestras historias.</p>
            </div>

            <p>
              Así nació el Festival Internacional de Cine Diverso en 2023. Y aunque empezó desde una inquietud muy personal, hoy se ha convertido en un escenario colectivo donde muchísimas personas diversas encuentran un lugar para narrarse, reconocerse y existir.
            </p>
            <p className="font-medium text-white">
              Porque este festival también nace desde la necesidad de generar empatía.
            </p>
            <p>
              Y aunque muchas veces mi nombre aparece al frente del proyecto, la verdad es que este espacio jamás habría sido posible sin las personas que creyeron en él desde el inicio.
            </p>

            <div className="bg-black/60 rounded-2xl p-6 border border-festivalRed/20 my-6">
              <p className="font-semibold text-white mb-2">Creo profundamente que los proyectos culturales no se construyen solos.</p>
              <p className="text-festivalRed font-medium">Se construyen desde los afectos.</p>
              <p className="text-festivalRed font-medium">Desde la confianza.</p>
              <p className="text-festivalRed font-medium">Desde las personas que te dicen "sí" cuando todo todavía parecía incierto.</p>
            </div>

            <p>
              Desde entonces hemos realizado tres ediciones, exhibido más de 120 cortometrajes de más de 20 países, y conectado con más de 5.000 espectadores. Hemos llevado nuestros espacios formativos a ciudades como Bogotá, Medellín y Cali.
            </p>
            <p>
              Con el tiempo también entendimos que era importante formar públicos, acompañar nueves creadores y abrir espacios pedagógicos. Por eso nacieron iniciativas como <span className="text-festivalRed font-medium">Historias que nos habitan</span>, <span className="text-festivalRed font-medium">Filma Diverso</span> y <span className="text-festivalRed font-medium">Queer Fest</span>.
            </p>
            <p>
              Pero creo que lo más valioso no son los números. Lo más valioso ha sido ver cómo las personas se emocionan al sentirse representadas.
            </p>
            <p className="font-semibold text-festivalRed">
              Porque para mí el cine también hace archivo. Y contar nuestras historias es otra forma de permanecer.
            </p>
            <p className="pt-4 text-zinc-200">Gracias por estar aquí.</p>
            <p className="text-zinc-200">Gracias por creer en las historias diversas.</p>
            <p className="text-zinc-200">Gracias por ayudar a construir este espacio con nosotres.</p>
          </div>
        </section>

        {/* Lo que mueve el festival y El sueño */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-zinc-950/70 border border-zinc-800 rounded-3xl p-8 hover:border-festivalRed/30 transition-all duration-300 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-texture-196 opacity-[0.03] pointer-events-none rounded-3xl" />
            <div>
              <h3 className="text-xl md:text-2xl font-bold font-futura text-festivalRed mb-4 uppercase">
                Lo que mueve este festival
              </h3>
              <p className="text-zinc-300 leading-relaxed font-light font-sans text-sm md:text-base">
                Creamos este espacio para visibilizar las narrativas LGBTIQ+ a través del cine y las artes audiovisuales, entendiendo las historias como herramientas capaces de transformar miradas, abrir conversaciones y construir memoria colectiva.
              </p>
            </div>
          </div>

          <div className="bg-zinc-950/70 border border-zinc-800 rounded-3xl p-8 hover:border-festivalRed/30 transition-all duration-300 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-texture-196 opacity-[0.03] pointer-events-none rounded-3xl" />
            <div>
              <h3 className="text-xl md:text-2xl font-bold font-futura text-white mb-4 uppercase">
                El sueño que seguimos construyendo
              </h3>
              <div className="text-zinc-300 leading-relaxed font-light font-sans space-y-3 text-sm md:text-base">
                <p>Soñamos con que este festival siga creciendo hasta convertirse en un referente para el cine diverso en Colombia y América Latina.</p>
                <p>Soñamos con seguir llevando nuestras historias a más territorios, conectar nuevas voces y demostrar que las narrativas LGBTIQ+ son historias humanas que merecen ocupar todos los espacios.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Las cosas en las que creemos */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide font-futura text-center text-white uppercase">
            Las cosas en las que <span className="text-festivalRed">creemos</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Creemos en la diversidad', text: 'En las múltiples formas de existir, amar, sentir y habitar el mundo.' },
              { title: 'Creemos en la memoria', text: 'Porque el cine puede convertirse en un archivo vivo de historias que durante mucho tiempo fueron invisibilizadas.' },
              { title: 'Creemos en la resistencia', text: 'Este festival existe porque hubo personas que decidieron contar sus historias incluso cuando parecía imposible hacerlo.' },
              { title: 'Creemos en los espacios seguros', text: 'En lugares donde nadie tenga que esconder quién es para sentirse parte.' },
              { title: 'Creemos en el poder del cine', text: 'Porque una película puede cambiar la manera en que alguien mira a otra persona o incluso la manera en que se mira a sí misme.' },
              { title: 'Creemos en la comunidad', text: 'Nada de esto tendría sentido sin las personas que llegan, participan, crean, sienten y hacen suyo este espacio.' },
            ].map((item, i) => (
              <div key={i} className="bg-zinc-950/70 border border-zinc-800 rounded-2xl p-6 hover:border-festivalRed/40 hover:bg-zinc-900/50 transition-all duration-300">
                <h4 className="font-bold text-base text-white mb-2 font-futura">{item.title}</h4>
                <p className="text-zinc-400 text-sm font-light font-sans leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Por qué hacemos esto */}
        <section className="bg-zinc-950/70 border border-festivalRed/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-texture-238 opacity-[0.04] pointer-events-none rounded-3xl" />
          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide font-futura text-festivalRed uppercase">
              ¿Por qué hacemos esto?
            </h2>
            <div className="text-zinc-300 font-light font-sans text-sm md:text-base leading-relaxed space-y-4 text-left md:text-center">
              <p>
                Hacemos esto porque crecimos viendo muy pocas historias que se parecieran a nosotres. Porque muchas veces nuestras existencias fueron contadas desde el estereotipo, el silencio o la ausencia.
              </p>
              <p>
                Sabemos lo importante que puede ser verse reflejade en una pantalla y sentir, aunque sea por un instante, que nuestra historia también merece ocupar un lugar en el mundo.
              </p>
              <p>
                Hacemos este festival porque creemos profundamente en el poder de narrarnos. Porque queremos que las personas que hacen cine diverso sepan que aquí tienen un espacio donde sus historias importan, tienen rostro y tienen memoria.
              </p>
            </div>
          </div>
        </section>

        {/* Lo que hemos construido */}
        <section className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-texture-196 opacity-[0.04] pointer-events-none rounded-3xl" />
          <h2 className="text-2xl md:text-3xl font-extrabold text-center tracking-wide font-futura text-white mb-12 uppercase relative z-10">
            Lo que hemos <span className="text-festivalRed">construido</span> juntes
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12 relative z-10">
            {[
              { num: '3', label: 'Ediciones realizadas' },
              { num: '+120', label: 'Cortos exhibidos' },
              { num: '+20', label: 'Países participantes' },
              { num: '+5.000', label: 'Espectadores' },
            ].map((s, i) => (
              <div key={i} className="bg-black/50 rounded-2xl p-6 border border-zinc-900">
                <span className="block text-4xl md:text-5xl font-black text-festivalRed font-futura mb-2">{s.num}</span>
                <span className="text-xs font-light text-zinc-400 font-sans uppercase tracking-wide">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto bg-black/50 rounded-2xl p-6 md:p-8 border border-zinc-900 relative z-10">
            <h4 className="font-bold text-center text-white font-futura mb-4 uppercase text-sm tracking-wider">Actividades y Proyectos Especiales</h4>
            <ul className="space-y-3 text-zinc-300 text-sm font-light font-sans">
              <li className="flex items-start gap-2">
                <span className="text-festivalRed font-bold flex-shrink-0">•</span>
                <span>Talleres y muestras audiovisuales realizadas en <span className="font-semibold text-white">Barranquilla, Bogotá, Cali y Medellín</span>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-festivalRed font-bold flex-shrink-0">•</span>
                <span>Creación y desarrollo de espacios formativos como: <span className="text-festivalRed font-medium">Historias que nos habitan</span>, <span className="text-festivalRed font-medium">Filma Diverso</span> y <span className="text-festivalRed font-medium">Queer Fest</span>.</span>
              </li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutUs;