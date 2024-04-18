import Breadcrumbs from "@/components/Breadcrumbs";
import Toolbar from "@/components/Toolbar";
import IdeContainer from "./IdeContainer";

const page = () => {
  const paths = [
    { name: "AI Audit", url: "/" },
    { name: "My Projects", url: "/" },
    { name: "Code Editor", url: "/" }
  ];

  return (
    <div className="h-[calc(100vh - 52px)]">
      <Breadcrumbs paths={paths} />
      <div className="w-full h-[calc(100vh-100px)]  p-2 bg-quill-300 rounded-sm">
        <Toolbar title={"Sample Project"} />
        <IdeContainer />
      </div>
    </div>
  );
};

export default page;
