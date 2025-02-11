// import { useEffect, useState } from "react";
import CountryList from "../components/CountryList";
import RegionMenu from "../components/RegionMenu";
import SearchInput from "../components/SearchInput";
import ShowMessage from "../components/ShowMessage";
import { useFetchData } from "../../useFetchData";

const Home = () => {
  const {
    result,
    filteredCountries,
    setFilteredCountries,
    isLoading,
    isError,
  } = useFetchData();

  return (
    <>
      {isError && <ShowMessage message="Something went wrong!" />}
      {isLoading && <ShowMessage message="Loading countries data..." />}
      {!isError && !isLoading && (
        <>
          <div className="flex flex-col justify-between gap-10 px-4 md:h-14 md:flex-row md:gap-0 lg:px-16">
            <SearchInput
              countriesList={result}
              filterCountriesList={setFilteredCountries}
            />
            <RegionMenu
              countriesList={result}
              filterCountriesList={setFilteredCountries}
            />
          </div>{" "}
          <CountryList data={filteredCountries} />
        </>
      )}
    </>
  );
};

export default Home;
