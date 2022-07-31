import { Card, CardContent, Grid } from '@mui/material';
import React,{useState} from 'react';

export const Calc = () => {
  const[result,setResult]=useState("");

  const handleClick = (e)=>{
    setResult(result.concat(e.target.value));
  }
  const clearDisplay = () =>{
    setResult("")
  }
  const calculate=()=>{
    setResult(eval(result).toString())
  }

  return (
    <React.Fragment>
      <Grid container >
        <Grid item xs={4.3}></Grid>
        <Grid item xs={3.4}>
          <Card className="content-calci-card">
            <CardContent>
              <Grid container spacing={1}>
                <Grid item xs={12}>
              <input type="text" value={result} className="content-claci-input" />

                </Grid>
                <Grid item xs={3}>
           <button onClick={clearDisplay} className="content-button-silver">C</button>
                </Grid>
                <Grid item xs={3}>
           <button onClick={handleClick} className="content-button-silver">+/-</button>
                </Grid>
                <Grid item xs={3}>
           <button value="%"  onClick={handleClick} className="content-button-silver">%</button>
                </Grid>
                <Grid item xs={3}>
          <button value="/" onClick={handleClick} className="content-button-silver oranges">/</button>
                </Grid>
                <Grid item xs={3}>
           <button value="7" onClick={handleClick} className="content-button-silver blackclr">7</button>
                </Grid>
                <Grid item xs={3}>
           <button  value="8" onClick={handleClick} className="content-button-silver blackclr">8</button>
                </Grid>
                <Grid item xs={3}>
           <button value="9" onClick={handleClick} className="content-button-silver blackclr">9</button>
                </Grid>
                <Grid item xs={3}>
          <button value="*" onClick={handleClick} className="content-button-silver oranges">X</button>
                </Grid>
                <Grid item xs={3}>
           <button value="4" onClick={handleClick} className="content-button-silver blackclr">4</button>
                </Grid>
                <Grid item xs={3}>
           <button value="5" onClick={handleClick} className="content-button-silver blackclr">5</button>
                </Grid>
                <Grid item xs={3}>
           <button  value="6" onClick={handleClick} className="content-button-silver blackclr">6</button>
                </Grid>
                <Grid item xs={3}>
          <button value="-" onClick={handleClick} className="content-button-silver oranges">-</button>
                </Grid>
                <Grid item xs={3}>
           <button value="1" onClick={handleClick} className="content-button-silver blackclr">1</button>
                </Grid>
                <Grid item xs={3}>
           <button value="2" onClick={handleClick} className="content-button-silver blackclr">2</button>
                </Grid>
                <Grid item xs={3}>
           <button value="3" onClick={handleClick} className="content-button-silver blackclr">3</button>
                </Grid>
                <Grid item xs={3}>
          <button value="+" onClick={handleClick} className="content-button-silver oranges">+</button>
                </Grid>
                
                <Grid item xs={6}>
           <button value="0" onClick={handleClick} className="content-button-silver blackclr design">0</button>
                </Grid>
                <Grid item xs={3}>
           <button value="." onClick={handleClick} className="content-button-silver blackclr">.</button>
                </Grid>
                <Grid item xs={3}>
          <button value="=" onClick={calculate} className="content-button-silver oranges">=</button>
                </Grid>
              </Grid>
              {/* <Grid item xs={4}></Grid> */}
              <Grid item xs={12}>
                <span className="content-footer-name" > <b>Design By</b> Inshira Saba</span>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4.3}></Grid>
      </Grid>
    </React.Fragment>
    
  )
}
