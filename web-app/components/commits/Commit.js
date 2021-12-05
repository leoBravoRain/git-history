export const Commit = ({ commit }) => {
    return (
      <li key={commit.sha} className="py-4">
        <div className="flex space-x-3">
          <img
            className="h-6 w-6 rounded-full"
            src={commit.author.avatar_url}
            alt=""
          />
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">{commit.author.login}</h3>
              <p className="text-sm text-gray-500">
                {commit.commit.author.date}
              </p>
            </div>
            <p className="text-sm text-gray-500">
              Pushed: {commit.commit.message}
            </p>
          </div>
        </div>
      </li>
    );
}
