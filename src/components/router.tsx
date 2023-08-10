import {useRoutes} from 'react-router-dom';
import Page from "./pages/page";
const Router = () => {
    // const routes = useRoutes([
    //     {path: '/', element: "Home"},
    //     {path: '/about', element: "About"},
    //     {path: '/:id', element: "Current page"},
    // ])

    const routes = useRoutes([
        {path: '/', element: <Page title={"Home"}/>},
        {path: '/about', element: <Page title={"About"}/>},
        {path: '/:id', element: <Page title={"Current page"}/>},
    ])
    return <div>
        {routes}
    </div>
}

export default Router;