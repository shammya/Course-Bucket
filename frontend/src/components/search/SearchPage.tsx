import { Grid } from "@material-ui/core";
import { categoryList, CategoryTreeNode } from "classes/Category";
import Filter from "components/search/Filter";
import { FilterChips } from "components/search/filter/Chips";
import Sort from "components/search/Sort";
import User from "layout/User";
import React, { useState } from "react";
import { StickyContainer } from "react-sticky";
import { Responsive } from "tools/responsive/Responsive";

export interface IFilter {
  type: "LIST" | "CATEGORY" | "SLIDER";
  title: string;
}
export interface IListFilter extends IFilter {
  items: Array<{ title: string; id: number }>;
}
export interface ICategoryFilter extends IFilter {
  items: Array<CategoryTreeNode>;
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
    items: categoryList,
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

const Search = () => {
  // const [filterData, setFilterData] = useState(
  //   JSON.parse(JSON.stringify(filterObjectList))
  // );
  const [filteredData, setFilteredData] = useState<Array<IFilteredValue>>([]);
  function onObjectsChange(value: IFilteredValue, type: "ADD" | "REMOVE") {
    let array;
    if (type === "ADD") {
      let idx = filteredData.findIndex((item) => item.title === value.title);
      if (value.type === "SLIDER" && idx != -1) {
        array = [...filteredData];
        array[idx] = value;
      } else {
        array = [...filteredData, value];
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
  }
  function clearAll() {
    setFilteredData([]);
  }
  return (
    <User>
      <StickyContainer>
        <Grid container>
          <Responsive displayIn={["Laptop", "Tablet"]}>
            <Grid item sm={3}>
              <Grid container direction="column">
                <Sort />
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
                <Sort />
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
            {/* <CoursePagination courses={courses} title="Search Page" /> */}
          </Grid>
        </Grid>
      </StickyContainer>
    </User>
  );
};

export default Search;
