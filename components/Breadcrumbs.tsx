import Link from "next/link";

const Breadcrumbs = ({ paths }: { paths: { name: string; url: string }[] }) => {
  return (
    <div className="py-4">
      {paths.map((path, index) => (
        <span key={index} className="text-gray-400 text-sm">
          <Link
            className={`${index === paths.length - 1 ? "text-white" : ""}`}
            href={path.url}
          >
            {path.name}
          </Link>
          {index < paths.length - 1 && <span className="mx-1"> / </span>}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
