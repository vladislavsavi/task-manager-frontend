// src/app/page.tsx

// Обязательно 'use client', так как кнопка интерактивная (имеет onClick)
'use client'; 

// Используем абсолютный импорт FSD!
import { Button } from 'shared/ui/Button'; 

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
        Task Manager: Начало Работы!
      </h1>

      <div className="flex gap-4">
        <Button variant="primary" onClick={() => console.log('Primary!')}>
          Кнопка Primary
        </Button>
        <Button variant="secondary" onClick={() => console.log('Secondary!')}>
          Кнопка Secondary
        </Button>
      </div>
    </div>
  );
}