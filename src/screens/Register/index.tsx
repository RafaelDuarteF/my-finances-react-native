import React, { useState } from "react";
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { 
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionsTypes,
} from "./styles";
import { Button } from "../../components/Form/Button";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { CategorySelectButton } from "../../components/Form/CategorySelectButton";
import { CategorySelect } from "../CategorySelect";
import { InputForm } from "../../components/Form/InputForm";

export function Register() {


    interface FormData {
        name: string;
        amount: string;
    }

    const schema = Yup.object().shape({
            name: Yup.string().required('Nome é obrigatório!'),
            amount: Yup
                .number()
                .typeError('Informe um valor numérico')
                .required('Preço é obrigatório!')
                .positive('O valor não pode ser negativo')
    });

    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
    });
      
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    function handleTransactionsTypeSelect(type: 'up' | 'down') {
        setTransactionType(type);
    }
    function handleCloseSelectCategoryModal() {
        setCategoryModalOpen(false);
    }
    function handleOpenSelectCategoryModal() {
        setCategoryModalOpen(true);
    }
    function handleRegister(form : FormData) {
        if(!transactionType) 
            return Alert.alert('Selecione o tipo da transação!');
        
        if(category.key === 'category')
            return Alert.alert('Selecione a categoria!');
        
        const data = {
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.key
        }
        console.log(data);
    }

    

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header>
                    <Title>Cadastro</Title>
                </Header>
                <Form>
                    <Fields>
                        <InputForm error={errors.name ? errors.name.message : ''} autoCapitalize="sentences" autoCorrect={false} name="name" control={control} placeholder="Nome" />
                        <InputForm error={errors.amount ? errors.amount.message : ''} keyboardType="numeric" name="amount" control={control} placeholder="Preço" />
                        <TransactionsTypes>
                            <TransactionTypeButton isActive={transactionType === 'up'} type="up" title="Income" width="48%" onPress={() => handleTransactionsTypeSelect('up')} />
                            <TransactionTypeButton isActive={transactionType === 'down'} type="down" title="Outcome" width="48%" onPress={() => handleTransactionsTypeSelect('down')}/>
                        </TransactionsTypes>
                        <CategorySelectButton onPress={handleOpenSelectCategoryModal} title={category.name} />
                    </Fields>
                    <Button title="Enviar" onPress={handleSubmit(handleRegister)}/>
                </Form>

                <Modal visible={categoryModalOpen}>
                    <CategorySelect 
                        category={category}
                        setCategory={setCategory}
                        closeSelectCategory={handleCloseSelectCategoryModal}
                    />
                </Modal>
            </Container>
        </TouchableWithoutFeedback>
    );
}