const express = require('express')
const app = express()
const { Datastore } = require('@google-cloud/datastore')

// Creates a client
const datastore = new Datastore()

app.listen(8080, () => {
  console.log('Server is running on port 8080')
})

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/recipes', (req, res, next) => {
  const recipes = [
    {
      'title': 'Key Lime Pie',
      'id': 'key-lime-pie',
      'description': 'Tangy lemons and limes mix makes this pie refreshing and light.',
      'source': 'https://www.foodnetwork.com/recipes/key-lime-pie-recipe1-2011840',
      'yields': '1 9-inch pie',
      'steps': [
        {
          'equipment': [
            'Oven'
          ],
          'temperature': {
            value: 350,
            units: 'Fahrenheit'
          },
          'description': 'Preheat the oven.'
        },
        {
          'ingredients': [
            {
              'name': 'graham crackers',
              'amount': {
                'value': 0.3333,
                'units': '1-pound box'
              }
            },
            {
              'name': 'melted butter',
              'amount': {
                'value': 5,
                'units': 'tablespoons'
              }
            },
            {
              'name': 'sugar',
              'amount': {
                'value': 0.3333,
                'units': 'cups'
              }
            }
          ],
          'equipment': [
            'food processor'
          ],
          'description': 'Break up the graham crackers; place in a food processor and process to crumbs. If you don\'t have a food processor, place the crackers in a large plastic bag; seal and then crush the crackers with a rolling pin. Add the melted butter and sugar and pulse or stir until combined.'
        },
        {
          'ingredients': [
            {
              'name': 'crust mixture',
              'madeInStep': 1
            }
          ],
          'description': 'Press the crust mixture into the bottom and side of a pie pan, forming a neat border around the edge.'
        },
        {
          'equipment': [
            'oven',
            'cooling rack'
          ],
          'time': {
            'value': 8,
            'units': 'minutes'
          },
          'description': 'Bake the crust until set and golden, 8 minutes. Set aside on a wire rack; leave the oven on.'
        },
        {
          'equipment': [
            'stand mixer',
            'stand mixer whisk'
          ],
          'ingredients': [
            {
              'name': 'egg yolks',
              'amount': {
                'value': 3,
                'units': 'count'
              }
            },
            {
              'name': 'lime zest',
              'amount': {
                'value': 2,
                'units': 'teaspoons'
              }
            }
          ],
          'time': {
            'value': 5,
            'units': 'minutes'
          },
          'priorStepRequired': false,
          'description': 'In an electric mixer with the wire whisk attachment, beat the egg yolks and lime zest at high speed until very fluffy, about 5 minutes.'
        },
        {
          'equipment': [
            'stand mixer',
            'stand mixer whisk'
          ],
          'time': {
            'lowerBound': 3,
            'upperBound': 4,
            'units': 'minutes'
          },
          'ingredients': [
            {
              'name': 'sweetened condensed milk',
              'amount': {
                'value': 14,
                'units': 'ounces'
              }
            }
          ],
          'description': 'Gradually add the condensed milk and continue to beat until thick, 3 or 4 minutes longer.'
        },
        {
          'equipment': [
            'stand mixer',
            'stand mixer whisk'
          ],
          'time': {
            'description': 'until combined'
          },
          'ingredients': [
            {
              'name': 'lemons',
              'amount': {
                'value': 2,
                'units': 'count'
              }
            },
            {
              'name': 'limes',
              'amount': {
                'value': 3,
                'units': 'count'
              }
            }
          ],
          'description': 'Lower the mixer speed and slowly add the juice of the lemons and limes, mixing just until combined, no longer.'
        },
        {
          'ingredients': [
            {
              'name': 'baked crust',
              'madeInStep': 3
            },
            {
              'name': 'lime curd',
              'madeInStep': 6
            }
          ],
          'description': 'Pour the lime curd into the crust.'
        },
        {
          'time': {
            'value': 10,
            'units': 'minutes',
            'alternative': 'until set'
          },
          'description': 'Bake for 10 minutes, or until the filling has just set.'
        },
        {
          'description': 'Cool on a wire rack, then refrigerate.'
        },
        {
          'ingredients': [
            {
              'name': 'heavy whipping cream',
              'amount': {
                'value': 1,
                'units': 'cup'
              }
            },
            {
              'name': 'confectioners\' sugar',
              'amount': {
                'value': 2,
                'units': 'tablespoons'
              }
            }
          ],
          'description': 'Whip the cream and the confectioners\' sugar until nearly stiff.'
        }
      ],
      'serving': 'Freeze for 15 to 20 minutes before serving. Cut the pie into wedges and serve very cold, topping each wedge with a large dollop of whipped cream.',
      'titleImage': 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/11/26/0/BE1B33_Key-Lime-Pie_s4x3.jpg.rend.hgtvcom.826.620.suffix/1386172170553.jpeg'
    },
    {
      'title': 'Basic Sourdough',
      'id': 'basic-sourdough',
      'description': 'A simple sourdough for everyday.',
      'source': 'https://www.bakewithjack.co.uk/blog-1/2018/7/5/sourdough-loaf-for-beginners',
      'yields': '1 loaf',
      'steps': [
        {
          'ingredients': [
            {
              'name': 'sourdough starter'
            },
            {
              'name': 'bread flour',
              'amount': {
                'value': 50,
                'units': 'grams'
              }
            },
            {
              'name': 'water',
              'amount': {
                'value': 50,
                'units': 'grams'
              }
            }
          ],
          'description': 'Combine sourdough starter, flour, and water. Mix well. Rest.',
          'time': {
            'lowerBound': 10,
            'upperBound': 16,
            'units': 'hours'
          }
        },
        {
          'ingredients': [
            {
              'name': 'bread flour',
              'amount': {
                'value': 450,
                'units': 'grams'
              }
            },
            {
              'name': 'water',
              'amount': {
                'value': 310,
                'units': 'grams'
              }
            },
            {
              'name': 'salt',
              'amount': {
                'value': 8,
                'units': 'grams'
              }
            },
            {
              'name': 'feed sourdough starter',
              'amount': {
                'value': 100,
                'units': 'grams'
              },
              'madeInStep': 1
            }
          ],
          'description': 'Combine starter, flour, water, and salt. Mix well until combined. Rest.',
          'time': {
            'lowerBound': 30,
            'upperBound': 60,
            'units': 'minutes'
          }
        },
        {
          'ingredients': [
            {
              'name': 'dough',
              'madeInStep': 2
            }
          ],
          'title': '1st Fold',
          'description': 'Cut dough out of bowl onto a counter coated well with water. Stretch and fold the dough into a ball around 12 times. Rest.',
          'time': {
            'lowerBound': 1.5,
            'upperBound': 2,
            'units': 'hours'
          }
        },
        {
          'ingredients': [
            {
              'name': 'dough',
              'madeInStep': 3
            }
          ],
          'title': '2nd Fold',
          'description': 'Cut dough out of bowl onto a counter coated well with water. Stretch and fold the dough into a ball around 6 times. Rest.',
          'time': {
            'lowerBound': 1.5,
            'upperBound': 2,
            'units': 'hours'
          }
        },
        {
          'ingredients': [
            {
              'name': 'dough',
              'madeInStep': 3
            }
          ],
          'title': '3rd Fold',
          'description': 'Cut dough out of bowl onto a counter coated well with water. Stretch and fold the dough into a ball around 6 times. Rest.',
          'time': {
            'lowerBound': 0.5,
            'upperBound': 1.5,
            'units': 'hours'
          }
        },
        {
          'ingredients': [
            {
              'name': 'dough',
              'madeInStep': 3
            }
          ],
          'title': 'Preshape',
          'description': 'Cut dough out of bowl onto a floured counter. Stretch and fold the dough into a ball around 6 times. Flip and rest on counter.',
          'time': {
            'lowerBound': 0.5,
            'upperBound': 1.5,
            'units': 'hours'
          }
        }
      ],
      'titleImage': 'https://images.squarespace-cdn.com/content/v1/586347ea37c581f15db91d34/1530768322864-33MYYM1XJBH6G0CP1PB7/ke17ZwdGBToddI8pDm48kDrQ9tfdcvPUv7NgXGP4R2R7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe4zwrosjp5YtnrvbmlM1LFKb7wNXE8lRZ0Z8l5PIsW3Vw/IMG_0784.JPG'
    },
    {
      'title': 'Pork Tenderloin Stuffed with Herbs and Capers',
      'id': 'pork-tenderloin-herbs-capers',
      'titleImage': 'https://static01.nyt.com/images/2017/04/18/dining/19app-1/19app-1-videoSixteenByNine600.jpg'
    }, {
      title: 'French Lemon Meringue Pie',
      id: 'french_lemon_meringue_pie',
      source: 'https://www.meilleurduchef.com/en/recipe/lemon-meringue-pie.html',
      titleImage: 'https://files.meilleurduchef.com/mdc/photo/recipe/lemon-meringue-pie/lemon-meringue-pie-1200.jpg',
      steps: [
        {
          ingredients: [
            {
              'name': 'caster sugar',
              'amount': {
                'value': 250,
                'units': 'grams'
              }
            },
            {
              'name': 'lemon zest',
              'amount': {
                'value': 6,
                'units': 'count'
              }
            },
            {
              'name': 'lemons',
              'amount': {
                'value': 6,
                'units': 'count'
              }
            },
            {
              name: 'eggs',
              'amount': {
                'value': 6,
                'units': 'count'
              }
            }
          ],
          equipment: ['zester', 'medium saucepan'],
          description: 'In a medium saucepan, combine lemon zest, lemon juice, and caster sugar.'
        }, {
          equipment: ['whisk'],
          description: 'Cook over low heat while stirring with a whisk. Do not let boil. The creme should start to thicken but not scramble.'
        }, {
          ingredients: [
            {
              name: 'unsalted butter',
              amount: {
                value: 60,
                units: 'grams'
              }
            }
          ],
          equipment: ['whisk'],
          description: 'Once curd is nearly thickened, add butter cut into cubes.'
        }, {
          equipment: ['oven'],
          temperature: {
            value: 130,
            units: 'Celsius'
          },
          description: 'Bake for about 15 min.'
        }
      ],
      yields: 'enough for 1 9" tart'
    }
  ]
  res.json(recipes.filter(recipe => {
    if (req.query.search) {
      return JSON.stringify(recipe).match(req.query.search)
    } else {
      return true
    }
  }))

  app.post('/recipes', (req, res, next) => {
    const recipeKey = datastore.key('Recipe')
    const entity = {
      key: recipeKey,
      data: [
        {
          name: 'title',
          value: req.body.title
        }, {
          name: 'source',
          value: req.body.source
        }, {
          name: 'titleImage',
          value: req.body.titleImage
        }, {
          name: 'yields',
          value: req.body.yields
        }
      ]
    }
  })
})