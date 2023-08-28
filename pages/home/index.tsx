import Image from "next/image";
import React, {
  RefObject,
  useState,
  useEffect,
  FC,
  useRef,
  PropsWithChildren,
  CSSProperties
} from "react";
import {
  DocumentCheckIcon,
  UsersIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,

  NewspaperIcon,
  UserGroupIcon,
  UserPlusIcon
} from '@heroicons/react/24/outline';
import Link from "next/link";

function useElementOnScreen(ref: RefObject<Element>, rootMargin = "0px") {
  const [isIntersecting, setIsIntersecting] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return isIntersecting;
}

const AnimateIn: FC<PropsWithChildren<{ from: CSSProperties; to: CSSProperties, time: Number }>> = ({ from, to, time, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);
  const defaultStyles: CSSProperties = {
    transition: `${time}ms ease-in-out`
  };
  return (
    <div
      ref={ref}
      style={
        onScreen
          ? {
            ...defaultStyles,
            ...to
          }
          : {
            ...defaultStyles,
            ...from
          }
      }
    >
      {children}
    </div>
  );
};

const FadeIn: FC<PropsWithChildren> = ({ children }) => (
  <AnimateIn
    from={{ opacity: 0 }}
    to={{ opacity: 1 }}
    time={1500}>
    {children}
  </AnimateIn>
);

const FadeUp: FC<PropsWithChildren> = ({ children }) => (
  <AnimateIn
    from={{ opacity: 0, translate: "0 2rem" }}
    to={{ opacity: 1, translate: "none" }}
    time={1500}
  >
    {children}
  </AnimateIn>
);

const ScaleIn: FC<PropsWithChildren> = ({ children }) => (
  <AnimateIn from={{ scale: "0" }} to={{ scale: "1" }} time={100}>
    {children}
  </AnimateIn>
);

const MoveIn: FC<PropsWithChildren> = ({ children }) => (
  <AnimateIn
    from={{ transform: "translateY(300px)" }}
    to={{ transform: "translateY(0px)" }}
    time={1000}>
    {children}
  </AnimateIn>
);

const MoveRight: FC<PropsWithChildren> = ({ children }) => (
  <AnimateIn
    from={{ transform: "translateX(300px)" }}
    to={{ transform: "translateX(0px)" }}
    time={1000}>
    {children}
  </AnimateIn>
);

