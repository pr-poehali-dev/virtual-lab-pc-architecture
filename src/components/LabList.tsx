import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LabCard from "./LabCard";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const LabList = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  const labs = [
    {
      id: 1,
      title: "Основы двоичной арифметики",
      description:
        "Комплексное изучение двоичной системы счисления с практическими упражнениями по преобразованию чисел и выполнению арифметических операций.",
      difficulty: "Базовый" as const,
      duration: "45 мин",
      status: "completed" as const,
      topics: ["Двоичная система", "Арифметика", "Представление чисел"],
      category: "arithmetic",
      prerequisites: [],
      learningOutcomes: [
        "Перевод чисел между системами счисления",
        "Выполнение двоичных арифметических операций",
        "Понимание представления отрицательных чисел",
        "Работа с дополнительным кодом",
        "Обнаружение переполнения при вычислениях",
      ],
      tasksCount: 8,
      simulationType: "Интерактивный калькулятор",
      tools: [
        "Двоичный калькулятор",
        "Конвертер систем счисления",
        "Визуализатор битов",
      ],
    },
    {
      id: 2,
      title: "Архитектура процессора",
      description:
        "Глубокое погружение в устройство современного процессора: от базовых компонентов до сложных механизмов выполнения команд.",
      difficulty: "Средний" as const,
      duration: "90 мин",
      status: "in-progress" as const,
      topics: ["Процессор", "Регистры", "АЛУ", "Управление"],
      category: "processor",
      prerequisites: ["Основы двоичной арифметики"],
      learningOutcomes: [
        "Понимание архитектуры фон Неймана",
        "Работа с регистрами процессора",
        "Функционирование арифметико-логического устройства",
        "Принципы работы устройства управления",
        "Взаимодействие компонентов процессора",
        "Понимание машинного цикла",
      ],
      tasksCount: 12,
      simulationType: "3D модель процессора",
      tools: [
        "Симулятор процессора",
        "Редактор регистров",
        "Визуализатор АЛУ",
        "Монитор команд",
      ],
    },
    {
      id: 3,
      title: "Система команд процессора",
      description:
        "Изучение полного набора машинных команд, режимов адресации и процесса выполнения программ на уровне процессора.",
      difficulty: "Средний" as const,
      duration: "75 мин",
      status: "in-progress" as const,
      topics: ["Команды", "Адресация", "Выполнение"],
      category: "processor",
      prerequisites: ["Архитектура процессора"],
      learningOutcomes: [
        "Классификация машинных команд",
        "Различные режимы адресации",
        "Кодирование и декодирование команд",
        "Этапы выполнения инструкций",
        "Работа с подпрограммами и стеком",
      ],
      tasksCount: 15,
      simulationType: "Пошаговый отладчик",
      tools: [
        "Ассемблер",
        "Дизассемблер",
        "Пошаговый выполнитель",
        "Анализатор команд",
      ],
    },
    {
      id: 4,
      title: "Иерархия памяти",
      description:
        "Комплексное изучение многоуровневой системы памяти: от сверхбыстрых регистров до медленных накопителей данных.",
      difficulty: "Продвинутый" as const,
      duration: "120 мин",
      status: "not-started" as const,
      topics: ["Кэш", "ОЗУ", "Виртуальная память"],
      category: "memory",
      prerequisites: ["Архитектура процессора", "Система команд процессора"],
      learningOutcomes: [
        "Принципы работы кэш-памяти",
        "Алгоритмы замещения в кэше",
        "Механизмы виртуальной памяти",
        "Страничная организация памяти",
        "Оптимизация работы с памятью",
        "Анализ производительности памяти",
      ],
      tasksCount: 18,
      simulationType: "Многоуровневый симулятор памяти",
      tools: [
        "Симулятор кэша",
        "Анализатор обращений",
        "Визуализатор иерархии",
        "Профайлер памяти",
      ],
    },
    {
      id: 5,
      title: "Система ввода-вывода",
      description:
        "Изучение сложных механизмов взаимодействия процессора с внешними устройствами через контроллеры, прерывания и прямой доступ к памяти.",
      difficulty: "Продвинутый" as const,
      duration: "100 мин",
      status: "not-started" as const,
      topics: ["I/O", "Прерывания", "DMA", "Контроллеры"],
      category: "io",
      prerequisites: ["Иерархия памяти"],
      learningOutcomes: [
        "Архитектура системы ввода-вывода",
        "Механизм прерываний и их обработка",
        "Принципы работы DMA",
        "Взаимодействие с контроллерами устройств",
        "Синхронный и асинхронный ввод-вывод",
        "Оптимизация операций I/O",
      ],
      tasksCount: 14,
      simulationType: "Симулятор системы I/O",
      tools: [
        "Эмулятор устройств",
        "Монитор прерываний",
        "Анализатор DMA",
        "Диспетчер I/O",
      ],
    },
    {
      id: 6,
      title: "Конвейерная обработка",
      description:
        "Углубленное изучение современных техник повышения производительности: конвейеризация, суперскалярность и предсказание переходов.",
      difficulty: "Продвинутый" as const,
      duration: "110 мин",
      status: "not-started" as const,
      topics: ["Конвейер", "Hazards", "Производительность"],
      category: "optimization",
      prerequisites: ["Система команд процессора", "Система ввода-вывода"],
      learningOutcomes: [
        "Принципы конвейерной обработки",
        "Типы конфликтов (hazards) и их решение",
        "Методы предсказания переходов",
        "Суперскалярная архитектура",
        "Внеочередное выполнение команд",
        "Анализ производительности конвейера",
      ],
      tasksCount: 20,
      simulationType: "Визуальный конвейер команд",
      tools: [
        "Симулятор конвейера",
        "Анализатор конфликтов",
        "Профайлер производительности",
        "Визуализатор этапов",
      ],
    },
  ];

  const categories = [
    { id: "all", name: "Все работы", icon: "Grid3X3" },
    { id: "arithmetic", name: "Арифметика", icon: "Calculator" },
    { id: "processor", name: "Процессор", icon: "Cpu" },
    { id: "memory", name: "Память", icon: "HardDrive" },
    { id: "io", name: "Ввод-вывод", icon: "Wifi" },
    { id: "optimization", name: "Оптимизация", icon: "Zap" },
  ];

  const filteredLabs =
    selectedCategory === "all"
      ? labs
      : labs.filter((lab) => lab.category === selectedCategory);

  const handleLabClick = (labId: number) => {
    navigate(`/lab/${labId}`);
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    console.log(`Фильтруем по категории: ${categoryId}`);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-ibm-plex">
            Лабораторные работы
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Пошаговое изучение архитектуры компьютера через интерактивные
            симуляции
          </p>
        </div>

        {/* Фильтры категорий */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => handleCategoryChange(category.id)}
              className="flex items-center gap-2 transition-all duration-200 hover:scale-105"
            >
              <Icon name={category.icon as any} size={16} />
              {category.name}
            </Button>
          ))}
        </div>

        {/* Сетка лабораторных работ */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLabs.map((lab) => (
            <LabCard
              key={lab.id}
              {...lab}
              onClick={() => handleLabClick(lab.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabList;
