import React from 'react';

// Интерфейс для пропсов, расширяем стандартные пропсы кнопки
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}

/**
 * Переиспользуемый UI-компонент "Кнопка"
 */
export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    className = '',
    ...rest
}) => {
    // Базовые стили для всех кнопок
    const baseStyle =
        'px-4 py-2 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

    let variantStyle = '';

    // Стиль в зависимости от варианта
    if (variant === 'primary') {
        variantStyle = 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500';
    } else if (variant === 'secondary') {
        variantStyle = 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400';
    }

    return (
        <button
            className={`${baseStyle} ${variantStyle} ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
};  