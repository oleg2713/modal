import SearchModal from "@/components/SearchModal";
import { themeColors as colors } from "../utils/themeColors";

export default function Home(): React.JSX.Element {

return (
  <div className="min-h-screen relative flex flex-col items-center px-4 py-12">
      <SearchModal list={[...colors]} placeHolder="Color theme"/>
    <div className="flex justify-center gap-6 mt-24 w-full max-w-5xl">
      <p>first</p>
      <p>second</p>
      <p>third</p>
    </div>
  </div>
);
}
