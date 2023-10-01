import { Container, Grid } from "@mui/material";
import { Navbar } from "./components/Navbar";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSelect";
import TesnureSelect from "./components/TesnureSelect";
import { useState } from "react";

function App() {
  const inLakhs=3000000;
  const [data, setData] = useState({
    homeValue: inLakhs,
    downPayment: inLakhs * 0.2,
    loanAmount: inLakhs * 0.8,
    loanTerm: 5,
    interestRate: 8.5
  });
  console.log(data);
  return (
    <div className="app">
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 8 }}>
        <Grid container spacing={5} alignItems='center'>
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData}/>
            <TesnureSelect data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
