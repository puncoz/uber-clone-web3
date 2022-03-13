import ethLogo               from "@/assets/images/eth-logo.png"
import uberBlack             from "@/assets/images/rides/uberBlack.png"
import uberBlackSuv          from "@/assets/images/rides/uberBlackSuv.png"
import uberSelect            from "@/assets/images/rides/uberSelect.png"
import uberX                 from "@/assets/images/rides/uberX.png"
import uberXL                from "@/assets/images/rides/uberXL.png"
import Image                 from "next/image"
import { FunctionComponent } from "react"

const style = {
    wrapper: `h-full flex flex-col`,
    title: `text-gray-500 text-center text-xs py-2 border-b`,
    carList: `flex flex-col flex-1 overflow-scroll`,
    car: `flex p-3 m-2 items-center border-2 border-white`,
    selectedCar: `border-2 border-black flex p-3 m-2 items-center`,
    carImage: `h-14`,
    carDetails: `ml-2 flex-1`,
    service: `font-medium`,
    time: `text-xs text-blue-500`,
    priceContainer: `flex items-center`,
    price: `mr-[-0.8rem]`,
}

const carList = [
    {
        service: "UberBlack",
        image: uberBlack,
        priceMultiplier: 1.5,
    },
    {
        service: "UberBlackSUV",
        image: uberBlackSuv,
        priceMultiplier: 1.5,
    },
    {
        service: "UberSelect",
        image: uberSelect,
        priceMultiplier: 1.5,
    },
    {
        service: "UberX",
        image: uberX,
        priceMultiplier: 1,
    },
    {
        service: "UberXL",
        image: uberXL,
        priceMultiplier: 1.5,
    },
]

const basePrice = 1542

type Props = {};

export const RideSelector: FunctionComponent<Props> = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.title}>
                Choose a ride, or swipe up for more
            </div>

            <div className={style.carList}>
                {carList.map((car, index) => (
                    <div className={style.car}>
                        <Image src={car.image}
                               className={style.carImage}
                               height={50}
                               width={50}
                               alt={car.service}/>

                        <div className={style.carDetails}>
                            <div className={style.service}>
                                {car.service}
                            </div>

                            <div className={style.time}>
                                5 min away
                            </div>
                        </div>

                        <div className={style.priceContainer}>
                            <div className={style.price}>
                                {((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5)}
                            </div>

                            <Image src={ethLogo}
                                   height={25}
                                   width={40}
                                   alt="ETH"/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
