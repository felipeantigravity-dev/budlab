import { Search } from "lucide-react";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    className?: string;
}

export function SearchBar({ value, onChange, className = "" }: SearchBarProps) {
    return (
        <div className={`relative ${className}`}>
            <input
                type="text"
                placeholder="BUSCAR PRODUTOS..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors uppercase placeholder:text-muted-foreground placeholder:normal-case font-medium text-sm"
            />
            <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
        </div>
    );
}
