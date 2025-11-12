import { BookOpen } from 'lucide-react';

export function ReadmePreview() {
  return (
    <div className="mt-6 border border-border rounded-lg bg-[#0d1117] overflow-hidden">
      <div className="border-b border-border bg-[#161b22] px-4 py-3 flex items-center gap-2">
        <BookOpen className="h-4 w-4 text-foreground" />
        <span className="text-sm font-semibold text-foreground">README.md</span>
      </div>
      
      <div className="p-6 prose prose-invert max-w-none">
        <h1 className="text-3xl font-bold text-foreground mb-4">Awesome Project</h1>
        
        <p className="text-foreground mb-4">
          A modern, full-featured web application built with React and TypeScript.
          This project demonstrates best practices for building scalable applications.
        </p>

        <h2 className="text-2xl font-semibold text-foreground mb-3 mt-6">Features</h2>
        <ul className="list-disc list-inside text-foreground mb-4 space-y-2">
          <li>⚡️ Fast and performant</li>
          <li>🎨 Beautiful UI with modern design</li>
          <li>📱 Fully responsive</li>
          <li>🔒 Secure authentication</li>
          <li>🌙 Dark mode support</li>
          <li>♿️ Accessible components</li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground mb-3 mt-6">Installation</h2>
        <pre className="bg-[#161b22] border border-border rounded p-4 overflow-x-auto mb-4">
          <code className="text-sm text-foreground font-mono">
            npm install awesome-project
          </code>
        </pre>

        <h2 className="text-2xl font-semibold text-foreground mb-3 mt-6">Quick Start</h2>
        <pre className="bg-[#161b22] border border-border rounded p-4 overflow-x-auto mb-4">
          <code className="text-sm text-foreground font-mono">
{`import { App } from 'awesome-project';

function MyApp() {
  return <App />;
}`}
          </code>
        </pre>

        <h2 className="text-2xl font-semibold text-foreground mb-3 mt-6">Contributing</h2>
        <p className="text-foreground mb-4">
          Contributions are welcome! Please feel free to submit a Pull Request.
        </p>

        <h2 className="text-2xl font-semibold text-foreground mb-3 mt-6">License</h2>
        <p className="text-foreground">
          This project is licensed under the MIT License - see the LICENSE file for details.
        </p>
      </div>
    </div>
  );
}
