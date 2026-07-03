'use client';

import Image from 'next/image';
import { Chip } from '@heroui/react';

import { TEAM } from '@/lib/team';

export default function TeamGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {TEAM.map((member) => (
        <article
          key={member.name}
          className="flex flex-col rounded-lg border border-black/5 bg-bg-card p-6"
        >
          <Image
            alt={`${member.name} — ${member.role}`}
            className="rounded-lg object-cover"
            height={280}
            src={member.image}
            unoptimized
            width={280}
          />
          <h3 className="mt-4 text-xl font-semibold text-text">{member.name}</h3>
          <p className="mt-1 text-sm font-medium text-accent">{member.role}</p>
          <p className="mt-3 text-sm leading-relaxed text-text">{member.bio}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {member.credentials.map((credential) => (
              <Chip key={credential} size="sm" variant="soft">
                {credential}
              </Chip>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
