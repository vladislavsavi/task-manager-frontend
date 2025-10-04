import React from 'react';
import cn from 'classnames'; // Импортируем нашу утилиту

// Интерфейс для пропсов остается таким же
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    className,
    ...rest
}) => {
    const variantStyles = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
    };

    return (
        <button
            className={cn(
                // Базовые стили
                'px-4 py-2 rounded-lg font-semibold transition-colors duration-200',
                'focus:outline-none focus:ring-2 focus:ring-offset-2',
                
                // Стили варианта, которые берутся из объекта
                variantStyles[variant],
                
                // Любые дополнительные классы, переданные снаружи
                className
            )}
            {...rest}
        >
            {children}
        </button>
    );
};