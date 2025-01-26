const PAGE_PATH = {
  MAIN: "/",
  LOGIN: "/login",
  KAKAO_REDIRECT: "/login/kakao",
  TOPICS_RANDOM: "/topics/random",
  TOPIC: "/topic",
  SITUATION: "/situation",
  TOPICS_BY_SITUATION: "/topics/situation",
  "BALANCE-GAME": "/balance-game",
  TOPIC_LIST: "/topic-list/:id",
} as const;

export default PAGE_PATH;
