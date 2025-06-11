import Hero from "@/components/Hero";
import ProgressStats from "@/components/ProgressStats";
import LabList from "@/components/LabList";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="container mx-auto px-6 py-8">
        <ProgressStats />
      </div>
      <LabList />
    </div>
  );
};

export default Index;
