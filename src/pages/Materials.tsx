import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Materials = () => {
  const navigate = useNavigate();

  const materials = [
    {
      id: 1,
      title: "Введение в архитектуру компьютера",
      description: "Основные понятия и принципы работы компьютерных систем",
      type: "Лекция",
      duration: "30 мин",
      icon: "BookOpen",
    },
    {
      id: 2,
      title: "Системы счисления",
      description: "Двоичная, восьмеричная и шестнадцатеричная системы",
      type: "Справочник",
      duration: "15 мин",
      icon: "Calculator",
    },
    {
      id: 3,
      title: "Устройство процессора",
      description: "Детальное изучение компонентов процессора",
      type: "Видео",
      duration: "45 мин",
      icon: "Play",
    },
  ];

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
            Назад на главную
          </Button>

          <h1 className="text-4xl font-bold mb-4 font-ibm-plex">
            Материалы курса
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl leading-relaxed">
            Теоретические материалы и справочники по архитектуре компьютера
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((material) => (
            <Card
              key={material.id}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Icon
                    name={material.icon as any}
                    size={24}
                    className="text-blue-600"
                  />
                  <span className="text-sm text-blue-600 font-medium">
                    {material.type}
                  </span>
                </div>
                <CardTitle className="text-lg">{material.title}</CardTitle>
                <CardDescription>{material.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="Clock" size={16} />
                    <span>{material.duration}</span>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => alert("Материал скоро будет доступен!")}
                  >
                    Открыть
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Materials;
