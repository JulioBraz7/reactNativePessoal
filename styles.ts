import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
    },

    container2: {
        flex: 1,
    },

    horizontalContainer: {
        marginLeft: 25
    },

    title: {
        color: '#e6e0e9',
        fontSize: 32,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center',
    },

    textSkill: {
        marginTop: 7,
        marginLeft: 17,
        color: '#e6e0e9',
        fontSize: 19,
        fontWeight: 'bold',
        fontStyle: 'italic',
        flexDirection: "column",
        width: 220,

    },

    textSkill2: {
        paddingVertical: 55,
        marginLeft: 15,
        color: '#e6e0e9',
        fontSize: 12,
        fontWeight: 'bold',
        width: 210,
        marginBottom: 2,
    },

    textGift1: {
        marginLeft: 18,
        marginTop: 63, color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'left',
    },

    textGift2: {
        marginLeft: 15,
        marginTop: 30, color: '#e6e0e9',
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: 'italic',
    },


    buttonSkill: {
        backgroundColor: '#333333',
        borderRadius: 9,
        marginVertical: 4,
        marginLeft: 8,
        marginRight: 5,
        flexDirection: "row",
        height: 125,
    },

    buttonSkillInicio: {
        marginVertical: '0.8%',
        flexDirection: "row",
        height: '14%'
    },

    buttonSkillPesquisa: {
        marginVertical: '0.8%',
        marginLeft: '2%',
        marginRight: '2%',
        flexDirection: "row",
        height: '14%'
    },


    image0: {
        width: 180,
        height: 35,
        marginLeft: 5,
    },

    image: {
        width: 125,
        height: 125,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },

    image4: {
        marginLeft: 340,
        width: 50,
        height: 50,
    },

    image5: {
        width: 70,
        height: 70,
        alignContent: 'center',
    },

    image6: {
        width: 60,
        height: 60,
        alignContent: 'center',
    },

    gif: {
        width: '100%',
        height: 220,
        marginBottom: 55,
        flexDirection: 'column',
    },


    footer: {
        backgroundColor: '#121015',
        flexDirection: 'row',
        //  justifyContent: 'space-around',
        justifyContent: 'space-evenly',
        width: '100%',
        position: 'absolute',
        bottom: 1,
        paddingVertical: 10,
    },

    buttonSkillFooter: {
        alignItems: 'center',
        marginHorizontal: 10,
    },

    imageFooter: {
        width: 45,
        height: 45,
        marginTop: 30
    },

    imageFooter2: {
        width: 68,
        height: 68,
    },

});