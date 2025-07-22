import React, { Suspense, lazy, useEffect, useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { Code, Loader2, Sparkles } from "lucide-react";

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
      }, 4000);
    })
);

function App() {
  const LoadingPageAnimation = () => {
    const [progress, setProgress] = useState(0);
    const [loadingText, setLoadingText] = useState("Inicializando...");

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = Math.min(prev + 8, 100);

          if (newProgress >= 80) setLoadingText("Finalizando...");
          else if (newProgress >= 60) setLoadingText("Quase pronto...");
          else if (newProgress >= 40) setLoadingText("Preparando interface...");
          else if (newProgress >= 20)
            setLoadingText("Carregando componentes...");

          if (newProgress === 100) {
            clearInterval(interval);
            setTimeout(() => setLoadingText(""), 500);
          }
          return newProgress;
        });
      }, 200);

      return () => clearInterval(interval);
    }, []);

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-zinc-900"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bg-gray-600 rounded-full top-1/4 left-1/4 w-96 h-96 blur-3xl" />
          <div className="absolute bg-gray-500 rounded-full bottom-1/4 right-1/4 w-96 h-96 blur-3xl" />
        </div>

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gray-400 rounded-full opacity-30"
            animate={{
              x: [0, 100, -100, 0],
              y: [0, -100, 100, 0],
              scale: [1, 1.5, 0.5, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}

        <div className="relative z-10 flex flex-col items-center space-y-8">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative"
          >
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-gray-600 to-gray-400">
              <Code className="w-10 h-10 text-white" />
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute inset-0 border-2 border-gray-500 rounded-full border-t-transparent"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <AnimatePresence mode="wait">
              {progress === 100 ? (
                <motion.div
                  key="welcome"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <GradualSpacing
                    className="mb-2 text-5xl font-bold md:text-6xl text-slate-50"
                    text="Bem-vindo"
                  />
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="h-1 mx-auto bg-gradient-to-r from-gray-400 to-gray-200"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h1 className="mb-2 text-4xl font-bold md:text-5xl text-slate-50">
                    Carlos Eduardo
                  </h1>
                  <p className="text-lg text-slate-400">Frontend Developer</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <AnimatePresence>
            {progress < 100 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-3"
              >
                <Loader2 className="w-5 h-5 text-gray-400 animate-spin" />
                <span className="font-medium text-gray-400">{loadingText}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: progress === 100 ? 0 : 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-80 max-w-[90vw] space-y-3"
          >
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Progresso</span>
              <span className="font-semibold text-gray-300">{progress}%</span>
            </div>

            <div className="relative">
              <Progress
                value={progress}
                className="w-full h-2 bg-gray-800 border border-gray-700"
              />

              <motion.div
                className="absolute inset-0 rounded-full opacity-50 bg-gradient-to-r from-gray-600 to-gray-400 blur-sm"
                style={{ width: `${progress}%` }}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
          </motion.div>

          <AnimatePresence>
            {progress === 100 && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-2 text-gray-300"
              >
                <Sparkles className="w-5 h-5" />
                <span className="font-medium">Pronto para começar!</span>
                <Sparkles className="w-5 h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
        >
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse" />
            <span>Carregando experiência...</span>
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse" />
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <QueryClientProvider client={queryClient}>
      <AnimatePresence mode="wait">
        <Suspense fallback={<LoadingPageAnimation />}>
          <HomePage />
        </Suspense>
      </AnimatePresence>
    </QueryClientProvider>
  );
}

export default App;
