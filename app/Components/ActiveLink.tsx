import Link from "next/link";
import style from './active.module.css'
interface Props{
    path:string;
    text:string;
}

const ActiveLink = ({path,text}:Props) => {
  return (
<Link className="${}"
href={path}>{text}</Link>
)
}

export default ActiveLink