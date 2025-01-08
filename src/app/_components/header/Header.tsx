import Navigation from "./Navigation";
import SearchBox from "./searchBox/SearchBox";

const Header = () => {
  return (
    <>
      <header>
        <div className="container mx-auto py-6 md:py-9">
          <Navigation />
          <SearchBox />
        </div>
      </header>
    </>
  );
};

export default Header;
