import React, {useState} from 'react';
import { View, StyleSheet, TextInput, Button, Modal, Alert } from "react-native"
import { THEME } from '../theme';


export const EditModal = (props) => {

    const [title, setTitle] = useState(props.value);

    const saveHandler = () => {
        if (title.trim().length < 3) {
            Alert.alert('Ошибка', `Минимальная длина - 3 символа.
            Сейчас ${title.trim().length} символ(а)`)
        } else {
            props.onSave(title)
        }
    }
    return (
        <Modal visible={props.visible} animationType={'slide'}>
            <View style={styles.wrap}>
                <TextInput style={styles.input} placeholder={'пиши сюда'}
                value={title}
                onChangeText={setTitle}
                autoFocus
                />
                <View style={styles.buttons}>
                <Button title={'Отменить'} color={THEME.DANGER_COLOR} 
                onPress={props.onCancel}/>
                <Button title={'Сохранить'} onPress={saveHandler}/>
                </View>
               
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth:2,
        width: "80%"
    },
    buttons: {
        width: "100%",
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})