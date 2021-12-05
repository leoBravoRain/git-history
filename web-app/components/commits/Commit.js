import Link from "next/link";
import timeSince from "../../utils/auxFunctions";

export const Commit = ({ commit }) => {

  return (
    <li className="py-4">
      <div className="flex space-x-3">
        <img
          className="h-6 w-6 rounded-full"
          src={commit.authorAvatar}
          alt=""
        />
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <Link href={commit.authorUrl}>
              <h3 className="text-sm font-medium cursor-pointer hover:text-gray-500">
                {commit.authorName}
              </h3>
            </Link>
            <p className="text-sm text-gray-500">
              {timeSince(commit.date)}
            </p>
          </div>
          <p className="text-sm text-gray-500">{commit.message}</p>
          <Link href={commit.url}>
            <div>
              <a
                href="#"
                className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
              >
                View commit
              </a>
            </div>
          </Link>
        </div>
      </div>
    </li>
  );
};
