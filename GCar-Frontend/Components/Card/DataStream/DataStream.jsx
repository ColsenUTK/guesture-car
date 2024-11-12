import styles from "./DataStream.module.scss";
import { motion } from 'framer-motion'

function DataStream({ className, id}) {

    return (
        <motion.div className={`${styles.CardCont}`} id={id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 * 0.2 , ease: "easeInOut", duration: .75 }}>
            <motion.div className={`${styles.Title}`}
                initial={{ filter: "drop-shadow(0px 0px 10px $tertiary)" }}>
                Data Stream
            </motion.div>
            <motion.div className={`${styles.Underline}`}
                intial={{width: 0}}
                animate={{width: "100%"}}
                transition={{ delay: 1 * 0.2  + .75, ease: "easeInOut", duration: .75 }}>
            </motion.div>
            <motion.div className={`${styles.DataStreamCard}`}>
            </motion.div>
        </motion.div>
    )
}

export default DataStream;