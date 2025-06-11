import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <Icon name="Cpu" size={64} className="mx-auto mb-6 text-blue-400" />
          <h1 className="text-5xl font-bold mb-4 font-ibm-plex">
            Архитектура ПК
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Виртуальные лабораторные работы для изучения устройства и принципов
            работы компьютерных систем
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
            <Icon name="Play" size={20} className="mr-2" />
            Начать изучение
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8"
          >
            <Icon name="BookOpen" size={20} className="mr-2" />
            Материалы курса
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <Icon
              name="Zap"
              size={32}
              className="mx-auto mb-3 text-yellow-400"
            />
            <h3 className="font-semibold mb-2">Интерактивные симуляции</h3>
            <p className="text-sm text-blue-200">
              Работа с виртуальными компонентами в реальном времени
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <Icon
              name="Target"
              size={32}
              className="mx-auto mb-3 text-green-400"
            />
            <h3 className="font-semibold mb-2">Пошаговые задания</h3>
            <p className="text-sm text-blue-200">
              Структурированное изучение от простого к сложному
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6">
            <Icon
              name="Award"
              size={32}
              className="mx-auto mb-3 text-purple-400"
            />
            <h3 className="font-semibold mb-2">Система оценки</h3>
            <p className="text-sm text-blue-200">
              Автоматическая проверка и обратная связь
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
