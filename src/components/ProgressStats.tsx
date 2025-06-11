import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const ProgressStats = () => {
  const stats = [
    {
      label: "Выполнено лабораторных",
      value: 3,
      total: 8,
      icon: "CheckCircle",
      color: "text-green-600",
    },
    {
      label: "В процессе",
      value: 2,
      total: 8,
      icon: "Clock",
      color: "text-yellow-600",
    },
    {
      label: "Общий прогресс",
      value: 37,
      total: 100,
      icon: "TrendingUp",
      color: "text-blue-600",
      isPercentage: true,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center gap-2">
              <Icon name={stat.icon as any} size={16} className={stat.color} />
              {stat.label}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 mb-2">
              {stat.value}
              {stat.isPercentage ? "%" : `/${stat.total}`}
            </div>
            <Progress
              value={
                stat.isPercentage ? stat.value : (stat.value / stat.total) * 100
              }
              className="h-2"
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProgressStats;
