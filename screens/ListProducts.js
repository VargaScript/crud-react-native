import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";

export default function ListProducts(props) {

    const [lista, setLista] = useState([]);

    useEffect(() => {
        const getLista = async () => {
            try{
                const querySnapshot = await getDocs(collection(db, "productos"))
                const docs = []
                querySnapshot.forEach((doc) => {
                    const {nombre, color, stock} = doc.data()
                    docs.push({
                        id: doc.id,
                        nombre,
                        color,
                        stock
                    })
                })
                setLista(docs)
            }catch(error) {
                console.log(error)
            }
        }
        getLista()
    }, [lista])

    return (
        <ScrollView>
            <TouchableOpacity style={styles.Boton} onPress={() => props.navigation.navigate("Create")}>
            <Text style={styles.TextoBoton}>Agregar Productos</Text>
            </TouchableOpacity>
        <View>
            <Text style={styles.textoTitulo}>Lista de los productos</Text>
        </View>

        <View>
            {
                lista.map((list) => (
                    <TouchableOpacity key={list.id} style={styles.BotonLista} onPress={() => props.navigation.navigate("Show", {productoId:list.id})}>
                        <Text style={styles.TextNombre}>{list.nombre}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Boton: {
        backgroundColor: "cyan",
        height: 35,
        borderColor: "black",
        borderWidth: 1,
    },
    TextoBoton: {
        fontSize: 18,
        textAlign: "center",
    },
    textoTitulo: {
        textAlign: "center", 
        marginTop: 20,
        marginBottom: 10,
        fontSize: 18
    },
    TextNombre: {
        fontSize: 16
    },
    BotonLista: {
        backgroundColor: "red",
        height: 35,
        borderColor: "#DDDDDD",
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
        marginBottom: 3,
        padding: 5
    }
});