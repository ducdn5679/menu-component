export const parameters = {
  parameters: {
    options: {
      storySort: {
        order: [
          "Components",
        ],
      },
    },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <div>
      <Story />
    </div>
  ),
];


export default parameters;