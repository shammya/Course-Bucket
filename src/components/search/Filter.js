import { Drawer, Grid, IconButton, List, makeStyles, Tab, Tabs, Typography } from '@material-ui/core'
import { Cancel } from '@material-ui/icons'
import FilterListIcon from '@material-ui/icons/FilterList'
import React from 'react'
import { Responsive } from 'tools/Responsive'
import { delay } from 'tools/Tools'
import { GenerateFilterValue, MakeList } from './filter/MakeList'


const useStyle = makeStyles(theme => ({
  dialog: {
    paper: {
      width: "100%",
      height: "100%",
    },
  },
  drawer: {
    width: "100%",
  }
}))

function Filter({
  objects = [
    {
      title: "Filter label",
      type: "List",
      open: false,
      items: [
        {
          title: "Filter values",
          checked: false,
        },
      ],
    },
  ],
  onObjectsChange = (array) => { },
  onClearAll = () => { }
}) {
  const classes = useStyle()
  const [openDrawer, setOpenDrawer] = React.useState(true);
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = async (event, newValue) => {
    setTabValue(newValue);
    await delay();
  }
  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setOpenDrawer(open)
  }

  function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Grid container style={{ padding: 10 }}>{children}</Grid>
        )}
      </div>
    )
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
    let newObject = [...objects]
    newObject[index] = newFilter;
    onObjectsChange(newObject);
  }


  function MobileFilter() {
    return (
      <Drawer
        anchor={"right"}
        open={openDrawer}
        onClose={toggleDrawer(false)}
        classes={{ paper: classes.drawer }}
      >
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <IconButton onClick={toggleDrawer(false)}>
            <Cancel />
          </IconButton>
          <Typography variant="h6">
            Filter list
            </Typography>
          <Typography variant="h6" onClick={onClearAll} component="button">
            Clear all
            </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="flex-start"
        >
          <Grid
            item
            xs={4}
          >
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={tabValue}
              onChange={handleTabChange}
            >
              {objects.map(filter => (
                <Tab label={filter.title} />
              ))}
            </Tabs>
          </Grid>
          <Grid item xs={8}>
            {objects.map((filter, index) => (
              <TabPanel value={tabValue} index={index}>
                <GenerateFilterValue
                  object={filter}
                  onObjectChange={newFilter => handleFilterChange(index, newFilter)}
                />
              </TabPanel>
            ))}
          </Grid>
        </Grid>
      </Drawer>
    )
  }
  function DesktopFilter() {
    function handleItemChange(index, newItem) {
      let array = [...objects];
      array.splice(index, 1, newItem);
      onObjectsChange(array);
    }
    return (
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {
          objects.map((item, index) => (
            <MakeList
              object={item}
              onObjectChange={(newItem) => { handleItemChange(index, newItem) }}
            />
          ))
        }
      </List>
    )
  }


  return (
    <>
      <Grid sm={12} xs={6} container justify="space-between" onClick={toggleDrawer(true)}>
        <Typography variant="h6">
          Filter by
        </Typography>
        <FilterListIcon />
      </Grid>

      <Responsive displayIn={["Mobile"]}>
        <MobileFilter />
      </Responsive>
      <Responsive displayIn={["Laptop", "Tablet"]}>
        <DesktopFilter />
      </Responsive>
    </>
  )
}

export default Filter