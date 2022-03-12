import { Navbar }        from "@/components/Navbar"
import type { NextPage } from "next"

const style = {
    wrapper: `h-screen w-screen flex flex-col`,
    main: ``,
    rideRequestContainer: ``,
    rideRequest: ``,
}

const Home: NextPage = () => {
    return (
        <div className={style.wrapper}>
            <Navbar/>

            <div className={style.main}>
                map
            </div>

            <div className={style.rideRequestContainer}>
                <div className={style.rideRequest}>
                    location
                    confirm ride
                </div>
            </div>
        </div>
    )
}

export default Home
