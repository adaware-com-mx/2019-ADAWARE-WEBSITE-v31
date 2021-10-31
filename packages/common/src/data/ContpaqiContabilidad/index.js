
import Screenshot1 from '../../assets/image/contpaqiContabilidad/screenshot1.png';
import Screenshot2 from '../../assets/image/contpaqiContabilidad/screenshot2.png';
import Screenshot3 from '../../assets/image/contpaqiContabilidad/screenshot3.png';
import Screenshot4 from '../../assets/image/contpaqiContabilidad/screenshot4.png';

import { ic_monetization_on } from 'react-icons-kit/md/ic_monetization_on';
import { ic_settings } from 'react-icons-kit/md/ic_settings';
import { pieChart } from 'react-icons-kit/icomoon/pieChart';
import { briefcase } from 'react-icons-kit/fa/briefcase';

export const SCREENSHOTS = [
  {
    icon: ic_monetization_on,
    title: 'Tablero Fiscal',
    image: Screenshot1,
  },
  {
    icon: ic_settings,
    title: 'Pólizas',
    image: Screenshot2,
  },
  {
    icon: pieChart,
    title: 'Nuevo ADD',
    image: Screenshot3,
  },
  {
    icon: briefcase,
    title: 'REP > Pólizas de pago',
    image: Screenshot4,
  },
];



export const MONTHLY_PRICING_TABLE = [
  {
    freePlan: true,
    name: 'CONTPAQi Contabilidad',
    description: 'Facilita la captura, registro y contabilización de tu información fiscal y financiera, a través del sistema favorito de los Contadores',
    price: '$4,190.00*',
    priceLabel: 'Pesos Mexicanos + IVA',
    buttonLabel: 'PROBAR 1 MES GRATIS',
    url: '#',
    trialButtonLabel: 'Descarga la ficha técnica en PDF',
    trialURL: '#',
    listItems: [
      {
        content: 'Analiza situación contable/fiscal',
      },
      {
        content: 'Tablero Fiscal información CFDI',
      },
      {
        content: 'Recibo Electrónico de Pagos REP',
      },
      {
        content: 'Administra Documentos Digitales',
      },
      {
        content: 'Exporta la información a Excel®',
      },
    ],
  },

];


export const FAQ_DATA = [
  {
    expend: true,
    title: '¿Cómo contactar con Atención al Cliente?',
    description:
      'Nuestro equipo de atención al cliente está disponible 5 días de la semana, de 9am a 5pm y ofrecemos 3 formas de contacto. Correo electrónico, chat y Whatsapp. Intentamos responder rápidamente, por lo que la espera no será demasiada para recibir una respuesta nuestra.',
  },
  {
    title: 'Instalación de las aplicaciones, ¿cómo actualizar o instalar los sistema CONTPAQi?',
    description:
      'Con nuestras Pólizas de Servicio, obtienes la manera más fácil y cómoda de asegurar el funcionamiento óptimo de tu software así como de obtener el respaldo de expertos profesionales, con asesoría y soporte para tu sistema con un amplio horario.',
  },
  {
    title: '¿Cuanto tiempo tardará un ejecutivo en resolver dudas de mi sistema CONTPAQi?',
    description:
      'La Polizas Remota, está diseñada, para trabajar de manera cómoda, segura y efectiva a través de un escritorio remoto, donde un ejecutivo le atenderá y brindará el soporte que requiera en el momento.',
  },
  {
    title: '¿Cómo podemos sacar el máximo provecho a sus productos y servicios?',
    description:
      'Contamos con cursos para todos los sistemas CONTPAQi. Dichos cursos pueden ser impartidos en nuestras instalaciones o bien en la oficina del cliente. El tiempo de duración, fechas de impartición, sede y costo se definen de acuerdo a las necesidades cada cliente.',
  },
];
