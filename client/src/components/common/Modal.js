import { forwardRef, useState, useImperativeHandle, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const Modal = forwardRef((props, ref) => {
    const [Open, setOpen] = useState(false);
    useImperativeHandle(ref, () => {
        return { open: () => setOpen(true) };
    });
    useEffect(() => {
        Open ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
    }, [Open]);

    return (
        <AnimatePresence>
            {Open && (
                <motion.aside
                    className='modal'
                    // ref={ref}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.5 } }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                >                    <div className='con'>{props.children}</div>
                    <span className='close' onClick={() => setOpen(false)}>
                        close
                    </span>
                </motion.aside>
            )}
        </AnimatePresence>
    );
});

export default Modal;