import { FoodCategoryProvider } from "../_provider/foodCategoryProvider";

export default function AdminPageLayout({ children }) {
  return (
    <div>
      <FoodCategoryProvider>{children}</FoodCategoryProvider>
    </div>
  );
}
