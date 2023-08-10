import {FC} from "react";
import {useLocation} from "react-router-dom";

interface Props {
    title: string
    id?: string
}

const Page: FC<Props> = ({title, id}) => {
    const location = useLocation();
    return <>
        <div>{title}</div>
        <div>{location.state}</div>
    </>
}

export default Page