const Animate = {
  FadeIn,
  FadeUp,
  ScaleIn,
  MoveIn,
  MoveRight
};

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col">
        <section className="relative w-full h-full bg-color-lila flex justify-center overflow-hidden py-20 lg:pt-36 lg:pb-32">
          <Animate.FadeIn>
            <div className="bubbles-box fade-in">
              <div className="inner">
                <div className="bubble-1"></div>
                <div className="bubble-sm-1"></div>
                <div className="bubble-2"></div>
                <div className="bubble-sm-2"></div>
                <div className="bubble-3"></div>
                <div className="bubble-sm-3"></div>
              </div>
            </div>
          </Animate.FadeIn>
          <div className="flex h-full w-full relative items-center">
            <div className="container lg:px-32">
              <div className="flex flex-col-reverse lg:flex-row items-center">
                <div className="w-full lg:w-1/2 px-5 h-full">
                  <Animate.FadeUp>
                    <div className="bg-gray-100 rounded-lg p-8 w-full md:text-left md:pr-10 shadow-lg fade-in">
                      <h1 className="title mb-4 text-3xl  font-bold " >
                        Por una comunidad segura
                      </h1>
                      <p className="leading-relaxed mb-6" style={{ textAlign: "justify" }}>
                        Donde las personas se protegen mutuamente, se apoyan y se preocupan por el bienestar de todos.
                        Únete a nuestra aplicación y forma parte de Seguridad ESPE. Juntos, construyamos una comunidad más segura.
                      </p>
                      <p className="leading-relaxed mb-10" style={{ textAlign: "center" }}>
                        !Descarga la aplicación!
                      </p>
                      <div className="flex flex-row justify-center items-center space-x-4 mt-4">
                        {/* agregar bordes al rededor */}
                        <Link
                          href={"#"}
                          className="flex flex-row justify-center items-center space-x-2   border-2 border-solid border-color-gray rounded-lg p-2 w-44 hover:border-color-secondary hover:scale-110  hover:bg-color-secondary hover:text-white duration-200 ease-in"
                        >
                          <div>
                            <Image
                              src="/SeguridadESPE/images/google-play-logo.svg"
                              width={27}
                              height={27}
                              alt="hero"
                            />
                          </div>
                          <p className="text-sm font-bold">GOOGLE PLAY</p>
                        </Link>
                        {/* <Link
                          href={"#"}
                          className="flex flex-row justify-center items-center space-x-2  border-2 border-solid border-color-gray rounded-lg p-2 w-44  hover:border-color-secondary hover:scale-110  hover:bg-color-secondary hover:text-white duration-200 ease-in"
                        >
                          <div>
                            <Image
                              src="/SeguridadESPE/images/icons8-apple-logo.svg"
                              width={30}
                              height={30}
                              alt="hero"
                            />
                          </div>
                          <p className="text-sm font-bold">APP STORE</p>
                        </Link> */}
                      </div>
                    </div>
                  </Animate.FadeUp>
                </div>
                <div className="w-full lg:w-1/2 h-full overflow-hidden">
                  <Animate.MoveIn>
                    <div className="flex h-full justify-center">
                      <Image src="/SeguridadESPE/images/phone2.png" width={500} height={500} className="object-contain move-in" alt="logo" />
                    </div>
                  </Animate.MoveIn>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-color-secundario pt-16 text-white">
          <div className="flex flex-col w-full overflow-hidden">
            <Animate.FadeIn>
              <div className="text-center mb-12">
                <h1 className="text-center title">Seguridad ESPE  <br /></h1> <h1 className="text-2xl">Tu solución para la protección ciudadana</h1>
              </div>
              <div className="px-10 lg:px-32 flex justify-center mb-12">
                <video controls className="w-full" style={{ maxWidth: "820px", height: "auto" }}>
                  <source src="/SeguridadESPE/images/SeguridadESPE-03.mp4" type="video/mp4" />
                  Tu navegador no admite el elemento de video.
                </video>
              </div>
            </Animate.FadeIn>
            <Animate.FadeIn>
              <div className="text-center mb-10">
                <h1 className="text-center title mb-2">Empieza ya!</h1>
                <span className="text-center">Solo necesitas descargar la aplicación</span>
              </div>
            </Animate.FadeIn>

            <Animate.MoveIn>
              <div className="w-full flex flex-col justify-center gap-y-10 lg:gap-y-0 items-center lg:flex-row">
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end overflow-hidden">
                  <Image width={550} height={500} src="/SeguridadESPE/images/phone3.png" className="move-in" alt="phone3" />
                </div>
                <div className="w-full lg:w-1/2 h-full flex items-center lg:items-end pb-16 overflow-hidden">
                  <div className="text-start px-10 lg:px-0 h-full w-full move-in">
                    <h1 className="title mb-10 ">¿Cómo funciona?</h1>
                    <ul>
                      <li className="mb-8 flex items-center">
                        <span className="bg-gray-100 px-5 py-3 rounded-full mr-3 text-blue-800 font-bold text-2xl">1</span>
                        <span className="text-2xl">Descarga la aplicación Seguridad ESPE</span>
                      </li>
                      <li className="mb-8 flex items-center">
                        <span className="bg-gray-100 px-5 py-3 rounded-full mr-3 text-blue-800 font-bold text-2xl">2</span>
                        <span className="text-2xl">Realiza un reporte y publícalo</span>
                      </li>
                      <li className="mb-8 flex items-center">
                        <span className="bg-gray-100 px-5 py-3 rounded-full mr-3 text-blue-800 font-bold text-2xl">3</span>
                        <span className="text-2xl">Revisa el reporte publicado en noticias</span>
                      </li>
                      <li className="mb-8 flex items-center">
                        <span className="bg-gray-100 px-5 py-3 rounded-full mr-3 text-blue-800 font-bold text-2xl">4</span>
                        <span className="text-2xl">Crea grupos personalizados</span>
                      </li>
                      <li className="flex items-center">
                        <span className="bg-gray-100 px-5 py-3 rounded-full mr-3 text-blue-800 font-bold text-2xl">5</span>
                        <span className="text-2xl">Agrega tus lugares más frecuentes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Animate.MoveIn>
          </div>
        </section>

        <section className="w-full">
          <div className="container lg:py-12 md:py-8 py-4 px-10 lg:px-19 text-center">
            <Animate.FadeIn>
              <div className="lg:mb-8">
                <h1 className="mb-6 md:mb-6 lg:mb-16 title">
                  Características aplicación móvil
                </h1>
                <div className="w-full flex flex-col gap-x-0 lg:flex-row lg:gap-x-10 gap-y-5">
                  <div className="flex flex-col w-full lg:w-1/5">
                    <div className="mb-4 flex justify-center">
                      <img className="mb-1 " width="55" height="55" src="/SeguridadESPE/images/reporte.png" />
                    </div>
                    <div className="px-2">
                      <span>
                        Facilita la realización de reportes en tiempo real, adjuntando descripción, foto y ubicación del suceso.
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col w-full lg:w-1/5">
                    <div className="mb-4 flex justify-center">
                      <img className="mb-1 " width="55" height="55" src="/SeguridadESPE/images/sos.png" />

                    </div>
                    <div className="px-2">
                      <span>
                        Incorpora un botón de enviar ayuda &ldquo;Send Out Soccour&ldquo; (SOS) en la interfaz principal.
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col w-full lg:w-1/5">
                    <div className="mb-4 flex justify-center">
                      <NewspaperIcon className="h-14 w-14 text-color-secundario" aria-hidden="true" />
                    </div>
                    <div className="px-2">
                      <span>
                        Ofrece una sección de noticias que muestra las diferentes emergencias que ocurren a diario.
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col w-full lg:w-1/5">
                    <div className="mb-4 flex justify-center">

                      <UserGroupIcon className="h-14 w-14 text-color-secundario" aria-hidden="true" />
                    </div>
                    <div className="px-2">
                      <span>
                        Permite crear grupos personalizados para comunicarse mediante mensajes de texto.
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col w-full lg:w-1/5">
                    <div className="mb-4 flex justify-center">
                      <UserPlusIcon className="h-14 w-14 text-color-secundario" aria-hidden="true" />
                    </div>
                    <div className="px-2">
                      <span>
                        Permite añadir contactos de emergencia en caso de situaciones urgentes.
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col w-full lg:w-1/5">
                    <div className="mb-4 flex justify-center">
                      <img className="mb-1 " width="60" height="60" src="/SeguridadESPE/images/agregar-direccion.png" />
                    </div>
                    <div className="px-2">
                      <span>
                        Contiene la opción de agregar ubicaciones personalizadas, para acceder a noticias de lugares frecuentados.</span>
                    </div>
                  </div>
                </div>
              </div>
            </Animate.FadeIn>
            <Animate.FadeIn>
              <br />
              <div>
                <h1 className="title mb-6 md:mb-6 lg:mb-8 ">
                  Impactos esperados de la aplicación
                </h1>
                <div className="w-full flex flex-col gap-x-0 lg:flex-row lg:gap-x-10 gap-y-5">
                  <div className="flex flex-col w-full lg:w-1/4">
                    <div className="mb-4 flex justify-center">
                      <img className="mb-1 " width="60" height="60" src="/SeguridadESPE/images/comunidad.png" />
                    </div>
                    <div className="px-2">
                      <span>
                        Mantener a la comunidad informada a diario de los diferentes tipos de emergencias que ocurren regularmente.
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col w-full lg:w-1/4">
                    <div className="mb-4 flex justify-center">
                      <img className="mb-1 " width="55" height="55" src="/SeguridadESPE/images/estadisticas.png" />
                    </div>
                    <div className="px-2">
                      <span>
                        Enviar a la comunidad reportes estadísticos de seguridad relevantes, que incluyen información sobre las emergencias más frecuentes y sectores con mayor incidencias.                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col w-full lg:w-1/4">
                    <div className="mb-4 flex justify-center">
                      <img className="mb-1 " width="60" height="60" src="/SeguridadESPE/images/smsimpacto.png" />
                    </div>
                    <div className="px-2">
                      <span>
                        Facilitar la comunicación entre los miembros de la comunidad a través de un sistema de mensajería.
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col w-full lg:w-1/4">
                    <div className="mb-4 flex justify-center">
                      <img className="mb-1 " width="60" height="60" src="/SeguridadESPE/images/alarma.png" />
                    </div>
                    <div className="px-2">
                      <span>
                        Proporcionar notificaciones instantáneas al activar el SOS, asegurando una respuesta rápida y eficaz.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Animate.FadeIn>
          </div>
        </section>

        <section className="bg-color-lila w-full">
          <div className="container lg:py-16 md:py-8 py-4 px-10 lg:px-32 relative">
            <h1 className="title mb-10 text-center">
              Funcionalidades
            </h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 lg:gap-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
              <div className="text-center flex flex-col items-center">
                <div className="overflow-hidden">
                  <Animate.MoveIn>
                    <div className="lg:flex flex-col justify-center items-center hidden">
                      <Image width={230} height={230} src="/SeguridadESPE/images/mapa.jpg" className="rounded-lg shadow-lg" alt="mapa" />
                    </div>
                  </Animate.MoveIn>
                </div>
                <Image width={230} height={230} src="/SeguridadESPE/images/mapa.jpg" className="rounded-lg shadow-lg lg:hidden" alt="mapa" />
                <h3 className="mt-4 text-2xl">Mapa</h3>
              </div>
              <div className="text-center flex flex-col items-center">
                <div className="overflow-hidden">
                  <Animate.MoveIn>
                    <div className="lg:flex flex-col justify-center items-center hidden">
                      <Image width={230} height={230} src="/SeguridadESPE/images/noticias.png" className="rounded-lg shadow-lg" alt="noticias" />
                    </div>
                  </Animate.MoveIn>
                </div>
                <Image width={230} height={230} src="/SeguridadESPE/images/noticias.png" className="rounded-lg shadow-lg lg:hidden" alt="noticias" />
                <h3 className="mt-4 text-2xl">Noticias</h3>
              </div>
              <div className="text-center flex flex-col items-center">
                <div className="overflow-hidden">
                  <Animate.MoveIn>
                    <div className="lg:flex flex-col justify-center items-center hidden">
                      <Image width={230} height={230} src="/SeguridadESPE/images/grupos.jpg" className="rounded-lg shadow-lg" alt="grupos" />
                    </div>
                  </Animate.MoveIn>
                </div>
                <Image width={230} height={230} src="/SeguridadESPE/images/grupos.jpg" className="rounded-lg shadow-lg lg:hidden" alt="grupos" />
                <h3 className="mt-4 text-2xl">Grupos</h3>
              </div>
              <div className="text-center flex flex-col items-center">
                <div className="overflow-hidden">
                  <Animate.MoveIn>
                    <div className="lg:flex flex-col justify-center items-center hidden">
                      <Image width={230} height={230} src="/SeguridadESPE/images/lugares.jpg" className="rounded-lg shadow-lg" alt="lugares" />
                    </div>
                  </Animate.MoveIn>
                </div>
                <Image width={230} height={230} src="/SeguridadESPE/images/lugares.jpg" className="rounded-lg shadow-lg lg:hidden" alt="lugares" />
                <h3 className="mt-4 text-2xl">Lugares</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white h-full w-full flex items-center">
          <div className="container relative py-10 px-10 lg:px-32">
            <Animate.FadeIn>
              <h1 className="title mb-10 text-center">
                ¿De dónde nace?
              </h1>
            </Animate.FadeIn>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-x-10 gap-x-0">
              <div className="w-full flex justify-center items-center lg:w-1/3">
                <Animate.FadeIn>
                  <Image width={500} height={500} src="/SeguridadESPE/images/menusession2.webp" alt="profesores" />

                </Animate.FadeIn>
              </div>
              <div className="w-full lg:w-2/3 text-justify relative flex justify-center items-center overflow-hidden">
                <Image className="img_no_user_select absolute opacity-10" width={500} height={500} src="/SeguridadESPE/images/espe.png" alt="profesor" />
                <br />
                <Animate.FadeIn>
                  <div>
                    <p className="mb-6">
                      Seguridad ESPE, nace a partir del proyecto de vinculación con la sociedad denominado &ldquo;Implementación de aplicaciones web y móvil para gestionar emergencias comunitarias en la provincia de Santo Domingo de los Tsáchilas&ldquo;; con la finalidad de fortalecer la seguridad de la comunidad con la comunicación, coordinación y respuesta ante situaciones de emergencia. La aplicación aprovechará el alto uso de dispositivos móviles e Internet para hacer frente a los desafíos de seguridad, brindando una solución innovadora en el campo de la protección ciudadana.
                    </p>
                    <p className="mb-6">
                      Utilizando como caso de estudio la parroquia Luz de América, se realizaron encuestas exhaustivas para determinar las emergencias comunitarias más comunes en la misma. Estas encuestas identificaron diversas problemáticas de seguridad, tales como robos, vandalismo, desorden público, emergencias médicas, entre otras. La información recopilada se utilizó para desarrollar funcionalidades y servicios específicos en la aplicación Seguridad ESPE, adaptándola a las necesidades de los residentes de la provincia.
                    </p>
                    <p>
                      La aplicación web por otra parte, tiene como objetivo principal proporcionar reportes estadísticos detallados sobre diferentes tipos de emergencias comunitarias. Brinda las opciones de filtrar ubicación, tipo, hora de inicio, hora de fin, fecha de inicio y fin de la emergencia, se accede a datos específicos y relevantes para un análisis más preciso. Además, permite la generación y descarga de informes en formato PDF, a su vez es posible descargar la imagen de la gráfica en formatos PNG y SVG. En caso de necesitar más información, la base de datos se puede descargar en formato CSV (Comma Separated Values) o xlsx (Excel), simplificando así el análisis y el uso de la información para la toma de decisiones en la comunidad.
                    </p>
                  </div>
                </Animate.FadeIn>
              </div>
            </div>
          </div>
        </section>
      </div >
    </>
  );
};

export default HomePage;
