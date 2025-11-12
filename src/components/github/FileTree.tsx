import { ChevronRight, ChevronDown, File, Folder } from 'lucide-react';
import { useState } from 'react';

interface FileNode {
  name: string;
  type: 'file' | 'folder';
  children?: FileNode[];
}

const mockFileTree: FileNode[] = [
  {
    name: 'src',
    type: 'folder',
    children: [
      {
        name: 'components',
        type: 'folder',
        children: [
          { name: 'Button.tsx', type: 'file' },
          { name: 'Header.tsx', type: 'file' },
          { name: 'Sidebar.tsx', type: 'file' },
        ],
      },
      { name: 'App.tsx', type: 'file' },
      { name: 'index.tsx', type: 'file' },
    ],
  },
  {
    name: 'public',
    type: 'folder',
    children: [
      { name: 'favicon.ico', type: 'file' },
      { name: 'logo.svg', type: 'file' },
    ],
  },
  { name: 'package.json', type: 'file' },
  { name: 'tsconfig.json', type: 'file' },
  { name: 'README.md', type: 'file' },
  { name: '.gitignore', type: 'file' },
];

interface FileTreeItemProps {
  node: FileNode;
  level: number;
  onSelectFile: (name: string) => void;
  selectedFile: string;
}

function FileTreeItem({ node, level, onSelectFile, selectedFile }: FileTreeItemProps) {
  const [isOpen, setIsOpen] = useState(level === 0);

  const isSelected = selectedFile === node.name;

  if (node.type === 'file') {
    return (
      <div
        className={`flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-[#161b22] ${
          isSelected ? 'bg-[#161b22]' : ''
        }`}
        style={{ paddingLeft: `${level * 12 + 8}px` }}
        onClick={() => onSelectFile(node.name)}
      >
        <File className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm text-foreground">{node.name}</span>
      </div>
    );
  }

  return (
    <div>
      <div
        className="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-[#161b22]"
        style={{ paddingLeft: `${level * 12 + 8}px` }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        ) : (
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        )}
        <Folder className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm text-foreground">{node.name}</span>
      </div>
      {isOpen && node.children && (
        <div>
          {node.children.map((child, idx) => (
            <FileTreeItem
              key={idx}
              node={child}
              level={level + 1}
              onSelectFile={onSelectFile}
              selectedFile={selectedFile}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface FileTreeProps {
  onSelectFile: (name: string) => void;
  selectedFile: string;
}

export function FileTree({ onSelectFile, selectedFile }: FileTreeProps) {
  return (
    <div className="w-64 border-r border-border bg-[#010409] overflow-y-auto">
      <div className="p-4">
        <h3 className="text-sm font-semibold text-foreground mb-2">Files</h3>
        <div>
          {mockFileTree.map((node, idx) => (
            <FileTreeItem
              key={idx}
              node={node}
              level={0}
              onSelectFile={onSelectFile}
              selectedFile={selectedFile}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
