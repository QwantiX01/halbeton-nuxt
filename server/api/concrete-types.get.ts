export default defineEventHandler((event) => {
  return [
    {
      id: 2,
      mark: "M100",
      class: "B7.5",
      strength: "10 МПа",
      category: "low",
      description: "Підготовчі та некритичні роботи",
      applications: [
        "Підготовка основи",
        "Тимчасові конструкції",
        "Стяжки під підлоги",
        "Вимощення",
      ],
      fullDescription:
        "M100 - це підготовчі та некритичні роботи. Бетон цієї марки характеризується міцністю 10 МПа та відповідає класу B7.5. Має оптимальне співвідношення якості та ціни для вказаних областей застосування.",
      image:
        "https://content.designerpages.com/assets/81151508/gb2tlmrmtslt48x48.jpg",
    },
    {
      id: 3,
      mark: "M150",
      class: "B12.5",
      strength: "15 МПа",
      category: "low",
      description: "Легкі будівельні роботи",
      applications: [
        "Легкі фундаменти",
        "Підлоги без значних навантажень",
        "Тротуарна плитка",
      ],
      image:
        "https://content.designerpages.com/assets/81151508/gb2tlmrmtslt48x48.jpg",
    },
    {
      id: 4,
      mark: "M200",
      class: "B15",
      strength: "20 МПа",
      category: "medium-low",
      description: "Базові будівельні елементи",
      applications: [
        "Монолітні фундаменти",
        "Плити перекриття",
        "Стяжки з підвищеним навантаженням",
      ],
      image:
        "https://content.designerpages.com/assets/81151508/gb2tlmrmtslt48x48.jpg",
    },
    {
      id: 5,
      mark: "M250",
      class: "B20",
      strength: "25 МПа",
      category: "medium-low",
      description: "Стандартні конструкції",
      applications: [
        "Фундаменти приватних будинків",
        "Несучі стіни",
        "Перекриття малоповерхових будівель",
      ],
      image:
        "https://content.designerpages.com/assets/81151508/gb2tlmrmtslt48x48.jpg",
    },
    {
      id: 6,
      mark: "M300",
      class: "B22.5",
      strength: "30 МПа",
      category: "medium",
      description: "Відповідальні конструкції",
      applications: [
        "Багатоповерхові будівлі",
        "Мости і шляхопроводи",
        "Підпірні конструкції",
      ],
      image:
        "https://content.designerpages.com/assets/81151508/gb2tlmrmtslt48x48.jpg",
    },
    {
      id: 7,
      mark: "M350",
      class: "B25",
      strength: "35 МПа",
      category: "medium",
      description: "Складні інженерні споруди",
      applications: [
        "Великі промислові об'єкти",
        "Складні фундаменти",
        "Гідроізоляційні конструкції",
      ],
      image:
        "https://content.designerpages.com/assets/81151508/gb2tlmrmtslt48x48.jpg",
    },
    {
      id: 8,
      mark: "M400",
      class: "B30",
      strength: "40 МПа",
      category: "high",
      description: "Високонавантажені конструкції",
      applications: [
        "Висотні будівлі",
        "Мостові опори",
        "Фундаменти для важкого обладнання",
      ],
      image:
        "https://content.designerpages.com/assets/81151508/gb2tlmrmtslt48x48.jpg",
    },
    {
      id: 9,
      mark: "M450",
      class: "B35",
      strength: "45 МПа",
      category: "high",
      description: "Потужні інженерні споруди",
      applications: [
        "Великі мости",
        "Гідротехнічні споруди",
        "Військові об'єкти",
      ],
      image:
        "https://content.designerpages.com/assets/81151508/gb2tlmrmtslt48x48.jpg",
    },
    {
      id: 10,
      mark: "M500",
      class: "B40",
      strength: "50 МПа",
      category: "very-high",
      description: "Особливо відповідальні споруди",
      applications: [
        "Аеродромні покриття",
        "Висотні хмарочоси",
        "Дамби і захисні споруди",
      ],
      image:
        "https://content.designerpages.com/assets/81151508/gb2tlmrmtslt48x48.jpg",
    },
  ];
});
