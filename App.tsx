import { Feather, Ionicons } from '@expo/vector-icons';
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior='padding'
      keyboardVerticalOffset={30}>


      <ScrollView>
        {/* Header */}
        <Header />
        {/* Header */}

        {/* Conteudo */}
        <View style={styles.content}>
          <View style={styles.greatingSection}>
            <Text style={styles.greatingTitle}>Refresque seu dia!</Text>
            <Text style={styles.greatingSubtitle}>Escolha seu açaí favorito de hoje</Text>
          </View>

          <View style={styles.featureCard}>
            <Image source={require('./assets/greatingImage.jpg')} style={styles.featureImageStyle} />
            <View style={styles.featureSuperiorCard}>
              <Text style={styles.featureTitleCard}>Açaí Turbinado 500ml</Text>
              <View style={styles.featureMaisPedidoSection}>
                <Text style={styles.featureMaisPedidoText}>MAIS PEDIDO</Text>
              </View>
            </View>

            <Text style={styles.featureSubtitleCard}>Açaí puro batido com morango, banana, leite condensado e granola crocante</Text>

            <View style={styles.featureInferiorCard}>
              <Text style={styles.featurePriceCard}>R$ 22,90</Text>

              <TouchableOpacity style={styles.buttonCard}>
                <View>
                  <Feather name="shopping-bag" size={16} color={"white"}>
                    <Text style={styles.buttonTextCard}> Adiciona</Text>
                  </Feather>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Conteudo */}

        {/* Footer */}

        {/* Footer */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },

  content: {
    paddingHorizontal: 24,
  },

  greatingSection: {
    marginTop: 10,
    marginBottom: 24,
  },

  greatingTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#2C1B30'
  },

  greatingSubtitle: {
    fontSize: 15,
    fontWeight: '400',
    color: '#644D6A'
  },

  featureCard: {
    backgroundColor: "#ffffffff",
    borderRadius: 24,
    padding: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4,
    marginBottom: 32
  },

  featureImageStyle: {
    borderRadius: 16,
    width: "100%",
    height: 180,
    marginBottom: 18
  },

  featureSuperiorCard: {
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  featureMaisPedidoSection: {
    justifyContent: "center",
    backgroundColor: "#F3E5F5",
    borderRadius: 6,
    paddingHorizontal: 8,
  },

  featureMaisPedidoText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#7B1FA2",

  },

  featureTitleCard: {
    fontSize: 20,
    fontWeight: '800',
    color: "#2f2d2c"
  },

  featureSubtitleCard: {
    fontSize: 16,
    fontWeight: "400",
    color: "#644D6A",
    marginTop: 8
  },

  featureInferiorCard: {
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  featurePriceCard: {
    fontSize: 22,
    fontWeight: 900,
    color: "#7B1FA2",
    marginTop: 12
  },

  buttonCard: {
    marginTop: 8,
    backgroundColor: "#7B1FA2",
    borderRadius: 20,
    justifyContent: "center",
    paddingHorizontal: 24,
    
  },
  
  buttonTextCard: {
    color:"#fff",
    fontSize: 15,
    fontWeight:"600"
  }

});
