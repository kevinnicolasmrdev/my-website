import {Link} from 'react-router-dom'
import './componentStyle/button.css'

function Button({text, url}) {
  return (
    <>
    <Link to={url} className='linkButton'>
    {text}
    </Link>
    </>
  )
}

export default Button