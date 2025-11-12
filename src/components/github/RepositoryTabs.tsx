import { Code2, CircleDot, GitPullRequest, Play, Shield, BookOpen } from 'lucide-react';

interface RepositoryTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function RepositoryTabs({ activeTab, onTabChange }: RepositoryTabsProps) {
  const tabs = [
    { id: 'code', label: 'Code', icon: Code2 },
    { id: 'issues', label: 'Issues', icon: CircleDot, badge: '12' },
    { id: 'pull-requests', label: 'Pull requests', icon: GitPullRequest, badge: '3' },
    { id: 'actions', label: 'Actions', icon: Play },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'wiki', label: 'Wiki', icon: BookOpen },
  ];

  return (
    <div className="border-b border-border bg-[#010409]">
      <div className="flex gap-2 px-6">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                isActive
                  ? 'border-[#f78166] text-foreground'
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:border-[#30363d]'
              }`}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
              {tab.badge && (
                <span className="ml-1 rounded-full bg-[#6e7681] px-1.5 py-0.5 text-xs text-foreground">
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
