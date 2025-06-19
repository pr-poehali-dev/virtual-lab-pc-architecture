import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface LabCardProps {
  id: number;
  title: string;
  description: string;
  difficulty: "Базовый" | "Средний" | "Продвинутый";
  duration: string;
  status: "not-started" | "in-progress" | "completed";
  topics: string[];
  prerequisites?: string[];
  learningOutcomes: string[];
  tasksCount: number;
  simulationType: string;
  tools: string[];
  onClick: () => void;
}

const LabCard = ({
  id,
  title,
  description,
  difficulty,
  duration,
  status,
  topics,
  prerequisites = [],
  learningOutcomes,
  tasksCount,
  simulationType,
  tools,
  onClick,
}: LabCardProps) => {
  const getStatusIcon = () => {
    switch (status) {
      case "completed":
        return <Icon name="CheckCircle" size={20} className="text-green-500" />;
      case "in-progress":
        return <Icon name="Clock" size={20} className="text-yellow-500" />;
      default:
        return <Icon name="Circle" size={20} className="text-gray-400" />;
    }
  };

  const getDifficultyColor = () => {
    switch (difficulty) {
      case "Базовый":
        return "bg-green-100 text-green-800";
      case "Средний":
        return "bg-yellow-100 text-yellow-800";
      case "Продвинутый":
        return "bg-red-100 text-red-800";
    }
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-blue-500">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            {getStatusIcon()}
            <Badge variant="secondary" className="text-xs">
              Лаб. работа #{id}
            </Badge>
          </div>
          <Badge className={getDifficultyColor()}>{difficulty}</Badge>
        </div>
        <CardTitle className="text-lg font-ibm-plex">{title}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {/* Основная информация */}
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Icon name="Clock" size={16} />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="List" size={16} />
              <span>{tasksCount} заданий</span>
            </div>
          </div>

          {/* Тип симуляции */}
          <div className="flex items-center gap-2">
            <Icon name="Monitor" size={16} className="text-blue-600" />
            <span className="text-sm font-medium text-blue-800 bg-blue-50 px-2 py-1 rounded">
              {simulationType}
            </span>
          </div>

          {/* Предварительные требования */}
          {prerequisites.length > 0 && (
            <div>
              <div className="flex items-center gap-1 mb-2">
                <Icon name="BookOpen" size={14} className="text-orange-600" />
                <span className="text-xs font-medium text-orange-800">
                  Требования:
                </span>
              </div>
              <div className="flex flex-wrap gap-1">
                {prerequisites.map((req, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-xs bg-orange-50 border-orange-200"
                  >
                    {req}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Результаты обучения */}
          <div>
            <div className="flex items-center gap-1 mb-2">
              <Icon name="Target" size={14} className="text-green-600" />
              <span className="text-xs font-medium text-green-800">
                Вы изучите:
              </span>
            </div>
            <ul className="text-xs text-gray-600 space-y-1">
              {learningOutcomes.slice(0, 3).map((outcome, index) => (
                <li key={index} className="flex items-start gap-1">
                  <span className="text-green-500 mt-0.5">•</span>
                  <span>{outcome}</span>
                </li>
              ))}
              {learningOutcomes.length > 3 && (
                <li className="text-gray-400 italic">
                  +{learningOutcomes.length - 3} дополнительных навыков
                </li>
              )}
            </ul>
          </div>

          {/* Инструменты */}
          <div>
            <div className="flex items-center gap-1 mb-2">
              <Icon name="Wrench" size={14} className="text-purple-600" />
              <span className="text-xs font-medium text-purple-800">
                Инструменты:
              </span>
            </div>
            <div className="flex flex-wrap gap-1">
              {tools.map((tool, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-xs bg-purple-50 border-purple-200"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          {/* Темы */}
          <div>
            <div className="flex items-center gap-1 mb-2">
              <Icon name="Tag" size={14} className="text-blue-600" />
              <span className="text-xs font-medium text-blue-800">Темы:</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {topics.map((topic, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {topic}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button
          onClick={onClick}
          className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-200 hover:scale-105 active:scale-95"
          variant={status === "completed" ? "outline" : "default"}
        >
          <Icon
            name={status === "completed" ? "RotateCcw" : "ArrowRight"}
            size={16}
            className="mr-2"
          />
          {status === "completed"
            ? "Пересмотреть"
            : status === "in-progress"
              ? "Продолжить"
              : "Начать"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LabCard;
