import { Grid, TextField, Typography, Chip } from "@material-ui/core";
import { Category } from "classes/Category";
import { menuItems } from "components/header/MenuBar";
import { CategoryChips } from "components/search/filter/Chips";
import React, { useState } from "react";
import { CategorySelector } from "tools/customDesign/CategorySelector";
import { CustomImageUploader } from "tools/customDesign/ImageUploader";
import { LanguageField } from "tools/customDesign/LanguageField";

export function LandingPage({ course, onCourseAttrChange }) {
  const [categories, setCategories] = useState(course.categories);
  function handleCategoriesChange(newCategories: Category[]) {
    setCategories(newCategories);
    onCourseAttrChange({ categories: newCategories });
  }
  return (
    <Grid
      container
      direction="column"
      alignContent="space-between"
      xs
      spacing={1}
    >
      <Grid item container>
        <TextField
          fullWidth
          label="Course title"
          defaultValue={course.title}
          variant="outlined"
          onBlur={(event) => onCourseAttrChange({ title: event.target.value })}
        />
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          label="Course subtitle"
          defaultValue={course.subTitle}
          variant="outlined"
          onBlur={(event) =>
            onCourseAttrChange({ subTitle: event.target.value })
          }
        />
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          label="Course description"
          defaultValue={course.description}
          variant="outlined"
          multiline
          rows={4}
          onBlur={(event) =>
            onCourseAttrChange({ description: event.target.value })
          }
        />
      </Grid>
      <Grid item>
        <CustomImageUploader />
      </Grid>
      <Grid item>
        <LanguageField
          objects={course.languages}
          onObjectsChange={(languages) =>
            onCourseAttrChange({ languages: languages })
          }
        />
      </Grid>
      <Grid item>
        <Typography>Category</Typography>
        <Grid container sm>
          {categories.map((category, idx) => (
            <Grid item>
              <Chip
                size="medium"
                style={{ width: "100%", marginTop: 5, marginRight: 5 }}
                label={category.name}
                onDelete={() => {
                  let array = [...categories];
                  array.splice(idx, 1);
                  handleCategoriesChange(array);
                }}
                color="secondary"
              />
            </Grid>
          ))}
        </Grid>
        <CategorySelector
          categories={categories}
          onCategoriesChange={handleCategoriesChange}
        />
      </Grid>
    </Grid>
  );
}
