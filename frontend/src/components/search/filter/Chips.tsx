import { Chip, Grid } from "@material-ui/core";
import React from "react";
import { IFilteredValue } from "../SearchPage";

function CustomChip({
  onDelete,
  label,
}: {
  onDelete: () => void;
  label: string;
}) {
  return (
    <Grid item sm>
      <Chip
        size="medium"
        style={{ width: "100%", marginTop: 5, marginRight: 5 }}
        label={label}
        onDelete={onDelete}
        color="secondary"
      />
    </Grid>
  );
}

export function FilterChips({
  filteredData,
  onDelete,
}: {
  filteredData: Array<IFilteredValue>;
  onDelete: (value: IFilteredValue, type: "ADD" | "REMOVE") => void;
}) {
  return (
    <Grid id="chipsContainer" sm container>
      {filteredData.map((filter, index) => (
        <>
          {filter.type === "SLIDER" ? (
            <CustomChip
              label={
                "Showing " +
                filter.value[0] +
                filter.valueType +
                " to " +
                filter.value[1] +
                filter.valueType
              }
              onDelete={() => onDelete(filter, "REMOVE")}
            />
          ) : (
            <CustomChip
              label={filter.value as string}
              onDelete={() => onDelete(filter, "REMOVE")}
            />
          )}
        </>
      ))}
    </Grid>
  );
}

// function GenerateChips({ object, onObjectChange }) {
//   function handleChange(index, newItem) {
//     let newObject = object;
//     newObject[index] = newItem;
//     onObjectChange(newObject);
//   }
//   function handleCategoryChange(index, newItem) {
//     let newObject = object;
//     newObject[index].items = newItem;
//     onObjectChange(newObject);
//   }
//   return object.map((item, index) => (
//     <>
//       {item.checked && (
//         <CustomChip
//           object={item}
//           value={item.title}
//           onObjectChange={(newItem) => handleChange(index, newItem)}
//         />
//       )}
//       {item.items !== undefined ? (
//         item.items.length !== 0 ? (
//           <GenerateChips
//             object={item.items}
//             onObjectChange={(newItem) => handleCategoryChange(index, newItem)}
//           />
//         ) : null
//       ) : null}
//     </>
//   ));
// }

// export function CategoryChips({ object, onObjectChange }) {
//   return (
//     <Grid container sm>
//       <GenerateChips
//         object={object.data}
//         onObjectChange={(newData) =>
//           onObjectChange({ ...object, data: newData })
//         }
//       />
//     </Grid>
//   );
// }
