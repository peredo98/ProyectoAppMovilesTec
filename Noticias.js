import React, {Component} from 'react';
import {Share, ActivityIndicator} from 'react-native';
import {
  Container,
  Card,
  CardItem,
  Header,
  Content,
  View,
  Footer,
  FooterTab,
  Badge,
  Item,
  Input,
  Icon,
  Text,
  ScrollView,
  Button,
  Left,
  Body,
  Right,
  Title,
  Thumbnail
} from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
export default class NewHome extends Component {
    constructor(props) {
        super (props);

        global.getProducts = [];

        this.state = {
            gatData : [],
            dataGlobal : [],
            dataBackup : []
        };
    }

    componentDidMount(){
        /*
        fetch('https://366dd267.ngrok.io/noticias',{
            method: 'get'
        })
        .then(response => response.json())
        .then(responseJson => {
            this.setState({getProducts: responseJson})
        })
        .catch(error => console.log("no hay conexión"));*/
        this.props.navigation.setParams({funSearchText: this._storeData})
    }
     
    funSearchText = (event) => {
        searchText = event;
        data = noticias;
        searchText = searchText.trim().toLowerCase();

        data = data.filter( item =>{
            return noticias.titulo.toLowerCase.match(searchText);
        })
        this.setState({
            dataGlobal:data
        });
    }
    
    
    render(){
        return(
            <View>
                <FlatList
                    data={noticias}
                    renderItem={({item}) => (
                        <Card>
                            <CardItem bordered>
                                <Body>
                                    <Text style={{fontWeight:"bold"}}>{item.titulo}</Text>
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Thumbnail
                                    style={{height: 100, width: 100, flex: 1}}
                                    source={{uri: item.image}}
                                    />
                                    <Text>{item.descrip}</Text>
                                </Body>
                            </CardItem>
                            <CardItem footer bordered>
                                <Text>{item.url_ext}</Text>
                             </CardItem>
                        </Card>
                    )}
                />    
            </View>
            
            );
            
        }
        
    };
    /* const names = [
        campos = [
            {name:"ana"}
        ]
    ] */
    
    const noticias = [
    {
        titulo:"Coronavirus México hoy 7 de junio; últimas noticias, contagios y muertes",
        image:'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/05/12/15892864702805.png',
        descrip:'Primer fin de semana en el mes de junio y de la Nueva Normalidad en completa marcha y México llegó a los más de 113 mil casos positivos por coronavirus, así como la cifra de 13,511 defunciones a causa de esta enfermedad. Se mantendrá el semáforo rojo; es decir, alerta máxima por el incremento de contagios en el país.La Ciudad de México, Estado de México y Baja California, cerraron el día con menos del 40% de capacidad hospitalaria; es decir, con disponibilidad de camas y camas con ventiladores para pacientes con Covid-19, cifra alarmante de cara al resto del plan de Nueva Normalidad.',
        url_ext:'https://www.marca.com/claro-mx/trending/coronavirus/2020/06/07/5edc53afca4741ff5b8b4621.html'
    },
    {
        titulo:"Brasil cambia metodología de contabilización de casos de COVID-19",
        image:'https://cdn.noticiasdequeretaro.com.mx/wp-content/uploads/2020/06/07133018/1-1-9.png',
        descrip:'Brasilia.- El Ministerio de Salud de Brasil informó este sábado sobre 904 nuevas muertes por coronavirus en las últimas 24 horas, en tanto que el número de personas infectadas aumentó de 645 mil 771 a 672 mil 846. Esto, después de que se anunciaran modificaciones en la presentación de cifras. Según informó el medio Folha de Sao Paulo, el número de casos de COVID-19 en el país podría ser mayor, ya que el gobierno de Jair Bolsonaro no tiene una metodología clara para la aplicación de pruebas entre la población brasileña. Esto limita las estimaciones del sector salud. Brasil ya presenta más muertes por COVID-19 que Italia, tras haber registrado un total de 35 mil 930. En tanto que se ha convertido en el segundo país más afectado a nivel mundial por la pandemia.',
        url_ext:'https://noticiasdequeretaro.com.mx/2020/06/07/brasil-cambia-metodologia-de-contabilizacion-de-casos-de-covid-19/' 
    },
    {
        titulo:"Observatorio independiente de nicaragua reporta más de 5.000 casos sospechosos y más de 1.000 muertes asociadas al covid-19",
        image:'https://www.elsoldemexico.com.mx/mundo/xrebtk-vacunas-covid.jpg/alternates/LANDSCAPE_400/vacunas%20covid.jpg',
        descrip:'El Observatorio Ciudadano covid-19 de Nicaragua registra un acumulado de 5.027 de casos sospechosos de la enfermedad en los 17 departamentos, Caribe norte y sur del país, de acuerdo con su último informe. El reporte incluye los casos reportados por el ministerio de Salud y contiene datos registrados al 3 de junio. Por su parte, el ministerio reportó 1.118 casos confirmados y 46 fallecidos por covid-19 en su último informe, presentado el 2 de Junio. Sin embargo, reconoció que otras muertes vinculadas a comorbilidades como diabetes, hipertensión, síndrome de inmunodeficiencia, tromboembolismo pulmonar o neumonía en pacientes sospechosos están bajo observación.',
        url_ext:'https://cnnespanol.cnn.com/2020/06/07/alerta-nicaragua-observatorio-independiente-reporta-mas-de-5-000-casos-sospechosos-y-mas-de-1-000-muertes-asociadas-al-covid-19/'
    },
    {
        titulo:"Tapabocas, por sí solos, no protegen contra COVID-19: OMS",
        image:'https://craftlog.com/m/i/3844705=s1280=h960',
        descrip:'El titular de la OMS, Tedros Adhanom Ghebreyesus, explicó que los tapabocas por sí solos no protegen contra el COVID-19 y, que según algunos análisis estos crean un falso sentimiento de protección haciendo que las personas descuiden otros aspectos como el distanciamiento social y el lavado de manos, es por ello que incitó a que los ciudadanos que se encuentren en focos de propagación los utilicen, sin dejar atrás las otras recomendaciones. La OMS ha aconsejado el uso de tapabocas en lugares de alta propagación y donde el distanciamiento social no es posible, además de expresar que aquellos que son de tela funcionan mejor y que deben tener al menos tres capas de diferentes materiales.',
        url_ext:'https://noticiasdequeretaro.com.mx/2020/06/07/tapabocas-por-si-solos-no-protegen-contra-covid-19-oms/'
    },
]