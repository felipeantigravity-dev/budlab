import { X } from "lucide-react";

interface ProductFiltersProps {
    filters: {
        category: string[];
        minPrice: string;
        maxPrice: string;
        sizes: string[];
        colors: string[];
    };
    setFilters: (filters: any) => void;
    className?: string;
}

const CATEGORIES = ["Camisetas", "Moletons", "Calças", "Acessórios", "Jaquetas"];
const SIZES = ["P", "M", "G", "GG", "XG"];
const COLORS = [
    { name: "Preto", value: "#000000" },
    { name: "Branco", value: "#FFFFFF", border: true },
    { name: "Verde", value: "#00B050" },
    { name: "Cinza", value: "#808080" },
    { name: "Bege", value: "#F5F5DC", border: true },
];

export function ProductFilters({ filters, setFilters, className = "" }: ProductFiltersProps) {
    const toggleFilter = (type: "category" | "sizes" | "colors", value: string) => {
        const current = filters[type];
        const updated = current.includes(value)
            ? current.filter((item) => item !== value)
            : [...current, value];
        setFilters({ ...filters, [type]: updated });
    };

    const clearFilters = () => {
        setFilters({
            category: [],
            minPrice: "",
            maxPrice: "",
            sizes: [],
            colors: [],
        });
    };

    const hasActiveFilters =
        filters.category.length > 0 ||
        filters.minPrice !== "" ||
        filters.maxPrice !== "" ||
        filters.sizes.length > 0 ||
        filters.colors.length > 0;

    return (
        <div className={`space-y-8 ${className}`}>
            {/* Header */}
            <div className="flex items-center justify-between">
                <h3 className="font-display text-xl">FILTROS</h3>
                {hasActiveFilters && (
                    <button
                        onClick={clearFilters}
                        className="text-xs font-bold text-muted-foreground hover:text-primary uppercase flex items-center gap-1"
                    >
                        <X size={12} /> Limpar
                    </button>
                )}
            </div>

            {/* Categories */}
            <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                    Categoria
                </h4>
                <div className="space-y-2">
                    {CATEGORIES.map((cat) => (
                        <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                            <div
                                className={`w-5 h-5 border-2 flex items-center justify-center transition-colors ${filters.category.includes(cat.toLowerCase())
                                        ? "bg-primary border-primary"
                                        : "border-border group-hover:border-primary"
                                    }`}
                            >
                                {filters.category.includes(cat.toLowerCase()) && (
                                    <div className="w-2 h-2 bg-primary-foreground" />
                                )}
                            </div>
                            <input
                                type="checkbox"
                                className="hidden"
                                checked={filters.category.includes(cat.toLowerCase())}
                                onChange={() => toggleFilter("category", cat.toLowerCase())}
                            />
                            <span className="text-sm font-medium uppercase group-hover:text-primary transition-colors">
                                {cat}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Price */}
            <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                    Preço
                </h4>
                <div className="flex gap-2">
                    <div className="relative flex-1">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">R$</span>
                        <input
                            type="number"
                            placeholder="Mín"
                            value={filters.minPrice}
                            onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                            className="w-full pl-8 pr-2 py-2 border-2 border-border focus:border-primary outline-none text-sm font-medium"
                        />
                    </div>
                    <div className="relative flex-1">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">R$</span>
                        <input
                            type="number"
                            placeholder="Máx"
                            value={filters.maxPrice}
                            onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                            className="w-full pl-8 pr-2 py-2 border-2 border-border focus:border-primary outline-none text-sm font-medium"
                        />
                    </div>
                </div>
            </div>

            {/* Sizes */}
            <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                    Tamanho
                </h4>
                <div className="grid grid-cols-4 gap-2">
                    {SIZES.map((size) => (
                        <button
                            key={size}
                            onClick={() => toggleFilter("sizes", size)}
                            className={`h-10 border-2 font-bold text-sm transition-all ${filters.sizes.includes(size)
                                    ? "bg-primary border-primary text-primary-foreground"
                                    : "border-border hover:border-primary text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* Colors */}
            <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                    Cor
                </h4>
                <div className="flex flex-wrap gap-3">
                    {COLORS.map((color) => (
                        <button
                            key={color.name}
                            onClick={() => toggleFilter("colors", color.name)}
                            className={`w-8 h-8 rounded-none border-2 transition-transform ${filters.colors.includes(color.name)
                                    ? "ring-2 ring-primary ring-offset-2 scale-110 border-transparent"
                                    : color.border ? "border-border" : "border-transparent"
                                } hover:scale-110`}
                            style={{ backgroundColor: color.value }}
                            title={color.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
