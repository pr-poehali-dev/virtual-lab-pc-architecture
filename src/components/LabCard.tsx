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
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <Icon name="Clock" size={16} />
            <span>{duration}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {topics.map((topic, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {topic}
            </Badge>
          ))}
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
