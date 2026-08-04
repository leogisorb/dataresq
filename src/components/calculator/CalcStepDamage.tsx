import {
  AlertTriangle,
  ArrowDown,
  CircuitBoard,
  Cpu,
  Droplets,
  EyeOff,
  FileWarning,
  HelpCircle,
  Trash2,
  Wrench,
  Zap,
} from 'lucide-react';
import CalcOptionTile from '@/components/calculator/CalcOptionTile';
import CalcStepHeading from '@/components/calculator/CalcStepHeading';
import { calcTileIconClasses } from '@/components/calculator/calc-icon-colors';
import {
  buildUnknownFallbackHint,
  DAMAGE_GROUPS,
  getDamageOption,
  getDamageOptionsForDevice,
  getGroupPrices,
} from '@/lib/calculator';
import { getDamageInfo } from '@/lib/calculator-info';
import { formatPriceEuro, showsDamagePriceBadges, type DamageKey, type DeviceKey } from '@/lib/constants';

const DEFAULT_DAMAGE_ICONS = {
  del: Trash2,
  unreadable: FileWarning,
  crash: AlertTriangle,
  mech: Wrench,
  not_recognized: EyeOff,
  water: Droplets,
  ctrl: Cpu,
  unknown: HelpCircle,
} as const;

const MOBILE_DAMAGE_ICONS = {
  del: Trash2,
  unreadable: FileWarning,
  crash: AlertTriangle,
  mech: ArrowDown,
  not_recognized: EyeOff,
  water: Droplets,
  ctrl: Zap,
  unknown: HelpCircle,
} as const;

function getDamageIcon(device: DeviceKey | null, key: DamageKey) {
  if (device === 'smartphone') return MOBILE_DAMAGE_ICONS[key];
  if (key === 'ctrl' && device === 'notebook') return CircuitBoard;
  return DEFAULT_DAMAGE_ICONS[key];
}

interface CalcStepDamageProps {
  device: DeviceKey | null;
  selected: DamageKey | null;
  onSelect: (damage: DamageKey) => void;
  onAnfrageClick: () => void;
}

function PriceBadge({ amount }: { amount: number }): React.JSX.Element {
  const label = `${formatPriceEuro(amount)} inkl. MwSt.`;
  return (
    <span
      aria-label={label}
      className="inline-flex shrink-0 flex-col items-end rounded-full bg-bg px-3 py-1.5 text-right"
    >
      <span aria-hidden="true" className="text-sm font-semibold text-text">
        {formatPriceEuro(amount)}
      </span>
      <span aria-hidden="true" className="text-[11px] leading-none text-text-muted">
        inkl. MwSt.
      </span>
    </span>
  );
}

export default function CalcStepDamage({
  device,
  selected,
  onSelect,
  onAnfrageClick,
}: CalcStepDamageProps): React.JSX.Element {
  const options = getDamageOptionsForDevice(device);
  const showBadges = device !== null && showsDamagePriceBadges(device);
  const groupPrices = device ? getGroupPrices(device, 'std') : null;
  const unknownOption = getDamageOption(device, 'unknown');
  const fallbackHint =
    device && groupPrices ? buildUnknownFallbackHint(device) : (unknownOption?.hint ?? '');

  return (
    <div className="flex flex-col gap-8">
      <CalcStepHeading id="calc-step-damage">Was ist passiert?</CalcStepHeading>

      {DAMAGE_GROUPS.map((group) => {
        const badgeAmount =
          groupPrices && group.id === 'logical'
            ? groupPrices.logical
            : groupPrices && group.id === 'physical'
              ? groupPrices.physical
              : null;

        return (
          <section key={group.id} aria-labelledby={`calc-damage-group-${group.id}`}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3
                className="text-base font-semibold text-text md:text-lg"
                id={`calc-damage-group-${group.id}`}
              >
                {group.title}
              </h3>
              {showBadges && badgeAmount !== null ? (
                <PriceBadge amount={badgeAmount} />
              ) : null}
            </div>

            <div
              aria-labelledby={`calc-damage-group-${group.id}`}
              className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4"
              role="radiogroup"
            >
              {group.keys.map((key) => {
                const option = options.find((entry) => entry.key === key);
                if (!option) return null;

                const Icon = getDamageIcon(device, option.key);
                const isSelected = selected === option.key;

                return (
                  <CalcOptionTile
                    key={option.key}
                    className="flex flex-col gap-2 p-5 md:p-6"
                    infoContent={getDamageInfo(device, option.key)}
                    infoLabel={option.label}
                    isSelected={isSelected}
                    role="radio"
                    onSelect={() => onSelect(option.key)}
                  >
                    <Icon
                      aria-hidden="true"
                      className={['size-5', calcTileIconClasses(isSelected, option.key)].join(' ')}
                      strokeWidth={1.5}
                    />
                    <span className="pr-8 text-base font-medium">{option.label}</span>
                    <span className="text-sm text-text-dim">{option.hint}</span>
                  </CalcOptionTile>
                );
              })}
            </div>
          </section>
        );
      })}

      {unknownOption ? (
        <div role="radiogroup" aria-label="Fallback: Ursache unklar">
          <CalcOptionTile
            className="flex w-full flex-col gap-2 p-5 md:p-6"
            infoContent={getDamageInfo(device, 'unknown')}
            infoLabel={unknownOption.label}
            isSelected={selected === 'unknown'}
            role="radio"
            onSelect={() => onSelect('unknown')}
          >
            <HelpCircle
              aria-hidden="true"
              className={[
                'size-5',
                calcTileIconClasses(selected === 'unknown', 'unknown'),
              ].join(' ')}
              strokeWidth={1.5}
            />
            <span className="pr-8 text-base font-medium">{unknownOption.label}</span>
            <span className="text-sm text-text-dim">{fallbackHint}</span>
          </CalcOptionTile>
        </div>
      ) : null}

      <p className="text-sm leading-relaxed text-text-muted">
        Verschlüsselte Systeme, RAID/NAS oder Smartphones prüfen wir individuell.{' '}
        <button
          className="font-medium text-accent underline-offset-2 hover:underline"
          type="button"
          onClick={onAnfrageClick}
        >
          Preis nach kostenloser Analyse anfragen
        </button>
      </p>
    </div>
  );
}
