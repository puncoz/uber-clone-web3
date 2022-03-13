import Image                 from "next/image"
import { FunctionComponent } from "react"
import { BsPerson }          from "react-icons/bs"
import avatar                from "@/assets/images/avatar.jpg"

const style = {
    wrapper: `h-16 w-full bg-gray-800 shadow-lg text-white flex md:justify-around items-center px-60`,
    leftMenu: `flex gap-3`,
    rightMenu: `flex gap-3 items-center`,
    logo: `text-3xl text-white flex cursor-pointer mr-16`,
    menuItem: `text-lg text-white font-medium items-center mx-4 cursor-pointer`,
    userImageContainer: `mr-2`,
    userImage: `h-10 w-10 rounded-full mr-4 p-px object-cover cursor-pointer`,
    loginButton: `flex items-center cursor-pointer rounded-full hover:bg-[#333] px-4 py-1`,
    loginText: `ml-2`,
}

const currentAccount = "0x0001234567890123456789012345678901234567"
// const currentAccount = ""

type Props = {};

export const Navbar: FunctionComponent<Props> = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.leftMenu}>
                <div className={style.logo}>Uber</div>
                <div className={style.menuItem}>Ride</div>
                <div className={style.menuItem}>Drive</div>
                <div className={style.menuItem}>More</div>
            </div>

            <div className={style.rightMenu}>
                <div className={style.menuItem}>Help</div>
                <div className={style.menuItem}>Shyam</div>
                <div className={style.userImageContainer}>
                    <Image className={style.userImage} src={avatar} width={40} height={40} alt="Shyam"/>
                </div>
                {currentAccount ? (
                    <div>
                        {currentAccount.slice(0, 6)}...{currentAccount.slice(-3)}
                    </div>
                ) : (
                    <div className={style.loginButton}>
                        <BsPerson/>
                        <span className={style.loginText}>Login</span>
                    </div>
                )}
            </div>
        </div>
    )
}
