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
import React from "react";
import { Sticky, StickyContainer } from "react-sticky";
import { Responsive } from "tools/responsive/Responsive";
import { GenerateFilterValue, MakeList } from "./filter/MakeList";
import { IFilterType, IFilteredValue } from "./SearchPage";

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
  const [openDrawer, setOpenDrawer] = React.useState(true);
  const [tabValue, setTabValue] = React.useState(0);

  function handleTabChange(event, newValue) {
    setTabValue(newValue);
  }

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
                justify="space-between"
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
                  {filterDataList.map((filter) => (
                    <Tab label={filter.title} />
                  ))}
                </Tabs>
              </AppBar>
            </>
          )}
        </Sticky>

        {filterDataList.map((filter, index) => (
          <TabPanel value={tabValue} index={index}>
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
        {filterDataList.map((filter, index) => (
          <MakeList
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
        container
        justify="space-between"
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
