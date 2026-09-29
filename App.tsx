import { Feather, Ionicons } from '@expo/vector-icons';
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import AcaiCard from './components/AcaiCard';
import { useState } from 'react';

export default function App() {
  
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handlerOrder = ()=>{
    if (name.trim() === ''){
      setMessage('Por favor, Informe seu nome!')
    }else{
      setMessage(`Olá, ${name}! Pedido iniciado com sucesso.`)
    }
  };
  
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

          <View>
            <Text style={styles.sectionTitle}>Nossoe Copos & Tigelas</Text>

            <View style={styles.menuSection}>
              <AcaiCard 
                name = 'Açaí Tradicional'
                description='Açaí cremoso com banana e granola tradicional'
                price='14,00'
                image= {require('./assets/Acai_tradicional.jpg')}
              />

              <AcaiCard 
                name = 'Copo Tropical'
                description='Camadas de açaí, morango, kiwi e leite em pó'
                price='18,50'
                image= {require('./assets/Copo_tropical.jpg')}
              />

              <AcaiCard 
                name = 'Vitamina de Açaí'
                description='Bebida energética batida com guaraná e aveia'
                price='12,00'
                image= {require('./assets/Vitamina_acai.jpg')}
              />

              <AcaiCard 
                name = 'Copo Tropical'
                description='Camadas de açaí, morango, kiwi e leite em pó'
                price='16,90'
                image= {require('./assets/Acai_zero.jpg')}
              />
            </View>

            <View style={styles.orderSection}>
              <Text style={styles.questionOrder}>Qual o seu nome?</Text>
              <View style={styles.descriptionImput}>
                <Feather name="user" size={24} color="black" style={styles.inputIcon}/>
                <TextInput
                    placeholder='Digite seu nome:'
                    style={styles.imputOrder}
                    value={name}
                    onChangeText = {setName}
                  >
                </TextInput>
              </View>

              <TouchableOpacity style={styles.buttonOrder} onPress={handlerOrder}>
                <Text style={styles.buttonTextOrder}>Fazer meu pedido</Text>
              </TouchableOpacity>

              {message !== '' && (
                <View style={styles.messageSectionOrder}>
                  <Feather name="check-circle" size={16} color="#2E7D32"/>
                  <Text style={styles.messageTextOrder}>{message}</Text>
                </View>
              )}
            </View>

          </View>
        </View>
        {/* Conteudo */}

        {/* Footer */}
        <Footer/>
        {/* Footer */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF9FC',
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
    marginTop: 10,
  },

  featurePriceCard: {
    fontSize: 25,
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
    color: "#fff",
    fontSize: 15,
    fontWeight: "600"
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 10
  },

    menuSection: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 32,
    rowGap: 14
  },

   orderSection: {
    backgroundColor: "#ffffffff",
    padding: 24,
    borderRadius: 24,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    elevation: 4,
    marginTop: 10
  },

  questionOrder: {
    fontSize: 19,
    fontWeight: "800",
    color: "#2C1B30",
    marginBottom: 16
  },

  inputIcon: {
    marginTop:15,
  },

  imputOrder: {
    width: "100%",
    height: 56,
    backgroundColor: "#F1EDF4",
    borderRadius: 16,
    paddingHorizontal: 20,
    fontSize: 16
  },

  buttonOrder: {
    width: "100%",
    backgroundColor: "#7B1FA2",
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 30,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#7B1FA2",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    elevation: 4,

  },

  buttonTextOrder: {
    fontSize: 18,
    fontWeight: "700",
    color: "#ffffffff"
  },

  descriptionImput: {
    flexDirection: "row",
    height: 56,
    backgroundColor: "#F1EDF4",
    borderRadius: 16,
    paddingHorizontal: 20,
    fontSize: 16
  },

  messageSectionOrder: {
    flexDirection: "row",
    borderRadius:12,
    height:45,
    paddingHorizontal:12,
    backgroundColor: "#E8F5E9",
    textAlign: "center",
    marginTop:20,
    alignItems:"center",
    gap:5
  },

  messageTextOrder: {
    fontSize: 15,
    fontWeight: "800",
    color: "#2E7D32",
    textAlign: "center",
  },
});
