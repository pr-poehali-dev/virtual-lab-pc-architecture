import { useState } from "react";
import LabCard from "./LabCard";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const LabList = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const labs = [
    {
      id: 1,
      title: "Основы двоичной арифметики",
      description:
        "Изучение представления чисел в двоичной системе, операций сложения и вычитания.",
      difficulty: "Базовый" as const,
      duration: "45 мин",
      status: "completed" as const,
      topics: ["Двоичная система", "Арифметика", "Представление чисел"],
      category: "arithmetic",
    },
    {
      id: 2,
      title: "Архитектура процессора",
      description:
        "Виртуальная модель процессора: регистры, АЛУ, управляющее устройство.",
      difficulty: "Средний" as const,
      duration: "90 мин",
      status: "in-progress" as const,
      topics: ["Процессор", "Регистры", "АЛУ", "Управление"],
      category: "processor",
    },
    {
      id: 3,
      title: "Система команд процессора",
      description: "Изучение машинных команд, адресации и выполнения программ.",
      difficulty: "Средний" as const,
      duration: "75 мин",
      status: "in-progress" as const,
      topics: ["Команды", "Адресация", "Выполнение"],
      category: "processor",
    },
    {
      id: 4,
      title: "Иерархия памяти",
      description:
        "Кэш-память, оперативная память, виртуальная память и их взаимодействие.",
      difficulty: "Продвинутый" as const,
      duration: "120 мин",
      status: "not-started" as const,
      topics: ["Кэш", "ОЗУ", "Виртуальная память"],
      category: "memory",
    },
    {
      id: 5,
      title: "Система ввода-вывода",
      description:
        "Контроллеры устройств, прерывания, DMA и взаимодействие с периферией.",
      difficulty: "Продвинутый" as const,
      duration: "100 мин",
      status: "not-started" as const,
      topics: ["I/O", "Прерывания", "DMA", "Контроллеры"],
      category: "io",
    },
    {
      id: 6,
      title: "Конвейерная обработка",
      description: "Принципы конвейера команд, hazards и методы их решения.",
      difficulty: "Продвинутый" as const,
      duration: "110 мин",
      status: "not-started" as const,
      topics: ["Конвейер", "Hazards", "Производительность"],
      category: "optimization",
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
    console.log(`Opening lab ${labId}`);
    // Здесь будет навигация на страницу лабораторной работы
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
              onClick={() => setSelectedCategory(category.id)}
              className="flex items-center gap-2"
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
