import SearchCard from "./SearchCard";

const Items = (item: any) => {
  switch (item.media_type) {
    case "movie":
      return (
        <SearchCard
          key={item.id}
          path={`/movie/${item.id}`}
          poster={item.poster_path}
          title={item.title}
        />
      );
    case "tv":
      return (
        <SearchCard
          key={item.id}
          path={`/tv/${item.id}`}
          poster={item.poster_path}
          title={item.name}
        />
      );
    case "person":
      return (
        <SearchCard
          key={item.id}
          path={`/person/${item.id}`}
          poster={item.profile_path}
          title={item.name}
        />
      );
  }
};

export default Items;
