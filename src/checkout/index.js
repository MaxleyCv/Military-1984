import React from 'react'
import { InputField, InputForm, MainSection, SubmitButton, TextInput } from './CheckoutElements'
import MainForm from './components/MainForm'

const Checkout = () => {
    return (
        <MainSection>
            {/* <InputForm>
                <InputField>
                <TextInput type="text"></TextInput>
                </InputField>
                <InputField>
                <TextInput type="text"></TextInput>
                </InputField>
                <InputField>
                <TextInput type="text"></TextInput>
                </InputField>
                <InputField>
                <TextInput type="text"></TextInput>
                </InputField>
                <InputField>
                <TextInput type="text"></TextInput>
                </InputField>
                <div>
                <SubmitButton type="submit" />
                </div>
            </InputForm> */}
            <MainForm></MainForm>
        </MainSection>
    )
}

export default Checkout
