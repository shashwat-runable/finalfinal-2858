import { useState } from 'react';
import { GitHubHeader } from '@/components/github/GitHubHeader';
import { RepositoryInfo } from '@/components/github/RepositoryInfo';
import { RepositoryTabs } from '@/components/github/RepositoryTabs';
import { FileTree } from '@/components/github/FileTree';
import { CodeViewer } from '@/components/github/CodeViewer';
import { ReadmePreview } from '@/components/github/ReadmePreview';

const sampleCode = `import React, { useState } from 'react';
import { Button } from './components/ui/button';

interface AppProps {
  title: string;
  description: string;
}

export function App({ title, description }: AppProps) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div className="app-container">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="counter">
        <span>Count: {count}</span>
        <Button onClick={handleClick}>
          Increment
        </Button>
      </div>
    </div>
  );
}

export default App;`;

const fileContents: Record<string, string> = {
  'Button.tsx': `import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({ variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={\`btn btn-\${variant}\`}
      {...props}
    />
  );
}`,
  'Header.tsx': `export function Header() {
  return (
    <header className="header">
      <h1>My App</h1>
    </header>
  );
}`,
  'App.tsx': sampleCode,
  'package.json': `{
  "name": "awesome-project",
  "version": "1.0.0",
  "description": "A modern web application",
  "main": "index.js",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "typescript": "^5.0.0",
    "vite": "^5.0.0"
  }
}`,
  'tsconfig.json': `{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020", "DOM"],
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}`,
  'README.md': `# Awesome Project

A modern, full-featured web application.`,
};

export default function Home() {
  const [activeTab, setActiveTab] = useState('code');
  const [selectedFile, setSelectedFile] = useState('App.tsx');

  const currentContent = fileContents[selectedFile] || sampleCode;

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <GitHubHeader />
      <RepositoryInfo />
      <RepositoryTabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      {activeTab === 'code' && (
        <>
          <div className="flex">
            <FileTree onSelectFile={setSelectedFile} selectedFile={selectedFile} />
            <div className="flex-1 flex flex-col">
              <CodeViewer fileName={selectedFile} content={currentContent} />
            </div>
          </div>
          
          <div className="px-6 pb-8">
            <ReadmePreview />
          </div>
        </>
      )}

      {activeTab === 'issues' && (
        <div className="px-6 py-8">
          <div className="text-center text-muted-foreground py-12">
            <h3 className="text-xl font-semibold text-foreground mb-2">No issues yet</h3>
            <p>Issues are used to track todos, bugs, feature requests, and more.</p>
          </div>
        </div>
      )}

      {activeTab === 'pull-requests' && (
        <div className="px-6 py-8">
          <div className="text-center text-muted-foreground py-12">
            <h3 className="text-xl font-semibold text-foreground mb-2">No pull requests</h3>
            <p>Pull requests help you collaborate on code with other contributors.</p>
          </div>
        </div>
      )}

      {(activeTab === 'actions' || activeTab === 'security' || activeTab === 'wiki') && (
        <div className="px-6 py-8">
          <div className="text-center text-muted-foreground py-12">
            <h3 className="text-xl font-semibold text-foreground mb-2">Coming soon</h3>
            <p>This feature is under development.</p>
          </div>
        </div>
      )}
    </div>
  );
}
