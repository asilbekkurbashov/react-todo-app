import { getRoutes } from "../App/router/appRouter/routes/getRoutes"


export const useLabel = (pathName: string) => {
    const routes = getRoutes();
    const route = routes.find((el) => el.key === pathName)
    return route?.label
}