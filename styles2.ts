import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
    },
    header: {
        padding: 20,
        flexDirection: 'row',
    },
    input: {
        color: '#e6e0e9',
        height: 20,
        width: 290,
    },

    searchContainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 10,
        alignItems: 'center',
        backgroundColor: '#1a1a1a',
        borderRadius: 8,
        paddingHorizontal: 10,
        height: 40,
    },

    buttonSkill: {
        backgroundColor: '#1a1a1a',
        borderRadius: 9,
        marginVertical: 2,
        marginTop: 7,
        marginLeft: 8,
        marginRight: 8,
        flexDirection: 'row',
        height: 105,
        alignItems: 'center',
    },

    image: {
        width: 35,
        height: 35,
        marginLeft: 25,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },

    imageSeta: {
        width: 20,
        height: 20,
        marginLeft: 110,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },

    imageSetaEsq: {
        width: 30,
        height: 30,
        marginTop: 24,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },

    placeholderImage: {
        width: 25,
        height: 25,
        marginRight: 10,
    },

    textContainer: {
        flexDirection: 'column',
        marginLeft: 24,
    },

    textSkill: {
        color: '#e6e0e9',
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },

    textSkill2: {
        color: '#c7c1cd',
        marginTop: 10,
        fontSize: 12,
        fontWeight: 'bold',
        fontStyle: 'italic',
        width: 160,
    },

    list: {
        flex: 1,
    },
});
