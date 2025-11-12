import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface CodeViewerProps {
  fileName: string;
  content: string;
}

export function CodeViewer({ fileName, content }: CodeViewerProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = content.split('\n');

  const getLanguageClass = (filename: string) => {
    if (filename.endsWith('.tsx') || filename.endsWith('.ts')) return 'typescript';
    if (filename.endsWith('.jsx') || filename.endsWith('.js')) return 'javascript';
    if (filename.endsWith('.css')) return 'css';
    if (filename.endsWith('.json')) return 'json';
    if (filename.endsWith('.md')) return 'markdown';
    return 'plaintext';
  };

  const highlightLine = (line: string, language: string) => {
    if (language === 'typescript' || language === 'javascript') {
      return line
        .replace(/\b(import|export|from|const|let|var|function|return|if|else|for|while|class|extends|interface|type|async|await)\b/g, '<span class="text-[#ff7b72]">$1</span>')
        .replace(/(['"`])(.*?)\1/g, '<span class="text-[#a5d6ff]">$1$2$1</span>')
        .replace(/\/\/(.*?)$/g, '<span class="text-[#8b949e]">//$1</span>')
        .replace(/\b(true|false|null|undefined)\b/g, '<span class="text-[#79c0ff]">$1</span>');
    }
    if (language === 'json') {
      return line
        .replace(/("[^"]*"):/g, '<span class="text-[#79c0ff]">$1</span>:')
        .replace(/: ("[^"]*")/g, ': <span class="text-[#a5d6ff]">$1</span>')
        .replace(/\b(true|false|null)\b/g, '<span class="text-[#79c0ff]">$1</span>');
    }
    return line;
  };

  const language = getLanguageClass(fileName);

  return (
    <div className="flex-1 bg-[#0d1117] overflow-hidden">
      <div className="flex items-center justify-between border-b border-border bg-[#161b22] px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-mono text-foreground">{fileName}</span>
          <span className="text-xs text-muted-foreground">{lines.length} lines</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="h-7 gap-2 text-foreground hover:bg-[#21262d]"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              Copy
            </>
          )}
        </Button>
      </div>

      <div className="overflow-auto max-h-[calc(100vh-200px)]">
        <table className="w-full font-mono text-sm">
          <tbody>
            {lines.map((line, idx) => (
              <tr key={idx} className="hover:bg-[#161b22]">
                <td className="px-4 py-0.5 text-right text-muted-foreground select-none w-12 align-top border-r border-border">
                  {idx + 1}
                </td>
                <td className="px-4 py-0.5 text-foreground whitespace-pre">
                  <span dangerouslySetInnerHTML={{ __html: highlightLine(line, language) || ' ' }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
