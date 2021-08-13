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
import { Image } from "@material-ui/icons";
import { KeyboardDatePicker } from "@material-ui/pickers";
import React, { useState } from "react";
import { SlidingUpTransition } from "tools/Tools";

export function CongratulationDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={open} keepMounted onClose={onClose}>
      <DialogContent>
        <Image />
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
                  <Image />
                </Grid>
                <Grid item>
                  <Typography variant="h6">Course Title</Typography>
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
                  <Typography variant="body1">10000</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">500</Typography>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}

export function CheckoutDialog({
  open,
  onClose,
  onPurchase,
}: {
  open: boolean;
  onClose: () => void;
  onPurchase: () => void;
}) {
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [expDate, setExpDate] = useState(new Date());

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
                  onBlur={(event) => setNameOnCard(event.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  variant="outlined"
                  label="Card number"
                  onBlur={(event) => setCardNum(event.target.value)}
                />
              </Grid>
              <Grid item>
                <KeyboardDatePicker
                  // disableToolbar
                  variant="inline"
                  format="dd/MMM/yyyy"
                  label="Expire Date"
                  inputVariant="outlined"
                  value={expDate}
                  onChange={(date) => {
                    setExpDate(date as Date);
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
                  <Typography variant="body2">10000</Typography>
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
                  <Typography variant="body2">989</Typography>
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
                  <Typography variant="h6">1209</Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    onClose();
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
                      <Image />
                    </Grid>
                    <Grid item>
                      <Typography variant="h6">Course Title</Typography>
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
                      <Typography variant="body1">10000</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body1">500</Typography>
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
