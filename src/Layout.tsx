import { Outlet } from "react-router-dom";

import {motion} from 'framer-motion';

export default function Layout(){
    return(
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{
                duration: .2,
                ease: 'easeInOut'
            }}
        >
            <Outlet />
        </motion.div>
    )
}