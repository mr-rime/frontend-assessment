import { Checkbox } from "@/shared/components/ui/checkbox";
import { Label } from "@/shared/components/ui/label";

export function ProductsCategoryFilter() {
  return (
    <aside className="lg:col-span-1">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-lg">Filters</h2>
        </div>
        <div className="space-y-3">
          <h3 className="font-medium text-sm">category</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="shoes" />
              <Label htmlFor="shoes" className="text-sm">Shoes <span className="text-xs text-muted-foreground">(20)</span></Label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
