import React, { useState } from "react";
import styles from "@/styles/Search.module.css";
import SearchInput from "./SearchInput/SearchInput";
import SearchCardsMain from "./SearchCardsMain";
import Dropdown from "../SearchPage/DropDown/Dropdown";

interface SearchDataInterface {
  data: Array<Object>;
}

interface RegionInterface {
  region?: string;
}

export default function SearchMain({ data }: SearchDataInterface) {
  const [filteredData, setFilteredData] = useState<Array<object>>(data);
  const [regions, setRegions] = useState([
    ...new Set(
      filteredData.map((x: RegionInterface) => {
        return x.region;
      })
    ),
  ]);

  const handleChangeInput = (e: string) => {
    if (e === "") {
      setFilteredData(data);
    } else {
      let filtered = data.filter((_country: any) => {
        return _country.name.includes(e);
      });
      setFilteredData(filtered);
    }
  };

  const handleSelectedTags = (dataTags: Array<string>) => {
    let filteredTagData: Object[] = [];

    dataTags.forEach((_tag: string) => {
      let tagFilter = data.filter((_country: any) => {
        return _country.region.includes(_tag);
      });
      filteredTagData = [...tagFilter, ...filteredTagData];
    });
    setFilteredData(filteredTagData);
  };

  return (
    <div>
      <div className={styles.mainSearchTopDiv}>
        <SearchInput handleChangeInput={(e: string) => handleChangeInput(e)} />
        <Dropdown
          placeHolder="Filter by region"
          isMulti={true}
          options={regions}
          handleSelectedTag={(data: Array<string>) => handleSelectedTags(data)}
        />
      </div>
      <SearchCardsMain data={filteredData} />
    </div>
  );
}
