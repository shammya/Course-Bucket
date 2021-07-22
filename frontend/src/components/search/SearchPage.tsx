import { Grid } from "@material-ui/core";
import { menuItems } from "components/header/MenuBar";
import Filter from "components/search/Filter";
import { FilterChips } from "components/search/filter/Chips";
import Sort from "components/search/Sort";
import User from "layout/User";
import React, { useState } from "react";
import { Responsive } from "tools/responsive/Responsive";

export const filterObjectList = [
  {
    title: "Teacher",
    type: "List",
    open: false,
    items: [
      {
        title: "Abrar Fahad",
        checked: false,
      },
      {
        title: "Mahdi BUET 3",
        checked: false,
      },
      {
        title: "Md. Mehedi Hasan",
        checked: false,
      },
      {
        title: "Kazi Wasif Amin Shammya",
        checked: false,
      },
    ],
  },
  {
    title: "Category",
    type: "List",
    open: false,
    items: menuItems,
  },
  {
    title: "Language",
    type: "List",
    open: false,
    items: [
      {
        title: "Arabic",
        checked: false,
      },
      {
        title: "English",
        checked: false,
      },
      {
        title: "Bangla",
        checked: false,
      },
      {
        title: "Hindi",
        checked: false,
      },
      {
        title: "Persian",
        checked: false,
      },
    ],
  },
  {
    title: "Rating",
    type: "Slider",
    open: false,
    min: 0,
    max: 5,
    value: [0, 5],
    step: 0.01,
    valueType: "⭐",
  },
  {
    title: "Price",
    type: "Slider",
    open: false,
    min: 0,
    max: 10000,
    value: [0, 10000],
    step: 10,
    valueType: "$",
  },
];

const Search = () => {
  const [filterData, setFilterData] = useState(
    JSON.parse(JSON.stringify(filterObjectList))
  );
  function onObjectsChange(array) {
    setFilterData(array.splice(0));
  }
  function clearAll() {
    setFilterData(JSON.parse(JSON.stringify(filterObjectList)));
  }
  return (
    <User>
      <Grid container>
        <Responsive displayIn={["Laptop", "Tablet"]}>
          <Grid item sm={3}>
            <Grid container direction="column">
              <Sort />
              <FilterChips
                objects={filterData}
                onObjectsChange={onObjectsChange}
              />
              <Filter objects={filterData} onObjectsChange={onObjectsChange} />
            </Grid>
          </Grid>
        </Responsive>
        <Responsive displayIn={["Mobile"]}>
          <Grid container>
            <Grid container>
              <Sort />
              <Filter
                objects={filterData}
                onObjectsChange={onObjectsChange}
                onClearAll={clearAll}
              />
            </Grid>
            <FilterChips
              objects={filterData}
              onObjectsChange={onObjectsChange}
            />
          </Grid>
        </Responsive>
        <Grid item sm={9} xs={12}>
          {/* <CoursePagination courses={courses} title="Search Page" /> */}
        </Grid>
      </Grid>
    </User>
  );
};

export default Search;
