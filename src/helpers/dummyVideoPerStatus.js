const video = {
  id: 1,
  title: "Como criar uma Landing Page",
  status: "draft",
  project: {
    id: 1,
    name: "Lead Lovers App",
    client: {
      id: 1,
      name: "Lead Lovers"
    }
  },
  mainKnowledge: {
    id: 1,
    name: "Lançar Nota Fiscal",
    topics: [{
        id: 1,
        title: "Adicione os passos do tutorial e todas as informações complementares necessárias",
        items: [{
            id: 1,
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            subitems: [{
                id: 10,
                text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              },
              {
                id: 11,
                text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              },
              {
                id: 12,
                text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              }
            ]
          },
          {
            id: 2,
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            subitems: []
          },
          {
            id: 3,
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            subitems: []
          },
          {
            id: 4,
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            subitems: []
          },
        ]
      },
      {
        id: 2,
        title: "Que problema o usuário vai resolver no seu negócio depois que aprender esse conteúdo? Adicione exemplos reais",
        items: [{
          id: 1,
          text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          subitems: [{
            id: 10,
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }]
        }, ]
      }
    ]
  },
  knowledges: [{
      id: 1,
      name: "Criar Landing Page"
    },
    {
      id: 2,
      name: "Alterar Landing Page"
    }
  ],
  team: [{
      id: 1,
      username: "antoniomgatto",
      displayName: "Antonio Gatto",
      role: "Tutormaker",
    },
    {
      id: 2,
      username: "jeamhansen",
      displayName: "Jean Hansen",
      role: "Gerente de Conta",
    }
  ],
  createdAt: new Date(),
  updatedAt: new Date(),
  comments: [{
      id: 1,
      author: {
        id: 1,
        displayName: "Antonio Gatto",
        username: "@antoniomgatto"
      },
      createdAt: new Date(),
      updatedAt: new Date(),
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      comments: [],
    },
    {
      id: 2,
      author: {
        id: 2,
        displayName: "Jean Hansen",
        username: "@jeanhansen"
      },
      createdAt: new Date(),
      updatedAt: new Date(),
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      comments: [],
    },
    {
      id: 3,
      author: {
        id: 1,
        displayName: "Antonio Gatto",
        username: "@antoniomgatto"
      },
      createdAt: new Date(),
      updatedAt: new Date(),
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      comments: [{
        id: 4,
        author: {
          id: 2,
          displayName: "Jean Hansen",
          username: "@jeanhansen"
        },
        createdAt: new Date(),
        updatedAt: new Date(),
        text: "@antoniomgatto Lorem Ipsum has been the industry's standard dummy text.",
        comments: [],
      }],
    },
  ]
}

const dummyVideoPerStatus = status => {
  let updatedValues = { status: status }

  switch (status) {
    case "production":
      // updatedValues = {}
      break
  }

  const updatedVideo = {
    ...video,
    ...updatedValues,
  }
  return updatedVideo
}

export default dummyVideoPerStatus