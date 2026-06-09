'use client';

import { Card } from '@heroui/react';

import { certifications } from '@/lib/ueber-uns-content';

export default function CertificationGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      {certifications.map((cert) => (
        <Card key={cert.title} className="h-full border border-black/5 bg-bg-card" variant="default">
          <Card.Content className="p-6">
            <span aria-hidden="true" className="text-3xl">
              {cert.icon}
            </span>
            <Card.Header className="mt-4 p-0">
              <Card.Title className="text-base text-text">{cert.title}</Card.Title>
              <Card.Description className="mt-2 text-sm leading-relaxed text-text">
                {cert.description}
              </Card.Description>
            </Card.Header>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}
