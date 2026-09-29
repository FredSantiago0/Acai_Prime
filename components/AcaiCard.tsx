import { Feather } from "@expo/vector-icons";
import { Text, View, StyleSheet, Image, ImageSourcePropType, TouchableOpacity } from "react-native";


type AcaiCardProps = {
    name: string;
    description: string;
    price: string;
    image: ImageSourcePropType;
}

export default function AcaiCard({ image , name, description, price }: AcaiCardProps) {
    return (
        <View style={styles.menuCard}>
            <Image source={image} style ={styles.imageCard}></Image>
            <Text style={styles.menuTitleCard}>{name}</Text>
            <Text style={styles.menuSubtitleCard}>{description}</Text>

            <View style={styles.inferiorCardMenu}>
                <Text style={styles.menuPriceCard}>{price}</Text>

                <TouchableOpacity style={styles.buttonPlusCard}>
                    <Feather name="plus" size={14} color={"white"}>
                    </Feather>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    menuCard: {
        width: 168,
        height: 228,
        padding: 12,
        backgroundColor: "#ffffffff",
        borderRadius: 16,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        elevation: 3,
        marginBottom: 16
    },

    imageCard: {
    borderRadius: 8,
    width: "100%",
    height: 100,
    },

    menuTitleCard: {
        fontSize: 18,
        fontWeight: '700',
        color: "#2C1B30",
        marginTop: 6
    },

    menuSubtitleCard: {
        fontSize: 11,
        fontWeight: '400',
        color: "#644D6A",
        lineHeight: 16,
        marginTop: 4
    },

    menuPriceCard: {
        fontSize: 20,
        fontWeight: '800',
        color: "#7B1FA2",
        marginTop: 12,
        justifyContent:"center"
    },

    inferiorCardMenu: {
        justifyContent: "space-between",
        flexDirection: "row",
        flexWrap: "wrap",
    },

    buttonPlusCard: {
        width:28,
        height:28,
        backgroundColor: "#7B1FA2",
        marginTop: 12,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    }
})
