'use client';

import { useEffect, useRef, useState } from 'react';
import { Button, Input, Label } from 'shared/ui';

/**
 * Фича "Форма входа в аккаунт"
 */
export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const input = useRef<HTMLInputElement>(null);
    const didMounted = useRef(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Предотвращаем стандартную отправку формы

        // Здесь будет логика отправки данных на сервер
        console.log('Отправка данных:', { email, password });
        alert(`Добро пожаловать, ${email}!`);
    };

    useEffect(() => {
        input?.current?.focus();
    }, [input]);

    return (
        <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-sm flex-col space-y-4"
        >
            {/* Поле для ввода Email */}
            <div className="flex flex-col">
                <Label htmlFor="email">Email</Label>
                <Input
                    ref={input}
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                />
            </div>

            {/* Поле для ввода пароля */}
            <div className="flex flex-col">
                <Label htmlFor="password">Пароль</Label>
                <Input
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                />
            </div>

            {/* Кнопка отправки */}
            <Button type="submit">
                Войти
            </Button>
        </form>
    );
};