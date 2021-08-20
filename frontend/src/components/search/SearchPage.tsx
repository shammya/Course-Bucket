import { Grid } from "@material-ui/core";
import { Category } from "classes/Category";
import { MiniCourse } from "classes/Course";
import CoursePagination from "components/course/CustomPagination";
import Filter from "components/search/Filter";
import { FilterChips } from "components/search/filter/Chips";
import Sort from "components/search/Sort";
import User from "layout/User";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { StickyContainer } from "react-sticky";
import { Responsive } from "tools/responsive/Responsive";
import SearchService from "./api/SearchService";

export interface IFilter {
  type: "LIST" | "CATEGORY" | "SLIDER";
  title: string;
}
export interface IListFilter extends IFilter {
  items: Array<{ title: string; id: number }>;
}
export interface ICategoryFilter extends IFilter {
  items: Array<Category>;
}
export interface ISliderFilter extends IFilter {
  min: number;
  max: number;
  value: Array<number>;
  step: number;
  valueType: string;
}
export type IFilterType = IListFilter | ISliderFilter | ICategoryFilter;
export interface IFilteredValue {
  type: "LIST" | "SLIDER" | "CATEGORY";
  title: string;
  value: string | Array<number>;
  id?: number;
  valueType?: string;
}
var id = 1;
export const filterObjectList: Array<IFilterType> = [
  {
    title: "Teacher",
    type: "LIST",
    items: [
      {
        title: "Abrar Fahad",
        id: id++,
      },
      {
        title: "Mahdi BUET 3",
        id: id++,
      },
      {
        title: "Md. Mehedi Hasan",
        id: id++,
      },
      {
        title: "Kazi Wasif Amin Shammya",
        id: id++,
      },
    ],
  },
  {
    title: "Category",
    type: "CATEGORY",
    items: [],
  },
  {
    title: "Language",
    type: "LIST",
    items: [
      {
        title: "Arabic",
        id: id++,
      },
      {
        title: "English",
        id: id++,
      },
      {
        title: "Bangla",
        id: id++,
      },
      {
        title: "Hindi",
        id: id++,
      },
      {
        title: "Persian",
        id: id++,
      },
    ],
  },
  {
    title: "Rating",
    type: "SLIDER",
    min: 0,
    max: 5,
    value: [0, 5],
    step: 0.01,
    valueType: "⭐",
  },
  {
    title: "Price",
    type: "SLIDER",
    min: 0,
    max: 10000,
    value: [0, 10000],
    step: 10,
    valueType: "$",
  },
];

const sortTypes = [
  "New released",
  "Best seller",
  "Most reviewed",
  "Most rated",
  "Price low to high",
  "Price high to low",
];

const Search = () => {
  const history = useHistory();
  console.log(history);
  const [filteredData, setFilteredData] = useState<Array<IFilteredValue>>([]);
  const [filteredCourses, setFilteredCourses] = useState<MiniCourse[]>();
  const [sortType, setSortType] = useState(sortTypes[0]);
  useEffect(() => {
    fetchCourses(filteredData, sortType);
  }, [history.location.state.key]);
  function handleSortTypeChange(sort) {
    fetchCourses(filteredData, sort);
    setSortType(sort);
  }
  function onObjectsChange(value: IFilteredValue, type: "ADD" | "REMOVE") {
    let array;
    if (type === "ADD") {
      let idx = filteredData.findIndex((item) => item.title === value.title);
      if (value.type === "SLIDER" && idx != -1) {
        array = [...filteredData];
        array[idx] = value;
      } else {
        array = [...filteredData, value];
        console.log("array: ", array);
      }
    } else if (type === "REMOVE") {
      let idx;
      if (value.type === "SLIDER") {
        idx = filteredData.findIndex(
          (item) => item.type === value.type && item.id === value.id
        );
      } else {
        idx = filteredData.findIndex((item) => item.type === value.type);
      }
      array = [...filteredData];
      array.splice(idx, 1);
    }
    setFilteredData(array);
    fetchCourses(array, sortType);
  }
  async function fetchCourses(filteredValue, sort) {
    let array = [...filteredValue];
    console.log(array);
    let object = {
      searchKey: history.location.state.key,
      sorting: sort,
      categories: array
        .map((item) => {
          if (item.type === "CATEGORY") return item.id;
        })
        .filter((item) => item != undefined),
      languages: array
        .map((item) => {
          if (item.title === "Language") return item.id;
        })
        .filter((item) => item != undefined),
      teachers: array
        .map((item) => {
          if (item.title === "Teacher") return item.id;
        })
        .filter((item) => item != undefined),
      price: array.find((item) => item.title === "Price")?.value || [
        (
          filterObjectList.find(
            (item) => item.title === "Price"
          ) as ISliderFilter
        )?.min,
        (
          filterObjectList.find(
            (item) => item.title === "Price"
          ) as ISliderFilter
        )?.max,
      ],
      rating: array.find((item) => item.title === "Rating")?.value || [
        (
          filterObjectList.find(
            (item) => item.title === "Rating"
          ) as ISliderFilter
        )?.min,
        (
          filterObjectList.find(
            (item) => item.title === "Rating"
          ) as ISliderFilter
        )?.max,
      ],
    };
    console.log(object);
    await SearchService.getFilteredCourses(object).then((response) => {
      console.log("filtered courses", response.data);
      setFilteredCourses(response.data);
    });
  }
  function clearAll() {
    setFilteredData([]);
  }
  return (
    <User loading={!filteredCourses}>
      <StickyContainer>
        <Grid container>
          <Responsive displayIn={["Laptop", "Tablet"]}>
            <Grid item sm={3}>
              <Grid container direction="column">
                <Sort
                  sortTypes={sortTypes}
                  sortType={sortType}
                  setSortType={handleSortTypeChange}
                />
                <FilterChips
                  filteredData={filteredData}
                  onDelete={onObjectsChange}
                />
                <Filter
                  filteredData={filteredData}
                  filterDataList={filterObjectList}
                  onFilterChange={onObjectsChange}
                  onClearAll={clearAll}
                />
              </Grid>
            </Grid>
          </Responsive>
          <Responsive displayIn={["Mobile"]}>
            <Grid container>
              <Grid container>
                <Sort
                  sortTypes={sortTypes}
                  sortType={sortType}
                  setSortType={handleSortTypeChange}
                />
                <Filter
                  filteredData={filteredData}
                  filterDataList={filterObjectList}
                  onFilterChange={onObjectsChange}
                  onClearAll={clearAll}
                />
              </Grid>
              <FilterChips
                filteredData={filteredData}
                onDelete={onObjectsChange}
              />
            </Grid>
          </Responsive>
          <Grid item sm={9} xs={12}>
            <CoursePagination courses={filteredCourses} title="Search Page" />
          </Grid>
        </Grid>
      </StickyContainer>
    </User>
  );
};

export default Search;
