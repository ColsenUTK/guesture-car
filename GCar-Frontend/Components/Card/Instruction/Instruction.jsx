import styles from "./Instruction.module.scss";
import { motion, useAnimate } from 'framer-motion'
import { useEffect, useState, useContext } from "react";
import imageSrc from "../../../src/assets/image (2).png";
import { rawIncomingDataContext } from "../../../src/App";

function Instruction({ className, id}) {
    const [gesture, setGesture] = useState("L");
    const [instruction, setInstruction] = useState("Turn Left");
    const [scope, animate] = useAnimate()
    const [imageSRC, setImageSrc] = useState(null);

    const rawIncomingData = useContext(rawIncomingDataContext);
    //TODO  - Add a useEffect to update the gesture and instruction state with the rawIncomingData
    useEffect(() =>{
        const animation = async () => {
            await animate(scope.current, { opacity: 1, y: 0 }, { delay: 3 * 0.2 , ease: "easeInOut", duration: .75 })
          }
          
          animation()
    },[])

    useEffect(() =>{
        if(rawIncomingData){
            setGesture(rawIncomingData.data);
            if(rawIncomingData.data.slice(1, rawIncomingData.data.indexOf('%')) > 60){
                switch(rawIncomingData.data[0]){
                    case "Y":
                        setInstruction("Stop");
                        break; 
                    case "L":
                        setInstruction("Left");
                        break;
                    case "C":
                        setInstruction("Right");
                        break;
                    case "W":
                        setInstruction("Go");
                        break;
                    case "O":
                        setInstruction("Reverse");
                        break;
                }
                
            }else{
                setInstruction("None");
                setGesture("N/A");
            }
            setImageSrc(rawIncomingData.baby_image);

        }
    },[rawIncomingData]);
    return (
        <motion.div className={`${styles.CardCont}`} id={id}
            initial={{ opacity: 0, y: 50 }}
            ref={scope}
            
        >
            <motion.div className={`${styles.Title}`}
            >
                Instruction
            </motion.div>
                <motion.div className={`${styles.Underline}`}
                initial={{width: 0}}
                animate={{width: "100%"}}
                transition={{ delay: 3 * 0.2  + .75, ease: "easeInOut", duration: .75 }}
                ></motion.div>
            <div className={`${styles.MainCont}`}>
                <motion.div className={`${styles.GestureCont}`}>
                    <motion.div className={`${styles.GestureTitle}`}>
                        GestureDetected
                        <motion.div className={`${styles.Sign}`}>{gesture}</motion.div>
                    </motion.div>
                    {imageSRC?<img src={`data:image/jpeg;base64,${imageSRC}`} className={`${styles.Img}`}/>:<img src={imageSrc} className={`${styles.Img}`}/>}
                </motion.div>
                <motion.div className={`${styles.InstructCont}`}>
                    <motion.p className={`${styles.InstructTitle}`}>
                        {instruction}
                    </motion.p>
                </motion.div>
            </div>
            
        </motion.div>
    )
}

export default Instruction;