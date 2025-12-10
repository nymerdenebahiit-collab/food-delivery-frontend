import { FoodCategoryProvider } from "../_provider/foodCategoryProvider";

export default function AdminPAgeLayout({ children }) {
  return (
    <div>
      <FoodCategoryProvider>{children}</FoodCategoryProvider>{" "}
    </div>
  );
}
