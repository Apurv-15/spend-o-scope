
import { ArrowRight, LineChart, PiggyBank, CreditCard, DollarSign, TrendingUp, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
// Temporarily commenting out HeroCanvas
// import HeroCanvas from "./HeroCanvas";

const FloatingIcons = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <div className="floating-icon left-[10%] top-[20%]">
      <DollarSign className="w-8 h-8 text-primary/50" />
    </div>
    <div className="floating-icon left-[80%] top-[15%] [animation-delay:1s]">
      <Wallet className="w-6 h-6 text-primary/40" />
    </div>
    <div className="floating-icon left-[20%] top-[60%] [animation-delay:2s]">
      <TrendingUp className="w-10 h-10 text-primary/30" />
    </div>
    <div className="floating-icon left-[70%] top-[70%] [animation-delay:3s]">
      <PiggyBank className="w-8 h-8 text-primary/40" />
    </div>
    <div className="floating-icon left-[40%] top-[80%] [animation-delay:4s]">
      <CreditCard className="w-6 h-6 text-primary/50" />
    </div>
  </div>
);

const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 hero-pattern overflow-hidden">
      <FloatingIcons />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block animate-fade-in">
            <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full backdrop-blur-sm">
              Smart expense tracking
            </span>
          </div>
          
          <h1 className="mt-8 text-4xl md:text-6xl font-bold animate-fade-up" style={{ lineHeight: 1.1 }}>
            Take Control of Your <span className="text-gradient">Finances</span> with Ease
          </h1>
          
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 animate-fade-up [animation-delay:200ms]">
            Track expenses, analyze spending patterns, and achieve your financial goals with our intuitive and powerful expense tracking platform.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up [animation-delay:400ms]">
            <Button className="bg-primary hover:bg-primary/90 h-12 px-8 text-lg">
              Start for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="h-12 px-8 text-lg backdrop-blur-sm">
              Watch Demo
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 animate-float">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <LineChart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">Smart Analytics</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Visualize your spending patterns</p>
            </div>
            
            <div className="glass-card p-6 animate-float [animation-delay:200ms]">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <PiggyBank className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">Save Money</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Set and achieve savings goals</p>
            </div>
            
            <div className="glass-card p-6 animate-float [animation-delay:400ms]">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">Easy Tracking</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Automate expense categorization</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
