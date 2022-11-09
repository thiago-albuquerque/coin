import React from 'react';
import { Image } from 'react-native';

import { Container } from './styles';

export default function Header(){
    return(
        <Container>
            <Image 
                source={require('../../Images/logo.png')}
            />
        </Container>
    );
}