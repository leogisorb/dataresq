import { comparisonRows } from '@/lib/ueber-uns-content';

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full min-w-[560px] border-collapse text-left text-sm text-text md:text-base">
        <thead>
          <tr className="border-b border-border bg-bg-subtle">
            <th className="px-4 py-4 font-semibold md:px-6" scope="col">
              Merkmal
            </th>
            <th className="px-4 py-4 font-semibold md:px-6" scope="col">
              RSQDATA
            </th>
            <th className="px-4 py-4 font-semibold md:px-6" scope="col">
              Branchenüblich
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row) => (
            <tr
              key={row.feature}
              className="border-b border-border transition-colors duration-200 last:border-b-0 hover:bg-neon/20"
            >
              <th className="px-4 py-4 font-medium md:px-6" scope="row">
                {row.feature}
              </th>
              <td className="px-4 py-4 font-medium text-text md:px-6">{row.rsqdata}</td>
              <td className="px-4 py-4 text-text-muted md:px-6">{row.industry}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
