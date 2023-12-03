import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'



const FlatListScreen = () => {

    let data = [
        {
            id: 1,
            title: 'Black',
            description: "Black coffee is as simple as it gets with greate"
        },
        {
            id: 2,
            title: 'Latte',
            description: "As the most popular coffee drink out there"
        },
        {
            id: 3,
            title: 'Black',
            description: "Black coffee is as simple as it gets with greate"
        },
        {
            id: 4,
            title: 'Latte',
            description: "As the most popular coffee drink out there"
        },
        {
            id: 5,
            title: 'Black',
            description: "Black coffee is as simple as it gets with greate"
        },
        {
            id: 6,
            title: 'Latte',
            description: "As the most popular coffee drink out there"
        },
        {
            id: 7,
            title: 'Black',
            description: "Black coffee is as simple as it gets with greate"
        },
        {
            id: 8,
            title: 'Latte',
            description: "As the most popular coffee drink out there"
        },
        {
            id: 9,
            title: 'Black',
            description: "Black coffee is as simple as it gets with greate"
        },
        {
            id: 10,
            title: 'Latte',
            description: "As the most popular coffee drink out there"
        },
        {
            id: 11,
            title: 'Black',
            description: "Black coffee is as simple as it gets with greate"
        },
        {
            id: 12,
            title: 'Latte',
            description: "As the most popular coffee drink out there"
        },
        {
            id: 13,
            title: 'Black',
            description: "Black coffee is as simple as it gets with greate"
        },
        {
            id: 14,
            title: 'Latte',
            description: "As the most popular coffee drink out there"
        },
        {
            id: 15,
            title: 'Black',
            description: "Black coffee is as simple as it gets with greate"
        },
        {
            id: 16,
            title: 'Latte',
            description: "As the most popular coffee drink out there"
        },
        {
            id: 17,
            title: 'Black',
            description: "Black coffee is as simple as it gets with greate"
        },
        {
            id: 18,
            title: 'Latte',
            description: "As the most popular coffee drink out there"
        },
        {
            id: 19,
            title: 'Black',
            description: "Black coffee is as simple as it gets with greate"
        },
        {
            id: 20,
            title: 'Latte',
            description: "As the most popular coffee drink out there"
        },
    ]


    const Item = ({ title, description }) => (
        <View>
            <Text style={styles.title}>{title} </Text>
            <Text>{description} </Text>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item title={item.title} description={item.description} />
    );


    return (
        <View style={styles.container}>
            {data && (
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            )}
        </View>
    )
}

export default FlatListScreen

const styles = StyleSheet.create({})