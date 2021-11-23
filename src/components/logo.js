/** @jsx jsx */
import { jsx, Image } from 'theme-ui'
import { Link } from 'components/link'

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path='/'
      sx={{ variant: 'link.logo', textDecoration: 'none', display: 'flex', cursor: 'pointer', mr: 15 }}
      {...rest}
    >
    <Image src={src} alt="nextjs landing page logo" sx={styles.logoimg} />
    {/* <h3 sx={styles.textlogo}>🥑ReactAvacado</h3> */}
    </Link>
  )
}

const styles = {
  logoimg: {
    width: '200px'
  },
  textlogo: {
    color: 'heading',
    fontSize: '1.1rem',
    color: 'primary'
  }
}
