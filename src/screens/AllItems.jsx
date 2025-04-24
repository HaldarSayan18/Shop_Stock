import { FlatList, StyleSheet, Text, View } from 'react-native'
// import React from 'react'

const AllItems = ({ data }) => {
  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>ITEMS</Text>
        <Text style={styles.headingText}>QUANTITY</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.itemsContainer, {backgroundColor: item.stock < 25 ? "#c94c4c" : "yellowgreen"}]}>
            <Text style={styles.itemText}>{item.itemName}</Text>
            <Text style={styles.itemText}>{item.quantity}</Text>
          </View>
        )}
      />
    </View>
  )
}

export default AllItems

const styles = StyleSheet.create({
  headingContainer: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 5,
    justifyContent: "space-between",
  },
  headingText: {
    fontWeight: 700,
    fontSize: 17,
    textDecorationLine: "underline"
  },
  itemsContainer: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 5,
    justifyContent: "space-between",
    gap:10,
  },
  itemText: {
    fontWeight: 400,
    fontSize: 15,
  },
})