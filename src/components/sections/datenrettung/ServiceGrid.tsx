'use client';

import Link from 'next/link';
import { Card } from '@heroui/react';

import { datenrettungServices } from '@/lib/datenrettung-services';

export default function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {datenrettungServices.map((service) => (
        <Card key={service.href} className="h-full border border-black/5 bg-bg-card" variant="default">
          <Card.Content className="flex h-full flex-col p-6">
            <span aria-hidden="true" className="text-3xl">
              {service.icon}
            </span>
            <Card.Header className="mt-4 p-0">
              <Card.Title className="text-lg text-text">{service.title}</Card.Title>
              <Card.Description className="mt-2 text-sm leading-relaxed text-text">
                {service.description}
              </Card.Description>
            </Card.Header>
            <Card.Footer className="mt-auto p-0 pt-4">
              <Link
                className="touch-target inline-flex items-center text-sm font-medium text-accent active:text-accent-hover"
                href={service.href}
              >
                Mehr erfahren →
              </Link>
            </Card.Footer>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}
