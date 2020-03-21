
import React, {useEffect, useState, useCallback} from 'react';
import { ScrollView, StyleSheet, Dimensions, TouchableOpacity, AsyncStorage, ImageBackground, View } from 'react-native';
import { Card, Block, NavBar, Icon, theme, Text } from 'galio-framework';
const { width, height } = Dimensions.get('screen');
import { useFocusEffect } from '@react-navigation/native';
import ClearFaves from './ClearFaves';


const getFavouritesAsync = async () => {
  const item = await AsyncStorage.getItem('favourites')
  const obj = JSON.parse(item);
  console.log(obj);
  return obj;
}

const pushFavouritesRecipes = (state) => {
  const keys = Object.keys(state)
  let results = [];
  for ( let item of keys.filter((x)=> x!== "recipeId")) {
    results.push(state[item]);
  }
  return results;
}

// const recipes = [
//   {
//     "id": 7,
//     "image": "https://spoonacular.com/recipeImages/593906-312x231.jpg",
//     "imageType": "jpg",
//     "ingredients": [
//       "1 tbsp butter",
//       "2 tbsp grated cheese (I used romano)",
//       "1-2 tbsp extra virgin olive oil",
//       "5-6 cloves garlic",
//       "6-8 ounces pasta (I used linguine)",
//     ],
//     "instructions":[
//        {
//         "number": 1,
//         "step": "Preheat the oven to 200 degrees F.",
//       },
//        {
//         "number": 2,
//         "step": "Whisk together the flour, pecans, granulated sugar, light brown sugar, baking powder, baking soda, and salt in a medium bowl.",
//       },
//        {
//         "number": 3,
//         "step": "Whisk together the eggs, buttermilk, butter and vanilla extract and vanilla bean in a small bowl.",
//       },
//     ],
//     "readyInMinutes": 10,
//     "summary": "The recipe Chicken Caesar Salad with Grilled Romaine is ready <b>in roughly 10 minutes</b> and is definitely a spectacular <b>gluten free and primal</b> option for lovers of American food. One serving contains <b>559 calories</b>, <b>18g of protein</b>, and <b>48g of fat</b>. For <b>$2.63 per serving</b>, this recipe <b>covers 33%</b> of your daily requirements of vitamins and minerals. It will be a hit at your <b>The Fourth Of July</b> event. If you have olive oil, sea salt, garlic, and a few other ingredients on hand, you can make it. To use up the olive oil you could follow this main course with the <a href=\"https://spoonacular.com/recipes/sauteed-banana-granola-and-yogurt-parfait-624619\">Sauteed Banana, Granolan and Yogurt Parfait</a> as a dessert. Plenty of people made this recipe, and 152 would say it hit the spot. It works well as a main course.",
//     "title": "tester3",
//   },
//   {
//     "id": 8,
//     "image": "https://spoonacular.com/recipeImages/593906-312x231.jpg",
//     "imageType": "jpg",
//     "ingredients": [
//       "1 tbsp butter",
//       "2 tbsp grated cheese (I used romano)",
//       "1-2 tbsp extra virgin olive oil",
//       "5-6 cloves garlic",
//       "6-8 ounces pasta (I used linguine)",
//     ],
//     "instructions":[
//        {
//         "number": 1,
//         "step": "Preheat the oven to 200 degrees F.",
//       },
//        {
//         "number": 2,
//         "step": "Whisk together the flour, pecans, granulated sugar, light brown sugar, baking powder, baking soda, and salt in a medium bowl.",
//       },
//        {
//         "number": 3,
//         "step": "Whisk together the eggs, buttermilk, butter and vanilla extract and vanilla bean in a small bowl.",
//       },
//     ],
//     "readyInMinutes": 10,
//     "summary": "The recipe Chicken Caesar Salad with Grilled Romaine is ready <b>in roughly 10 minutes</b> and is definitely a spectacular <b>gluten free and primal</b> option for lovers of American food. One serving contains <b>559 calories</b>, <b>18g of protein</b>, and <b>48g of fat</b>. For <b>$2.63 per serving</b>, this recipe <b>covers 33%</b> of your daily requirements of vitamins and minerals. It will be a hit at your <b>The Fourth Of July</b> event. If you have olive oil, sea salt, garlic, and a few other ingredients on hand, you can make it. To use up the olive oil you could follow this main course with the <a href=\"https://spoonacular.com/recipes/sauteed-banana-granola-and-yogurt-parfait-624619\">Sauteed Banana, Granolan and Yogurt Parfait</a> as a dessert. Plenty of people made this recipe, and 152 would say it hit the spot. It works well as a main course.",
//     "title": "tester4",
//   }
// ]


