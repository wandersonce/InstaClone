import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'

export default class New extends Component {
    static navigationOptions = {
        headerTitle: 'New Post'
    };

    state = {
        author: '',
        place: '',
        description: '',
        hashtags: '',
    };

    render() {
        return (
            <View styles={styles.container}>
                <TouchableOpacity style={styles.selectButton} onPress={() => { }}>
                    <Text style={styles.selectButtonText}>Select Image</Text>
                </TouchableOpacity>

                <TextInput
                    style={styles.input}
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Author's name"
                    placeholderTextColor="#999"
                    value={this.state.author}
                    onChangeText={author => this.setState({ author })}
                />

                <TextInput
                    style={styles.input}
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Place"
                    placeholderTextColor="#999"
                    value={this.state.place}
                    onChangeText={author => this.setState({ place })}
                />

                <TextInput
                    style={styles.input}
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Description"
                    placeholderTextColor="#999"
                    value={this.state.description}
                    onChangeText={author => this.setState({ description })}
                />

                <TextInput
                    style={styles.input}
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Hashtags"
                    placeholderTextColor="#999"
                    value={this.state.hashtags}
                    onChangeText={author => this.setState({ hashtags })}
                />

                <TouchableOpacity style={styles.shareButton} onPress={() => { }}>
                    <Text style={styles.shareButtonText}>Share post</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 30
    },
    selectButton: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#ccc',
        borderStyle: 'dashed',
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
    },
    shareButtonText: {
        fontSize: 16,
        color: '#666'
    },
    preview: {
        width: 100,
        height: 100,
        marginTop: 10,
        alignSelf: 'center',
        borderRadius: 4,
    },
    input: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 15,
        marginTop: 10,
        fontSize: 16,
    },
    shareButton: {
        backgroundColor: '#7159c1',
        borderRadius: 4,
        height: 42,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    shareButtonText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
    },

});