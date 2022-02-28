import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Api1 from './Api1';
import Api2 from './Api2';
const Tab = createBottomTabNavigator();
const Home2 = (props) => {
    return (
        <View style={styles.layout}>
                <Tab.Navigator>
                    <Tab.Screen name="Api1" component={Api1} />
                    <Tab.Screen name="Api2" component={Api2} />
                </Tab.Navigator>
        </View>
    );
};
const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        padding: 8,
    },
    title: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
export default Home2;