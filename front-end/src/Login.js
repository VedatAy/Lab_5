
/** @jsxImportSource @emotion/react */
// Layout
import { useTheme } from '@mui/styles';

const useStyles = (theme) => ({
  root: {
    flex: '1 1 auto',
    background: 'rgba(0,0,0,.2)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& > div': {
      margin: `${theme.spacing(1)}`,
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign:'center',
    },
    '& fieldset': {
      border: 'none',
      '& label': {
        marginBottom: theme.spacing(.5),
        display: 'block',
      },
    },
  },
})

export default function Login({
  onUser
}) {
  const styles = useStyles(useTheme())
  return (
    <div css={styles.root}>
      <div>
        <fieldset>
          <label htmlFor="username">Username</label>
          <input id="username" name="username" />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" />
        </fieldset>
        <fieldset>
          <input type="submit" value="Login" onClick={ (e) => {
            e.stopPropagation()
            onUser({username: 'david'})
          }} />
        </fieldset>
      </div>
    </div>
  );
}
