export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Externe Festplatte mit Hochzeitsfotos wurde nicht mehr erkannt, Backup war leider schon älter. Beim Telefonat alles verständlich erklärt, Festpreis vor dem Versand klar. Alle Bilder wieder da, bin erleichtert.',
    name: 'Thomas Weber',
    role: 'Fotograf, Köln',
    image: '/images/testimonials/testimonial-thomas-weber.png',
    imageAlt: 'Porträt von Thomas Weber',
  },
  {
    quote:
      'Unser NAS ist freitags abends ausgefallen, genau dann wenn man es am wenigsten gebrauchen kann. Auf dem Gerät lagen viele wichtige Unterlagen aus dem Büroalltag. Ich wurde während der ganzen Zeit gut informiert und hatte immer jemanden zum Ansprechen, auch als ich zwischendurch nochmal nachgefragt habe. Die Daten sind größtenteils wiederhergestellt worden. Der Preis war ordentlich, aber man wusste vorher woran man ist und das Ergebnis hat es für uns gerechtfertigt.',
    name: 'Ines Scholz',
    role: 'Büroorganisation, Neuss',
    image: '/images/testimonials/testimonial-sabine-hartmann.png',
    imageAlt: 'Porträt von Ines Scholz',
  },
  {
    quote: 'SSD plötzlich leer. In Grevenbroich abgegeben, am nächsten Tag schon die Dateiliste. Die meisten Fotos wieder da.',
    name: 'Markus Klein',
    role: 'Grevenbroich',
    image: '/images/testimonials/testimonial-markus-klein.png',
    imageAlt: 'Porträt von Markus Klein',
  },
];
