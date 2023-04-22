import styled, {css } from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

interface IconsProps {
    type: 'up' | 'down'
}
interface ContainerProps {
    width: string;
    isActive: boolean;
    type: 'up' | 'down';
}

export const Container = styled.TouchableOpacity<ContainerProps>`
    width: ${({ width }) => width};

    flex-direction: row;
    align-items: center;

    ${({ isActive }) => isActive && css`
        border: 0;
    `};
    ${({ isActive }) => !isActive && css`
        border: 1.5px solid ${({ theme }) => theme.colors.text};
    `};
    padding: 16px;
    justify-content: center;
    ${({ isActive, type }) => isActive && type === 'up' && css`
        background-color: ${({theme}) => theme.colors.sucess_light};
    `};
    ${({ isActive, type }) => isActive && type === 'down' && css`
        background-color: ${({theme}) => theme.colors.attention_light};
    `};
`;

export const Icon = styled(Feather)<IconsProps>`
    font-size: ${RFValue(24)};
    margin-right: 12px;
    color: ${({ theme, type }) => type === 'up' ? theme.colors.sucess : theme.colors.attention };
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)};
    font-family: ${({ theme }) => theme.fonts.regular};
`;