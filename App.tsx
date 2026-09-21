import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';

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
            <View>
              <Text style={styles.featureTitleCard}>Açaí Turbinado 500ml</Text>
            </View>

            <Text style={styles.featureSubtitleCard}>Açaí puro batido com morango, banana, leite condensado e granola crocante</Text>
              
              </View>
                <Text style={styles.featurePriceCard}>R$ 22,90</Text>
              <View>
          </View>

        </View>
        {/* Conteudo */}
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
    marginBottom: 16
  },

  featureTitleCard: {
    fontSize: 20,
    fontWeight: '800',
    color: "#2f2d2c"
  },

  featureSubtitleCard: {
    fontSize: 14,
    color: "#9b9b9b",
    marginTop: 4
  },

  featurePriceCard: {
    fontSize: 20,
    fontWeight: '800',
    color: "#c67c4e",
    marginTop: 12
  },
});
