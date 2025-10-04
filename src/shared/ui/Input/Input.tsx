'use client';

import { type ComponentProps, forwardRef } from 'react';
import cn from 'classnames';

// Определяем тип для пропсов, как и раньше
type InputProps = ComponentProps<'input'> & {
  className?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          // --- Базовые стили Tailwind ---
          'w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900',
          'placeholder:text-gray-400',
          
          // --- Стили при фокусе ---
          'focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30',

          // --- Стили для отключенного состояния ---
          'disabled:cursor-not-allowed disabled:bg-gray-100',
          
          // --- Возможность передать дополнительные классы извне ---
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';