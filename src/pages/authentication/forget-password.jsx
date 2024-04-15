import { Box, Button, Stack, TextField, Grid  } from "@mui/material";
import FlexBox from "components/flexbox/FlexBox";
import FlexRowAlign from "components/flexbox/FlexRowAlign";
import AppTextField from "components/input-fields/AppTextField";
import { H1, Paragraph } from "components/Typography";
import React, { useState } from "react";

const ForgetPassword = () => {
  const [input, setInput] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const [percentage3, setPercentage3] = useState(0);
  const [subtract, setSubtract] = useState(0);
  const [result, setResult] = useState(0);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handlePercentage1Change = (e) => {
    setPercentage1(e.target.value);
  };

  const handlePercentage2Change = (e) => {
    setPercentage2(e.target.value);
  };

  const handlePercentage3Change = (e) => {
    setPercentage3(e.target.value);
  };

  const handleSubtractChange = (e) => {
    setSubtract(e.target.value);
  };

  const calculate = () => {
      let result1 = input - (input * percentage1) / 100;
      let intermediate1 = input - result1;
      let result2 = intermediate1 - (intermediate1 * percentage2) / 100;
      let intermediate2 = intermediate1 - result2;
    // let result3 = input - (input * percentage3) / 100;
    // let intermediate3 = input - result3;

    setResult(input - intermediate1 - intermediate2 - subtract);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Grid>
        <h1>Percentage Calculator</h1>
        <p>Selling Price:</p>
        <TextField size="small" type="number" value={input} onChange={handleInputChange} />
        <p>Referral Fee:</p>
        <TextField
          size="small"
          type="number"
          placeholder="Percentage 1"
          value={percentage1}
          onChange={handlePercentage1Change}
        />
        <p>GST on Referral Fee:</p>
        <TextField
          size="small"
          type="number"
          placeholder="Percentage 2"
          value={percentage2}
          onChange={handlePercentage2Change}
        />
        {/* <p>GST on Items:</p>
        <input
          type="number"
          placeholder="Percentage 3"
          value={percentage3}
          onChange={handlePercentage3Change}
        /> */}
        <p>Shipping cost:</p>
        <TextField
          size="small"
          type="number"
          placeholder="Subtract"
          value={subtract}
          onChange={handleSubtractChange}
        />
        <p></p>
        <Button
          variant="contained"
          style={{ backgroundColor: "#8d1f1f", color: "#ffffff" }}
          onClick={calculate}
        >
          Calculate
        </Button>
        <p>Result: {result}</p>
      </Grid>
      </Box>
  );
};

export default ForgetPassword;
