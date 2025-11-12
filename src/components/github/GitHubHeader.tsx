import { Search, Code2, Bell, Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function GitHubHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-[#010409] px-4 py-3">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          <Code2 className="h-8 w-8 text-foreground" />
          <div className="relative w-[300px]">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search or jump to..."
              className="w-full pl-10 bg-[#0d1117] border-[#30363d] text-foreground placeholder:text-muted-foreground focus-visible:ring-[#1f6feb] h-8"
            />
          </div>
        </div>

        <nav className="flex flex-1 items-center gap-4">
          <Button variant="ghost" size="sm" className="text-foreground hover:text-foreground hover:bg-[#161b22]">
            Pull requests
          </Button>
          <Button variant="ghost" size="sm" className="text-foreground hover:text-foreground hover:bg-[#161b22]">
            Issues
          </Button>
          <Button variant="ghost" size="sm" className="text-foreground hover:text-foreground hover:bg-[#161b22]">
            Codespaces
          </Button>
          <Button variant="ghost" size="sm" className="text-foreground hover:text-foreground hover:bg-[#161b22]">
            Marketplace
          </Button>
          <Button variant="ghost" size="sm" className="text-foreground hover:text-foreground hover:bg-[#161b22]">
            Explore
          </Button>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-foreground hover:bg-[#161b22]">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-foreground hover:bg-[#161b22]">
            <Plus className="h-4 w-4" />
          </Button>
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
        </div>
      </div>
    </header>
  );
}
