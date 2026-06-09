'use client';

import { Table } from '@heroui/react';

import { comparisonRows } from '@/lib/ueber-uns-content';

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <Table.ScrollContainer>
        <Table.Content
          aria-label="Vergleich DATARESQ vs. typischer Anbieter"
          className="min-w-[480px] text-text"
        >
          <Table.Header>
            <Table.Column isRowHeader>Merkmal</Table.Column>
            <Table.Column>DATARESQ</Table.Column>
            <Table.Column>Typischer Anbieter</Table.Column>
          </Table.Header>
          <Table.Body>
            {comparisonRows.map((row) => (
              <Table.Row key={row.feature}>
                <Table.Cell className="font-medium">{row.feature}</Table.Cell>
                <Table.Cell>{row.muench}</Table.Cell>
                <Table.Cell>{row.competitor}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </div>
  );
}
