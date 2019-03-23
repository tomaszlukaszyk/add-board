const initialState = {
  ads: [
    {
      id: 1,
      author: "First Author",
      title: "First Add",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe beatae dicta explicabo dignissimos, inventore facilis iste, maxime nam asperiores delectus repellendus? Fugit qui ea magnam tempore repellendus iusto sit expedita."
    },
    {
      id: 2,
      author: "Second Author",
      title: "Second Add",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe beatae dicta explicabo dignissimos, inventore facilis iste, maxime nam asperiores delectus repellendus? Fugit qui ea magnam tempore repellendus iusto sit expedita."
    },
    {
      id: 3,
      author: "Third Author",
      title: "Third Add",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe beatae dicta explicabo dignissimos, inventore facilis iste, maxime nam asperiores delectus repellendus? Fugit qui ea magnam tempore repellendus iusto sit expedita."
    },
    {
      id: 4,
      author: "Fourth Author",
      title: "Fourth Add",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe beatae dicta explicabo dignissimos, inventore facilis iste, maxime nam asperiores delectus repellendus? Fugit qui ea magnam tempore repellendus iusto sit expedita."
    },
    {
      id: 5,
      author: "Fifth Author",
      title: "Fifth Add",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe beatae dicta explicabo dignissimos, inventore facilis iste, maxime nam asperiores delectus repellendus? Fugit qui ea magnam tempore repellendus iusto sit expedita."
    }
  ]
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    //   case typeName:
    //     return { ...state, ...payload }

    default:
      return state;
  }
};
