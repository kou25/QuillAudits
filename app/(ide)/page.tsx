import Breadcrumbs from "@/components/Breadcrumbs";
import Toolbar from "@/components/Toolbar";

const page = () => {
  const paths = [
    { name: "AI Audit", url: "/" },
    { name: "My Projects", url: "/" },
    { name: "Code Editor", url: "/" }
  ];

  return (
    <>
      <Breadcrumbs paths={paths} />
      <div className="w-full min-h-[85vh] max-h-[90vh] h-full p-2 bg-quill-300 rounded-sm">
        <Toolbar title={"Sample Project"} />
      </div>
    </>
  );
};

export default page;
