import { FC } from 'react';
import useTheme from '../Context/Theme';
import { FaSun, FaMoon } from 'react-icons/fa6';
interface ThemeBtnProps { }

const ThemeBtn: FC<ThemeBtnProps> = () => {

    const { themeMode, lightTheme, darkTheme, setThemeMode } = useTheme();


    // const onChangeBtn = (e: ChangeEvent<HTMLInputElement>) => {
    //     const darkModeStatus = e.currentTarget.checked
    //     if (darkModeStatus) {
    //         darkTheme()

    //     } else {
    //         lightTheme()
    //     }
    // }


    return (

        <div className={` flex items-center   rounded-full`}>
            <div className='flex gap-3 items-center '>
                {themeMode === "light" ? (
                    <div className="group  flex justify-center relative items-center">
                        <button className='p-2 rounded-full animate-spin bg-yellow-300 hover:bg-orange-400'
                            onClick={() => {
                                lightTheme();

                                setThemeMode("dark")
                            }}>
                            <FaSun size={25} />
                        </button>
                        <span className="absolute w-28  top-12  scale-0 transition-all rounded bg-sky-100 p-2 text-xs text-black group-hover:scale-100">✨ Light Mode!</span>
                    </div>
                ) : (
                    <div className="group  flex justify-center relative items-center">
                        <button className='p-2 rounded-full dark:bg-white dark:text-sky-400  dark:hover:text-yellow-400'
                         
                            onClick={() => {
                                darkTheme();
                                document.body.style.backgroundColor = "#fff";
                                setThemeMode("light")
                            }}>
                            <FaMoon size={25} />
                        </button>
                        <span className="absolute w-28 top-12  scale-0 transition-all rounded dark:bg-gray-800 dark:text-white p-2 text-xs text-black group-hover:scale-100">🌙 Dark Mode!</span>
                    </div>)}



            </div>
        </div>
        // <label className="fixed z-50 right-[50%] inline-flex items-center cursor-pointer">
        //     <input
        //         type="checkbox"
        //         value=""
        //         className="sr-only peer"
        //         onChange={onChangeBtn}
        //         checked={themeMode === "dark"}
        //     />
        //     <div className="w-11 h-6 bg-gray-200  peer-focus:outline-none 
        //        peer-focus:ring-4 peer-focus:ring-blue-300 
        //        dark:peer-focus:ring-blue-800 rounded-full peer
        //         dark:bg-gray-700 peer-checked:after:translate-x-full
        //          peer-checked:after:border-white after:content-[''] 
        //          after:absolute after:top-[2px] after:left-[2px]
        //           after:bg-white after:border-gray-300 after:border 
        //           after:rounded-full after:h-5 after:w-5 after:transition-all
        //            dark:border-gray-600 peer-checked:bg-blue-600">
        //     </div>
        //     <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">Toggle Theme</span>
        // </label>


    );
}

export default ThemeBtn;
