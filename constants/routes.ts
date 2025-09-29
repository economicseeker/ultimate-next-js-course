const ROUTES = {
  HOME: "/",
  ASK_QUESTION: "/ask-question",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  PROFILE: (id: string) => `/profile/${id}`,
  TAGS: (id: string) => `/tags/${id}`,
  QUESTION: (id: string) => `/question/${id}`,
};

export default ROUTES;
