import { Clock } from 'lucide-react';
import { cn } from './ui/utils';

type BadgeSize = 'sm' | 'md';

interface ComingSoonBadgeProps {
  /**
   * `badge` renders the compact pill used on feature cards.
   * `label` renders the quieter "Currently in development" line used under
   * headings where a pill would compete with the title.
   */
  variant?: 'badge' | 'label';
  size?: BadgeSize;
  className?: string;
}

const SIZES: Record<BadgeSize, { pill: string; icon: string }> = {
  sm: { pill: 'text-[10px] px-2 py-0.5 gap-1', icon: 'w-2.5 h-2.5' },
  md: { pill: 'text-xs px-3 py-1 gap-1.5', icon: 'w-3 h-3' },
};

/**
 * Marks a capability that is real product direction but not usable yet.
 *
 * Deliberately low-saturation: it reads as a considered status, not a warning,
 * so a card carrying one still looks like part of the product.
 */
export function ComingSoonBadge({
  variant = 'badge',
  size = 'md',
  className = '',
}: ComingSoonBadgeProps) {
  if (variant === 'label') {
    return (
      <span
        className={cn(
          'inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-[#7BB8E8]/80',
          className,
        )}
      >
        <Clock className="w-3 h-3" aria-hidden="true" />
        Currently in development
      </span>
    );
  }

  const { pill, icon } = SIZES[size];

  return (
    // cn() merges via tailwind-merge, so callers can override the colours
    // (e.g. on the gradient CTA card) without class conflicts.
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-[#1476B8]/40 bg-[#1476B8]/10 font-semibold uppercase tracking-wider text-[#7BB8E8] backdrop-blur-sm whitespace-nowrap',
        pill,
        className,
      )}
    >
      <Clock className={icon} aria-hidden="true" />
      Coming Soon
    </span>
  );
}
