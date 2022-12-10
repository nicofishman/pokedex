import type { FC } from 'react';
import React from 'react';

interface ChangeOffsetButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

const ChangeOffsetButton: FC<ChangeOffsetButtonProps> = ({onClick, children, ...rest}) => {
    return (
        <button className='p-2 h-10 w-10 flex justify-center items-center bg-slate-500 rounded-full text-gray-100' onClick={onClick} {...rest}>
            {children}
        </button>
    );
};

export default ChangeOffsetButton;
