import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AllItems from './AllItems';
import LowStock from './LowStock';
import Create from './Create';

// dummy data
const dummyData = [
    {
        id: 1,
        itemName: "Wheat",
        quantity: "10kg",
        stock: 20,
    },
    {
        id: 2,
        itemName: "Basmati Rice",
        quantity: "24kg",
        stock: 22,
    },
    {
        id: 3,
        itemName: "Corn",
        quantity: "18kg",
        stock: 31,
    },
    {
        id: 4,
        itemName: "Rice",
        quantity: "22kg",
        stock: 15,
    },
    {
        id: 5,
        itemName: "Pulse",
        quantity: "30kg",
        stock: 14,
    },
    {
        id: 6,
        itemName: "Baby Corn",
        quantity: "21kg",
        stock: 25,
    },
    {
        id: 7,
        itemName: "Potatoes",
        quantity: "40kg",
        stock: 41,
    },
    {
        id: 8,
        itemName: "Tomatos",
        quantity: "35kg",
        stock: 32,
    },
]

const Home = () => {
    const [view, setView] = useState(0);
    return (
        <SafeAreaView style={{
            height: "100%",
            width: "100%",
        }}>
            <View style={styles.main_container}>
                <Text style={styles.dashboard}>Dashboard</Text>
                <View style={styles.button_container}>
                    {/* all items button */}
                    <Pressable style={[styles.button, view === 0 ? { backgroundColor: "skyblue" } : null]} onPress={() => setView(0)}>
                        <Text style={styles.btnText}>All Items</Text>
                    </Pressable>
                    {/* low stock button */}
                    <Pressable style={[styles.button, view === 1 ? { backgroundColor: "skyblue" } : null]} onPress={() => setView(1)}>
                        <Text style={styles.btnText}>Low Stocks</Text>
                    </Pressable>
                    {/* create button */}
                    <Pressable style={[styles.button, view === 2 ? { backgroundColor: "skyblue" } : null]} onPress={() => setView(2)}>
                        <Text style={styles.btnText}>Create</Text>
                    </Pressable>
                </View>

                <View style={{ marginTop: -50, padding: 5, }}>
                    {view === 0 && <AllItems data={dummyData} />}
                    {view === 1 && <LowStock />}
                    {view === 2 && <Create />}
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home

// styles section
const styles = StyleSheet.create({
    main_container: {
        display: "flex",
        // alignItems:"center",
        // justifyContent:"center",
        padding: "4%",
        backgroundColor: "white",
        height: "100%",
        width: "100%",
    },
    dashboard: {
        color: "black",
        fontSize: 25,
        marginBottom: 15,
    },
    button_container: {
        display: "flex",
        flexDirection: "row",
        gap: "5%",
    },
    button: {
        borderWidth: 1.5,
        borderColor: "yellogreen",
        borderRadius: 10,
        borderColor: "purple",
        padding: 7,
        height: "30%",
        width: "30%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "-2px 2px 2px 0px grey",
    },
    btnText: {
        color: "purple",
        fontSize: 16,
        fontWeight: 600,
    }
})