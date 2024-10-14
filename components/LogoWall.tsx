import { getClientLogos } from "@/content/queries";
import Clients from "./clients"

const LogoWall = async () => {
    const ClientLogoList = await getClientLogos();
    return (
        <Clients ClientLogoList={ClientLogoList} />
    )
}

export default LogoWall;