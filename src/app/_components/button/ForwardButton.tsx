import Link from "next/link";

interface IButton {
  name: string;
  onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  link?: string;
}

const ForwardButton = ({ name, onclick, link }: IButton) => {
  if (onclick) {
    return (
      <>
        <div>
          <button
            onClick={onclick}
            name="nex"
            className="group flex items-center text-slate-400 pr-2 
              hover:text-rose-400 transition-all duration-300"
          >
            <span>{name}</span>
            <span className="ml-2 group-hover:translate-x-1 group-hover:scale-x-110 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </span>
          </button>
        </div>
      </>
    );
  }
  if (link) {
    return (
      <>
        <div>
          <Link
            href={link}
            className="group flex items-center text-slate-400 pr-2 
              hover:text-rose-400 transition-all duration-300"
          >
            <span>{name}</span>
            <span className="ml-2 group-hover:translate-x-1 group-hover:scale-x-110 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </span>
          </Link>
        </div>
      </>
    );
  }
};

export default ForwardButton;
