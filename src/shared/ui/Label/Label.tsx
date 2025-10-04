import { type ComponentProps } from 'react';
import cn from 'classnames';

// Наследуем все стандартные атрибуты для элемента <label>
type LabelProps = ComponentProps<'label'> & {
  className?: string;
  children: React.ReactNode; 
};

export const Label = ({ className, children, ...props }: LabelProps) => {
  return (
    <label
      className={cn(
        // --- Базовые стили Tailwind ---
        'mb-2 block text-sm font-medium text-gray-700',

        // --- Возможность передать дополнительные классы извне ---
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
};