export default function Favourites (props){
const [state, setState] = useState("")
const recipes = pushFavouritesRecipes(state);
const fromFavourite = true;
const [display, setDisplay] = useState('none')

// const [faveState, setFaveState] = useState({
//   favourited: true, 
//   text: "Favourited",
//   color: "grey"
// })

// const toggleFave = () => {
//   const {favourited} = faveState;

//   if (favourited) {
//     setFaveState({
//       favourited: false,
//       text: "Favourite",
//       color: "lighsalmon"
//     })
//   } else {
//     setFaveState({
//       favourited: true, 
//       text: "Favourited",
//       color: "grey"
//     })
//   }
// }

// const [saveState, setSaveState] = useState({
//   saved: false, 
//   text: "Save for later", 
//   color: "lightsalmon"
// });

// const toggleSave = () => {
//   const {saved} = saveState;

//   if (saved) {
//     setSaveState({
//       saved: false,
//       text: "Save for later",
//       color: "lightsalmon"
//     })
//   } else {
//     setSaveState({
//       saved: true, 
//       text: "Saved",
//       color: "grey"
//     })
//   }
// };
  const styles = StyleSheet.create({
  cards: {
    width,
    backgroundColor: theme.COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardBackground:{
    backgroundColor: theme.COLORS.WHITE,
  },
  card: {
    width: width - theme.SIZES.BASE * 2,
    marginVertical: theme.SIZES.BASE * 0.875,
    elevation: theme.SIZES.BASE / 2,
  },
  noRadius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  nav: {
    backgroundColor: "lightsalmon",
  },
  backgroundImage: {
    width:'100%',
    height:'100%'
  },
  emptyList : {
    alignSelf: 'center',
    backgroundColor:'rgba(255, 255, 255, 0.90)',
    padding:20,
    borderColor: "lightsalmon",
    borderWidth: 8,
    width: width * .80,
    height: height * .65,
    borderRadius: 20,
    justifyContent:'center',
    //display: display,
    marginTop: height * .11
  },
  heading: {
    textAlign: "center",
    color: '#606060',
    lineHeight:40
  },
  text : {
    textAlign: "center",
    color: 'grey',
    fontSize: 15
  }
});
  
  useEffect(()=>{state ? setDisplay('none') : setDisplay('flex')},[state])

  useFocusEffect(
    useCallback(() => {
      getFavouritesAsync().then((favouritesState) => {setState(state=>({...favouritesState }))}) 

    },[])
  )

    return (
      <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
{/* //       <Nav title="My Favourites" navigation={props.navigation} /> */}
      <NavBar style = {styles.nav}
          title="Favourites"
          left={(
            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
              <Icon 
                name="menu"
                family="feather"
                size={25}
                color={theme.COLORS.WHITE}
                />
            </TouchableOpacity>
          )}
          titleStyle={{ color:'white', fontSize:25 }}/>
          {/* <Button onPress={ClearFaves}/> */}
          {recipes.length !== 0 
          ? null 
          : <ImageBackground source={require("./photos/food1.jpg")} style={styles.backgroundImage}>           
            <View style={styles.emptyList}>
              <Text h5 style={styles.heading}>Your Favourites Is Empty!</Text>
              <Text h6 style={styles.text}>Pick Your Favourites To See Them Here</Text>
            </View></ImageBackground>}
        <ScrollView contentContainerStyle={styles.cards}>
          <Block flex space="between">
            {recipes && recipes.map((recipe, id) => (
                <TouchableOpacity style={styles.card} onPress={() => {props.navigation.navigate('Recipe', {recipe, fromFavourite});}}>
                <Card
                  key={recipe.id}
                  avatar='https://storage.needpix.com/rsynced_images/pale-pink-heart.jpg'
                  title={recipe.title.toUpperCase()}
                  borderless
                  shadowColor={theme.COLORS.BLACK}
                  style={styles.cardBackground}
                  caption={`Ready in ${recipe.time} minutes`}
                  image={recipe.illustration}
                  imageBlockStyle={[styles.noRadius]}
                  footerStyle={{paddingLeft: 5, marginRight:70}}
                >
                </Card>
              </TouchableOpacity>
            ))}
          </Block>
        </ScrollView>
      </Block>
    );
  }

