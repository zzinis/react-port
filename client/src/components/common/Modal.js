import { forwardRef, useState } from 'react';

const Modal = forwardRef((props, ref) => {
    const [Open, setOpen] = useState(false);

    return (
        <>
            {Open && (
                <aside className='modal' ref={ref}>
                    <div className='con'></div>
                    <span className='close' onClick={() => setOpen(false)}>
                        close
                    </span>
                </aside>
            )}
        </>
    );
});

export default Modal;