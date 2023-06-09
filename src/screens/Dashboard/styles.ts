import styled from  'styled-components/native';
import { FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons'; // icons.expo.fyi
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { Props } from '../../components/HighlightCard/TransactionCard';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;
export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
`;
export const UserContainer = styled.View`
    width: 100%;
    padding: 0 ${RFValue(24)}px;
    margin-top: ${getStatusBarHeight() + RFValue(28)}px;
    flex-direction: row;
    justify-content: space-between; 
    align-items: center;
`;
export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 10px;
`;
export const User = styled.View`
    margin-left: 17px;
`;
export const UserGreeting = styled.Text`
   color: ${({ theme }) => theme.colors.shape};
   font-size: ${RFValue(18)}px;
   font-family: ${({ theme }) => theme.fonts.regular};
`;
export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;
export const LogoutButton = styled.TouchableOpacity`

`;
export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFValue(24)}px;
`;
export const HighlightCards = styled.ScrollView.attrs({
    contentContainerStyle: { paddingLeft: 24, paddingRight: 8},
    horizontal: true, 
    showsHorizontalScrollIndicator: false
})`
   width: 100%;
   position: absolute;
   margin-top: ${RFPercentage(20)};
`;

export const Transactions = styled.View`
    flex: 1;
    padding: 0 24px;
    margin-top: ${RFPercentage(14)};

`;
export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    margin-bottom: 16px;
`;
export const TransactionsList = styled(
    FlatList as new () => FlatList<Props>
    ).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: getBottomSpace()
    }
})`
    
`;