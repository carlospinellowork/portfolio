import { useQuery } from "@tanstack/react-query";

export type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  created_at: string;
  updated_at: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  homepage: string | null;
  private: boolean;
  fork: boolean;
};

export type ProjectCard = GitHubRepo & {
  video: string;
  displayName: string;
};

const GITHUB_USERNAME = "carlospinellowork";

const projectVideos: Record<string, string> = {
  "pg-links": "/pg-links.mp4",
  "mks-ecommerce": "/mks-ecommercevideo.mp4",
  drinksOnline: "/cardapio-online.mp4",
};

const formatRepoName = (name: string): string => {
  return name
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim();
};

const fetchGitHubProjects = async (): Promise<ProjectCard[]> => {
  try {
    const url = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc&per_page=20`;
    console.log("📡 URL da API:", url);

    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "Portfolio-App",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Erro na API:", errorText);
      throw new Error(`GitHub API Error: ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();

    const filteredRepos = repos
      .filter((repo) => {
        const isValid =
          !repo.fork &&
          !repo.private &&
          new Date(repo.created_at).getFullYear() >= 2022;

        if (!isValid) {
          console.log(`⏭️ Repo ${repo.name} filtrado:`, {
            fork: repo.fork,
            private: repo.private,
            year: new Date(repo.created_at).getFullYear(),
          });
        }

        return isValid;
      })
      .slice(0, 6)
      .map((repo) => ({
        ...repo,
        topics: repo.topics || [],
        video: projectVideos[repo.name] || "",
        displayName: formatRepoName(repo.name),
      }));

    return filteredRepos;
  } catch (error) {
    console.error("💥 Erro ao buscar projetos:", error);
    throw error;
  }
};

export const useGitHubProjects = () => {
  return useQuery({
    queryKey: ["github-projects", GITHUB_USERNAME],
    queryFn: fetchGitHubProjects,
    staleTime: 1000 * 60 * 5,
    retry: 2,
    retryDelay: 1000,
    refetchOnWindowFocus: false,
  });
};
