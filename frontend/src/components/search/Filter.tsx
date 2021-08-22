import {
  AppBar,
  Button,
  Drawer,
  Grid,
  IconButton,
  List,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import { Cancel } from "@material-ui/icons";
import FilterListIcon from "@material-ui/icons/FilterList";
import input from "postcss/lib/input";
import React, { useEffect, useState } from "react";
import { Sticky } from "react-sticky";
import { Responsive } from "tools/responsive/Responsive";
import SearchService from "./api/SearchService";
import { GenerateFilterValue, MakeList } from "./filter/MakeList";
import { IFilteredValue, IFilterType } from "./SearchPage";

const useStyle = makeStyles((theme) => ({
  dialog: {
    paper: {
      width: "100%",
      height: "100%",
    },
  },
  drawer: {
    width: "100%",
  },
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Grid container style={{ padding: 10 }}>
          {children}
        </Grid>
      )}
    </div>
  );
}
function Filter({
  filteredData,
  filterDataList,
  onFilterChange,
  onClearAll,
}: {
  filteredData: Array<IFilteredValue>;
  filterDataList: Array<IFilterType>;
  onFilterChange: (value: IFilteredValue, type: "ADD" | "REMOVE") => void;
  onClearAll: () => void;
}) {
  const classes = useStyle();
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [tabValue, setTabValue] = React.useState(0);
  const [filterDataList2, setFilterDataList2] = useState<Array<IFilterType>>();

  useEffect(() => {
    SearchService.getDataForFilter().then((response) => {
      console.log(response.data);
      setFilterDataList2([
        { title: "Teacher", type: "LIST", items: response.data.teachers },
        {
          title: "Category",
          type: "CATEGORY",
          items: response.data.categories[0].children,
        },
        { title: "Language", type: "LIST", items: response.data.languages },
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
          min: response.data.price.min,
          max: response.data.price.max,
          value: [response.data.price.min, response.data.price.max],
          step: 10,
          valueType: "$",
        },
      ]);
    });
  }, []);
  function handleTabChange(event, newValue) {
    setTabValue(newValue);
  }

  // const handleFilterChange = (data) => {
  //   var array = filterData;
  //   var index = array.findIndex(item => item.title === data.title);
  //   array[index] = data;
  //   onFilterDataChange(array);
  // }
  // const handleFilterSliderChange = (data) => {
  //   var array = rangeFilteredArray
  //   var idx = array.findIndex(item => item.filterType === data.filterType)
  //   array[idx].minValue = data.min
  //   array[idx].maxValue = data.max
  //   return array;
  // }
  // const handleSliderCommit = (data) => {
  //   var array = handleFilterSliderChange(data);
  //   onRangeFilteredArrayChange(array)
  // }
  // const handleFilterValueChange = (data) => {
  //   var array = filteredArray;
  //   if (data.type === "add") {
  //     array.push({ filterType: data.filterType, value: data.value })
  //   }
  //   else if (data.type === "remove") {
  //     array = array.filter(item => (item.filterType !== data.filterType || item.value !== data.value))
  //   }
  //   onFilteredArrayChange(array)
  // }
  // function getCurrentState(data) {
  //   var array = filteredArray;
  //   return array.findIndex(obj => obj.filterType === data.filterType && obj.value === data.value) !== -1
  // }
  // function getCurrentSliderState(filterType) {
  //   var idx = rangeFilteredArray.findIndex(item => item.filterType === filterType)
  //   return [rangeFilteredArray[idx].minValue, rangeFilteredArray[idx].maxValue]
  // }
  // function clearFilteredArray() {
  //   onFilteredArrayChange([])
  //   var array = rangeFilteredArray
  //   array.map(filter => {
  //     filter.minValue = filter.min
  //     filter.maxValue = filter.max
  //   })
  //   onRangeFilteredArrayChange(array)
  // }

  function handleFilterChange(index, newFilter) {
    // let newObject = [...objects];
    // newObject[index] = newFilter;
    // onFilterChange(newObject);
  }

  function MobileFilter() {
    return (
      <Drawer
        anchor={"right"}
        open={openDrawer}
        onClose={(event) => setOpenDrawer(false)}
        classes={{ paper: classes.drawer }}
      >
        <Sticky>
          {({ style }) => (
            <>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <IconButton onClick={(event) => setOpenDrawer(false)}>
                  <Cancel />
                </IconButton>
                <Typography variant="h6">Filter list</Typography>
                <Button variant="contained" onClick={onClearAll}>
                  Clear All
                </Button>
              </Grid>
              <AppBar position="static" color="default" style={style}>
                <Tabs
                  value={tabValue}
                  onChange={handleTabChange}
                  variant="scrollable"
                  scrollButtons="auto"
                >
                  {filterDataList.map((filter, index) => (
                    <Tab key={index} label={filter.title} />
                  ))}
                </Tabs>
              </AppBar>
            </>
          )}
        </Sticky>

        {filterDataList.map((filter, index) => (
          <TabPanel value={tabValue} index={index} key={index}>
            <GenerateFilterValue
              filteredData={filteredData}
              filter={filter}
              onFilterValueChange={onFilterChange}
            />
          </TabPanel>
        ))}
      </Drawer>
    );
  }
  function DesktopFilter() {
    return (
      <List component="nav">
        {filterDataList2?.map((filter, index) => (
          <MakeList
            key={index}
            filteredData={filteredData}
            filter={filter}
            onFilterValueChange={onFilterChange}
          />
        ))}
      </List>
    );
  }

  return (
    <>
      <Grid
        sm={12}
        xs={6}
        item
        container
        justifyContent="space-between"
        onClick={(event) => setOpenDrawer(true)}
      >
        <Typography variant="h6">Filter by</Typography>
        <FilterListIcon />
      </Grid>

      <Responsive displayIn={["Mobile"]}>
        <MobileFilter />
      </Responsive>
      <Responsive displayIn={["Laptop", "Tablet"]}>
        <DesktopFilter />
      </Responsive>
    </>
  );
}

export default Filter;
