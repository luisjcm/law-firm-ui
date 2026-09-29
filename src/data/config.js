export const siteConfig = {
  brand: {
    name: 'lex.',
    slogan: 'FIRMA LEGAL CORPORATIVA · LECHERÍA, VENEZUELA',
  },
  hero: {
    heading: 'Claridad legal para decisiones complejas.',
    description: 'Asesoría jurídica especializada en derecho corporativo, civil y protección patrimonial. Defendemos tus intereses con la máxima rigurosidad y discreción.',
    actions: [
      { label: 'Nuestros servicios', href: '#servicios', primary: true },
      { label: 'Agendar consulta', href: '#contacto', primary: false }
    ],
    metrics: [
      { value: '15+', label: 'años de trayectoria' },
      { value: '98%', label: 'resoluciones favorables' },
      { value: '500+', label: 'clientes corporativos' },
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=85&w=1200',
      alt: 'Sala de juntas corporativa',
      badge: 'Derecho Corporativo',
      caption: 'Sede Principal · Lechería',
      price: '' 
    }
  },
  properties: {
    copy: {
      eyebrow: 'ÁREAS DE PRÁCTICA',
      heading: 'Especialidades de la Firma',
      description: 'Brindamos representación legal del más alto nivel en áreas críticas para el desarrollo y protección de su patrimonio corporativo.'
    },
    properties: [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=85&w=800',
        title: 'Derecho Corporativo',
        location: 'Consultoría y Litigio',
        price: '', // Dejamos vacío el precio para la firma legal
        features: ['Contratos', 'Fusiones', 'Auditorías']
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=85&w=800',
        title: 'Protección Patrimonial',
        location: 'Civil y Mercantil',
        price: '',
        features: ['Fideicomisos', 'Sucesiones', 'Litigios']
      },
      {
        id: 3,
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=85&w=800',
        title: 'Propiedad Intelectual',
        location: 'Registro y Defensa',
        price: '',
        features: ['Marcas', 'Patentes', 'Derechos de Autor']
      }
    ]
  },
  navigation: [
    { label: 'Áreas de Práctica', href: '#servicios' },
    { label: 'El Equipo', href: '#equipo' },
    { label: 'Casos de Éxito', href: '#casos' },
    { label: 'Contacto', href: '#contacto' },
  ],
  contact: {
    socialLinks: [
      { name: 'LinkedIn', icon: 'LinkedIn', href: 'https://linkedin.com' },
      { name: 'Twitter', icon: 'Facebook', href: 'https://twitter.com' },
    ]
  },
  footer: {
    copyrightLabel: 'Todos los derechos reservados.',
    developerText: 'Desarrollado por',
    developerName: 'luisjcm',
    developerUrl: 'https://luisjcm.com',
    legalLinks: [
      { label: 'Aviso de Privacidad', href: '/privacidad' },
      { label: 'Términos de Servicio', href: '/terminos' },
    ]
  },
  accessibility: {
    navigationLabel: 'Navegación principal',
  }
}