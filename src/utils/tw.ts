/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import classNames from 'classnames';

function twFactory(element: any) {
    return ([className, ..._]: TemplateStringsArray) => {
        return restyle(element)(() => className!);
    };
}

type ClassnameFactory<T> = (s: TemplateStringsArray) => T;

type TailwindFactory = {
    [K in keyof JSX.IntrinsicElements]: ClassnameFactory<
        React.ForwardRefExoticComponent<JSX.IntrinsicElements[K]>
    >;
} & {
    <T>(c: T): ClassnameFactory<T>;
};

export const tw = new Proxy((() => { }) as unknown as TailwindFactory, {
    get: (_, property: string) => twFactory(property),
    apply: (_, __, [el]: [React.ReactElement]) => twFactory(el)
});

export const restyle = <
    T extends
    | string
    | React.FunctionComponent<{ className: string }>
    | React.ComponentClass<{ className: string }>
>(element: T) => {
    return (cls: () => string) =>
        // eslint-disable-next-line react/display-name
        React.forwardRef(({ className, ...props }: any, ref) =>
            React.createElement(element, {
                ...props,
                className: classNames(cls(), className),
                ref
            })
        );
};