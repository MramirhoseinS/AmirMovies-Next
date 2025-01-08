import Link from "next/link";

interface IButton {
  name: string;
  onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  link?: string;
}

const BackwardButton = ({ name, onclick, link }: IButton) => {
  if (onclick) {
    return (
      <>
        <div>
          <button
            name="per"
            onClick={onclick}
            className="group flex items-center text-slate-400 pl-2 
                    hover:text-rose-400 transition-all duration-300"
          >
            <span className="mr-2 group-hover:-translate-x-1 group-hover:scale-x-110 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className=""
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                />
              </svg>
            </span>
            <span>{name}</span>
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
            className="group flex items-center text-slate-400 pl-2 
                    hover:text-rose-400 transition-all duration-300"
          >
            <span className="mr-2 group-hover:-translate-x-1 group-hover:scale-x-110 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className=""
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                />
              </svg>
            </span>
            <span>{name}</span>
          </Link>
        </div>
      </>
    );
  }
};

export default BackwardButton;
