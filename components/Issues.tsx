"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { listofIssues } from "@/lib/issues";
import CurrentFileIssues from "./CurrentFileIssues";
import IssuesByType from "./IssuesByType";
import IssueDetails from "./IssueDetails";
import { IoInformationCircle } from "react-icons/io5";
import { folderInterface } from "@/lib/folders";

const Issues = ({ isVisible }: { isVisible: folderInterface | null }) => {
  const searchParams = useSearchParams();

  const issueSearchParam = searchParams.get("issue");
  const detailIdSearchParam = searchParams.get("detailId");

  const findIssue = issueSearchParam
    ? listofIssues.find((item) => item.id === issueSearchParam)
    : undefined;

  const findDetatilIssue = detailIdSearchParam
    ? listofIssues
        ?.find((item) => item.id === issueSearchParam)
        ?.issues?.find((item) => item.id === Number(detailIdSearchParam))
    : undefined;

  return (
    <div className="p-2 h-[calc(100vh-190px)] bg-quill-400 rounded-md">
      <div className="px-2 py-2 border-b border-gray-700 mx-2 flex ">
        <Link
          href={"/"}
          className={`text-gray-300
           text-xs font-light`}
        >
          Count of Issues {issueSearchParam ? "/" : ""}
        </Link>
        <>
          {findIssue ? (
            <Link
              href={"/?issue=" + findIssue.id}
              className={`ml-1 ${
                findDetatilIssue
                  ? "text-gray-300 font-light"
                  : "text-white font-medium"
              }
          text-xs `}
            >
              {" "}
              {findIssue.text} {detailIdSearchParam ? "/" : ""}
            </Link>
          ) : null}
          {findIssue && findDetatilIssue ? (
            <Link
              href={
                "/?issue=" + findIssue.id + "&detailId=" + findDetatilIssue?.id
              }
              className={`ml-1 text-white
          text-xs font-medium`}
            >
              {" Issue # "}
              {(findDetatilIssue?.id || 0) + 1}
            </Link>
          ) : null}
        </>
      </div>
      {isVisible ? (
        <div className="flex flex-col  h-full">
          {!findIssue && !findDetatilIssue ? (
            <CurrentFileIssues />
          ) : findIssue && !findDetatilIssue ? (
            <IssuesByType
              parentId={findIssue.id}
              color={findIssue.color}
              count={findIssue.count}
              text={findIssue.text}
              issues={findIssue.issues}
            />
          ) : (
            findDetatilIssue && (
              <IssueDetails
                details={findDetatilIssue}
                color={findIssue?.color}
              />
            )
          )}

          <div className="px-2 py-2 border-t border-gray-700 mx-2 pb-20 flex items-center gap-1 pt-4">
            {findDetatilIssue ? (
              <>
                <IoInformationCircle className="w-5 h-5 text-white" />
                <p className="text-gray-300 text-xs font-light">
                  Changes done in this code can be undone
                </p>
              </>
            ) : (
              <>
                <input type="checkbox" className="mr-2" />
                <p className="text-gray-300 text-sm font-light">
                  Exclude Dependecies
                </p>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="flex h-full pl-5 pt-5 text-sm text-gray-500">
          Please select a file from the directory
        </div>
      )}
    </div>
  );
};

export default Issues;
