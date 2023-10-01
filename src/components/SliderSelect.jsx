import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = ({ data, setData }) => {
  const maxBankLimit = 10000000;
  const minBankLimit = 100000;
  return (
    <>
      <SliderComponent
        unit="₹"
        amount={data.homeValue}
        label="Home Value"
        min={minBankLimit}
        max={maxBankLimit}
        defaultValue={data.homeValue}
        step={50000}
        value={data.homeValue}
        onChange={(e, value) => setData({ ...data, 
            loanAmount: value*0.8,
            downPayment: value*0.2,
            homeValue: value })}
      />
      <SliderComponent
        unit="₹"
        amount={data.downPayment}
        label="Down Payment"
        min={0}
        max={data.homeValue}
        defaultValue={data.downPayment}
        step={50000}
        value={data.downPayment}
        onChange={(e, value) => setData({ ...data, loanAmount: data.homeValue - value, downPayment: value })}
      />
      <SliderComponent
        unit="₹"
        amount={data.loanAmount}
        label="Loan Amount"
        min={0}
        max={data.homeValue}
        step={50000}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        onChange={(e, value) => setData({ ...data, downPayment: data.homeValue - value, loanAmount: value })}
      />
      <SliderComponent
        unit="%"
        amount={data.interestRate}
        label="Interest Rate"
        min={2}
        max={18}
        step={0.5}
        defaultValue={data.interestRate}
        value={data.interestRate}
        onChange={(e, value) => setData({ ...data, interestRate: value })}
      />
    </>
  );
};

export default SliderSelect;
