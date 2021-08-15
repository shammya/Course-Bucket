import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { Course } from "classes/Course";
import { CreditCard } from "classes/Person";
import PersonService from "components/person/api/PersonService";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { SlidingUpTransition } from "tools/Tools";

export function CongratulationDialog({
  open,
  course,
  onClose,
}: {
  open: boolean;
  course: Course;
  onClose: () => void;
}) {
  return (
    <Dialog open={open} keepMounted onClose={onClose}>
      <DialogContent>
        <Grid container direction="column" alignItems="center" spacing={2}>
          <Grid item>
            <img src={require("assets/img/congratulation.jpg").default} />
          </Grid>
          <Grid item>
            <Typography variant="h4">You successfully purchased</Typography>
          </Grid>
          <Grid item>
            <Card>
              <CardContent>
                <Grid
                  container
                  direction="row"
                  wrap="nowrap"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid
                    item
                    container
                    direction="row"
                    wrap="nowrap"
                    xs
                    spacing={1}
                    alignItems="center"
                  >
                    <Grid item>
                      <img src={course?.cover?.content} />
                    </Grid>
                    <Grid item>
                      <Typography variant="h6">{course?.title}</Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    direction="column"
                    alignItems="flex-end"
                    style={{ width: "auto" }}
                  >
                    <Grid item>
                      <Typography
                        variant="body1"
                        style={{ textDecoration: "line-through" }}
                      >
                        {course.mainPrice}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body1">
                        {course.mainPrice &&
                          course.off &&
                          course.mainPrice -
                            (course.mainPrice * course.off) / 100}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

export function CheckoutDialog({
  open,
  course,
  onClose,
  onPurchase,
}: {
  open: boolean;
  course: Course;
  onClose: () => void;
  onPurchase: () => void;
}) {
  const { enqueueSnackbar } = useSnackbar();
  const [creditCard, setCreditCard] = useState<CreditCard | undefined>();
  useEffect(() => {
    PersonService.getCreditCardDetails().then((response) => {
      console.log("Credit card fetched", response.data);
      setCreditCard(response.data);
    });
    return () => {
      setCreditCard(undefined);
    };
  }, []);
  let offeredPrice =
    course?.mainPrice - (course?.mainPrice * course?.off) / 100;
  let expDate = new Date(creditCard?.expireDate + "");

  if (course == undefined) return <></>;
  return (
    <Dialog
      open={open}
      TransitionComponent={SlidingUpTransition}
      keepMounted
      onClose={onClose}
    >
      <DialogTitle>Checkout</DialogTitle>
      <DialogContent>
        <Grid container direction="column" spacing={2}>
          <Grid item container direction="row" wrap="nowrap" xs spacing={4}>
            <Grid item container direction="column" xs spacing={1}>
              <Grid item>
                <Typography variant="h5">Card details</Typography>
              </Grid>
              <Grid item>
                <TextField
                  variant="outlined"
                  label="Name on card"
                  value={creditCard?.nameOnCard}
                  onChange={(event) =>
                    setCreditCard({
                      ...creditCard,
                      nameOnCard: event.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item>
                <TextField
                  variant="outlined"
                  value={creditCard?.cardNo}
                  label="Card number"
                  onChange={(event) =>
                    setCreditCard({ ...creditCard, cardNo: event.target.value })
                  }
                />
              </Grid>
              <Grid item>
                <KeyboardDatePicker
                  // disableToolbar
                  variant="inline"
                  format="dd/MMM/yyyy"
                  label="Expire Date"
                  inputVariant="outlined"
                  value={creditCard?.expireDate}
                  onChange={(date) => {
                    setCreditCard({ ...creditCard, expireDate: date as Date });
                  }}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </Grid>
            </Grid>
            <Grid item container direction="column" xs spacing={1}>
              <Grid item>
                <Typography variant="h5">Summary</Typography>
              </Grid>
              <Grid
                item
                container
                direction="row"
                justifyContent="space-between"
                wrap="nowrap"
              >
                <Grid item>
                  <Typography variant="body2">Original price</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">{course?.mainPrice}</Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                direction="row"
                justifyContent="space-between"
                wrap="nowrap"
              >
                <Grid item>
                  <Typography variant="body2">Discount</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    {course.mainPrice &&
                      course.off &&
                      (course?.mainPrice * course?.off) / 100}
                  </Typography>
                </Grid>
              </Grid>
              <Divider />
              <Grid
                item
                container
                direction="row"
                justifyContent="space-between"
                wrap="nowrap"
              >
                <Grid item>
                  <Typography variant="h6">Total</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">
                    {course.mainPrice && course.off && offeredPrice}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    let error = false;
                    if (!creditCard?.cardNo) {
                      error = true;
                      enqueueSnackbar("Please provide a credit card no", {
                        variant: "warning",
                      });
                    }
                    if (!creditCard?.nameOnCard) {
                      error = true;
                      enqueueSnackbar("Please provide name on card", {
                        variant: "warning",
                      });
                    }
                    if (!creditCard?.expireDate) {
                      error = true;
                      enqueueSnackbar("Please provide expire date of card", {
                        variant: "warning",
                      });
                    } else if (expDate.getTime() < new Date().getTime()) {
                      error = true;
                      enqueueSnackbar("Your credit card is expired", {
                        variant: "error",
                      });
                    }
                    if (error) return;
                    onPurchase();
                  }}
                >
                  Complete payment
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Card>
              <CardHeader>
                <Typography variant="h5">Order details</Typography>
              </CardHeader>
              <CardContent>
                <Grid
                  container
                  direction="row"
                  wrap="nowrap"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid
                    item
                    container
                    direction="row"
                    wrap="nowrap"
                    xs
                    spacing={1}
                    alignItems="center"
                  >
                    <Grid item>
                      <img src={course?.cover?.content} />
                    </Grid>
                    <Grid item>
                      <Typography variant="h6">{course.title}</Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    direction="column"
                    alignItems="flex-end"
                    style={{ width: "auto" }}
                  >
                    <Grid item>
                      <Typography
                        variant="body1"
                        style={{ textDecoration: "line-through" }}
                      >
                        {course?.mainPrice}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body1">
                        {course.mainPrice && course.off && offeredPrice}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
