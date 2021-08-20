import {
  Collapse,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Category } from "classes/Category";
import React, { useState } from "react";
import { CategorySelector } from "tools/customDesign/CategorySelector";
import {
  ICategoryFilter,
  IFilteredValue,
  IFilterType as IFilterType,
  IListFilter,
  ISliderFilter,
} from "../SearchPage";
import { FilterCheckBox } from "./FilterCheckbox";
import { FilterSlider } from "./FilterSlider";

export function MakeList({
  filteredData,
  filter,
  onFilterValueChange,
}: {
  filteredData: Array<IFilteredValue>;
  filter: IFilterType;
  onFilterValueChange: (value: IFilteredValue, type: "ADD" | "REMOVE") => void;
}) {
  console.log("filter in makelist", filter);
  const [open, setOpen] = useState(false);
  return (
    <>
      <ListItem key={filter.title} button onClick={() => setOpen(!open)}>
        <ListItemText primary={filter.title} />
      </ListItem>
      <Collapse in={open} timeout="auto">
        <GenerateFilterValue
          filteredData={filteredData}
          filter={filter}
          onFilterValueChange={onFilterValueChange}
        />
      </Collapse>
    </>
  );
}

export function GenerateFilterValue({
  filteredData,
  filter,
  onFilterValueChange,
}: {
  filteredData: Array<IFilteredValue>;
  filter: IFilterType;
  onFilterValueChange: (value: IFilteredValue, type: "ADD" | "REMOVE") => void;
}) {
  if (filter.type === "CATEGORY") {
    return (
      <CategorySelector
        categories={(filter as ICategoryFilter).items}
        selectedCategories={filteredData.map(
          (filterValue) =>
            new Category(filterValue.id as number, filterValue.value as string)
        )}
        onCategorySelectionChange={(category, type) => {
          onFilterValueChange(
            {
              type: filter.type,
              title: filter.title,
              value: category.name,
              id: category.id,
            },
            type
          );
        }}
      />
    );
  } else if (filter.type === "LIST") {
    return (
      <List>
        {(filter as IListFilter).items.map((item, index) => (
          <ListItem
            key={item.id}
            // @ts-ignore
            value={item}
          >
            <FilterCheckBox
              checked={filteredData.some(
                (data) => data.title === filter.title && data.id === item.id
              )}
              label={item.title}
              onChange={(state) =>
                onFilterValueChange(
                  {
                    type: filter.type,
                    title: filter.title,
                    value: item.title,
                    id: item.id,
                  },
                  state ? "ADD" : "REMOVE"
                )
              }
            />
          </ListItem>
        ))}
      </List>
    );
  } else if (filter.type === "SLIDER") {
    return (
      <Grid
        style={{ height: "100%" }}
        container
        alignItems="center"
        justifyContent="center"
      >
        <FilterSlider
          //@ts-ignore
          sliderData={{
            ...filter,
            // @ts-ignore
            value: filteredData.some((item) => item.title === filter.title)
              ? filteredData.find((item) => item.title === filter.title)?.value
              : [(filter as ISliderFilter).min, (filter as ISliderFilter).max],
          }}
          onChange={(value, isClear) =>
            onFilterValueChange(
              {
                type: filter.type,
                title: filter.title,
                value: value,
                valueType: (filter as ISliderFilter).valueType,
              },
              isClear ? "REMOVE" : "ADD"
            )
          }
          // handleSliderCommitFunc={handleSliderCommit}
          // changeFilteredArrayFunc={handleFilterSliderChange}
        />
      </Grid>
    );
  }
  return <></>;
}
