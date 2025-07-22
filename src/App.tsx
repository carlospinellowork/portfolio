import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Suspense, lazy, useEffect, useState } from "react";
import GradualSpacing from "./components/magicui/gradual-spacing";
import { Progress } from "./components/ui/progress";

const queryClient = new QueryClient();

const HomePage = lazy(
  () =>
    new Promise<{ default: React.ComponentType<unknown> }>((resolve) => {
      setTimeout(() => {
        import("./page/index").then((module) => {
          resolve({ default: module.default });
        });
      }, 6000);
    })
);

function App() {
  const LoadingPageAnimation = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = Math.min(prev + 10, 100);
          if (newProgress === 100) {
            clearInterval(interval);
          }
          return newProgress;
        });
      }, 300);

      return () => {
        clearInterval(interval);
      };
    }, []);

    return (
      <motion.div className="flex flex-col items-center justify-center w-full h-screen bg-zinc-100">
        <motion.h1 className="text-4xl font-bold font-bebas">
          {progress === 100 ? (
            <GradualSpacing
              className="text-5xl font-bold text-slate-900 font-bebas"
              text="Bem vindo"
            />
          ) : (
            <p className="text-5xl font-bold text-slate-900 font-bebas">
              Carregando...
            </p>
          )}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: progress === 100 ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center w-1/2 space-x-4"
        >
          <Progress value={progress} className="w-full mt-4" />
          <p className="text-sm font-semibold">{progress}%</p>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<LoadingPageAnimation />}>
        <HomePage />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
