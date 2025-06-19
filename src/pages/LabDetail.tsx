import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const LabDetail = () => {
  const { id } = useParams();
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
      learningOutcomes: [
        "Перевод чисел между системами счисления",
        "Выполнение двоичных арифметических операций",
        "Понимание представления отрицательных чисел",
        "Работа с дополнительным кодом",
        "Обнаружение переполнения при вычислениях",
      ],
      tasksCount: 8,
      simulationType: "Интерактивный калькулятор",
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
    },
  ];

  const lab = labs.find((l) => l.id === parseInt(id || "0"));

  if (!lab) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            Лабораторная работа не найдена
          </h1>
          <Button onClick={() => navigate("/")}>
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            Вернуться на главную
          </Button>
        </div>
      </div>
    );
  }

  const getDifficultyColor = () => {
    switch (lab.difficulty) {
      case "Базовый":
        return "bg-green-100 text-green-800";
      case "Средний":
        return "bg-yellow-100 text-yellow-800";
      case "Продвинутый":
        return "bg-red-100 text-red-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-12">
        <div className="container mx-auto px-6">
          <Button
            variant="outline"
            className="mb-6 border-white text-white hover:bg-white hover:text-blue-900"
            onClick={() => navigate("/")}
          >
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            Назад к списку работ
          </Button>

          <div className="flex items-center gap-4 mb-4">
            <Badge variant="secondary">Лаб. работа #{lab.id}</Badge>
            <Badge className={getDifficultyColor()}>{lab.difficulty}</Badge>
          </div>

          <h1 className="text-4xl font-bold mb-4 font-ibm-plex">{lab.title}</h1>
          <p className="text-xl text-blue-200 max-w-3xl leading-relaxed">
            {lab.description}
          </p>

          <div className="flex items-center gap-6 mt-6 text-blue-200">
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={20} />
              <span>{lab.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="List" size={20} />
              <span>{lab.tasksCount} заданий</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Monitor" size={20} />
              <span>{lab.simulationType}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Результаты обучения</h2>
              <div className="space-y-4">
                {lab.learningOutcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Icon
                      name="CheckCircle"
                      size={20}
                      className="text-green-500 mt-0.5"
                    />
                    <span className="text-gray-700">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Начать работу</h3>
              <Button
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 mb-4"
                onClick={() =>
                  alert("Виртуальная лаборатория скоро будет доступна!")
                }
              >
                <Icon name="Play" size={20} className="mr-2" />
                Запустить симуляцию
              </Button>

              <div className="space-y-3 text-sm text-gray-600">
                <h4 className="font-semibold text-gray-900">Темы:</h4>
                <div className="flex flex-wrap gap-2">
                  {lab.topics.map((topic, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabDetail;
