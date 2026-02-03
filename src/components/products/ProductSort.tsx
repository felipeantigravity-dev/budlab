interface ProductSortProps {
    value: string;
    onChange: (value: string) => void;
    className?: string;
}

export function ProductSort({ value, onChange, className = "" }: ProductSortProps) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <label htmlFor="sort" className="text-sm font-medium whitespace-nowrap hidden sm:block">
                ORDENAR POR:
            </label>
            <select
                id="sort"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full sm:w-auto px-4 py-3 bg-background border-2 border-border focus:border-primary outline-none cursor-pointer text-sm font-medium uppercase appearance-none pr-8 bg-no-repeat bg-[right_1rem_center]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23000' stroke-width='2'%3e%3cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3e%3c/path%3e%3c/svg%3e")`,
                    backgroundSize: "1em",
                }}
            >
                <option value="newest">Mais Recentes</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior Preço</option>
                <option value="name-asc">A-Z</option>
                <option value="name-desc">Z-A</option>
            </select>
        </div>
    );
}
