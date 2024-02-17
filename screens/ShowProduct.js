import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, TouchableOpacity, Alert } from "react-native";
import appFirebase from "../credentials";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, seetDoc } from "firebase/firestore"
import { useEffect, useState } from "react"

const db = getFirestore(appFirebase);

export default function ShowProduct(props) {
    const [product, setProduct] = useState({})

    const getOneProduct = async (id) => {
        try{
            const docRef = doc(db, "products", id);
            const docSnap = await getDoc(docRef);
            setProduct(docSnap.data());
        }catch{
            console.error(error)
        }
    }

    useEffect(() => {
        getOneProduct(props.route.params.productoId)
    }, [])

    const deleteProduct = async () => {
        await deleteDoc(doc(db, "productos", id));
        Alert.alert("exito", "producto eliminado con éxito");
        props.navigation.navigate("List");
    }

    return (
        <View>
            <Text style={styles.titulo}>Detalle del producto</Text>
            <Text style={styles.sub}>Nombre: {product.nombre}</Text>
            <Text style={styles.sub}>Color: {product.color}</Text>
            <Text style={styles.sub}>Precio: {product.stock}</Text>

            <TouchableOpacity style={styles.BotonLista} onPress={() => deleteProduct(props.route.params.productoId)}>
                <Text style={styles.TextoNombre}>Eliminar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    titulo: {
        textAlign: "center",
        marginTop: 10,
        marginBottom: 10,
        fontSize: 10,
    },
    sub: {
        fontSize: 16,
    },
    TextoNombre: {
        fontSize: 16,
        textAlign: "center",
        color: "white",
    },
    BotonLista: {
        backgroundColor: "red",
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
        marginBottom: 3,
        padding: 5,
        marginTop: 5
    }
})