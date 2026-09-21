import { Image, StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.headerTitle}>Açaí Prime</Text>
                <Text style={styles.headerSubtitle}>O sabor puro da Amazônia</Text>
            </View>

            <View style={styles.avatarPlaceholder}>
                <Image source={require('../assets/perfilImage.jpg')} style={styles.imageStyle} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        padding: 60,
        paddingHorizontal: 24,
        paddingTop: 60,
        paddingBottom: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerTitle: {
        fontSize: 24,
        fontWeight: "800",
        color: "#2C1b30",
    },

    headerSubtitle: {
        fontSize: 13,
        fontWeight: "400",
        color: "#644D6A",
    },

    avatarPlaceholder: {
        width: 54,
        height: 54
    },

    imageStyle: {
        borderRadius: 100,
        width: '100%',
        height: '100%',
        borderWidth: 2.5,
        borderColor: '#7B1FA2'
    }
});