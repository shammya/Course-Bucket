import { Button, Chip, Grid, TextField, Typography } from "@material-ui/core";
import { Category, categoryList } from "classes/Category";
import React, { useState } from "react";
import { CategorySelector } from "tools/customDesign/CategorySelector";
import { CustomImageUploader } from "tools/customDesign/ImageUploader";
import { LanguageField } from "tools/customDesign/LanguageField";

export function LandingPage({ course, onCourseAttrChange }) {
  const [categories, setCategories] = useState<Array<Category>>(
    course.categories
  );
  function handleCategoriesChange(category: Category, type: "ADD" | "REMOVE") {
    let array;
    if (type === "ADD") {
      array = [...categories, category];
    } else {
      var idx = categories.findIndex((item) => item.id === category.id);
      array = [...categories];
      array.splice(idx, 1);
    }
    setCategories(array);
    onCourseAttrChange({ categories: array });
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
        <Grid container direction="column" xs spacing={2}>
          <Grid item container sm>
            {categories.map((category, idx) => (
              <Grid item>
                <Chip
                  size="medium"
                  style={{ width: "100%", marginTop: 5, marginRight: 5 }}
                  label={category.name}
                  onDelete={() => {
                    let array = [...categories];
                    array.splice(idx, 1);
                    setCategories(array);
                    onCourseAttrChange({ categories: array });
                  }}
                  color="secondary"
                />
              </Grid>
            ))}
          </Grid>
          <Grid item container justify="center">
            {categories.length > 0 && (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setCategories([])}
              >
                Clear All
              </Button>
            )}
          </Grid>
        </Grid>
        <CategorySelector
          categories={categoryList}
          selectedCategories={categories}
          onCategorySelectionChange={handleCategoriesChange}
        />
      </Grid>
    </Grid>
  );
}
