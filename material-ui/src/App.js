import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Radio from '@mui/material/Radio'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'


function App() {
  return (
    <>
      <h1>welcome</h1>
      <Button variant="text" color="primary">
        i am amazing
      </Button>
      <Button variant="contained" color="error" size='small'>
        i am amazing
      </Button>
      <Button variant="outlined" color="primary">
        i am amazing
      </Button>
      <ButtonGroup variant="text" color="primary" aria-label="">
        <Button variant="text" color="primary">
          i am amazing
        </Button>
        <Button variant="contained" color="error" size='small'>
          i am amazing
        </Button>
        <Button variant="outlined" color="primary">
          i am amazing
        </Button>
      </ButtonGroup>

      <h2>checkbox</h2>
      <FormControlLabel
        label="are you agree"
        control={
          <Checkbox
            value="yes"
            onChange={(e) => console.log(e.target.value)}
            color="primary"
          />
        }
      />
      <h2>Radio button</h2>
      <FormControlLabel value="male" label="Male" control={<Radio />} />
      <FormControlLabel value="female" label="Female" control={<Radio />} />
      <h2>Grid - having 12 columns</h2>
      <Grid container>
        <Grid item lg={3}>
          <Box p={5} textAlign="center" color="pink" border={1}> hey bro</Box>
        </Grid>
        <Grid item lg={3}>
          <Box p={5} textAlign="center" color="red" border={1}> hey bro</Box>
        </Grid>
        <Grid item lg={3}>
          <Box p={5} textAlign="center" color="blue" border={1}> hey bro</Box>
        </Grid>
        <Grid item lg={3}>
          <Box p={5} textAlign="center" color="green" border={1}> hey bro</Box>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
