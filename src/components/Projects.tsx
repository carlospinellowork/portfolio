import { useRef } from "react";

import { motion } from "framer-motion";

import {
  AlertCircle,
  Calendar,
  Code,
  ExternalLink,
  GitFork,
  Star,
} from "lucide-react";

import { useGitHubProjects, type ProjectCard } from "../hooks/useGithubProject";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectSkeleton = () => (
  <div className="animate-pulse">
    <div className="bg-zinc-800 rounded-xl h-[300px] md:h-[500px] lg:h-[650px] w-full flex items-center justify-center">
      <span className="text-zinc-400">Carregando projeto...</span>
    </div>
  </div>
);

const ProjectCardComponent = ({
  project,
  index,
}: {
  project: ProjectCard;
  index: number;
}) => {
  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      id="projects"
      variants={cardVariants}
      className="relative overflow-hidden border group rounded-xl bg-zinc-800/50 backdrop-blur-sm border-zinc-700/50"
    >
      <div className="relative overflow-hidden">
        {project.video ? (
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) =>
              console.error("❌ Erro no vídeo:", e, project.video)
            }
          />
        ) : (
          <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 h-[300px] md:h-[400px] w-full flex flex-col items-center justify-center gap-4 border border-dashed border-zinc-600">
            <Code className="w-16 h-16 text-zinc-400" />
            <h3 className="text-lg font-semibold text-zinc-200">
              {project.displayName}
            </h3>
            <p className="px-4 text-sm text-center text-zinc-400">
              {project.description ||
                "Projeto focado em lógica e funcionalidade"}
            </p>
            {project.language && (
              <Badge variant="secondary" className="bg-zinc-700 text-zinc-200">
                {project.language}
              </Badge>
            )}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-black/80 backdrop-blur-sm"
        >
          <div className="space-y-3">
            <h3 className="text-xl font-bold">{project.displayName}</h3>

            {project.description && (
              <p className="text-sm text-gray-300 line-clamp-2">
                {project.description}
              </p>
            )}

            <div className="flex flex-wrap gap-2">
              {project.language && (
                <Badge
                  variant="secondary"
                  className="bg-zinc-700 text-zinc-200"
                >
                  {project.language}
                </Badge>
              )}
              {project.topics?.slice(0, 3).map((topic) => (
                <Badge
                  key={topic}
                  variant="outline"
                  className="border-zinc-600 text-zinc-300"
                >
                  {topic}
                </Badge>
              ))}
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-400">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3" />
                {project.stargazers_count || 0}
              </div>
              <div className="flex items-center gap-1">
                <GitFork className="w-3 h-3" />
                {project.forks_count || 0}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(project.updated_at).toLocaleDateString("pt-BR")}
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <Button
                size="sm"
                className="text-black bg-white hover:bg-gray-200"
                onClick={() => window.open(project.html_url, "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Ver Código
              </Button>
              {project.homepage && (
                <Button
                  size="sm"
                  variant="outline"
                  className="text-white bg-transparent border-white hover:bg-white hover:text-black"
                  onClick={() => window.open(project.homepage!, "_blank")}
                >
                  Demo Live
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const {
    data: projects = [],
    isLoading,
    isError,
    error,
  } = useGitHubProjects();

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  if (isLoading) {
    return (
      <section className="flex flex-col items-center justify-center flex-1 w-full py-16 bg-zinc-900">
        <h1 className="mb-12 text-6xl font-bold text-center md:text-7xl text-slate-50">
          CARREGANDO PROJETOS...
        </h1>
        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 p-6 mt-12 md:grid-cols-2 lg:grid-cols-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProjectSkeleton key={i} />
          ))}
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="flex flex-col items-center justify-center flex-1 w-full py-16 bg-zinc-900">
        <div className="max-w-2xl px-6 space-y-4 text-center">
          <AlertCircle className="w-16 h-16 mx-auto text-red-400" />
          <h1 className="text-4xl font-bold text-red-400">
            Ops! Algo deu errado
          </h1>
          <p className="text-gray-400">
            {error instanceof Error
              ? error.message
              : "Erro ao carregar projetos do GitHub"}
          </p>
          <div className="space-y-2">
            <Button
              onClick={() => window.location.reload()}
              className="text-black bg-white hover:bg-gray-200"
            >
              Tentar Novamente
            </Button>
            <p className="text-xs text-gray-500">
              Verifique o console do navegador para mais detalhes
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="initial"
      animate={"animate"}
      className="flex flex-col items-center justify-center flex-1 w-full py-16 bg-zinc-900"
    >
      <motion.h1
        className="mb-12 text-5xl font-bold text-center md:text-6xl text-slate-50"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        PROJETOS SELECIONADOS
        <span className="block mt-2 text-2xl text-gray-400 md:text-3xl">
          ({projects.length} repositórios)
        </span>
      </motion.h1>

      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 p-6 mt-12 md:grid-cols-2 lg:grid-cols-2">
        {projects
          .filter((project) => project.name !== "faqs-app")
          .map((project, index) => (
            <ProjectCardComponent
              key={project.id}
              project={project}
              index={index}
            />
          ))}
      </div>

      {projects.length === 0 && (
        <div className="mt-8 text-center text-gray-400">
          <p>Nenhum projeto encontrado com os critérios especificados.</p>
        </div>
      )}
    </motion.section>
  );
};

export default Projects;
