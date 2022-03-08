import React from 'react';
import { Title as TitleComponent } from './styles';

interface Props {
    title: string
}

export function Title({ title }: Props) {
    return (
        <TitleComponent
            title={title}
        />
    )
}