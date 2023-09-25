/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import colors from '../utils/colors';

export default function Form() {

    const [selectedValue, setSelectedValue] = useState('');

    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput placeholder="Cantidad a pedir" keyboardType="numeric" style={styles.input} />
                <TextInput placeholder="Interes %" keyboardType="numeric" style={[styles.input, styles.inputPorcentage]} />
            </View>
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Opción 1" value="opcion1" />
                <Picker.Item label="Opción 2" value="opcion2" />
                <Picker.Item label="Opción 3" value="opcion3" />
            </Picker>

        </View>
    );
}

const styles = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        bottom: -90,
        width: '85%',
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: 'center',
    },
    viewInputs: {
        flexDirection: 'row',
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: '60%',
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: '#000',
        paddingHorizontal: 20,
    },
    inputPorcentage: {
        width: '40%',
        marginLeft: 5,
    },
});
