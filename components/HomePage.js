    import React from 'react';
    import { StyleSheet, Text, TextInput, View, Image, ScrollView, TouchableOpacity } from 'react-native';

    const HomePage = () => {
    return (
        <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
            <Text style={styles.greeting}>Hello, <Text style={styles.username}>Cyfred!</Text></Text>
            <Text style={styles.subtitle}>Stay Updated, Save More!</Text>
            <TouchableOpacity>
            <Image source={require('./Images/test.jpg')}  style={styles.profileIcon} />
            </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchWrapper}>
            <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#aaa"
            />
        </View>

        {/* Category Section */}
        <Text style={styles.sectionTitle}>Category</Text>
        <View style={styles.categories}>
        {[
            { name: 'Meats', image: require('./Images/meat.jpg') },
            { name: 'Seafoods', image: require('./Images/fish.jpg') },
            { name: 'Poultry', image: require('./Images/chicken.jpg') },
            { name: 'Fruits', image: require('./Images/fruits.jpg') },
            { name: 'Vegetables', image: require('./Images/vegetables.jpg') }
        ].map((category) => (
            <View key={category.name} style={styles.category}>
            <Image source={category.image} style={styles.categoryIcon} />
            <Text style={styles.categoryText}>{category.name}</Text>
            </View>
        ))}
        </View>

        {/* Banner Section */}
        <View style={styles.banner}>
        <View style={styles.bannerTextWrapper}>
            <Text style={styles.bannerTitle}>Shop Wise on Market Wise!</Text>
            <Text style={styles.bannerSubtitle}>Find the best prices on local market goods.</Text>
        </View>
        <Image source={require('./Images/plate.jpg')} style={styles.bannerImage} />
        </View>

        {/* Local Markets Section */}
        <Text style={styles.sectionTitle}>Checkout these <Text style={styles.highlightText}>Local Markets!</Text></Text>
        <View style={styles.marketList}>
        {[
            { name: 'Market City', image: require('./Images/agora.jpg') },
            { name: 'Cogon Public Market', image: require('./Images/cogon.jpg') },
            { name: 'Carmen Public Market', image: require('./Images/carmen.jpg') }
        ].map((market) => (
            <Image key={market.name} source={market.image} style={styles.marketImage} />
        ))}
        </View>
        </ScrollView>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    greeting: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    username: {
        color: '#2f7f4e',
    },
    subtitle: {
        fontSize: 14,
        color: '#555',
    },
    profileIcon: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    searchWrapper: {
        marginBottom: 20,
    },
    searchInput: {
        width: '100%',
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#f4f4f4',
        paddingHorizontal: 15,
        fontSize: 14,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2f7f4e',
        marginBottom: 10,
    },
    categories: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    category: {
        alignItems: 'center',
        flex: 1,
    },
    categoryIcon: {
        width: 50,
        height: 50,
        marginBottom: 5,
    },
    categoryText: {
        fontSize: 12,
        color: '#555',
    },
    banner: {
        flexDirection: 'row',  // Make sure the text and image are side by side
        alignItems: 'center',  // Vertically align the items
        backgroundColor: '#2f7f4e',
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
    },

    bannerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'left',
        marginBottom: 5,
      },
      bannerSubtitle: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'left',
        marginBottom: 10,
      },
      bannerImage: {
        width: 80,  // Set the width for the image
        height: 80,  // Set the height for the image
        borderRadius: 40,  // Make the image round
        resizeMode: 'cover',  // Ensure the image covers the area
        marginLeft: 10,
      },

    highlightText: {
        color: '#2f7f4e',
    },
    marketList: {
        flexDirection: 'column',
        gap: 15,
    },
    marketImage: {
        width: '100%',
        height: 100,
        borderRadius: 15,
        marginBottom: 15,
    },
    });

    export default HomePage;
