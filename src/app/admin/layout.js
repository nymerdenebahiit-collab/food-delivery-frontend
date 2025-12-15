import { FoodCategoryProvider } from "../_provider/foodCategoryProvider";
import { AdminProvider } from "../_provider/adminProvider";

export default function AdminPageLayout({ children }) {
  return (
    <div>
      <AdminProvider>
        {" "}
        <FoodCategoryProvider>{children}</FoodCategoryProvider>{" "}
      </AdminProvider>
    </div>
  );
}
