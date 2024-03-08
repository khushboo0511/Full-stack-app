const PageBody = ({ handelUsername, handelPassword, onSubmit }) => {
    return (
      <div className="card rounded-lg w-80 bg-base-100 shadow-2xl shadow-gray-500/50 mt-2">
        <div className="card-body py-4 px-6">
          <label className="input input-bordered h-12 flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="white"
              className="w-5 h-5 mr-2 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="input-text w-full"
              placeholder="Username"
              onChange={handelUsername}
            />
          </label>
  
          <label className="input input-bordered h-12 flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="white"
              className="w-5 h-5 mr-2 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="input-text w-full"
              placeholder="Password"
              onChange={handelPassword}
            />
          </label>
  
          <div className="card-actions flex flex-col items-center">
            <button
              className="btn btn-wide rounded-md px-3 py-1 text-white bg-[#CB4154] hover:bg-[#B43041] mb-2"
              onClick={onSubmit}
            >
              Sign In
            </button>
            <a
              href="#"
              className="text-[#B43041] font-semibold hover:underline decoration-[#B43041]"
            >
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default PageBody;
  