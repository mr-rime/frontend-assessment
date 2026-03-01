import { Checkbox } from "@/shared/components/ui/checkbox";
import { Label } from "@/shared/components/ui/label";
import { PRODCUT_DATA } from "@/db/products";
import { getRouteApi } from "@tanstack/react-router";
import { useMemo } from "react";

const routeApi = getRouteApi("/(store)/_store-layout/")

export function ProductsCategoryFilter() {
  const searchParams = routeApi.useSearch();
  const navigate = routeApi.useNavigate();

  const categories = useMemo(() => {
    const uniqueCategories = new Set(PRODCUT_DATA.map(p => p.category));
    return Array.from(uniqueCategories);
  }, []);

  const activeCategories = searchParams.category || [];

  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked
      ? [...activeCategories, category]
      : activeCategories.filter((c: string) => c !== category);

    navigate({
      search: (prev) => ({
        ...prev,
        category: newCategories.length ? newCategories : undefined,
        page: 1,
        q: prev.q,
      })
    });
  };

  return (
    <aside className="lg:col-span-1">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-lg">Filters</h2>
        </div>
        <div className="space-y-3">
          <h3 className="font-medium text-sm">Category</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={`category-${category}`}
                  checked={activeCategories.includes(category)}
                  onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                />
                <Label htmlFor={`category-${category}`} className="text-sm">
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
