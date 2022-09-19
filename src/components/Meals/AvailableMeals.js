import { useContext } from 'react';
import {
  Grid,
} from "@material-ui/core";
import MealItem from "./MealItem/MealItem";
import './AvailableMeals.module.css'

const DUMMY_MEALS = [
  {
    id: 'm1',
    image: "https://t4.ftcdn.net/jpg/02/99/29/05/240_F_299290543_D7Hg1njhj3SZc2JiYp2hsT3HWk9WIFrL.jpg",
    name: 'Banana',
    description: 'A banana é uma fruta rica em fibras, potássio, vitaminas C e A. A banana não possui sementes, ela é um fruto sem fecundação prévia. ',
    price: 4.99,
  },
  {
    id: 'm2',
    image: "https://as1.ftcdn.net/v2/jpg/03/10/32/02/1000_F_310320273_I9rR1l7918MJoZ0GRHGIBgZl9F9ShEXq.jpg",
    name: 'Maça',
    description: 'As maçãs contêm poderosos nutrientes que estimulam o sistema imunológico. Possuem fibras que ajudam a transportar resíduos para fora do corpo. ',
    price: 3.55,
  },
  {
    id: 'm3',
    image: "https://t3.ftcdn.net/jpg/02/94/26/88/240_F_294268809_vxDdOHYlbdO48oOgSDXyZUcQXpJekf2W.jpg",
    name: 'Kiwi',
    description: 'A fruta agridoce e de fisionomia diferenciada possui grande valor nutricional. O kiwi é rico em nutrientes como vitamina C e K, potássio, folato e fibras, além de conter poucas calorias. ',
    price: 9.99,
  },
  {
    id: 'm4',
    image: "https://t3.ftcdn.net/jpg/04/08/96/18/240_F_408961807_H82tecZUwnRODyFH0Gj1mwMXNWNA5OZC.jpg",
    name: 'Limão',
    description: 'O limão é riquíssimo em vitamina C, importante para combater infecções e substâncias prejudiciais no organismo. A fruta ainda contém quantidades consideráveis de vitaminas A e do complexo B.',
    price: 3.99,
  },
  {
    id: 'm5',
    image: "https://t4.ftcdn.net/jpg/02/32/82/57/240_F_232825710_Hy7SPjzIkwmLcKS6PyHJPnPOBMUms7o0.jpg",
    name: 'Tomate',
    description: 'O tomate é uma boa fonte de vitaminas A, C e do complexo B. O mesmo também possui quantidades significativas de sais minerais, como o Fósforo, Ferro, Potássio, Cálcio e Magnésio.',
    price: 5.99,
  },
  {
    id: 'm6',
    image: "https://t3.ftcdn.net/jpg/01/34/24/30/240_F_134243085_MRNG0XFO5kS23RX9emMveCm1L64BX5Fj.jpg",
    name: 'Brócolis',
    description: 'Tomate Cereja: é um tomate pequeno e adocicado. Ele é refrescante e aguado, sendo ideal para saladas, aperitivos, massas e risotos, mas não funciona bem em molhos - além de dar trabalho devido ao seu tamanho.',
    price: 7.99,
  },
  {
    id: 'm7',
    image: "https://t3.ftcdn.net/jpg/00/38/06/52/240_F_38065282_LrzFybEgwAOhstzVQoY0SDaK5m8fvHy7.jpg",
    name: 'Couve',
    description: 'Muito presente em saladas ou receitas caseiras, a couve é um vegetal e faz parte da família Brassicaceae, a mesma do repolho, brócolis e couve-flor, sendo uma fonte de vitaminas A, complexo B, C, K e ácido fólico.',
    price: 2.99,
  },
  {
    id: 'm8',
    image: "https://t4.ftcdn.net/jpg/00/53/09/51/240_F_53095132_RYsAcP3cQ72jM84ibY2FGCCAe9K14CiM.jpg",
    name: 'Cenoura',
    description: 'A cenoura é uma raiz rica em vitamina A, além de conter sais minerais como fósforo, cloro, potássio, cálcio, sódio; carboidratos, vitaminas do complexo B e betacaroteno.',
    price: 3.99,
  },
  {
    id: 'm9',
    image: "https://t4.ftcdn.net/jpg/00/66/50/03/240_F_66500337_eVYNKrZDjtdcKZtF4TTEZApb5qDTP0It.jpg",
    name: 'Salsa',
    description: 'Por ser fonte de vitaminas do complexo B, a salsinha também auxilia na saúde dos sistemas nervoso, cardiovascular e digestivo (principalmente por conta da vitamina B2, também conhecida como riboflavina)..',
    price: 2.99,
  },
  {
    id: 'm10',
    image: "https://t3.ftcdn.net/jpg/00/61/75/32/240_F_61753262_ZzoQ0kFoI1jmLwpKnzzrsBk9dEnrqvgG.jpg",
    name: 'Tangerina',
    description: 'Cada 100g de tangerina possui os seguintes valores nutricionais: 37 calorias, 1,9g de fibra, 185mg de potássio, 36 mg de cálcio, 11mg de Magnésio, 21 mcg de Ácido Fólico, 106mcg de Provitamina A e 35 mg de Vitamina C.',
    price: 7.55,
  },
  {
    id: 'm11',
    image: "https://t4.ftcdn.net/jpg/00/61/19/53/240_F_61195341_rR4lMptEspj16GvOdmy0MaMznSRveh2M.jpg",
    name: 'Laranja',
    description: 'O consumo da laranja diminui os níveis de colesterol ruim no organismo. Os flavonoides presentes na fruta limitam a absorção do colesterol no intestino. A laranja também é rica em vitamina C.',
    price: 2.99,
  },
  {
    id: 'm12',
    image: "https://t3.ftcdn.net/jpg/01/23/99/78/240_F_123997808_K7QqTeDiXKNtRYQnELre0ItoskEOusq5.jpg",
    name: 'Melão',
    description: 'O melão tem muitos nutrientes incluindo cálcio, vitamina C, vitamina A e as vitaminas do Complexo B, que dão muita energia. Uma atenção para o potássio que é importante para diminuir a pressão arterial.',
    price: 7.99,
  },
  {
    id: 'm13',
    image: "https://t4.ftcdn.net/jpg/02/27/04/15/240_F_227041521_R30fm1zPGoX3hQeGkGgFAKykT5irrv79.jpg",
    name: 'Melancia',
    description: 'Ela é rica em água, fonte de carboidratos, possui vitaminas importantes para o organismo como C e A, além de sais minerais como cálcio, magnésio, fósforo, sódio e potássio.',
    price: 18.99,
  },
  {
    id: 'm14',
    image: "https://t4.ftcdn.net/jpg/00/87/98/57/240_F_87985733_x0NZX9tDBv84A9oRo8Lg0xSSzN9tlhdY.jpg",
    name: 'Manga',
    description: 'A manga é uma fruta que possui muitos nutrientes como vitaminas A e C, magnésio, potássio, polifenóis como mangiferina, canferol e ácido benzoico, fibras.',
    price: 9.99,
  },
  {
    id: 'm15',
    image: "https://t3.ftcdn.net/jpg/03/00/32/48/240_F_300324885_jlzcRgMop9z2CSfftx6CzCy7Dk29hxlH.jpg",
    name: 'Tomate Cereja',
    description: 'Ajuda na saúde do coração: Assim como o tomate comum, ele é fonte de licopeno – um composto que ajuda em problemas como inflamação e coagulação do sangue, reduzindo o risco de derrames.',
    price: 6.99,
  },
  {
    id: 'm16',
    image: "https://t3.ftcdn.net/jpg/03/03/27/52/240_F_303275250_oWcjktrqd0CavVUtmcTrrKpqS4DXodoS.jpg",
    name: 'Aspargo',
    description: 'Por ser rico em cálcio, o aspargo fortalece ossos e dentes, evitando problemas relacionados ao enfraquecimento dessas duas partes do corpo, como é o caso da osteoporose.',
    price: 12.99,
  },
  {
    id: 'm17',
    image: "https://t4.ftcdn.net/jpg/01/33/20/99/240_F_133209976_FMW9u2TYDTmp50SuTCTqzg6Bu1vzVKTa.jpg",
    name: 'Cogumelo',
    description: 'Os cogumelos são ricos em vitaminas do complexo B, principalmente B2, B3 e B5, vitamina C, minerais, como selênio, cobre e potássio, além de conter Beta-glucanas, que são fibras solúveis.',
    price: 18.99,
  },
  {
    id: 'm18',
    image: "https://t3.ftcdn.net/jpg/01/56/26/38/240_F_156263893_NjL8agp6JEoPIHijmBpL1TJgdarmQeve.jpg",
    name: 'Uva',
    description: 'A fruta é rica em vitamina A, B, C e K, além de minerais como cálcio, fósforo, ferro, potássio e zinco. Sendo um alimento com uma grande quantidade de fibras que possuem um alto teor nutritivo e isento de colesterol.',
    price: 8.12,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map(meal=>{
    return <MealItem key={meal.id} id={meal.id} price={meal.price} name={meal.name} description={meal.description} image={meal.image}/>
  });

  return (

      <Grid
          container
          spacing={4}
          direction="row"
          display="flex"
          justifyContent="center"
          >
          {mealList}
      </Grid>
  )
}

export default AvailableMeals;