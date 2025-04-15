// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM cargado completamente")

  // Elementos del DOM
  const header = document.querySelector("header")
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const navLinks = document.querySelector(".nav-links")
  const navItems = document.querySelectorAll(".nav-links li a")
  const servicesCarousel = document.querySelector(".services-carousel")
  const scrollLeftBtn = document.querySelector(".scroll-left")
  const scrollRightBtn = document.querySelector(".scroll-right")
  const serviceCards = document.querySelectorAll(".service-card")
  const serviceDetail = document.getElementById("service-detail")
  const closeDetailBtn = document.querySelector(".close-detail")
  const detailTitle = document.getElementById("detail-title")
  const detailDescription = document.getElementById("detail-description")
  const detailBenefits = document.getElementById("detail-benefits")
  const detailImage = document.querySelector(".detail-image img")
  const insurersCarousel = document.querySelector(".insurers-carousel")
  const insurersPrev = document.querySelector(".insurers-prev")
  const insurersNext = document.querySelector(".insurers-next")
  const contactForm = document.getElementById("contactForm")
  const formSuccess = document.getElementById("formSuccess")
  const newsletterForm = document.getElementById("newsletterForm")
  const backToTopBtn = document.getElementById("backToTop")
  const cookieConsent = document.getElementById("cookieConsent")
  const acceptCookiesBtn = document.getElementById("acceptCookies")
  const rejectCookiesBtn = document.getElementById("rejectCookies")

  // Datos de servicios
  const serviceData = {
    salud: {
      title: "Salud Local e Internacional",
      description:
        "Nuestros planes de salud te brindan acceso rápido a consultas médicas, hospitalización, exámenes y cirugías en las mejores clínicas privadas, tanto a nivel local como internacional.",
      benefits: [
        "Cobertura de emergencias las 24 horas",
        "Red de profesionales de la salud y centros médicos de alta calidad",
        "Cobertura de medicamentos recetados",
        "Atención médica en el extranjero",
        "Telemedicina disponible",
        "Y muchos más, dentro de tu plan.",
      ],
      image: "img/placeholder.svg",
    },
    catastroficas: {
      title: "Enfermedades Catastróficas",
      description:
        "Protección especializada para tratamientos de alto costo relacionados con enfermedades graves como cáncer, trasplantes de órganos, enfermedades cardiovasculares graves y más.",
      benefits: [
        "Cobertura de tratamientos costosos",
        "Acceso a especialistas reconocidos",
        "Medicamentos de última generación",
       "Tratamientos médicos de vanguardia",
        "Apoyo psicológico para pacientes y familiares",
        "Y muchos más, dentro de tu plan.",
      ],
      image: "img/placeholder.svg",
    },
    vida: {
      title: "Seguro de Vida",
      description:
        "Brinda protección económica a tus seres queridos en caso de fallecimiento, asegurando su estabilidad financiera y el cumplimiento de tus obligaciones.",
      benefits: [
        "Indemnización por fallecimiento",
        "Cobertura por muerte accidental",
        "Doble indemnización por muerte accidental",
        "Pensiones",
        "Y muchos más, dentro de tu plan.",
      ],
      image: "img/placeholder.svg",
    },
    ahorro: {
      title: "Vida con Ahorro",
      description:
        "Combina la protección de un seguro de vida con un plan de ahorro a futuro, permitiéndote acumular un capital mientras proteges a tu familia.",
      benefits: [
        "Protección y ahorro en un solo producto",
        "Rendimientos competitivos",
        "Disponibilidad parcial de fondos",
        "Planificación para la jubilación",
        "Y muchos más, dentro de tu plan.",
      ],
      image: "img/placeholder.svg",
    },
    estudiantil: {
      title: "Vida Estudiantil",
      description:
        "Diseñado especialmente para estudiantes, este seguro permite a los padres ahorrar para el futuro académico de sus hijos, brindando protección económica durante su etapa de formación.",
      benefits: [
        "Ahorro para la educación futura",
        "Protección financiera para los padres",
        "Flexibilidad en los aportes",
        "Rendimiento competitivo del ahorro",
        "Y muchos más, dentro de tu plan.",
      ],
      image: "img/placeholder.svg",
    },
    gastos: {
      title: "Últimos Gastos",
      description:
        "Proporciona apoyo económico para cubrir los gastos funerarios, evitando que tus seres queridos enfrenten esta carga financiera en momentos difíciles.",
      benefits: [
        "Cobertura de servicios funerarios completos",
        "Trámites legales post-mortem",
        "Traslados nacionales",
        "Asistencia para familiares",
        "Primas accesibles",
        "Y muchos más, dentro de tu plan.",
      ],
      image: "img/placeholder.svg",
    },
    mascotas: {
      title: "Seguros de Mascotas",
      description:
        "Protege a tu mascota con cobertura para servicios veterinarios, incluyendo consultas, vacunas, cirugías y tratamientos por enfermedades o accidentes.",
      benefits: [
        "Consultas veterinarias",
        "Vacunación",
        "Cirugías y hospitalización",
        "Responsabilidad civil por daños a terceros",
        "Y muchos más, dentro de tu plan.",
      ],
      image: "img/placeholder.svg",
    },
    valiosos: {
      title: "Artículos Valiosos",
      description:
        "Asegura tus pertenencias más preciadas como joyas, relojes, obras de arte y colecciones contra robo, daño o pérdida.",
      benefits: [
        "Cobertura mundial",
        "Valoración profesional de artículos",
        "Protección contra todo riesgo",
        "Cobertura durante el transporte",
        "Y muchos más, dentro de tu plan.",
      ],
      image: "img/placeholder.svg",
    },
    empresarial: {
      title: "Paquetes Empresariales",
      description:
        "Soluciones integrales para empresas que incluyen protección para instalaciones, equipos, responsabilidad civil, interrupción de negocio y más.",
      benefits: [
        "Protección integral para tu negocio",
        "Cobertura de responsabilidad civil",
        "Seguro para empleados",
        "Protección contra pérdida de ingresos",
        "Planes personalizados según el tamaño de la empresa",
        "Y muchos más, dentro de tu plan.",
      ],
      image: "img/placeholder.svg",
    },
    digitales: {
      title: "Activos Digitales",
      description:
        "Protección especializada para software, licencias, contenido digital y datos contra ciberataques, pérdida de información o daño.",
      benefits: [
        "Protección contra ciberataques",
        "Recuperación de datos",
        "Cobertura por interrupción de servicio",
        "Responsabilidad por filtración de datos",
        "Asesoría en ciberseguridad",
        "Y muchos más, dentro de tu plan.",
      ],
      image: "img/placeholder.svg",
    },
    domesticas: {
      title: "Seguro para Domestica y Chofer",
      description:
        "Seguro integral para personal doméstico y choferes, que cubre accidentes, enfermedades y atención médica durante sus labores.",
      benefits: [
        "Cobertura por accidentes laborales",
        "Atención médica integral",
        "Cobertura por enfermedades",
        "Atención médica de calidad",
        "Y muchos más, dentro de tu plan.",
      ],
      image: "img/placeholder.svg",
    },
    viajero: {
      title: "Seguro Viajero",
      description:
        "Protege tu bienestar y tranquilidad durante tus viajes, con un seguro diseñado para cubrir emergencias médicas, pérdidas o inconvenientes.",
      benefits: [
        "PRepatracion",
        "Cobertura médica internacional",
        "Pérdida de equipaje y pertenencias",
        "Asistencia legal y de emergencia",
        "Asistencia en viajes",
        "Atención telefónica 24/7",
        "Y muchos más, dentro de tu plan.",
        
      ],
      image: "img/placeholder.svg",
    },
    fianza: {
      title: "Seguro de Fianzas",
      description:
        "Soluciones integrales para empresas que incluyen protección para instalaciones, equipos, responsabilidad civil, interrupción de negocio y más.",
      benefits: [
        "Protección integral para tu negocio",
        "Cobertura de responsabilidad civil",
        "Seguro para empleados",
        "Protección contra pérdida de ingresos",
        "Planes personalizados según el tamaño de la empresa",
        "Y muchos más, dentro de tu plan.",
      ],
      image: "img/placeholder.svg",
    },
    general: {
      title: "Todo Riesgos Generales", 
      description:
        "Soluciones integrales para empresas que incluyen protección para instalaciones, equipos, responsabilidad civil, interrupción de negocio y más.",
      benefits: [
        "Protección integral para tu negocio",
        "Cobertura de responsabilidad civil",
        "Seguro para empleados",
        "Protección contra pérdida de ingresos",
        "Planes personalizados según el tamaño de la empresa",
        "Y muchos más, dentro de tu plan.",
      ],
      image: "img/placeholder.svg",
    },
  }

  console.log("Variables inicializadas")

  // Efecto de scroll en el header
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }

    // Botón de volver arriba
    if (window.scrollY > 500) {
      backToTopBtn.classList.add("active")
    } else {
      backToTopBtn.classList.remove("active")
    }

  console.log("Evento de scroll añadido")

  // Menú móvil
  if (mobileMenuBtn) {
    console.log("Botón de menú móvil encontrado")
    mobileMenuBtn.addEventListener("click", () => {
      console.log("Clic en botón de menú móvil")
      navLinks.classList.toggle("active")
      mobileMenuBtn.classList.toggle("active")
    })
  }

  // Cerrar menú móvil al hacer clic en un enlace
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("active")
      mobileMenuBtn.classList.remove("active")
    })
  })

  console.log("Eventos de menú móvil añadidos")

  // Carrusel de servicios
  if (scrollLeftBtn && scrollRightBtn && servicesCarousel) {
    console.log("Botones de carrusel de servicios encontrados")
    scrollLeftBtn.addEventListener("click", () => {
      console.log("Clic en botón izquierdo")
      servicesCarousel.scrollBy({
        left: -320,
        behavior: "smooth",
      })
    })


    scrollRightBtn.addEventListener("click", () => {
      console.log("Clic en botón derecho")
      servicesCarousel.scrollBy({
        left: 320,
        behavior: "smooth",
      })
    })
  } else {
    console.warn("No se encontraron todos los elementos necesarios")
  }
})

  // Modal de detalle de servicio
  serviceCards.forEach((card) => {
    card.addEventListener("click", () => {
      console.log("Clic en tarjeta de servicio")
      const serviceType = card.getAttribute("data-service")
      const service = serviceData[serviceType]

      if (service) {
        detailTitle.textContent = service.title
        detailDescription.textContent = service.description
        detailImage.src = service.image

        // Limpiar y poblar la lista de beneficios
        detailBenefits.innerHTML = ""
        service.benefits.forEach((benefit) => {
          const li = document.createElement("li")
          li.textContent = benefit
          detailBenefits.appendChild(li)
        })

        serviceDetail.classList.add("active")
        document.body.style.overflow = "hidden"
      }
    })
  })

  // Cerrar modal de detalle
  if (closeDetailBtn) {
    console.log("Botón de cerrar detalle encontrado")
    closeDetailBtn.addEventListener("click", () => {
      serviceDetail.classList.remove("active")
      document.body.style.overflow = "auto"
    })
  }

  // Cerrar modal al hacer clic fuera
  if (serviceDetail) {
    serviceDetail.addEventListener("click", (e) => {
      if (e.target === serviceDetail) {
        serviceDetail.classList.remove("active")
        document.body.style.overflow = "auto"
      }
    })
  }

  // Carrusel de aseguradoras
  if (insurersPrev && insurersNext) {
    console.log("Botones de carrusel de aseguradoras encontrados")
    insurersPrev.addEventListener("click", () => {
      insurersCarousel.scrollBy({
        left: -220,
        behavior: "smooth",
      })
    })

    insurersNext.addEventListener("click", () => {
      insurersCarousel.scrollBy({
        left: 220,
        behavior: "smooth",
      })
    })
  }

  // Auto-scroll del carrusel de aseguradoras
  let autoScrollInterval

  const startAutoScroll = () => {
    autoScrollInterval = setInterval(() => {
      if (insurersCarousel) {
        const maxScroll = insurersCarousel.scrollWidth - insurersCarousel.clientWidth
        const currentScroll = insurersCarousel.scrollLeft

        if (currentScroll >= maxScroll) {
          insurersCarousel.scrollLeft = 0
        } else {
          insurersCarousel.scrollLeft += 1
        }
      }
    }, 30)
  }

  const stopAutoScroll = () => {
    clearInterval(autoScrollInterval)
  }

  // Iniciar auto-scroll
  if (insurersCarousel) {
    console.log("Carrusel de aseguradoras encontrado")
    startAutoScroll()

    // Pausar auto-scroll al pasar el ratón
    insurersCarousel.addEventListener("mouseenter", stopAutoScroll)
    insurersCarousel.addEventListener("mouseleave", startAutoScroll)
  }

  // Envío del formulario de contacto
  if (contactForm) {
    console.log("Formulario de contacto encontrado")
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
      console.log("Formulario de contacto enviado")

      // Simular envío del formulario
      setTimeout(() => {
        formSuccess.classList.add("active")
        contactForm.reset()

        // Ocultar mensaje de éxito después de 5 segundos
        setTimeout(() => {
          formSuccess.classList.remove("active")
        }, 5000)
      }, 1000)
    })
  }

  // Envío del formulario de boletín
  if (newsletterForm) {
    console.log("Formulario de boletín encontrado")
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault()
      console.log("Formulario de boletín enviado")

      // Simular envío del formulario
      alert("¡Gracias por suscribirte a nuestro boletín!")
      newsletterForm.reset()
    })
  }

  // Botón de volver arriba
  if (backToTopBtn) {
    console.log("Botón de volver arriba encontrado")
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }

  // Consentimiento de cookies
  window.addEventListener("load", () => {
    console.log("Página cargada completamente")
    // Verificar si el usuario ya ha tomado una decisión
    const cookieChoice = localStorage.getItem("cookieConsent")

    if (!cookieChoice && cookieConsent) {
      console.log("Mostrando consentimiento de cookies")
      // Mostrar consentimiento de cookies después de 2 segundos
      setTimeout(() => {
        cookieConsent.classList.add("active")
      }, 2000)
    }
  })

  // Aceptar cookies
  if (acceptCookiesBtn) {
    console.log("Botón de aceptar cookies encontrado")
    acceptCookiesBtn.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "accepted")
      cookieConsent.classList.remove("active")
    })
  }

  // Rechazar cookies
  if (rejectCookiesBtn) {
    console.log("Botón de rechazar cookies encontrado")
    rejectCookiesBtn.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "rejected")
      cookieConsent.classList.remove("active")
    })
  }

  // Enlace de navegación activo
  const sections = document.querySelectorAll("section")
  const navLinks2 = document.querySelectorAll(".nav-links li a")

  window.addEventListener("scroll", () => {
    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight

      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    navLinks2.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active")
      }
    })
  })

  console.log("JavaScript cargado correctamente")
})
