import { Star, GitFork, Eye, GitBranch, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function RepositoryInfo() {
  return (
    <div className="border-b border-border bg-[#010409] px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code2 className="h-5 w-5 text-muted-foreground" />
          <h1 className="text-xl font-semibold text-foreground">
            <span className="text-[#539bf5]">username</span>
            <span className="mx-1 text-muted-foreground">/</span>
            <span className="text-[#539bf5]">awesome-project</span>
          </h1>
          <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold text-foreground">
            Public
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2 border-[#30363d] bg-[#21262d] text-foreground hover:bg-[#30363d] hover:border-[#8b949e]">
            <Star className="h-4 w-4" />
            Star
            <span className="ml-1 rounded-full bg-[#6e7681] px-1.5 text-xs">1.2k</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-2 border-[#30363d] bg-[#21262d] text-foreground hover:bg-[#30363d] hover:border-[#8b949e]">
            <GitFork className="h-4 w-4" />
            Fork
            <span className="ml-1 rounded-full bg-[#6e7681] px-1.5 text-xs">324</span>
          </Button>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-4 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <GitBranch className="h-4 w-4" />
          <span className="text-foreground font-semibold">main</span>
          <span>12 branches</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <span>245 tags</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Eye className="h-4 w-4" />
          <span>89 watching</span>
        </div>
      </div>
    </div>
  );
}
