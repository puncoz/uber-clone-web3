import mapboxgl from "mapbox-gl"
import {
    FunctionComponent,
    useEffect,
}               from "react"

const style = {
    wrapper: `flex-1 h-full w-full`,
}

type Props = {};

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || ""

export const Map: FunctionComponent<Props> = (props) => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/streets-v11",
            center: [84.1240, 28.3949],
            zoom: 3,
        })
    }, [])

    return (
        <div className={style.wrapper} id="map"/>
    )
}
