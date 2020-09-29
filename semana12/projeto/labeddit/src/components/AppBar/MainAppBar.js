import React from 'react'
import {
    AppBar,
    Toolbar,
    Button,
} from '@material-ui/core'
import { LogoImage, DivButton } from './Styled'
import LabEddit from '../../assets/LabEddit.png'
import { useHistory } from 'react-router-dom'
import { goToLogin, goToHome } from '../../routes/Coordinator'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginLeft: `${theme.spacing(6)}%`,
  },
}));

const MainAppBar = () => {
  const history = useHistory()
  const classes = useStyles();

  return(
    <AppBar color="secondary">
      <Toolbar>
        <LogoImage alt={'Logo'} src={LabEddit}/>
        <DivButton className={classes.menuButton}>
          <Button 
          size="large" 
          variant="outlined"
          style={{ marginRight: 5 }} 
          onClick={() => goToLogin(history)}>
            Login
          </Button>
          <Button 
          size="large" 
          variant="outlined" 
          onClick={() => goToHome(history)}>
            Logout
          </Button>
        </DivButton>
      </Toolbar>
    </AppBar>
  )
}

export default MainAppBar